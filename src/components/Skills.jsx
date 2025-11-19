import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages & Frontend',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'React', level: 95 },
        { name: 'Angular 2+', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Material UI', level: 90 },
      ],
    },
    {
      category: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express', level: 90 },
        { name: 'Python (Flask/Django)', level: 85 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 90 },
        { name: 'DynamoDB', level: 80 },
        { name: 'Redis', level: 85 },
        { name: 'Elasticsearch', level: 80 },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (S3, Lambda, EC2)', level: 90 },
        { name: 'AWS Step Functions', level: 85 },
        { name: 'AWS Athena', level: 85 },
        { name: 'GCP', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'CI/CD (GitLab, Jenkins)', level: 85 },
        { name: 'Git/GitHub/Bitbucket', level: 95 },
      ],
    },
    {
      category: 'AI & Data',
      skills: [
        { name: 'NLP (GPT, LangChain)', level: 85 },
        { name: 'Pandas/NumPy', level: 80 },
        { name: 'Airflow', level: 75 },
        { name: 'Agentic AI', level: 70 },
        { name: 'Supabase', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="card"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

