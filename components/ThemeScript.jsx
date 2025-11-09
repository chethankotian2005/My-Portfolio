'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeScript() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    // Ensure the HTML element has the correct theme class
    const html = document.documentElement;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if (currentTheme === 'dark') {
      html.classList.add('dark');
      html.classList.remove('light');
      html.style.colorScheme = 'dark';
    } else if (currentTheme === 'light') {
      html.classList.add('light');
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  }, [theme, systemTheme]);

  return null;
}
