'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeDebug() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-card-black border border-gray-200 dark:border-border-gray p-4 rounded-lg text-xs z-50 opacity-50 hover:opacity-100 transition-opacity shadow-lg">
      <div className="font-mono space-y-1">
        <div>Theme: <span className="text-primary-indigo">{theme}</span></div>
        <div>System: <span className="text-secondary-purple">{systemTheme}</span></div>
        <div>Resolved: <span className="text-success-emerald">{resolvedTheme}</span></div>
        <div>HTML Class: <span className="text-yellow-400">{document.documentElement.className}</span></div>
      </div>
    </div>
  );
}
