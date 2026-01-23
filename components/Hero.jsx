'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <section className="relative min-h-[calc(100vh-72px)] md:min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-deep-black px-4 py-12 md:py-20">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving gradient mesh */}
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            backgroundSize: '300% 300%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        
        {/* Radial gradient spotlight */}
        <div className="absolute inset-0 bg-gradient-radial opacity-40 dark:opacity-100"></div>
        
        {/* Floating geometric shapes with gradients */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          }}
        ></motion.div>
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          }}
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
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-black/5 dark:bg-white/5 rounded-full blur-3xl"
        ></motion.div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Circle with 3D Effects */}
          <motion.div 
            variants={itemVariants} 
            className="mb-12 perspective-1000"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 15,
                rotateX: 10,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative inline-block transform-gpu"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full relative overflow-hidden group cursor-pointer shadow-2xl">
                {/* Gradient border ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-deep-black">
                    <Image
                      src="/profile.png"
                      alt="Chethan V Kotian"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover rounded-full scale-105 group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
                
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-50 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-medium"
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
                className="inline-block w-0.5 h-8 sm:h-10 bg-black dark:bg-white ml-1"
              ></motion.span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a <span className="text-black dark:text-white font-semibold">passionate developer</span> who builds innovative projects in{' '}
            <span className="text-black dark:text-white font-semibold">AI, mobile, and web</span> —
            turning ideas into impactful solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-primary text-white font-bold rounded-xl shadow-xl overflow-hidden w-full sm:w-auto transition-all duration-300 hover:shadow-2xl cursor-hover"
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
                {/* Ripple effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </Link>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white dark:bg-transparent text-primary-indigo dark:text-white border-2 border-primary-indigo dark:border-white font-bold rounded-xl transition-all duration-300 hover:bg-primary-indigo hover:text-white dark:hover:bg-white dark:hover:text-deep-black w-full sm:w-auto cursor-hover shadow-lg hover:shadow-xl"
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
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hackathons</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
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
              className="w-6 h-6 text-gray-600 dark:text-gray-400"
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
              className="absolute w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full"
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
