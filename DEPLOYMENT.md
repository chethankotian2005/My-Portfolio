# 🚀 Deployment Guide

## Quick Deployment to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a GitHub Repository**:
   ```bash
   cd "c:\Users\chethan kotian\Desktop\MY PORTFOLIO"
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next
   - Add Environment Variables (copy from `.env.local`)
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd "c:\Users\chethan kotian\Desktop\MY PORTFOLIO"
   vercel
   ```

4. **Add Environment Variables**:
   ```bash
   vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
   vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID
   vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
   vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   vercel env add NEXT_PUBLIC_FIREBASE_APP_ID
   vercel env add NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
   ```

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Alternative Deployment Options

### Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

4. **Add Environment Variables**:
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add all Firebase environment variables

### Deploy to Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**:
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory to: `out`
   - Configure as single-page app: Yes
   - Set up automatic builds: No

4. **Update `next.config.js`**:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };

   module.exports = nextConfig;
   ```

5. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

### Deploy to Custom Server (VPS/Cloud)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **Use PM2 for process management**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx as reverse proxy**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Pre-Deployment Checklist

### 1. Environment Variables ✅
- [ ] Set all Firebase configuration variables
- [ ] Verify `.env.local` is in `.gitignore`
- [ ] Add environment variables to deployment platform

### 2. Firebase Setup ✅
- [ ] Firestore database created
- [ ] Firestore security rules configured
- [ ] Firebase Analytics enabled (optional)
- [ ] Test contact form submission locally

### 3. Content Review ✅
- [ ] Update personal information in all components
- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Update project details with correct GitHub links
- [ ] Verify social media links are correct
- [ ] Update email addresses
- [ ] Add project screenshots/images (optional)

### 4. SEO & Metadata ✅
- [ ] Update metadata in `app/layout.jsx`
- [ ] Add custom favicon
- [ ] Add Open Graph images
- [ ] Create `robots.txt` and `sitemap.xml`

### 5. Testing ✅
- [ ] Test all pages load correctly
- [ ] Test navigation between pages
- [ ] Test dark mode toggle
- [ ] Test contact form submission
- [ ] Test responsive design on mobile
- [ ] Test all external links
- [ ] Check for console errors

### 6. Performance ✅
- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Check Core Web Vitals
- [ ] Enable compression
- [ ] Test loading speed

## Post-Deployment

### 1. Custom Domain Setup (Vercel)

1. **Add Domain**:
   - Go to Vercel Dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Configure DNS**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Enable HTTPS**:
   - Automatic with Vercel (Let's Encrypt)
   - No additional configuration needed

### 2. Set Up Analytics

- **Vercel Analytics**: Enable in project settings
- **Firebase Analytics**: Already configured
- **Google Analytics**: Add tracking ID if needed

### 3. Monitor Performance

- Use Vercel Analytics dashboard
- Monitor Firebase Firestore usage
- Set up error tracking (e.g., Sentry)

### 4. Set Up Firestore Security Rules (Production)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      // Allow writes from anyone (for contact form)
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'message', 'timestamp'])
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.message is string
                    && request.resource.data.timestamp is timestamp;
      
      // Deny all reads (admin only via Firebase Console)
      allow read: if false;
      
      // Deny updates and deletes
      allow update, delete: if false;
    }
  }
}
```

## Troubleshooting Deployment Issues

### Issue: Build Fails

**Solution**:
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Issue: Environment Variables Not Working

**Solution**:
- Ensure variables start with `NEXT_PUBLIC_`
- Restart deployment after adding variables
- Check variable names match exactly

### Issue: Firebase Connection Failed

**Solution**:
- Verify Firebase credentials
- Check Firestore is enabled
- Ensure billing is set up (Spark plan minimum)
- Check browser console for specific errors

### Issue: Images Not Loading

**Solution**:
- Add image domains to `next.config.js`
- Use Next.js Image component properly
- Check image file paths

### Issue: 404 on Page Refresh

**Solution**:
- Configure hosting for SPA routing
- For Vercel: automatic
- For others: add rewrite rules

## CI/CD Setup (Optional)

### GitHub Actions for Vercel

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Vercel deployment docs](https://vercel.com/docs)
3. Check [Firebase documentation](https://firebase.google.com/docs)

---

**Ready to deploy? Start with Vercel for the easiest experience!** 🚀
