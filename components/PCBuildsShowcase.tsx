'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cpu, MemoryStick, HardDrive, Monitor, Zap } from 'lucide-react'

const pcBuilds = [
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Ultra Gaming Beast',
    description: 'High-end gaming rig built for 4K gaming and streaming. Features RGB lighting and premium cooling solutions.',
    specs: [
      { icon: Cpu, label: 'Intel Core i9-13900K', value: '5.8GHz' },
      { icon: MemoryStick, label: '32GB DDR5 RAM', value: '6000MHz' },
      { icon: Zap, label: 'RTX 4090', value: '24GB VRAM' },
      { icon: HardDrive, label: '2TB NVMe SSD', value: 'Gen 4.0' },
      { icon: Monitor, label: '4K 144Hz Ready', value: 'HDR Support' },
    ],
    gradient: 'from-primary-blue to-primary-cyan',
  },
  {
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Professional Workstation',
    description: 'Powerful workstation optimized for content creation, video editing, and 3D rendering. Built for professionals.',
    specs: [
      { icon: Cpu, label: 'AMD Ryzen 9 7950X', value: '16-Core' },
      { icon: MemoryStick, label: '64GB DDR5 RAM', value: '5600MHz' },
      { icon: Zap, label: 'RTX 4070 Ti', value: '12GB VRAM' },
      { icon: HardDrive, label: '1TB NVMe + 4TB HDD', value: 'Dual Storage' },
      { icon: Monitor, label: 'Multi-Monitor Setup', value: 'Color Accurate' },
    ],
    gradient: 'from-primary-cyan to-secondary-sky',
  },
  {
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Budget Performance PC',
    description: 'Affordable build that delivers excellent performance for gaming and productivity without breaking the bank.',
    specs: [
      { icon: Cpu, label: 'AMD Ryzen 5 5600X', value: '6-Core' },
      { icon: MemoryStick, label: '16GB DDR4 RAM', value: '3200MHz' },
      { icon: Zap, label: 'RTX 3060', value: '12GB VRAM' },
      { icon: HardDrive, label: '512GB SSD', value: 'Fast Boot' },
      { icon: Monitor, label: '1080p Gaming', value: '144Hz Ready' },
    ],
    gradient: 'from-accent-green to-primary-cyan',
  },
  {
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Compact Mini-ITX Build',
    description: 'Small form factor PC with powerful components. Perfect for space-constrained setups without compromising performance.',
    specs: [
      { icon: Cpu, label: 'Intel Core i7-13700K', value: '5.4GHz' },
      { icon: MemoryStick, label: '32GB DDR5 RAM', value: '5600MHz' },
      { icon: Zap, label: 'RTX 4070', value: '12GB VRAM' },
      { icon: HardDrive, label: '1TB NVMe SSD', value: 'Gen 4.0' },
      { icon: Monitor, label: '1440p Optimized', value: 'SFF Design' },
    ],
    gradient: 'from-primary-blue to-accent-green',
  },
  {
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'Silent Powerhouse',
    description: 'Whisper-quiet build focused on silence without sacrificing performance. Ideal for home offices and studios.',
    specs: [
      { icon: Cpu, label: 'AMD Ryzen 7 7700X', value: '8-Core' },
      { icon: MemoryStick, label: '32GB DDR5 RAM', value: '5200MHz' },
      { icon: Zap, label: 'RTX 4080', value: '16GB VRAM' },
      { icon: HardDrive, label: '2TB NVMe SSD', value: 'Silent Coolers' },
      { icon: Monitor, label: '4K Capable', value: 'Quiet Operation' },
    ],
    gradient: 'from-secondary-sky to-primary-cyan',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    title: 'RGB Showcase Build',
    description: 'Stunning visual build with synchronized RGB lighting throughout. Performance meets aesthetics.',
    specs: [
      { icon: Cpu, label: 'Intel Core i9-12900K', value: '5.2GHz' },
      { icon: MemoryStick, label: '64GB DDR4 RAM', value: '4000MHz' },
      { icon: Zap, label: 'RTX 3080 Ti', value: '12GB VRAM' },
      { icon: HardDrive, label: '2TB NVMe + 2TB SSD', value: 'RGB Lighting' },
      { icon: Monitor, label: 'Ultrawide Ready', value: 'Full RGB Sync' },
    ],
    gradient: 'from-primary-cyan to-primary-blue',
  },
]

export default function PCBuildsShowcase() {
  return (
    <section id="pc-builds" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="PC Builds Background"
          fill
          className="object-cover"
          quality={70}
        />
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
            PC Builds <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-lg text-primary-light/70 max-w-2xl mx-auto">
            Premium custom builds tailored to your needs - from gaming rigs to professional workstations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pcBuilds.map((build, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative"
            >
              <div className="glass-strong rounded-2xl overflow-hidden h-full neon-border transition-all duration-300 hover:border-primary-cyan/80 hover:shadow-[0_0_50px_rgba(49,195,242,0.5)]">
                {/* Build Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={build.image}
                    alt={build.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={85}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${build.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-cyan transition-colors">
                      {build.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-primary-light/70 mb-6 leading-relaxed text-sm">
                    {build.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-3">
                    {build.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (specIndex * 0.05) }}
                        className="flex items-center gap-3 group/spec"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${build.gradient} flex items-center justify-center flex-shrink-0 group-hover/spec:scale-110 transition-transform duration-300`}>
                          <spec.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-primary-light/60 truncate">
                            {spec.label}
                          </div>
                          <div className="text-sm font-semibold text-primary-cyan">
                            {spec.value}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${build.gradient} opacity-10 blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

