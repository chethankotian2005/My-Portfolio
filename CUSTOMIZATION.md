# 🎨 Customization Guide

This guide will help you personalize the portfolio website with your own information.

## 📝 Step-by-Step Customization

### 1. Personal Information

#### Update Hero Section (`components/Hero.jsx`)

```jsx
// Line 55-60: Update your name and tagline
<h1>Your Name Here</h1>
<h2>Your Professional Title | Your Passion</h2>

// Line 70-75: Update your introduction
<p>
  Your personal introduction and what you do...
</p>
```

#### Update About Section (`components/AboutSection.jsx`)

```jsx
// Lines 30-50: Update your bio
<p>
  Your educational background...
  Your specializations...
  Your passion and interests...
</p>

// Lines 75-110: Update experience timeline
{
  title: "Your Experience",
  date: "Year Range",
  description: "Description of your experience"
}
```

### 2. Skills & Technologies

#### Update Skills Grid (`components/SkillsGrid.jsx`)

```jsx
// Lines 8-45: Customize your skills
const skills = {
  "Languages": [
    { name: "Your Language", icon: "emoji" },
    // Add your programming languages
  ],
  "Frameworks & Libraries": [
    { 
      name: "Your Framework", 
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="...your SVG path..."/>
      </svg>
    },
    // Add your frameworks with SVG icons
  ],
  // Add more categories as needed
};
```

**Icon Implementation**:
- Use professional SVG icons from popular libraries
- Standard size: `w-8 h-8` (32x32px)
- Use `fill="currentColor"` for theme compatibility
- Color classes: `text-blue-600 dark:text-blue-400`
- Find icons at: [Heroicons](https://heroicons.com/), [Simple Icons](https://simpleicons.org/), or create custom SVGs

### 3. Projects Portfolio

#### Update Projects (`app/projects/page.jsx`)

```jsx
// Lines 8-75: Update your projects
const projects = [
  {
    title: "Your Project Name",
    description: "Brief description (2 lines max)",
    techStack: ["Tech1", "Tech2", "Tech3"],
    icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
      <path d="...your project-relevant SVG path..."/>
    </svg>,
    github: "https://github.com/username/repo",
    demo: "https://your-demo-link.com", // or null
  },
  // Add more projects
];
```

**Project Tips**:
- Use clear, concise descriptions
- List 3-5 key technologies
- Choose icons that represent the project type (medical, AI, mobile app, etc.)
- Add GitHub links when possible
- Include live demos if available
- Choose relevant emojis that represent the project

### 4. Contact Information

#### Update Social Links (`components/Footer.jsx` and `app/contact/page.jsx`)

```jsx
// Update social media URLs
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/YOUR_PROFILE',
  },
  {
    name: 'Gmail',
    href: 'mailto:YOUR_EMAIL@gmail.com',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/YOUR_USERNAME',
  },
];
```

#### Update Email in Contact Form (`components/ContactForm.jsx`)

```jsx
// Line 155: Update email address
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

### 5. Website Metadata

#### Update SEO Information (`app/layout.jsx`)

```jsx
// Lines 10-20: Update metadata
export const metadata = {
  title: 'Your Name - Your Title',
  description: 'Your portfolio description for search engines',
  keywords: 'Your, Keywords, Here',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Your Title',
    description: 'Your portfolio description',
    type: 'website',
  },
};
```

### 6. Color Scheme

#### Update Theme Colors (`tailwind.config.js`)

```javascript
// Lines 15-25: Customize colors
colors: {
  primary: {
    50: '#your-color',
    100: '#your-color',
    // ... adjust all shades
    900: '#your-color',
  },
},
```

**Popular Color Schemes**:
- Blue (default): Professional, trustworthy
- Purple: Creative, innovative
- Green: Growth, eco-friendly
- Orange: Energetic, enthusiastic
- Red: Bold, passionate

Use [Tailwind Color Generator](https://uicolors.app/create) to generate your palette.

### 7. Typography

#### Change Font (`app/layout.jsx`)

```jsx
// Line 1: Import different Google Font
import { Inter, Roboto, Poppins, Montserrat } from 'next/font/google';

// Line 7: Initialize font
const myFont = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
});

