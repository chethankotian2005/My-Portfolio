'use client';

import { motion } from 'framer-motion';
import AboutSection from '@/components/AboutSection';
import SkillsGrid from '@/components/SkillsGrid';
import StatsSection from '@/components/StatsSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

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

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center gradient-text mb-12">
            Skills & Technologies
          </h2>
          <SkillsGrid />
        </motion.div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  );
}
