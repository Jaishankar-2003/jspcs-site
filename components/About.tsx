'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Package, Truck } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const features = [
    { icon: Clock, text: '5+ years chip-level experience' },
    { icon: CheckCircle2, text: 'Fast diagnosis' },
    { icon: Package, text: 'Genuine parts' },
    { icon: Truck, text: 'Doorstep pickup & delivery' },
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Circuit Board Background"
          fill
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
         //className="grid md:grid-cols-2 gap-12 grid-cols-1"
        >
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-strong neon-border group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="PC Repair Workshop"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={90}
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-primary-cyan/40 to-transparent" />
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2 text-[#0A1E2D]">Expert Service</h3>
                  <p className="text-2xl font-bold mb-1 text-[#064B57]">Professional & Reliable</p>
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

