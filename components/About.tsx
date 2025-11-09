'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Trophy, Code2 } from 'lucide-react'

const experience = {
  title: 'Full-Stack Developer Intern',
  company: 'Trialshopy Marketplace Pvt. Ltd.',
  location: 'Remote',
  period: 'Oct 2024 – Dec 2024',
  achievements: [
    'Engineered interactive live selling features, virtual try-ons, and real-time product recommendations increasing average session duration and reducing cart abandonment rates',
    'Optimized backend services for order processing, seller payout calculations, and price comparison logic reducing API response time by 35% and improving platform reliability',
    'Collaborated cross-functionally with design and product teams refining user experience ensuring seamless navigation across all buying journey touchpoints'
  ]
}

const education = [
  {
    degree: 'Bachelor of Technology',
    institute: 'Indian Institute of Information Technology Una',
    cgpa: '7.61/10',
    year: '2022-2026'
  },
  {
    degree: 'Senior Secondary',
    institute: 'Matrix High School, Sikar, Rajasthan',
    cgpa: '91.40%',
    year: '2022'
  },
  {
    degree: 'Secondary',
    institute: 'Shree Ram Vidya Mandir School, Guhala, Rajasthan',
    cgpa: '93.50%',
    year: '2019'
  }
]

const achievements = [
  {
    icon: Code2,
    title: '800+ Problems Solved',
    description: 'Data Structures and Competitive Programming',
  },
  {
    icon: Trophy,
    title: 'Hackathon Winner',
    description: 'Ranked 12th out of 920 teams at Code Fusion 2.0',
  },
  {
    icon: Code2,
    title: 'CodeChef 3★',
    description: 'Max rating of 1620',
  },
  {
    icon: Code2,
    title: 'LeetCode Expert',
    description: 'Max rating 1800, 550+ problems solved',
  },
]

export default function About() {
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
            {'>'} About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-terminal-green/80 font-mono max-w-3xl mx-auto"
          >
            {'{'} Full-Stack Developer passionate about building scalable solutions {'}'}
          </motion.p>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-3xl p-8 md:p-12 border-terminal-green/30 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-terminal-green" />
            <h3 className="text-3xl font-mono text-terminal-green glow-text">
              {'>'} Work Experience
            </h3>
          </div>
          <div className="mb-4">
            <h4 className="text-2xl font-mono text-terminal-cyan mb-2">
              {experience.title}
            </h4>
            <p className="text-terminal-green/80 font-mono mb-2">
              {experience.company} | {experience.location} | {experience.period}
            </p>
            <ul className="space-y-2 mt-4">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="text-terminal-green/70 font-mono text-sm flex items-start gap-2">
                  <span className="text-terminal-green mt-1">{'#'}</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-8 border-terminal-green/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-terminal-green" />
              <h3 className="text-2xl font-mono text-terminal-green glow-text">
                {'>'} Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-terminal-green/30 pl-4">
                  <h4 className="text-xl font-mono text-terminal-cyan mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-terminal-green/80 font-mono text-sm mb-1">
                    {edu.institute}
                  </p>
                  <p className="text-terminal-green/70 font-mono text-xs">
                    {edu.cgpa} | {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center border-terminal-green/20 hover:border-terminal-green/50 transition-all"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className="inline-block mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 text-terminal-green mx-auto" />
                  </motion.div>
                  <h4 className="text-lg font-mono text-terminal-green mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-terminal-green/70 text-xs font-mono">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
