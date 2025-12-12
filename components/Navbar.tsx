'use client'

import { motion } from 'framer-motion'
import { Menu, X, Phone, Linkedin, Facebook, Instagram } from 'lucide-react'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#why-choose-us', label: 'Why Us' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo size="md" showText={true} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-primary-cyan font-semibold tracking-wide transition-colors"
                // text-primary-light hover:text-primary-cyan transition-colors font-medium
              >
                {link.label}
              </a>
            ))}
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 ml-2 border-l border-white/20 pl-4">
              <motion.a
                href="https://www.linkedin.com/company/jai-shankar-pc-services"
                target="_blank"
                rel="noopener noreferrer"

              /*
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#0077B5]/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"

              */

                className="
                 w-9 h-9 rounded-xl 
                bg-gradient-to-br from-[#0A66C2] to-[#004182]
                flex items-center justify-center 
                text-white 
                shadow-sm
                hover:shadow-[0_0_15px_#0A66C2] 
                transition-all duration-300
              "
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"



              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/jaishankarpcservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1877F2] to-[#0A5BC4] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#1877F2]/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/jaishankarpcservices"
                target="_blank"
                rel="noopener noreferrer"

              /*

                className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#E4405F]/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              */

                  className="
                  w-9 h-9 rounded-xl
                  bg-gradient-to-br from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4]
                  flex items-center justify-center
                  text-white
                  shadow-sm
                  hover:shadow-[0_0_15px_#DD2A7B]
                  transition-all duration-300
                "
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}

                aria-label="Instagram"

              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            </div>
            <motion.a
              href="tel:9842139997"
              className="px-6 py-2 bg-primary-blue text-white rounded-full font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-primary-light/80 hover:text-primary-cyan transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            {/* Social Media Links - Mobile */}
            <div className="flex items-center justify-center gap-3 py-4 border-t border-white/10">
              <motion.a
                href="https://www.linkedin.com/company/jai-shankar-pc-services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center text-white"
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/jaishankarpcservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1877F2] to-[#0A5BC4] flex items-center justify-center text-white"
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/jaishankarpcservices"
                target="_blank"
                rel="noopener noreferrer"

                className=" w-9 h-9 rounded-xl
                  bg-gradient-to-br from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4]
                  flex items-center justify-center
                  text-white
                  shadow-sm
                  hover:shadow-[0_0_15px_#DD2A7B]
                  transition-all duration-300 "


                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
            <motion.a
              href="tel:9842139997"
              className="block px-6 py-2 bg-primary-blue text-white rounded-full font-semibold text-center"
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

