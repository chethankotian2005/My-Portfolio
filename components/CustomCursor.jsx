'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     window.matchMedia('(max-width: 1024px)').matches ||
                     'ontouchstart' in window;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Use MotionValues for high-performance updates without re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for the trailing ring
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Don't show cursor on mobile devices
    if (isMobile) return;

    const moveCursor = (e) => {
      // Update MotionValues directly - hardware accelerated
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check if hovering over clickable element
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Use passive event listeners for better scroll performance
    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render on mobile or before mount
  if (!mounted || isMobile) return null;

  const isDark = theme === 'dark';
  const baseColor = isDark ? '255, 255, 255' : '0, 0, 0';

  return (
    <>
      {/* Trailing Ring - Follows with spring physics */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black/20 dark:border-white/20 z-[9998] pointer-events-none"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
          willChange: 'transform',
        }}
        animate={{
          scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? `rgba(${baseColor}, 0.05)` : 'transparent',
          borderColor: isPointer ? `rgba(${baseColor}, 0.5)` : `rgba(${baseColor}, 0.2)`,
        }}
        transition={{
          scale: { duration: 0.2, ease: "easeOut" },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 }
        }}
      >
        {/* Optional: Subtle glow inside the ring */}
        <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/5 blur-sm" />
      </motion.div>
    </>
  );
}
