'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Terminal, Code2, FileText, Download, Eye } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Mask */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center translate-y-20 md:translate-y-0">
          <Image
            src="/portofolio_logo.png"
            alt="Background"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          {/* Gradient Mask to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Terminal className="w-12 h-12 text-terminal-green animate-pulse-neon" />
          </motion.div>
          <motion.p
            className="text-terminal-green/80 font-mono text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {'>'} Initializing system...
          </motion.p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text glow-text font-mono">
            Dayashankar Agrawal
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-mono text-terminal-cyan mb-4 glow-cyan">
            {'>'} Full Stack Developer
          </h2>
          <motion.p
            className="text-lg md:text-xl text-terminal-green/70 max-w-2xl mx-auto font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {'//'} Crafting digital experiences with code and precision
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6"
        >
          <Link href="/projects">
            <motion.button
              className="hacker-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {'>'} View Projects
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              className="hacker-button border-terminal-cyan text-terminal-cyan"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.4)',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {'>'} Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Resume Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1H8K6rAwDKJ2f99YwitRQ9iDICjR2CN0g/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass rounded-lg border border-terminal-green/30 hover:border-terminal-green/50 text-terminal-green font-mono text-sm sm:text-base transition-all duration-300 hover:bg-terminal-green/10 group"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            {'>'} View Resume
          </motion.a>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1H8K6rAwDKJ2f99YwitRQ9iDICjR2CN0g"
            className="flex items-center gap-2 px-6 py-3 glass rounded-lg border border-terminal-cyan/30 hover:border-terminal-cyan/50 text-terminal-cyan font-mono text-sm sm:text-base transition-all duration-300 hover:bg-terminal-cyan/10 group"
            whileHover={{
              scale: 1.05,
              x: 5,
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            {'>'} Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <motion.div
            className="flex flex-col items-center text-terminal-green/60 font-mono text-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="mb-2">{'//'} Scroll to explore</span>
            <Code2 size={24} className="animate-pulse-neon" />
          </motion.div>
        </motion.div>
      </div>

      {/* Terminal prompt effect */}
      <div className="absolute bottom-10 left-6 font-mono text-terminal-green/30 text-xs">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {'>'} $ whoami
          <br />
          {'>'} Dayashankar Agrawal
        </motion.div>
      </div>
    </section>
  )
}
