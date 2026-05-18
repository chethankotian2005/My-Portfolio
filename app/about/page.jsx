'use client';

import { motion } from 'framer-motion';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for technology
          </p>
        </motion.div>

        {/* Stats Section */}
        <StatsSection />

        {/* About Content */}
        <div className="my-20">
          <AboutSection />
        </div>

        {/* Skills section removed to avoid duplication with Home */}
      </div>
    </div>
  );
}
