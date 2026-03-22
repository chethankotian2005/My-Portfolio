'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { number: 5, suffix: '+', label: 'Projects Completed', duration: 2 },
  { number: 2, suffix: '', label: 'Hackathon Wins', duration: 1.5 },
  { number: 10, suffix: '+', label: 'Technologies', duration: 2.5 },
  { number: 100, suffix: '%', label: 'Client Satisfaction', duration: 2 },
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
    <section className="py-14 sm:py-20 bg-gray-50 dark:bg-secondary-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
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
