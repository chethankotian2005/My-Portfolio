'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'NLP', level: 75 },
    ],
    color: 'from-white to-zinc-400'
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', level: 90 },
      { name: 'React Native', level: 80 },
      { name: 'Android', level: 85 },
      { name: 'iOS', level: 75 },
    ],
    color: 'from-zinc-300 to-zinc-500'
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React/Next.js', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
    ],
    color: 'from-white to-zinc-400'
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Firebase', level: 90 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
    ],
    color: 'from-zinc-300 to-zinc-500'
  },
];

export default function SkillsVisualization() {
  return (
    <section className="py-20 bg-white dark:bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Expertise
          </h2>
          <p className="text-text-secondary text-lg">
            Mastery across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-gray-50 dark:bg-secondary-black rounded-2xl p-6 border border-gray-200 dark:border-gray hover:border-primary-indigo/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-secondary font-medium">
                        {skill.name}
                      </span>
                      <span className="text-text-secondary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-card-black rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                          ease: 'easeOut'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
