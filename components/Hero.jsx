'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const fullText = 'AI & Mobile Developer | Machine Learning Enthusiast';

  // Generate particles only once on mount to avoid hydration issues
  const particles = useMemo(() => {
    if (!isMounted) return [];
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="relative min-h-[calc(100vh-72px)] md:min-h-screen flex items-center justify-center overflow-hidden bg-deep-black px-4 py-12 md:py-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-radial"></div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-primary-indigo/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-secondary-purple/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-indigo/8 rounded-full blur-3xl"
        ></motion.div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Circle with Glow */}
          <motion.div 
            variants={itemVariants} 
            className="mb-12"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative inline-block"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-primary flex items-center justify-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold shadow-glow-lg relative overflow-hidden group cursor-pointer">
                <span className="relative z-10">CV</span>
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(99, 102, 241, 0.4)',
                      '0 0 40px rgba(99, 102, 241, 0.8)',
                      '0 0 20px rgba(99, 102, 241, 0.4)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-text-muted mb-4 font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Name with Gradient */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 gradient-text leading-tight"
          >
            Chethan V Kotian
          </motion.h1>

          {/* Typing Effect Subtitle */}
          <motion.div
            variants={itemVariants}
            className="mb-8 h-12 sm:h-16 flex items-center justify-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-8 sm:h-10 bg-primary-indigo ml-1"
              ></motion.span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a <span className="text-primary-indigo font-semibold">passionate developer</span> who builds innovative projects in{' '}
            <span className="text-secondary-purple font-semibold">AI, mobile, and web</span> —
            turning ideas into impactful solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-primary text-white font-bold rounded-xl shadow-glow overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-indigo to-secondary-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                ></motion.div>
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent text-primary-indigo font-bold rounded-xl border-2 border-primary-indigo hover:bg-primary-indigo hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Proof / Stats (Optional) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">10+</div>
              <div className="text-sm text-text-muted">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">5+</div>
              <div className="text-sm text-text-muted">Hackathons</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">3+</div>
              <div className="text-sm text-text-muted">Technologies</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <motion.svg
              className="w-6 h-6 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Particles effect */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary-indigo/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
