'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { number: 12, suffix: '+', label: 'Projects Built', duration: 2 },
  { number: 5, suffix: '', label: 'Hackathon Wins', duration: 1.5 },
  { number: 15, suffix: '+', label: 'Technologies', duration: 2.5 },
];

function Counter({ end, duration, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-3xl sm:text-4xl md:text-6xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);

  return (
    <section className="py-8 sm:py-10 bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="text-center w-full sm:w-auto"
            >
              <div className="mb-3">
                {inView && <Counter end={stat.number} duration={stat.duration} suffix={stat.suffix} />}
              </div>
              <p className="text-gray-600 dark:text-text-secondary text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
