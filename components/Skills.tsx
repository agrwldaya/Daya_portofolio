'use client'

import { motion } from 'framer-motion'

const mainSkills = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 87 },
  { name: 'JavaScript (ES6+)', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'PostgreSQL', level: 88 },
  { name: 'MongoDB', level: 86 },
]

const skillCategories = {
  'Programming Languages': ['C/C++', 'JavaScript (ES6+)', 'Python', 'SQL', 'HTML5', 'CSS3'],
  'Frontend Development': ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Shadcn UI', 'Redux Toolkit'],
  'Backend Development': ['Node.js', 'Express.js', 'REST APIs', 'Microservices Architecture', 'JWT', 'OAuth 2.0'],
  'Databases': ['PostgreSQL', 'MongoDB', 'MySQL', 'Database Indexing', 'Query Optimization', 'Data Modeling'],
  'DevOps & Infrastructure': ['Docker', 'Kubernetes', 'Redis', 'Nginx', 'CI/CD Pipelines', 'Cloud Deployment'],
  'Developer Tools': ['Git', 'GitHub', 'Vercel', 'Render', 'Cloudinary', 'Postman', 'VS Code', 'Cursor'],
  'Core Competencies': ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Microservices', 'API Design', 'DBMS', 'OS', 'Computer Networks'],
}

const competitiveProgramming = [
  { platform: 'CodeChef', rating: '3★', maxRating: '1620', username: 'agrwldaya20', link: 'https://www.codechef.com/users/agrwldaya20' },
  { platform: 'LeetCode', rating: 'Expert', maxRating: '1750', problems: '550+', username: 'agrwldaya20', link: 'https://leetcode.com/u/agrwldaya20/' },
]

export default function Skills() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-mono gradient-text mb-6"
          >
            {'>'} Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-terminal-green/80 font-mono max-w-3xl mx-auto"
          >
            {'{'} Technologies and tools I work with {'}'}
          </motion.p>
        </motion.div>

         

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 border-terminal-green/20"
            >
              <h3 className="text-lg font-mono text-terminal-cyan mb-4 glow-cyan">
                {'>'} {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded-full text-xs text-terminal-green/80 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competitive Programming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 border-terminal-green/30 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-mono text-terminal-green mb-6 glow-text">
            {'>'} Competitive Programming
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competitiveProgramming.map((cp, index) => (
              <motion.a
                key={cp.platform}
                href={cp.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 border-terminal-green/20 hover:border-terminal-green/50 transition-all group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h4 className="text-xl font-mono text-terminal-cyan mb-2">
                  {cp.platform}
                </h4>
                <p className="text-terminal-green/80 font-mono text-sm mb-1">
                  Rating: {cp.rating} | Max: {cp.maxRating}
                </p>
                {cp.problems && (
                  <p className="text-terminal-green/70 font-mono text-xs mb-2">
                    Problems Solved: {cp.problems}
                  </p>
                )}
                <p className="text-terminal-green/60 font-mono text-xs">
                  {'//'} @{cp.username}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
