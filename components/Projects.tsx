'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Sparkles, Code2, Play } from 'lucide-react'

const mainProjects = [
  {
    title: 'Milkeyway - Direct Dairy Farmer-Consumer Marketplace',
    description: 'A farmer-consumer marketplace fostering direct dairy trade, eliminating intermediaries and empowering fair pricing. Features dynamic dashboards for Admins, Farmers, and Consumers with real-time inventory and order tracking.',
    tech: ['Next.js', 'Express.js', 'PostgreSQL', 'JWT', 'Cloudinary', 'Geo-Location APIs'],
    period: 'August 2025 – October 2025',
    highlights: [
      'Optimized PostgreSQL database with indexing, triggers, and batch operations achieving 30% faster query performance',
      'Designed dynamic dashboards for real-time inventory, order tracking, and transaction management',
      'Integrated Cloudinary for automated image verification and scalable storage'
    ],
    link: '#',
    github: 'https://github.com/agrwldaya/Milkeyway--Connect-users-to-local-Dairy-farmer',
    videoUrl: 'https://drive.google.com/file/d/1I_fTFFcDM9pSNni4d4fKJMwwj1OCVHOi/preview',
  },
  {
    title: 'DSA-Instructor AI-Chatbot',
    description: 'An AI-powered chatbot for DSA instructors to assist students with programming concepts, problem-solving, and learning resources.',
    tech: ['React.js', 'Google Gemini API', 'Generative AI', 'Tailwind CSS', 'Markdown'],
    period: 'Jan 2026 – Jan 2026',
    highlights: [
      'Engineered an interactive AI tutor utilizing the Google Gemini API to provide real-time, context-aware solutions to complex Data Structures and Algorithms (DSA) problems.',
      'Designed custom system prompts to ensure the AI acts as a mentor, guiding users through logic building rather than just providing direct code solutions.'
    ],
    link: 'https://dsa-instructor-chatbot-eta.vercel.app/',
    github: 'https://github.com/agrwldaya/dsa-instructor-chatbot',
  },
   {
    title: 'Quick Publish - Newspaper Publishing Automation Platform',
    description: 'An end-to-end newspaper publishing automation platform featuring multi-role authentication (Admin, Publisher, Employee) with secure payment gateway integration.',
    tech: ['React.js', 'Redux', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Razorpay'],
    period: 'August 2024 – December 2024',
    highlights: [
      'Developed multi-role authentication system using JWT, cutting approval delays by 40%',
      'Integrated Razorpay payment gateway enabling secure online transactions',
      'Enhanced Cloudinary-based image management improving upload speed and reliability'
    ],
    link: 'https://quick-public.vercel.app/',
    github: 'https://github.com/agrwldaya/Quick-Public',
  },
  {
    title: 'Digital Market - Location-Based Local Shopping Marketplace',
    description: 'A location-aware marketplace allowing users to discover nearby stores within a 5 km radius. Features real-time geolocation and distance-based filtering with a "Go & Pick-Up" model.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Google Maps API', 'Stripe'],
    period: 'January 2025 – April 2025',
    highlights: [
      'Built location-aware marketplace reducing in-store wait times and improving customer convenience',
      'Integrated Google Maps API for real-time geolocation and distance-based filtering',
      'Designed "Go & Pick-Up" model eliminating third-party delivery costs and boosting local business efficiency by 25%'
    ],
    link: '#',
    github: 'https://github.com/agrwldaya/DigitalShop',
  }
]

