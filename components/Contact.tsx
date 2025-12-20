'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Facebook, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const whatsappMessage = `Hello! I'm ${formData.name}. ${formData.message} Contact: ${formData.phone}, ${formData.email}`
    window.open(
      `https://wa.me/919842139997?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    )
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-primary-light/70 max-w-2xl mx-auto">
            Need instant support? We're here to help 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-6 neon-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-cyan flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <a
                    href="tel:9842139997"
                    className="text-primary-cyan hover:text-primary-cyan/80 transition-colors text-lg"
                  >
                    +91 9842139997
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-6 neon-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-cyan to-accent-green flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:jaishankarpcservices2021@gmail.com"
                    className="text-primary-cyan hover:text-primary-cyan/80 transition-colors break-all"
                  >
                    jaishankarpcservices2021@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-6 neon-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-green to-primary-cyan flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/919842139997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-cyan hover:text-primary-cyan/80 transition-colors"
                  >
                    Available 24/7
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-strong rounded-2xl p-6 neon-border">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <p className="text-primary-light/70 text-sm mb-4">
                Stay connected for updates, tips, and exclusive offers
              </p>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://www.linkedin.com/company/jai-shankar-pc-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center gap-2 text-white font-medium hover:shadow-lg hover:shadow-[#0077B5]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/jaishankarpcservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-br from-[#1877F2] to-[#0A5BC4] flex items-center justify-center gap-2 text-white font-medium hover:shadow-lg hover:shadow-[#1877F2]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm">Facebook</span>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4] flex items-center justify-center gap-2 text-white font-medium hover:shadow-lg hover:shadow-[#E4405F]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </motion.a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="glass-strong rounded-2xl p-8 neon-border bg-gradient-to-br from-primary-blue/20 to-primary-cyan/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need instant support?
              </h3>
              <p className="text-primary-light/80 mb-6">
                📞 +91 9842139997
                <br />
                💬 WhatsApp Support Available 24/7
              </p>
              <motion.a
                href="tel:9842139997"
                className="inline-block px-6 py-3 bg-primary-blue text-white rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 neon-border space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-primary-light/50 focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/50 transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-primary-light/50 focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/50 transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-primary-light/50 focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/50 transition-all"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-primary-light/50 focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/50 transition-all resize-none"
                  placeholder="Tell us about your requirement..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-full font-semibold text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden neon-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7793033931525!2d78.10006687590037!3d9.952311773851735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c9900f9e875f%3A0xf93138e3c33df70f!2sJAI%20SHANKAR%20PC%20SERVICES!5e0!3m2!1sen!2sin!4v1765730817609!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

