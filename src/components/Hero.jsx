import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-white">
              <img 
                src="/profile-photo.jpg" 
                alt="Syed Fawad Hussain Shah"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-5xl font-bold text-white">FS</span>';
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
          >
            Syed Fawad Hussain Shah
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-primary-600 mb-6 font-semibold"
          >
            Senior Software Engineer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Results-driven Senior Software Engineer with over 8 years of experience, specializing in designing and building scalable, high-performance software solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Fawad_Resume_2025_Updated.docx"
              download
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold shadow-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/fawadhussainshah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors"
              title="GitHub"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://linkedin.com/in/fawadshah94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:fawadali23@gmail.com"
              className="text-gray-700 hover:text-primary-600 transition-colors"
              title="Email"
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