const otherProjects = [
  {
    title: 'Hospital Food Management System platform',
    description: 'A comprehensive food management system for hospitals to efficiently manage patient meals, dietary requirements, and food inventory. Features real-time order tracking and nutritional information management.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    period: '2024',
    highlights: [
      'Streamlined meal ordering process reducing wait times by 40%',
      'Implemented dietary restriction management for patient safety',
      'Real-time inventory tracking and automated notifications'
    ],
    link: 'https://hospital-food-management-two.vercel.app/login',
    github: 'https://github.com/agrwldaya/HospitalFoodManagement',
  },
  {
    title: "Pawan Verma's Portfolio",
    description: 'A professional portfolio website for author Pawan Verma showcasing literary works, publications, and achievements. Features book listings, contact form, and responsive design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Email.js'],
    period: '2024',
    highlights: [
      'Modern, responsive design with smooth animations',
      'Integrated contact form functionality',
      'SEO optimized for better search visibility'
    ],
    link: 'https://pawan-verma-jmnw.vercel.app/',
    github: 'https://github.com/agrwldaya/PawanVerma',
  },
  {
    title: 'Social Media Handle',
    description: 'A full-featured social media platform with user authentication, posts, comments, likes, and real-time updates. Includes user profiles, friend connections, and activity feeds.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Cloudinary', 'JWT'],
    period: '2024',
    highlights: [
      'Real-time notifications using WebSocket technology',
      'Image upload and processing with Cloudinary integration',
      'Secure authentication and authorization system'
    ],
    link: 'https://socailmedia-handle.vercel.app/',
    github: 'https://github.com/agrwldaya/SocailmediaHandle',
  },
  {
    title: 'Quiz App',
    description: 'An interactive quiz application with multiple question types, timer functionality, and score tracking. Features quiz creation, categories, and detailed result analytics.',
    tech: ['React.js', 'TypeScript', 'Redux', 'Node.js', 'MongoDB', 'Express.js'],
    period: '2024',
    highlights: [
      'Multiple quiz categories and difficulty levels',
      'Real-time score calculation and leaderboard',
      'Timer-based questions with auto-submission'
    ],
    link: '#',
    github: 'https://github.com/agrwldaya/QuizApp',
  },
  {
    title: 'Twitter Scraping Tool',
    description: 'A powerful web scraping tool for extracting Twitter data including tweets, user profiles, and trends. Features data export, filtering, and analytics dashboard.',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Flask', 'Pandas', 'MongoDB'],
    period: '2024',
    highlights: [
      'Automated data extraction with rate limiting',
      'Data export in multiple formats (CSV, JSON)',
      'Analytics dashboard for trend visualization'
    ],
    link: '#',
    github: 'https://github.com/agrwldaya/Twitter_scraping',
  },
  {
    title: 'Food Delivery Website',
    description: 'A complete food delivery platform with restaurant listings, menu management, cart functionality, and order tracking. Features payment integration and delivery status updates.',
    tech: ['React.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT', 'Cloudinary'],
    period: '2024',
    highlights: [
      'Real-time order tracking and status updates',
      'Secure payment processing with Stripe integration',
      'Restaurant and menu management system'
    ],
    link: '#',
    github: 'https://github.com/agrwldaya/Food-Delivery-Website',
  },
  {
    title: 'Book Store Website',
    description: 'An e-commerce platform for books with advanced search, filtering, shopping cart, and wishlist functionality. Features book reviews, ratings, and recommendation system.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Stripe', 'JWT'],
    period: '2024',
    highlights: [
      'Advanced search and filtering capabilities',
      'Shopping cart and wishlist management',
      'Book recommendation algorithm based on user preferences'
    ],
    link: '#',
    github: 'https://github.com/agrwldaya/BookStore',
  },
  {
    title: 'NewsHub',
    description: 'A news aggregation platform that collects and displays news from multiple sources. Features category filtering, search functionality, and personalized news feeds.',
    tech: ['React.js', 'JavaScript', 'News API', 'Tailwind CSS', 'Framer Motion'],
    period: '2024',
    highlights: [
      'Real-time news aggregation from multiple sources',
      'Category-based filtering and search functionality',
      'Responsive design with dark mode support'
    ],
    link: '#',
    github: 'https://github.com/agrwldaya/Newshub-News-Website',
  },
]

