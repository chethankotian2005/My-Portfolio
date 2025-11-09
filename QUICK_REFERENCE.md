# 📚 Quick Reference Guide

## 🗂️ Project Structure Explained

```
MY PORTFOLIO/
│
├── 📁 app/                          # Next.js 15 App Router
│   ├── 📄 layout.jsx               # Root layout with Navbar & Footer
│   ├── 📄 page.jsx                 # Home page (Hero section)
│   ├── 📄 globals.css              # Global styles & Tailwind
│   │
│   ├── 📁 about/
│   │   └── 📄 page.jsx             # About page
│   │
│   ├── 📁 projects/
│   │   └── 📄 page.jsx             # Projects showcase
│   │
│   └── 📁 contact/
│       └── 📄 page.jsx             # Contact page
│
├── 📁 components/                   # Reusable React components
│   ├── 📄 Navbar.jsx               # Navigation bar with theme toggle
│   ├── 📄 Hero.jsx                 # Landing hero section
│   ├── 📄 AboutSection.jsx         # About content & timeline
│   ├── 📄 SkillsGrid.jsx           # Skills display grid
│   ├── 📄 ProjectCard.jsx          # Individual project card
│   ├── 📄 ContactForm.jsx          # Contact form with Firebase
│   ├── 📄 Footer.jsx               # Footer with social links
│   └── 📄 Providers.jsx            # Theme provider wrapper
│
├── 📁 lib/                          # Utility libraries
│   └── 📄 firebaseConfig.js        # Firebase initialization
│
├── 📁 public/                       # Static assets
│   └── 📄 resume.pdf               # Your resume (add this)
│
├── 📄 package.json                  # Dependencies & scripts
├── 📄 next.config.js               # Next.js configuration
├── 📄 tailwind.config.js           # Tailwind CSS configuration
├── 📄 postcss.config.js            # PostCSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 .env.local                   # Environment variables (Firebase)
├── 📄 .gitignore                   # Git ignore rules
│
└── 📄 README.md                     # Project documentation
```

## 🎯 Key Files & Their Purpose

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, and project metadata |
| `next.config.js` | Next.js settings (images, output, etc.) |
| `tailwind.config.js` | Tailwind theme, colors, and plugins |
| `.env.local` | Firebase credentials (not committed to Git) |
| `tsconfig.json` | TypeScript/JSX compiler options |

### Page Files (App Router)

| File | Route | Description |
|------|-------|-------------|
| `app/page.jsx` | `/` | Home page with hero section |
| `app/about/page.jsx` | `/about` | About, skills, experience |
| `app/projects/page.jsx` | `/projects` | Project showcase |
| `app/contact/page.jsx` | `/contact` | Contact form & info |
| `app/layout.jsx` | All pages | Root layout wrapper |

### Component Files

| Component | Used In | Purpose |
|-----------|---------|---------|
| `Navbar.jsx` | Layout | Navigation & theme toggle |
| `Hero.jsx` | Home | Landing section |
| `AboutSection.jsx` | About | Bio & experience |
| `SkillsGrid.jsx` | About | Skills display |
| `ProjectCard.jsx` | Projects | Individual project |
| `ContactForm.jsx` | Contact | Form with Firebase |
| `Footer.jsx` | Layout | Footer & social links |
| `Providers.jsx` | Layout | Theme provider |

## 🎨 Styling System

### Tailwind Classes Used

**Colors**:
- `text-gray-700 dark:text-gray-300` - Responsive to theme
- `bg-white dark:bg-slate-900` - Background colors
- `gradient-text` - Custom gradient text (blue to indigo)

**Spacing**:
- `px-4 sm:px-6 lg:px-8` - Responsive padding
- `py-16` - Vertical padding
- `space-y-6` - Vertical spacing between children

**Layout**:
- `max-w-7xl mx-auto` - Centered container
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive grid
- `flex items-center justify-center` - Flexbox centering

**Effects**:
- `hover:scale-105` - Hover scale effect
- `transition-all duration-300` - Smooth transitions
- `shadow-lg hover:shadow-xl` - Shadow effects

### Custom Classes (in globals.css)

```css
.gradient-text          /* Blue to indigo gradient text */
.card-hover            /* Card hover effect with shadow */
.glow-on-hover         /* Icon glow effect */
```

## 🎬 Animation System (Framer Motion)

### Common Patterns

