'use client'

import { motion } from 'framer-motion'
import { 
  Laptop, 
  Cpu, 
  Monitor, 
  HardDrive, 
  Shield, 
  Database, 
  Wifi, 
  Zap 
} from 'lucide-react'

const services = [
  {
    icon: Laptop,
    title: 'Laptop Repair',
    description: 'Comprehensive laptop repair services for all brands and models. Screen replacement, keyboard fixes, battery issues, and more.',
    color: 'from-primary-blue to-primary-cyan',
  },
  {
    icon: Cpu,
    title: 'Chip-Level Service',
    description: 'Advanced motherboard repair, BGA rework, component-level diagnostics, and precision soldering for complex issues.',
    color: 'from-primary-cyan to-accent-green',
  },
  {
    icon: Monitor,
    title: 'Custom PC Builds',
    description: 'Tailored desktop computers built to your specifications. Gaming rigs, workstations, and budget-friendly options.',
    color: 'from-primary-blue to-secondary-sky',
  },
  {
    icon: HardDrive,
    title: 'OS Installation',
    description: 'Windows, Linux, and macOS installation. Driver setup, system optimization, and software configuration included.',
    color: 'from-accent-green to-primary-cyan',
  },
  {
    icon: Shield,
    title: 'Virus & Malware Removal',
    description: 'Complete system cleaning, malware removal, antivirus installation, and security hardening to protect your data.',
    color: 'from-accent-yellow to-primary-cyan',
  },
  {
    icon: Database,
    title: 'Data Recovery',
    description: 'Recover lost files from damaged drives, corrupted storage, and accidentally deleted data with professional tools.',
    color: 'from-primary-cyan to-primary-blue',
  },
  {
    icon: Wifi,
    title: 'Networking & WiFi Setup',
    description: 'Router configuration, network troubleshooting, WiFi optimization, and home/office network setup services.',
    color: 'from-secondary-sky to-primary-cyan',
  },
  {
    icon: Zap,
    title: 'PC Upgrades',
    description: 'RAM upgrades, SSD installation, graphics card upgrades, and performance enhancements for faster computing.',
    color: 'from-primary-blue to-accent-green',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-primary-light/70 max-w-2xl mx-auto">
            Comprehensive PC and laptop solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-strong rounded-2xl p-6 h-full neon-border transition-all duration-300 hover:border-primary-cyan/80 hover:shadow-[0_0_30px_rgba(49,195,242,0.3)]">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary-light/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

