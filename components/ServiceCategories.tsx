'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  brandRepairRoutes,
  technicalServiceRoutes,
  pcBuildRoutes,
  NavRoute
} from '@/lib/navigation-data'
import { ChevronRight, ArrowRight } from 'lucide-react'

const categories = [
  { id: 'brands', label: 'Brand Repairs', data: brandRepairRoutes, color: 'from-blue-500 to-cyan-500' },
  { id: 'technical', label: 'Technical Services', data: technicalServiceRoutes, color: 'from-purple-500 to-pink-500' },
  { id: 'pc-builds', label: 'Custom PC Builds', data: pcBuildRoutes, color: 'from-orange-500 to-red-500' },
]

export default function ServiceCategories() {
  const [activeTab, setActiveTab] = useState('brands')

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-primary-light to-white/70 bg-clip-text text-transparent">
          Explore Our Expert Solutions
        </h2>
        <p className="text-primary-light/60 text-lg max-w-2xl mx-auto">
          From high-end gaming builds to precision chip-level repairs, we provide the best tech services in Madurai.
        </p>
      </div>

      {/* Category Tabs
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`
              relative px-8 py-3 rounded-full font-bold transition-all duration-300
              ${activeTab === cat.id 
                ? 'text-white shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                : 'text-white/50 hover:text-white/80 glass-light'}
            `}
          >
            {activeTab === cat.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary-blue rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {cat.label}
          </button>
        ))}
      </div> */}

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((cat) => {
          const isActive = activeTab === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`
            absolute -inset-[1px] rounded-2xl blur-lg opacity-0 transition-all duration-500
            bg-gradient-to-r ${cat.color}
            ${isActive ? 'opacity-60' : 'group-hover:opacity-40'}
          `}
              />

              {/* Main Button */}
              <div
                className={`
            relative overflow-hidden px-7 py-4 rounded-2xl border transition-all duration-300
            backdrop-blur-xl flex items-center gap-3
            ${isActive
                    ? 'border-primary-cyan/40 bg-white/10 shadow-[0_8px_30px_rgba(34,211,238,0.15)]'
                    : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                  }
          `}
              >
                {/* Animated Background */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className={`
                absolute inset-0 bg-gradient-to-r ${cat.color} opacity-15
              `}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {/* Dot */}
                <div
                  className={`
              relative z-10 w-2.5 h-2.5 rounded-full bg-gradient-to-r ${cat.color}
              ${isActive ? 'scale-125' : 'opacity-70'}
              transition-all duration-300
            `}
                />

                {/* Text */}
                <span
                  className={`
              relative z-10 font-semibold tracking-wide transition-all duration-300
              ${isActive
                      ? 'text-white'
                      : 'text-white/60 group-hover:text-white/90'
                    }
            `}
                >
                  {cat.label}
                </span>

                {/* Arrow */}
                <ChevronRight
                  className={`
              relative z-10 w-4 h-4 transition-all duration-300
              ${isActive
                      ? 'text-primary-cyan translate-x-0.5'
                      : 'text-white/40 group-hover:text-white/70 group-hover:translate-x-1'
                    }
            `}
                />
              </div>
            </button>
          )
        })}
      </div>

      {/* Service Grid */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.find(c => c.id === activeTab)?.data.map((service, index) => (
              <ServiceCard key={service.href} service={service} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: NavRoute, index: number }) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={service.href}
        className="group relative block h-full"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-primary-cyan/50 via-primary-blue/50 to-primary-cyan/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative h-full glass-strong border border-white/10 p-6 rounded-2xl hover:border-primary-cyan/30 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue/20 to-primary-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-primary-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-cyan transition-colors">
              {service.label}
            </h3>
            {service.description && (
              <p className="text-primary-light/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            )}
          </div>

          <div className="flex items-center text-primary-cyan font-bold text-sm">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
