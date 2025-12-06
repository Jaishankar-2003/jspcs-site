'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Package, Truck } from 'lucide-react'

export default function About() {
  const features = [
    { icon: Clock, text: '5+ years chip-level experience' },
    { icon: CheckCircle2, text: 'Fast diagnosis' },
    { icon: Package, text: 'Genuine parts' },
    { icon: Truck, text: 'Doorstep pickup & delivery' },
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-strong neon-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-primary-cyan/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-blue to-primary-cyan flex items-center justify-center neon-glow">
                    <Package className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Expert Service</h3>
                  <p className="text-primary-light/70">Professional & Reliable</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">About</span> Us
            </h2>
            <p className="text-lg text-primary-light/80 mb-8 leading-relaxed">
              At <span className="text-primary-cyan font-semibold">Jai Shankar PC Services</span>, we bring{' '}
              <span className="text-accent-green font-semibold">5+ years of chip-level expertise</span> to ensure your devices get the highest-quality care. 
              From simple fixes to advanced motherboard repairs, we deliver fast, affordable, and reliable technical service with genuine spare parts and doorstep pickup & delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 glass rounded-lg p-4 neon-border"
                >
                  <feature.icon className="w-6 h-6 text-primary-cyan flex-shrink-0" />
                  <span className="text-primary-light">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

