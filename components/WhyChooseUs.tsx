'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { DollarSign, Clock, Package, Truck, Award } from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: 'Affordable & Transparent Pricing',
    description: 'No hidden costs. Clear, upfront pricing for all services.',
    gradient: 'from-accent-green to-primary-cyan',
  },
  {
    icon: Package,
    title: 'Genuine Parts Only',
    description: 'We use only authentic, high-quality components for repairs.',
    gradient: 'from-primary-blue to-primary-cyan',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick diagnosis and efficient service without compromising quality.',
    gradient: 'from-primary-cyan to-secondary-sky',
  },
  {
    icon: Truck,
    title: 'Pickup & Drop Service',
    description: 'Convenient doorstep pickup and delivery for your convenience.',
    gradient: 'from-secondary-sky to-primary-cyan',
  },
  {
    icon: Award,
    title: 'Certified Chip-Level Experts',
    description: '5+ years of experience in advanced motherboard and component repair.',
    gradient: 'from-primary-blue to-accent-green',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Circuit Board Background"
          fill
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-primary-dark" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-lg text-primary-light/70 max-w-2xl mx-auto">
            Experience the difference of professional, reliable PC service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-8 h-full neon-border transition-all duration-300 hover:border-primary-cyan/80 hover:shadow-[0_0_40px_rgba(49,195,242,0.4)]">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-primary-light/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

