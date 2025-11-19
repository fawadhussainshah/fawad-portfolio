import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Talent Edge',
      description: 'Comprehensive data-driven insights, powered by artificial intelligence, to enhance workforce understanding and streamline hiring processes.',
      technologies: ['AWS', 'Lambda', 'S3', 'Athena', 'NLP', 'GPT', 'Python', 'React'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      title: 'Trendata',
      description: 'An AI-powered analytics platform for linking critical events and corporate metrics to drive business outcomes.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Microservices'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      title: 'Walee',
      description: 'A trade app connecting businesses and social influencers, allowing influencers to create shops and monetize their sales.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Cordova', 'Ionic'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      title: 'Walee Enterprise',
      description: 'A SaaS platform for businesses to manage social media traffic and provide customer support through integrated chatbots.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS', 'Chatbot', 'AI'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      title: 'LIRD',
      description: 'A medical records management platform featuring notifications, attendance tracking, and analytics.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Real-time', 'Analytics'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format&q=80',
    },
    {
      title: 'Youcan',
      description: 'A platform enabling users to discover and join activities through interest-based classification and location filtering.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Microservices', 'Location Services'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format&q=80',
    },
  ]

  return (
    <section id="projects" className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
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

export default Projects