**Fade In**:
```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

**Slide Up**:
```jsx
initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
```

**Stagger Children**:
```jsx
variants={containerVariants}
// Children animate with delay between each
```

**Hover Scale**:
```jsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## 🔥 Firebase Integration

### Setup Flow

1. **Initialize** (`lib/firebaseConfig.js`):
   - Import Firebase SDK
   - Configure with environment variables
   - Export db and analytics

2. **Use in Component** (`components/ContactForm.jsx`):
   ```jsx
   import { db } from '@/lib/firebaseConfig';
   import { collection, addDoc } from 'firebase/firestore';
   
   await addDoc(collection(db, 'contacts'), {...});
   ```

### Firestore Structure

```
contacts (collection)
  └── {documentId}
      ├── name: string
      ├── email: string
      ├── message: string
      └── timestamp: timestamp
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm:` | ≥ 640px | Small tablets |
| `md:` | ≥ 768px | Tablets |
| `lg:` | ≥ 1024px | Desktops |
| `xl:` | ≥ 1280px | Large desktops |
| `2xl:` | ≥ 1536px | Extra large |

Example:
```jsx
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
  {/* Text size increases with screen size */}
</div>
```

## 🌙 Dark Mode System

### Implementation

1. **Provider** (`components/Providers.jsx`):
   - Wraps app with ThemeProvider
   - Uses `next-themes` package

2. **Toggle** (`components/Navbar.jsx`):
   - `useTheme()` hook
   - `setTheme('dark')` or `setTheme('light')`

3. **Styling**:
   - Use `dark:` prefix for dark mode styles
   - Example: `bg-white dark:bg-slate-900`

## 🛠️ NPM Scripts

```bash
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

## 🔍 Finding & Editing Content

### Want to change...

**Your name?**
→ `components/Hero.jsx` (line 55)

**Your bio?**
→ `components/AboutSection.jsx` (lines 30-50)

**Your skills?**
→ `components/SkillsGrid.jsx` (lines 8-45)

**Your projects?**
→ `app/projects/page.jsx` (lines 8-75)

**Social links?**
→ `components/Footer.jsx` (lines 8-45)

**Email?**
→ Search for "chethanvkotian@gmail.com" (multiple files)

**Colors?**
→ `tailwind.config.js` (lines 15-25)

**Fonts?**
→ `app/layout.jsx` (line 1, 7)

**Meta tags?**
→ `app/layout.jsx` (lines 10-20)

## 🎯 Common Tasks

### Add a New Project

1. Open `app/projects/page.jsx`
2. Find `projects` array (line 8)
3. Add new object:
```jsx
{
  title: "Project Name",
  description: "Description...",
  techStack: ["Tech1", "Tech2"],
  icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="...SVG path..."/>
  </svg>,
  github: "https://github.com/...",
  demo: "https://...",
},
```

### Add a New Skill

1. Open `components/SkillsGrid.jsx`
2. Find `skills` object (line 8)
3. Add to appropriate category:
```jsx
{ 
  name: "Skill Name", 
  icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="...SVG path..."/>
  </svg>
},
```

### Change Theme Color

1. Open `tailwind.config.js`
2. Modify `primary` color values (line 15-25)
3. Or use [Tailwind Color Generator](https://uicolors.app/create)

### Update Social Links

1. Open `components/Footer.jsx`
2. Find `socialLinks` array (line 8)
3. Update `href` values with your URLs

## 🐛 Debugging Tips

**Page not showing?**
- Check file is in correct folder
- Verify imports are correct
- Check browser console for errors

**Styling not working?**
- Ensure classes are spelled correctly
- Check Tailwind config content paths
- Clear `.next` folder and rebuild

**Firebase errors?**
- Verify environment variables
- Check Firebase console for setup
- Ensure Firestore is enabled

**Dark mode issues?**
- Check ThemeProvider is wrapping app
- Use `dark:` prefix for dark styles
- Test with theme toggle

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Firebase**: https://firebase.google.com/docs
- **Vercel**: https://vercel.com/docs

## 🎓 Learning Resources

**Next.js 15**:
- App Router fundamentals
- Server & Client Components
- Metadata & SEO

**Tailwind CSS**:
- Utility-first CSS
- Responsive design
- Dark mode

**Framer Motion**:
- Animation basics
- Variants & transitions
- Scroll animations

**Firebase**:
- Firestore database
- Security rules
- Analytics setup

---

**Keep this guide handy for quick reference!** 📌
