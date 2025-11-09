# 🚀 Chethan V Kotian - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, Framer Motion, and Firebase integration.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional look with smooth animations
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js 15 App Router
- 🔥 **Firebase Integration**: Contact form with Firestore database
- 🎬 **Smooth Animations**: Powered by Framer Motion
- 🎯 **SEO Optimized**: Meta tags and proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Firebase Firestore
- **Analytics**: Firebase Analytics
- **Theme**: next-themes
- **Language**: JavaScript/JSX

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.jsx
│   ├── projects/
│   │   └── page.jsx
│   ├── contact/
│   │   └── page.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AboutSection.jsx
│   ├── SkillsGrid.jsx
│   ├── ProjectCard.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── Providers.jsx
├── lib/
│   └── firebaseConfig.js
└── public/
    └── resume.pdf (add your resume here)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase account (for contact form)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**

```bash
cd "c:\Users\chethan kotian\Desktop\MY PORTFOLIO"
```

2. **Install dependencies** (already done)

```bash
npm install
```

3. **Set up Firebase** (Required for contact form)

   **Quick Setup:**
   - See detailed guide: **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)** 📋
   
   **Summary:**
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Firestore Database
   - Enable Analytics (optional)
   - Copy Firebase configuration

4. **Configure Environment Variables**

   Update the `.env.local` file with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

5. **Run the development server**

```bash
npm run dev
```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/Hero.jsx`):
   - Name, tagline, and description
   - Profile image/avatar

2. **About Section** (`components/AboutSection.jsx`):
   - Education details
   - Professional experience
   - Achievements timeline

3. **Projects** (`app/projects/page.jsx`):
   - Add your project details
   - Update GitHub links
   - Add demo links

4. **Contact Info** (`components/Footer.jsx` and `app/contact/page.jsx`):
   - Social media links
   - Email address
   - Location

5. **Resume**:
   - Add your resume PDF to `public/resume.pdf`

### Styling

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Fonts**: Modify `app/layout.jsx` to use different Google Fonts
- **Animations**: Customize animations in component files

## 🔥 Firebase Setup (Detailed)

1. **Create Firestore Database**:
   - Go to Firebase Console → Firestore Database
   - Click "Create database"
   - Start in test mode (or production mode with rules)

2. **Firestore Security Rules** (for production):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow write: if true;
      allow read: if false;
    }
  }
}
```

3. **Enable Analytics**:
   - Go to Firebase Console → Analytics
   - Enable Google Analytics for your project

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

3. Add environment variables in Vercel dashboard

### Alternative Deployment Options

- **Netlify**: Connect your Git repository
- **Firebase Hosting**: Use Firebase CLI
- **Custom Server**: Use `npm start` after building

## 🎨 Pages Overview

### Home (`/`)
- Hero section with introduction
- Call-to-action buttons
- Animated background elements

### About (`/about`)
- Professional bio
- Skills grid with categories
- Experience timeline
- Resume download button

### Projects (`/projects`)
- Project cards with descriptions
- Technology stack tags
- GitHub and demo links
- Hover animations

### Contact (`/contact`)
- Contact form with Firebase integration
- Social media links
- Availability information
- Success/error notifications

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify environment variables are set correctly
- Check Firebase project settings
- Ensure Firestore is enabled

### Build Errors
- Delete `.next` folder and rebuild
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` content paths
- Verify `globals.css` is imported in layout

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

**Chethan V Kotian**
- Email: chethanvkotian@gmail.com
- GitHub: [@chethanvkotian](https://github.com/chethanvkotian)
- LinkedIn: [chethanvkotian](https://linkedin.com/in/chethanvkotian)

---

**Built with ❤️ using Next.js, Tailwind CSS & Firebase**
