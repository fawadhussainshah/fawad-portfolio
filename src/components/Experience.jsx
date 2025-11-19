import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Engineer',
      company: 'TalentEdgeAI',
      period: 'Feb 2024 – Present',
      description: [
        'Architected and implemented a robust data lake using AWS S3, enabling scalable storage and processing of global job market datasets',
        'Developed automated data pipelines using AWS Lambda, Step Functions, and EventBridge, streamlining data ingestion, transformation, and enrichment workflows',
        'Utilized AWS Athena for querying large datasets efficiently, enabling near real-time insights and analytics across millions of records',
        'Integrated NLP-powered search capabilities using GPT to convert natural language queries into structured filters and aggregate queries',
        'Delivered actionable insights by transforming raw data into structured, queryable formats, supporting hiring trend analysis and candidate skill mapping',
        'Empowered recruiters with dynamic search filters and demand intelligence to identify market needs and skill gaps across regions',
      ],
    },
    {
      title: 'Senior Full Stack Engineer',
      company: 'Techgenies LLC',
      period: 'Jan 2022 – Present',
      description: [
        'Worked closely with clients to define system specifications and designs',
        'Led the development of complex application features, including search functionality using custom parsers',
        'Designed and integrated both frontend and backend components for various applications',
        'Managed cloud services on AWS and GCP to optimize traffic handling and ensure security',
        'Built scalable analytics dashboards and microservices for TrenData, an AI-powered workforce analytics platform that delivers predictive insights for HR decision-making',
        'Integrated data connectors and real-time processing pipelines for customer HR systems using REST APIs and secure data ingestion',
        'Modernized web applications into a modular microservices architecture, improving maintainability and reducing deployment times',
      ],
    },
    {
      title: 'Senior Full Stack Engineer',
      company: 'Walee Technologies Private Limited',
      period: 'July 2020 – Jan 2022',
      description: [
        'Architected products using Domain-Driven Design (DDD) principles',
        'Developed an abstraction layer for user profile updates with full audit trails',
        'Managed cloud operations for applications with high traffic on AWS and GCP',
        'Provided detailed analytics to support business decisions, improve sales, and optimize marketing strategies',
        'Spearheaded the integration of AI-driven social listening tools to monitor brand mentions and sentiment across social media platforms',
        'Collaborated with marketing and sales teams to deploy influencer marketing campaigns that reached over 2 million users',
        'Designed a robust analytics module to measure campaign effectiveness, engagement rates, and influencer ROI in real-time',
        'Led the migration of monolithic services to microservices architecture, improving system scalability and deployment speed',
      ],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Walee Technologies Private Limited',
      period: 'Mar 2019 – June 2020',
      description: [
        'Collaborated with the product team to develop frontend and backend logic for web and mobile applications',
        'Developed a chat bot to automate customer queries using Facebook and Magento APIs',
        'Played a key role in the development of Walee Mobile Hybrid App, which gained over 100k users',
      ],
    },
    {
      title: 'Full Stack Engineer',
      company: 'Youcan LLC',
      period: 'Sep 2017 – Feb 2019',
      description: [
        'Designed and implemented microservices architecture for web applications',
        'Integrated responsive design and optimized both frontend and backend business logic',
        'Worked with product teams to improve application performance and ensure scalable solutions',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg">
                      <FaBriefcase />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="card">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                          <p className="text-lg text-primary-600 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="text-primary-600 mr-2">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience

