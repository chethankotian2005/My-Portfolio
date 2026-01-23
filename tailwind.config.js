/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern Professional Palette
        // Dark Mode Backgrounds
        'deep-black': '#0f172a', // Slate 900
        'secondary-black': '#1e293b', // Slate 800
        'card-black': '#1e293b',
        'border-gray': '#334155', // Slate 700
        
        // Primary Color System (Indigo)
        'primary-indigo': '#6366f1', // Indigo 500
        'primary-indigo-light': '#818cf8', // Indigo 400
        'primary-indigo-dark': '#4f46e5', // Indigo 600
        
        // Secondary Color System (Purple)
        'secondary-purple': '#8b5cf6', // Purple 500
        'secondary-purple-light': '#a78bfa', // Purple 400
        'secondary-purple-dark': '#7c3aed', // Purple 600
        
        // Accent Color System (Pink)
        'accent-pink': '#ec4899', // Pink 500
        'accent-pink-light': '#f472b6', // Pink 400
        'accent-pink-dark': '#db2777', // Pink 600
        
        // Success Color
        'success-emerald': '#10b981', // Emerald 500
        
        // Light Mode Backgrounds
        'light-bg': '#f8fafc', // Slate 50
        'light-card': '#ffffff',
        
        // Text Colors
        'text-primary': '#f1f5f9', // Slate 100
        'text-secondary': '#cbd5e1', // Slate 300
        'text-muted': '#94a3b8', // Slate 400
        
        // Keep existing primary for backward compatibility
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-md': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      maxWidth: {
        'container': '1280px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.15)',
        'glow-lg': '0 0 40px rgba(255, 255, 255, 0.25)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 12px 32px rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05), transparent 70%)',
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-hero': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
      },
    },
  },
  plugins: [],
}
