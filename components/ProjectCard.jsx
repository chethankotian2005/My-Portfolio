'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group card-dark border border-border-gray hover:border-primary-indigo rounded-xl overflow-hidden transition-all duration-300"
    >
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        {/* Project Image with Gradient Overlay */}
        <div className="relative h-56 overflow-hidden">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card-black via-card-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            </>
          ) : (
            <div className="relative h-full bg-secondary-black flex items-center justify-center overflow-hidden">
              <div className="relative text-text-primary z-10">
                {project.icon || (
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          {/* Title with Gradient on Hover */}
          <motion.h3 
            className="text-2xl font-bold text-text-primary group-hover:gradient-text transition-all duration-300"
          >
            {project.title}
          </motion.h3>
          
          <div>
            <AnimatePresence mode="wait">
              <motion.p 
                key={isExpanded ? 'expanded' : 'collapsed'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`text-text-secondary text-sm leading-relaxed break-words ${!isExpanded ? 'line-clamp-4' : ''}`}
              >
                {project.description}
              </motion.p>
            </AnimatePresence>
            
            {project.description.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary-indigo hover:text-secondary-purple text-xs font-medium mt-2 transition-colors duration-200 flex items-center gap-1"
              >
                {isExpanded ? (
                  <>
                    Show Less
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 text-xs font-medium bg-secondary-black border border-border-gray text-primary-indigo rounded-lg hover:border-primary-indigo hover:shadow-glow transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2.5 bg-secondary-black border border-border-gray text-text-primary rounded-lg hover:border-primary-indigo hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <motion.svg 
                    className="w-5 h-5"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </motion.svg>
                  <span className="font-medium">GitHub</span>
                </motion.button>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2.5 bg-gradient-primary text-white rounded-lg hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn font-medium"
                >
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                  <span>Live Demo</span>
                </motion.button>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl shadow-glow-lg" />
      </div>
    </motion.div>
  );
}
