import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                As a results-driven Senior Software Engineer with over 8 years of experience, I specialize in designing and building scalable, high-performance software solutions that align with both technical requirements and business goals. My full-stack expertise spans modern technologies including JavaScript, TypeScript, React, Angular, Vue.js, Node.js, and Python, enabling me to deliver seamless user experiences and robust backend architectures.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                I thrive in dynamic, fast-paced environments and collaborate effectively with cross-functional teams to drive product success. With a strong foundation in problem-solving and systems thinking, I tackle complex challenges with clarity and precision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Committed to continuous learning and innovation, I stay at the forefront of emerging trends, including early exploration of agentic AI architectures—to craft future-ready solutions that deliver real value to users and organizations alike.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">6+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">40+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

