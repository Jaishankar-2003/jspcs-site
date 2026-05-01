'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Shield, Wrench, Zap, Cpu, Award } from 'lucide-react'

const latestUpdates = [
  {
    title: "Project Obsidian: 4K Gaming Beast",
    date: "May 2026",
    specs: ["Intel Core i9-14900K", "NVIDIA RTX 4090 24GB", "64GB DDR5-6400MHz", "2TB NVMe PCIe 5.0"],
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    performance: "144+ FPS on Cyberpunk 2077 (Path Tracing)",
    tag: "Extreme Gaming"
  },
  {
    title: "Creator Pro Workstation",
    date: "April 2026",
    specs: ["AMD Ryzen Threadripper", "Dual RTX 4080 Super", "128GB ECC RAM", "8TB Total Gen4 Storage"],
    image: "https://images.unsplash.com/photo-1692049065982-fc40fa2d4403?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    performance: "Flawless 8K Video Editing & Rendering",
    tag: "Productivity"
  },
  {
    title: "Stealth Mini-ITX Build",
    date: "April 2026",
    specs: ["AMD Ryzen 7 7800X3D", "NVIDIA RTX 4070 Ti Super", "32GB DDR5-6000MHz", "Liquid Cooled SFX"],
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    performance: "Whisper quiet, fits on any desk.",
    tag: "Compact Power"
  }
]

const trustMetrics = [
  { icon: Award, value: "1,500+", label: "Custom PCs Built" },
  { icon: Shield, value: "3 Years", label: "Standard Warranty" },
  { icon: Wrench, value: "Lifetime", label: "Free Tech Support" },
  { icon: Star, value: "4.9/5", label: "Customer Rating" },
]

export default function LatestPCUpdates() {
  return (
    <section className="relative py-24 bg-primary-dark border-t border-primary-cyan/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trust & Confidence Metrics */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {trustMetrics.map((metric, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-[#0a0f1c] rounded-2xl border border-primary-cyan/20 shadow-[0_0_20px_rgba(49,195,242,0.1)] hover:border-primary-cyan/50 hover:shadow-[0_0_30px_rgba(49,195,242,0.2)] transition-all duration-300">
                <metric.icon className="w-12 h-12 text-primary-cyan mb-4 drop-shadow-[0_0_10px_rgba(49,195,242,0.5)]" />
                <span className="text-4xl font-extrabold text-white mb-2 tracking-tight">{metric.value}</span>
                <span className="text-sm font-medium text-primary-cyan uppercase tracking-wider text-center">{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Latest Updates Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">Masterpieces</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Check out our most recent high-performance builds. Real specs, real power.
          </p>
        </motion.div>

        {/* PC Updates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {latestUpdates.map((pc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-[#0f172a] border border-primary-cyan/20 hover:border-primary-cyan hover:shadow-[0_0_30px_rgba(49,195,242,0.2)] transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <Image
                  src={pc.image}
                  alt={pc.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary-cyan/30 z-10">
                  <span className="text-xs font-bold text-primary-cyan uppercase tracking-wider">{pc.tag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/50 to-transparent opacity-100" />
              </div>

              {/* Content */}
              <div className="p-8 relative -mt-12 flex-grow flex flex-col z-10">
                <span className="text-xs font-medium text-primary-blue mb-3 block">{pc.date}</span>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary-cyan transition-colors">{pc.title}</h3>

                <div className="space-y-4 mb-8 flex-grow">
                  {pc.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-1.5 rounded-md bg-primary-cyan/10 border border-primary-cyan/20 shrink-0 mt-0.5">
                        <Cpu className="w-3.5 h-3.5 text-primary-cyan" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-primary-cyan/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-yellow-500/10 shrink-0">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-sm font-semibold text-gray-200">{pc.performance}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
