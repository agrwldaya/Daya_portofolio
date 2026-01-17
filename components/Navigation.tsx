'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'DSA', href: '/competitive-programming' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <motion.div
            className="text-2xl font-bold gradient-text glow-text cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {'>'} Dayashankar.exe
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className={`relative group font-mono text-sm uppercase tracking-wider ${
                    isActive 
                      ? 'text-terminal-green glow-text' 
                      : 'text-terminal-green/60 hover:text-terminal-green'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {'>'} {item.name}
                  {isActive && (
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-terminal-green"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      style={{ width: '100%' }}
                    />
                  )}
                </motion.div>
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-terminal-green hover:text-terminal-cyan transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className={`font-mono text-sm uppercase tracking-wider py-2 ${
                        isActive 
                          ? 'text-terminal-green glow-text' 
                          : 'text-terminal-green/60 hover:text-terminal-green'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {'>'} {item.name}
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

