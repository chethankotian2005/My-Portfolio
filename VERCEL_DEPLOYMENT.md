# 🚀 Deploy to Vercel with Custom Domain

## Prerequisites
- ✅ Your portfolio project (already complete!)
- ✅ GitHub account
- ✅ Vercel account (free)
- ✅ Your custom domain

---

## 📋 Step-by-Step Deployment Guide

### **Step 1: Push to GitHub**

1. **Initialize Git (if not already done)**
```bash
git init
git add .
git commit -m "Initial commit - Portfolio ready for deployment"
```

2. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name: `my-portfolio` or `portfolio-website`
   - Keep it Public or Private (both work with Vercel)
   - Don't initialize with README (you already have one)

3. **Push your code**
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

### **Step 2: Deploy to Vercel**

1. **Go to Vercel**
   - Visit https://vercel.com/
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find your portfolio repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

4. **Add Environment Variables**
   Click "Environment Variables" and add your Firebase credentials:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyB0_nLfK96nIMpIXnG3asjxTTXhVsGTaYU
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=my-portfolio-cvk.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=my-portfolio-cvk
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=my-portfolio-cvk.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=459701648063
   NEXT_PUBLIC_FIREBASE_APP_ID=1:459701648063:web:6d7df6ca326ef087e4e40a
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-LWLE5R2F0Z
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `https://your-portfolio-xyz.vercel.app`

---

### **Step 3: Connect Your Custom Domain**

#### **Option A: Domain bought from GoDaddy, Namecheap, etc.**

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain: `yourdomain.com`
   - Click "Add"

2. **Configure DNS Settings**
   
   Vercel will show you DNS records to add. You have two options:

   **Option 1: Using A Record (Recommended)**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Find DNS Management / DNS Settings
   - Add these records:

   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 76.76.21.21 |
   | CNAME | www | cname.vercel-dns.com |

   **Option 2: Using CNAME**
   | Type | Name | Value |
   |------|------|-------|
   | CNAME | @ | cname.vercel-dns.com |
   | CNAME | www | cname.vercel-dns.com |

3. **Verify Domain**
   - DNS propagation takes 5 minutes to 48 hours (usually ~20 minutes)
   - Vercel will automatically verify once DNS is updated
   - You'll see a green checkmark when ready

4. **Configure Redirects**
   - In Vercel, set `www.yourdomain.com` to redirect to `yourdomain.com` (or vice versa)
   - This is automatic once both are added

#### **Option B: Buy Domain Through Vercel**

1. In Vercel Dashboard → Settings → Domains
2. Click "Buy a domain"
3. Search and purchase (prices start at $15/year)
4. Vercel handles all DNS automatically

---

### **Step 4: Update Firebase for Production**

1. **Add Production Domain to Firebase**
   - Go to Firebase Console: https://console.firebase.google.com/project/my-portfolio-cvk
   - Go to Authentication → Settings → Authorized domains
   - Click "Add domain"
   - Add your Vercel URL: `your-portfolio-xyz.vercel.app`
   - Add your custom domain: `yourdomain.com`

2. **Update Firestore Rules (if needed)**
   - Already set correctly from earlier setup
   - No changes needed

---

## 🔧 Post-Deployment Checklist

### **Test Everything:**
- ✅ Homepage loads correctly
- ✅ All navigation links work
- ✅ Theme toggle (dark/light mode) works
- ✅ Contact form submits to Firebase
- ✅ Projects page displays correctly
- ✅ About page shows experiences
- ✅ Mobile responsive works
- ✅ Custom domain redirects properly

### **Optional Optimizations:**

1. **Add Vercel Analytics**
   - In Vercel Dashboard → Analytics
   - Click "Enable"
   - Track page views and performance

2. **Set Up Automatic Deployments**
   - Already enabled by default
   - Any push to `main` branch auto-deploys

3. **Branch Previews**
   - Create a new branch: `git checkout -b feature-xyz`
   - Push: `git push origin feature-xyz`
   - Vercel creates a preview URL automatically

---

## 🌐 Custom Domain Examples

If your domain is `chethanvkotian.com`:

**Primary Domain Options:**
- `chethanvkotian.com` (recommended)
- `www.chethanvkotian.com`
- `portfolio.chethanvkotian.com` (subdomain)

**Vercel Default URLs (will still work):**
- `your-portfolio-xyz.vercel.app`
- `your-portfolio-git-main-username.vercel.app`

---

## 💡 Common Issues & Solutions

### **Issue: DNS not updating**
**Solution:** 
- Clear DNS cache: `ipconfig /flushdns` (Windows)
- Use https://dnschecker.org to check propagation
- Wait 24-48 hours for full propagation

### **Issue: Firebase not working on production**
**Solution:**
- Check environment variables in Vercel
- Add production domain to Firebase authorized domains

### **Issue: 404 on custom domain**
**Solution:**
- Verify DNS records are correct
- Wait for DNS propagation
- Check Vercel domain settings

### **Issue: Contact form not working**
**Solution:**
- Check browser console for errors
- Verify Firebase environment variables
- Test on Vercel preview URL first

---

## 📊 Monitoring & Updates

### **View Deployment Logs:**
1. Go to Vercel Dashboard
2. Click on your project
3. Click "Deployments"
4. Click any deployment to see logs

### **Update Your Site:**
```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main
# Vercel automatically rebuilds and deploys!
```

---

## 🎉 You're Live!

Once deployed, share your portfolio:
- 🔗 **Production URL:** `https://yourdomain.com`
- 🔗 **Vercel URL:** `https://your-portfolio.vercel.app`
- 🔗 **GitHub Repo:** `https://github.com/username/portfolio`

Add these to:
- LinkedIn profile
- GitHub README
- Resume
- Email signature

---

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Community:** https://github.com/vercel/vercel/discussions
- **DNS Help:** https://vercel.com/docs/concepts/projects/domains

---

## 🚀 Next Steps

1. Set up Google Analytics for visitor tracking
2. Add SEO meta tags (already done!)
3. Submit sitemap to Google Search Console
4. Share on social media
5. Add to GitHub profile README

**Good luck! 🎊**
