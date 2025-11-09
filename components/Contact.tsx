'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Send, Linkedin, Github, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/agrwldaya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dayashankar-agrawal-412a13256', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dayaagrawal20@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919875720554', label: 'Phone: +91-9875720554' },
  ]

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
            {'>'} Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-terminal-green/80 font-mono max-w-3xl mx-auto"
          >
            {'{'} Let&apos;s work together to create something amazing {'}'}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-8 border-terminal-green/30"
            >
              <h3 className="text-2xl font-mono text-terminal-green mb-6 glow-text">
                {'>'} Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-terminal-green/80 mb-2 font-mono text-sm uppercase tracking-wider">
                    {'>'} Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-terminal-green/5 border border-terminal-green/30 rounded-xl text-terminal-green placeholder-terminal-green/40 focus:outline-none focus:border-terminal-green focus:ring-2 focus:ring-terminal-green/20 transition-colors font-mono"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-terminal-green/80 mb-2 font-mono text-sm uppercase tracking-wider">
                    {'>'} Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-terminal-green/5 border border-terminal-green/30 rounded-xl text-terminal-green placeholder-terminal-green/40 focus:outline-none focus:border-terminal-green focus:ring-2 focus:ring-terminal-green/20 transition-colors font-mono"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-terminal-green/80 mb-2 font-mono text-sm uppercase tracking-wider">
                    {'>'} Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-terminal-green/5 border border-terminal-green/30 rounded-xl text-terminal-green placeholder-terminal-green/40 focus:outline-none focus:border-terminal-green focus:ring-2 focus:ring-terminal-green/20 transition-colors resize-none font-mono"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="hacker-button w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  {'>'} Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="glass rounded-3xl p-8 border-terminal-green/30">
                <h3 className="text-2xl font-mono text-terminal-green mb-6 glow-text">
                  {'>'} Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 glass rounded-xl border-terminal-green/20 hover:border-terminal-green/50 transition-all group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                      >
                        <motion.div
                          className="p-3 bg-terminal-green/10 border border-terminal-green/30 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-terminal-green" />
                        </motion.div>
                        <span className="text-terminal-green/80 group-hover:text-terminal-green transition-colors font-mono text-sm uppercase tracking-wider">
                          {'>'} {social.label}
                        </span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
