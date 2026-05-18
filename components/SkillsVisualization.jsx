'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Ollama', 'Gemini API'],
  },
  {
    title: 'Mobile',
    skills: ['Flutter', 'React Native', 'Android', 'SQLite'],
  },
  {
    title: 'Web',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Django'],
  },
  {
    title: 'Tools & Cloud',
    skills: ['Firebase', 'Git/GitHub', 'Docker', 'Supabase', 'Redis', 'Vercel'],
  },
];

export default function SkillsVisualization() {
  return (
    <section className="py-14 sm:py-20 bg-white dark:bg-deep-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Expertise
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Proficiency across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-gray-50 dark:bg-secondary-black rounded-2xl p-6 border border-gray-200 dark:border-gray hover:border-primary-indigo/50 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-gray-200 dark:border-border-gray bg-white dark:bg-card-black px-3 py-2 text-sm text-gray-700 dark:text-text-secondary shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
