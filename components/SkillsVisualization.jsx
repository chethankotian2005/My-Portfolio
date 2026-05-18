'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'AI & ML',
    icon: (
      <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Ollama', 'Gemini API'],
  },
  {
    title: 'Mobile',
    icon: (
      <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
    ),
    skills: ['Flutter', 'React Native', 'Android', 'SQLite'],
  },
  {
    title: 'Web',
    icon: (
      <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><path d="M2.05 6.52h19.9"/><path d="M2.05 17.48h19.9"/></svg>
    ),
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Django'],
  },
  {
    title: 'Tools & Cloud',
    icon: (
      <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0018 7h-1.26A8 8 0 104 17.25"/></svg>
    ),
    skills: ['Firebase', 'Git/GitHub', 'Docker', 'Supabase', 'Redis', 'Vercel'],
  },
];

export default function SkillsVisualization() {
  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-deep-black">
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
            Tools & technologies I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="rounded-2xl p-6 border-l-2 border-teal-400/30 bg-gradient-to-r from-white/5 to-transparent dark:from-white/5 dark:to-transparent transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-2 text-sm text-gray-100 transition-colors duration-200 hover:border-white/40 hover:text-white"
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
