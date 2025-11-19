import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'BS in Computer Science',
      institution: 'FAST NUCES Islamabad',
      period: '2013 - 2017',
      description: 'Bachelor\'s degree in Computer Science with focus on software engineering, algorithms, data structures, and web development.',
    },
  ]

  return (
    <section id="education" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">
                    <FaGraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education

