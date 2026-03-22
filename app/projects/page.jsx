'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "CliniQ",
      description: "An intelligent hospital management system that revolutionizes patient care through AI-driven appointment scheduling. The system prioritizes patients based on urgency and medical conditions, integrating real-time notifications via Twilio API. Features include smart queue management, doctor availability tracking, and automated patient communication to reduce wait times and improve healthcare delivery.",
      techStack: ["React", "Firebase", "Python", "AI Chatbot", "Twilio API"],
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>,
      github: "https://github.com/chethankotian2005/CliniQ",
      demo: null,
    },
    {
      title: "SafeRoute",
      description: "A comprehensive safety-first navigation system powered by machine learning algorithms. Analyzes real-time crime data, street lighting conditions, pedestrian traffic, and user feedback to provide the safest possible routes. Integrates with Google Maps API to offer multiple route options with safety ratings, making urban navigation secure for everyone, especially during night hours.",
      techStack: ["Python", "ML", "Google Maps API", "Firebase"],
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
      github: "https://github.com/chethankotian2005/SafeRoute",
      demo: null,
    },
    {
      title: "Academic Setu",
      description: "AI-based timetable generation system that uses constraint optimization to create practical schedules. Handles faculty and classroom conflicts through custom conflict-resolution logic, generating conflict-free timetables efficiently for academic institutions.",
      techStack: ["Python", "OR-Tools", "Django", "Constraint Optimization"],
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 14L5 13.18V17l7 4 7-4v-3.82L12 17z"/></svg>,
      github: "https://github.com/chethankotian2005/Academic-Setu",
      demo: null,
    },
    {
      title: "Fake News Management System",
      description: "An advanced ML-powered platform that combats misinformation by detecting and classifying fake news articles with high accuracy. Utilizes NLP techniques, TensorFlow models, and scikit-learn algorithms to analyze text patterns, source credibility, and linguistic features. Includes a Streamlit dashboard for real-time news verification and content authenticity scoring.",
      techStack: ["Python", "Flask", "Sklearn", "NLP", "TensorFlow", "Streamlit"],
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>,
      github: "https://github.com/chethankotian2005/Fake_News_Prediction",
      demo: null,
    },
    {
      title: "AI Chatbot",
      description: "An intelligent conversational assistant built with advanced Natural Language Processing capabilities. Provides instant query resolution, customer support automation, and contextual conversations. Features include intent recognition, multi-turn dialogue management, and Firebase integration for persistent chat history. Perfect for businesses looking to enhance customer engagement and support efficiency.",
      techStack: ["Python", "NLP", "Tkinter", "Firebase"],
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></svg>,
      github: "https://github.com/chethankotian2005/CHATBOT",
      demo: null,
    },
    {
      title: "Event Image Finder",
      description: "Hackathon-winning project (Hackotsava 2025) that leverages computer vision and facial recognition to automatically detect and retrieve event photos. Upload your selfie and the system finds all event photos containing you using deep learning models. Features include batch processing, cloud storage via Firebase, and a React-based gallery interface for seamless photo discovery.",
      techStack: ["Python", "Computer Vision", "Firebase", "React"],
      icon: <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>,
      github: "https://github.com/chethankotian2005/Hackotsava-2025",
      demo: null,
    },
  ];

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
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my portfolio of innovative AI solutions, machine learning systems, and full-stack applications
          </motion.p>
        </motion.div>

        {/* Projects Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="card-dark border-border-gray rounded-2xl p-8 sm:p-12 relative overflow-hidden group">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-indigo/10 via-secondary-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Have a project in mind?
              </h2>
              <p className="text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-4 text-white font-semibold rounded-lg shadow-glow transition-all duration-300"
                >
                  Let's Work Together
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
