'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="space-y-8"
    >
      {/* Main Content Card */}
      <motion.div 
        variants={itemVariants} 
        className="card-dark p-8 sm:p-10 lg:p-12 card-hover"
      >
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-text-secondary text-lg leading-relaxed">
            I'm currently pursuing my Bachelor of Engineering in{' '}
            <span className="text-black dark:text-primary-indigo font-semibold hover:text-gray-600 dark:hover:text-secondary-purple transition-colors cursor-pointer">
              Artificial Intelligence & Machine Learning
            </span>{' '}
            from Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM). My journey in tech has been driven by a passion for 
            creating innovative solutions that solve real-world problems.
          </p>
          
          <p className="text-gray-700 dark:text-text-secondary text-lg leading-relaxed">
            As a developer, I specialize in{' '}
            <span className="relative inline-block group">
              <span className="text-black dark:text-primary-indigo font-semibold">AI/ML applications</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            ,{' '}
            <span className="relative inline-block group">
              <span className="text-black dark:text-primary-indigo font-semibold">mobile development</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            , and{' '}
            <span className="relative inline-block group">
              <span className="text-black dark:text-primary-indigo font-semibold">web technologies</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            . I thrive in hackathon environments where creativity meets technical expertise, and I've participated in multiple competitive coding events and tech competitions.
          </p>

          <p className="text-gray-700 dark:text-text-secondary text-lg leading-relaxed">
            Beyond coding, I'm passionate about building products that make a{' '}
            <span className="text-emerald-600 dark:text-success-emerald font-semibold">meaningful impact</span>. Whether it's developing emergency 
            medical apps, creating AI-powered mental health solutions, or exploring cutting-edge technologies like{' '}
            <span className="text-gray-600 dark:text-secondary-purple font-semibold">computer vision</span> and{' '}
            <span className="text-gray-600 dark:text-secondary-purple font-semibold">NLP</span>, I'm always eager to learn and push the boundaries of what's possible.
          </p>
        </div>

        {/* Resume Download Button */}
        <div className="pt-8">
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(100, 100, 100, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white dark:bg-white dark:text-black font-bold rounded-xl shadow-glow overflow-hidden"
            >
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </motion.svg>
              <span>Download Resume</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-indigo to-secondary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundSize: '200% 200%' }}
              ></motion.div>
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div variants={itemVariants} className="card-dark p-8 sm:p-10 card-hover">
        <div className="flex items-center gap-3 mb-8">
          <svg className="w-8 h-8 text-primary-indigo" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <h3 className="text-3xl font-bold gradient-text">Experience & Achievements</h3>
        </div>
        
        <motion.div 
          className="space-y-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
                when: "beforeChildren"
              }
            }
          }}
        >
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
              ),
              title: "AI/ML Intern",
              company: "Global Next Consultant India Pvt. Ltd.",
              date: "2025",
              description: "Completed internship focused on developing and deploying AI/ML-based projects and prototypes. Worked on multiple machine learning models involving data preprocessing, predictive analytics, and NLP applications. Collaborated with senior engineers to build production-ready ML systems.",
              color: "primary-indigo",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              ),
              title: "Promotional Coordinator",
              company: "SMVITM",
              date: "2025",
              description: "Responsible for planning, managing, and executing promotional activities for major college events. Coordinated multimedia content creation including short films, social media campaigns, and event branding.",
              color: "secondary-purple",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              ),
              title: "Active Member",
              company: "AIKYA Technical Club (AIML Dept, SMVITM)",
              date: "2022 - Present",
              description: "Contributed to multiple AI/ML knowledge-sharing sessions, technical events, and workshops. Actively involved in organizing departmental initiatives and tech-based student activities.",
              color: "success-emerald",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              ),
              title: "Peer Learning Mentor",
              company: "SMVITM",
              date: "2025",
              description: "Conducted peer learning sessions for juniors, focusing on AI/ML concepts and project building. Helped students understand practical implementation of models and tools like Python, Firebase, and TensorFlow.",
              color: "primary-indigo",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              ),
              title: "🥈 2nd Place - International 24-Hour Hackathon",
              company: "CliniQ Project",
              date: "2025",
              description: "Built CliniQ, an AI-powered hospital queue and appointment management system with teleconsultation and chatbot integration. Recognized for innovation, design, and problem-solving impact.",
              color: "secondary-purple",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              ),
              title: "🏅 Top 10 - NITK 24-Hour Hackathon",
              company: "SafeRoute Project",
              date: "2025",
              description: "Developed SafeRoute, an AI-based route optimization and safety navigation system. Ranked among top 10 out of 100+ teams for technical execution and real-world relevance.",
              color: "success-emerald",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              ),
              title: "Event Organizer - Code Resurrect 2025",
              company: "SMVITM",
              date: "2025",
              description: "Organized and managed a coding event with 100+ participants. Oversaw coordination, problem design, and technical management.",
              color: "primary-indigo",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              ),
              title: "Creative & Photography Lead",
              company: "SMVITM Events",
              date: "2023 - Present",
              description: "Managed promotional short films and photography initiatives at SMVITM events. Known for creative direction, scripting, and event visual documentation.",
              color: "secondary-purple",
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50, y: 20 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 12 }
                }
              }}
              className="relative pl-12 group"
            >
              {/* Connecting Line */}
              {index < 7 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: '100%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="absolute left-5 top-12 w-0.5 bg-border-gray group-hover:bg-primary-indigo transition-colors duration-300"
                />
              )}
              
              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className={`absolute left-0 top-0 w-10 h-10 rounded-full bg-${item.color} flex items-center justify-center text-white shadow-glow z-10`}
              >
                {item.icon}
              </motion.div>
              
              {/* Content */}
              <motion.div 
                className="pb-8 p-4 -ml-4 rounded-xl border border-transparent"
                whileHover={{ 
                  x: 10, 
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.05)"
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="text-xl font-bold text-text-primary group-hover:text-primary-indigo transition-colors">
                    {item.title}
                  </h4>
                  <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-card-black border border-gray-200 dark:border-border-gray rounded-full text-gray-600 dark:text-text-muted">
                    {item.date}
                  </span>
                </div>
                {item.company && (
                  <p className="text-primary-indigo font-semibold mb-2">{item.company}</p>
                )}
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