interface Project {
  title: string
  description: string
  tech: string[]
  period: string
  highlights: string[]
  link: string
  github: string
  videoUrl?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
            <motion.div
              key={project.title}
      initial={{ opacity: 0.3, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full flex flex-col"
    >
      <div className="glass rounded-2xl sm:rounded-3xl overflow-hidden border-terminal-green/20 hover:border-terminal-green/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] relative h-full flex flex-col">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-terminal-green/0 via-terminal-green/5 to-terminal-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {project.videoUrl ? (
                  <div className="relative w-full bg-black border-b border-terminal-green/20 group/video">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden">
                      <iframe
                        src={project.videoUrl}
                        className="absolute top-0 left-0 w-full h-full border-0 group-hover/video:scale-[1.02] transition-transform duration-500"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={`${project.title} - Video Demo`}
                      />
                    </div>
                    <motion.div 
                      className="absolute top-3 right-3 px-3 py-1.5 bg-terminal-green/20 backdrop-blur-md border border-terminal-green/40 rounded-lg text-xs text-terminal-green font-mono flex items-center gap-1.5 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Play className="w-3 h-3" />
                      {'>'} Video Demo
                    </motion.div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ) : (
                  <div className="h-48 sm:h-56 bg-gradient-to-br from-terminal-green/20 via-terminal-cyan/20 to-terminal-green/20 relative overflow-hidden border-b border-terminal-green/20">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-terminal-green/10 to-terminal-cyan/10 group-hover:from-terminal-green/20 group-hover:to-terminal-cyan/20 transition-all duration-500"
                      animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="text-4xl sm:text-5xl md:text-6xl font-mono text-terminal-green/30 group-hover:text-terminal-green/50 transition-colors duration-500"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {'<'} {project.title.charAt(0)} {'/>'}
                      </motion.div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}
                
        <div className="p-5 sm:p-6 relative flex-1 flex flex-col">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-terminal-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-terminal-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                    <div className="flex-1">
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl font-mono text-terminal-green mb-1.5 sm:mb-2 glow-text group-hover:glow-cyan transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                {'>'} {project.title}
              </motion.h3>
              <div className="flex items-center gap-2 text-terminal-green/60 font-mono text-xs">
                <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <motion.div
              className="flex items-center gap-1 px-2.5 py-1 glass rounded-lg border border-terminal-green/20 flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                    >
              <Code2 className="w-3.5 h-3.5 text-terminal-green" />
                      <span className="text-terminal-green/80 font-mono text-xs">#{index + 1}</span>
                    </motion.div>
                  </div>
                  
          <motion.p 
            className="text-terminal-green/70 mb-4 sm:mb-5 font-mono text-xs sm:text-sm leading-relaxed border-l-2 border-terminal-green/30 pl-3 overflow-hidden"
            style={{ 
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              maxHeight: '4.5rem'
            }}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, borderColor: 'rgba(0, 255, 65, 0.5)' }}
            transition={{ duration: 0.3 }}
          >
            {'#'} {project.description}
          </motion.p>
                  
          <div className="mb-4 sm:mb-5 flex-1">
            <h4 className="text-terminal-cyan font-mono text-xs sm:text-sm mb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
                      {'>'} Key Highlights:
                    </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                  className="text-terminal-green/70 font-mono text-xs flex items-start gap-2 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 5, color: 'rgba(0, 255, 65, 0.9)' }}
                        >
                  <span className="text-terminal-green mt-0.5 group-hover/item:scale-125 transition-transform text-xs">▶</span>
                  <span className="flex-1 overflow-hidden" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
          <div className="mb-4 sm:mb-5">
            <h4 className="text-terminal-cyan/80 font-mono text-xs mb-2">
                      {'>'} Tech Stack:
                    </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                  className="px-2 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded-lg text-xs text-terminal-green/80 font-mono hover:bg-terminal-green/20 hover:border-terminal-green/50 hover:text-terminal-green transition-all duration-300 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ delay: techIdx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {'>'} {tech}
                        </motion.span>
                      ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-1 text-xs text-terminal-green/60 font-mono">
                  +{project.tech.length - 4}
                </span>
              )}
                    </div>
                  </div>
                  
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 border-t border-terminal-green/20 mt-auto">
                    {project.link !== '#' && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                className="hacker-button flex items-center justify-center gap-2 text-xs sm:text-sm py-2 px-3 sm:px-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        {'>'} Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-terminal-green/70 hover:text-terminal-green border border-terminal-green/30 hover:border-terminal-green/50 rounded-lg px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm transition-all duration-300 hover:bg-terminal-green/10"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      {'>'} View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
  )
}

export default function Projects() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 glass rounded-full border border-terminal-green/30"
          >
            <Sparkles className="w-4 h-4 text-terminal-green" />
            <span className="text-terminal-green/80 font-mono text-xs sm:text-sm">Portfolio Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono gradient-text mb-4 sm:mb-6"
          >
            {'>'} Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-terminal-green/80 font-mono max-w-3xl mx-auto px-4"
          >
            {'{'} Real-world projects showcasing my development expertise {'}'}
          </motion.p>
        </motion.div>

        {/* Main Projects Section */}
        <div className="mb-16 sm:mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-mono text-terminal-cyan mb-8 sm:mb-12 glow-cyan"
          >
            {'>'} Main Projects
          </motion.h3>
          <div className="grid md:grid-cols-1 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {mainProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Projects Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-mono text-terminal-cyan mb-8 sm:mb-12 glow-cyan"
          >
            {'>'} Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
