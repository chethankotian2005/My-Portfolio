'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <Link href="/contact">
          <motion.div
            className="bg-black text-white dark:bg-white dark:text-black rounded-full shadow-glow flex items-center overflow-hidden"
            animate={{ 
              width: isExpanded ? 'auto' : '56px',
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isExpanded ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </motion.svg>
            </div>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ 
                opacity: isExpanded ? 1 : 0,
                width: isExpanded ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
              className="whitespace-nowrap overflow-hidden"
            >
              <span className="font-semibold pr-6 pl-1">
                Let's Talk!
              </span>
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