// Line 32: Apply font
<body className={myFont.className}>
```

**Recommended Font Combinations**:
- Inter (body) + Inter (headings) - Modern, clean
- Roboto (body) + Montserrat (headings) - Professional
- Open Sans (body) + Raleway (headings) - Friendly
- Lato (body) + Playfair Display (headings) - Elegant

### 8. Logo/Branding

#### Update Logo (`components/Navbar.jsx`)

```jsx
// Lines 32-39: Customize logo
<motion.div className="text-2xl font-bold gradient-text">
  YourInitials // or your logo text
</motion.div>
```

**Options**:
- Use initials (like "CVK")
- Full name
- Brand name
- Upload logo image

### 9. Resume

1. **Add Your Resume**:
   - Save your resume as PDF
   - Place it in `public/resume.pdf`
   - Ensure filename is exactly `resume.pdf`

2. **Update Download Link** (if you want different filename):
   ```jsx
   // In components/AboutSection.jsx, line 55
   <a href="/your-custom-resume-name.pdf" download>
   ```

### 10. Profile Image

#### Add Profile Picture (`components/Hero.jsx`)

Replace the placeholder (lines 56-60):

```jsx
// Option 1: Keep placeholder with your initials
<div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
  YI // Your Initials
</div>

// Option 2: Use actual image
import Image from 'next/image';

<div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl">
  <Image 
    src="/profile.jpg" 
    alt="Your Name"
    width={128}
    height={128}
    className="object-cover"
  />
</div>
```

### 11. Animation Timing

#### Adjust Animation Speed (`components/*.jsx`)

```jsx
// Find motion.div elements and adjust:
transition={{ duration: 0.6 }} // Change to 0.3 for faster, 1.0 for slower
transition={{ delay: 0.2 }} // Change delay between elements
```

### 12. Background Effects

#### Customize Hero Background (`components/Hero.jsx`)

```jsx
// Lines 43-45: Adjust colors
<div className="absolute ... bg-blue-200 dark:bg-blue-900 ..."></div>
// Change bg-blue-200 to bg-[your-color]-200
```

## 🎯 Quick Customization Checklist

- [ ] Update name in Hero section
- [ ] Update professional title/tagline
- [ ] Write personal bio in About section
- [ ] Update skills and technologies
- [ ] Add your projects with descriptions
- [ ] Update all social media links
- [ ] Update email address
- [ ] Change metadata for SEO
- [ ] Add resume PDF file
- [ ] Add profile image (optional)
- [ ] Update logo/branding
- [ ] Test all links work correctly
- [ ] Customize colors (optional)
- [ ] Change fonts (optional)

## 💡 Pro Tips

1. **Keep It Simple**: Don't overcrowd with information
2. **Be Consistent**: Use the same tone throughout
3. **Use Action Words**: "Built", "Developed", "Created"
4. **Quantify Results**: Add numbers and metrics when possible
5. **Update Regularly**: Keep projects and skills current
6. **Test Thoroughly**: Check all pages on different devices
7. **Optimize Images**: Compress images before uploading
8. **Proofread**: Check for typos and grammar

## 🎨 Design Customization Ideas

### Add Gradient Text
```jsx
<span className="gradient-text">Your Text</span>
```

### Add Hover Effects
```jsx
<div className="hover:scale-105 transition-transform duration-300">
  Content
</div>
```

### Add Custom Card Styles
```jsx
<div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
  Content
</div>
```

## 🔧 Advanced Customization

### Add New Page

1. Create new file: `app/newpage/page.jsx`
2. Add route to navbar: `components/Navbar.jsx`
3. Follow existing page structure

### Add Blog Section

1. Create `app/blog/page.jsx`
2. Use similar structure to projects page
3. Consider using MDX for blog posts

### Add Testimonials

1. Create `components/Testimonials.jsx`
2. Add testimonials array
3. Import in home or about page

## 📱 Testing Your Changes

After customization:

1. **Run locally**: `npm run dev`
2. **Check all pages**: Navigate through each section
3. **Test responsive**: Use browser dev tools
4. **Test dark mode**: Toggle theme
5. **Test forms**: Submit contact form
6. **Check links**: Verify all external links

## 🆘 Need Help?

- Check component comments for guidance
- Refer to existing examples in the code
- Use browser dev tools to inspect elements
- Test changes incrementally

---

**Happy Customizing! 🎉**
