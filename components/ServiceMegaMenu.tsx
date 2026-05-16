'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Laptop, Cpu, Gamepad2, Wrench } from 'lucide-react'
import { 
  brandRepairRoutes, 
  technicalServiceRoutes, 
  pcBuildRoutes 
} from '@/lib/navigation-data'

export default function ServiceMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={`flex items-center gap-1 font-medium transition-colors ${
          isOpen ? 'text-primary-cyan' : 'text-white/90 hover:text-primary-cyan'
        }`}
      >
        Services
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full -left-20 pt-4"
          >
            <div className="glass-strong border border-white/10 rounded-2xl shadow-2xl p-8 w-[600px] grid grid-cols-2 gap-8">
              {/* Brands */}
              <div>
                <h4 className="text-xs font-bold text-primary-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Laptop className="w-4 h-4" />
                  Brand Repairs
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {brandRepairRoutes.map(route => (
                    <Link 
                      key={route.href} 
                      href={route.href}
                      className="text-sm text-primary-light/70 hover:text-white transition-colors py-1"
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Technical & PC Build */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-primary-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Technical Fixes
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {technicalServiceRoutes.slice(0, 5).map(route => (
                      <Link 
                        key={route.href} 
                        href={route.href}
                        className="text-sm text-primary-light/70 hover:text-white transition-colors py-1"
                      >
                        {route.label}
                      </Link>
                    ))}
                    <Link href="/chip-level-service-in-madurai" className="text-xs font-bold text-primary-cyan mt-2 block hover:underline">
                      View All Services →
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-primary-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4" />
                    PC Builds
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {pcBuildRoutes.map(route => (
                      <Link 
                        key={route.href} 
                        href={route.href}
                        className="text-sm text-primary-light/70 hover:text-white transition-colors py-1"
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
