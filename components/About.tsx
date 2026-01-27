import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Trophy, Code2, Rocket, ArrowRight, UserCog, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'Trialshopy Marketplace Pvt. Ltd.',
    location: 'Remote',
    period: 'Aug 2024 – Nov 2024',
    achievements: [
      'Engineered interactive live selling features, virtual try-ons, and real-time product recommendations increasing average session duration and reducing cart abandonment rates',
      'Optimized backend services for order processing, seller payout calculations, and price comparison logic reducing API response time by 35% and improving platform reliability',
      'Collaborated cross-functionally with design and product teams refining user experience ensuring seamless navigation across all buying journey touchpoints'
    ]
  },
  {
    title: 'Backend Developer Intern',
    company: 'Secure Blink',
    location: 'Remote',
    period: 'Dec 2025 – Present',
    achievements: [
      'Engineered a serverless authentication system using AWS Cognito and Lambda, securing 5,000+ user accounts and reducing unauthorized access attempts by implementing JWT-based access control',
      'Architected scalable RESTful microservices with the Serverless Framework, improving system reliability through custom input validation and standardized error-handling protocols',
      'Optimized database queries in DynamoDB to reduce API latency, ensuring high availability for core backend services.'
    ]
  },
]
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
    title: '900+ Problems Solved',
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
    title: 'LeetCode Knight',
    description: 'Max rating 1901, 650+ problems solved',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Image Column */}
          <div
            className="lg:col-span-5 relative group"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-terminal-green/30 p-2 transition-transform duration-500 bg-black/40">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-terminal-green/5">
                <Image
                  src="/mypic2.png"
                  alt="Dayashankar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-terminal-green/10 to-terminal-cyan/10 rounded-3xl -z-10 blur-2xl group-hover:from-terminal-green/20 group-hover:to-terminal-cyan/20 transition-all" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-terminal-green/30 rounded-br-3xl -z-10 group-hover:border-terminal-green/60 transition-colors" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-terminal-green/30 rounded-tl-3xl -z-10 group-hover:border-terminal-green/60 transition-colors" />
          </div>

          {/* Content Column */}
          <div
            className="lg:col-span-7"
          >


            <h2 className="text-5xl md:text-7xl font-mono gradient-text mb-6">
              {'>'} About Me
            </h2>

            <p className="text-xl md:text-2xl text-terminal-green/90 font-mono mb-8 leading-relaxed">
              {'{'} Full-Stack Developer passionate about building <span className="text-terminal-cyan glow-cyan">scalable solutions</span> and diving into <span className="text-terminal-cyan glow-cyan">AI field</span> {'}'}
            </p>

            <p className="text-terminal-green/70 font-mono text-base mb-10 leading-relaxed max-w-2xl">
              I specialize in architecting modern web applications with a focus on performance and security.
              My journey involves tackling complex challenges in both frontend and backend domains,
              constantly pushing the limits of what&apos;s possible with code.
            </p>

            {/* Quick Navigation Links */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <Link href="/projects">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass p-4 rounded-xl border-terminal-green/20 hover:border-terminal-green/50 flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-terminal-green font-mono text-sm">Projects</span>
                  <ArrowRight className="w-4 h-4 text-terminal-green group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              <Link href="/skills">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass p-4 rounded-xl border-terminal-green/20 hover:border-terminal-green/50 flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-terminal-green font-mono text-sm">Skills</span>
                  <ArrowRight className="w-4 h-4 text-terminal-green group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              <Link href="/competitive-programming">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass p-4 rounded-xl border-terminal-green/20 hover:border-terminal-green/50 flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-terminal-green font-mono text-sm">DSA Stats</span>
                  <ArrowRight className="w-4 h-4 text-terminal-green group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass p-4 rounded-xl border-terminal-green/20 hover:border-terminal-green/50 flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-terminal-green font-mono text-sm">Contact</span>
                  <ArrowRight className="w-4 h-4 text-terminal-green group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </div>

            {/* Follow Me Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 glass rounded-2xl border-terminal-green/20">
              <span className="text-terminal-green/60 font-mono text-sm uppercase tracking-widest">
                {'>'} Follow Me On:
              </span>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://linkedin.com/in/dayashankar-agrawal-412a13256"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-3 bg-terminal-green/10 border border-terminal-green/30 rounded-xl text-terminal-green hover:border-terminal-green hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/agrwl_daya20"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-3 bg-terminal-green/10 border border-terminal-green/30 rounded-xl text-terminal-green hover:border-terminal-green hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

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
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-2xl font-mono text-terminal-cyan mb-2">
                {exp.title}
              </h4>
              <p className="text-terminal-green/80 font-mono mb-2">
                {exp.company} | {exp.location} | {exp.period}
              </p>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-terminal-green/70 font-mono text-sm flex items-start gap-2"
                  >
                    <span className="text-terminal-green mt-1">{'#'}</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

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
