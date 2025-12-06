'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-secondary-dark/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <Logo size="md" showText={true} />
            </div>
            <p className="text-primary-light/70 leading-relaxed">
              Expert PC & Laptop Repair | Chip-Level | Custom Builds
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-light/70 hover:text-primary-cyan transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-light/70 hover:text-primary-cyan transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-primary-light/70 hover:text-primary-cyan transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-light/70 hover:text-primary-cyan transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-cyan" />
                <a
                  href="tel:9842139997"
                  className="text-primary-light/70 hover:text-primary-cyan transition-colors"
                >
                  9842139997
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-cyan" />
                <a
                  href="mailto:jaishankarpcservices2021@gmail.com"
                  className="text-primary-light/70 hover:text-primary-cyan transition-colors break-all"
                >
                  jaishankarpcservices2021@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary-cyan" />
                <a
                  href="https://wa.me/919842139997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light/70 hover:text-primary-cyan transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-primary-light/50">
            © {currentYear} Jai Shankar PC Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

