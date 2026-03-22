'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Global Next Consultant',
    role: 'AI/ML Internship Supervisor',
    text: 'Exceptional talent in machine learning. Delivered high-quality work and showed great initiative throughout the internship.',
    avatar: 'GNC'
  },
  {
    name: 'Hackathon Judge',
    role: 'International 24hr Hackathon',
    text: 'CliniQ project was innovative and well-executed. The team showed excellent problem-solving skills and technical expertise.',
    avatar: 'HJ'
  },
  {
    name: 'AIKYA Team',
    role: 'Technical Club',
    text: 'Active contributor with strong technical skills. Always ready to help peers and share knowledge.',
    avatar: 'AT'
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50 dark:bg-secondary-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            What People Say
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Feedback from mentors and collaborators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white dark:bg-card-black rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-border-primary hover:border-primary-indigo/50 transition-all duration-300 relative shadow-sm dark:shadow-none"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 bg-gradient-primary rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="mt-8">
                <p className="text-text-secondary text-sm sm:text-base mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
