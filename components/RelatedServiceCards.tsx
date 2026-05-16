'use client'

import { NavRoute, allNavRoutes } from '@/lib/navigation-data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedServiceCardsProps {
  slugs: string[]
  title?: string
}

export default function RelatedServiceCards({ slugs, title = "Recommended Next Steps" }: RelatedServiceCardsProps) {
  const filteredServices = allNavRoutes.filter(s => slugs.includes(s.href))

  if (filteredServices.length === 0) return null

  return (
    <div className="my-12">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <div className="w-1 h-6 bg-primary-cyan rounded-full" />
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredServices.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={service.href}
                className="group flex items-center gap-4 p-4 glass-strong border border-white/5 rounded-2xl hover:border-primary-cyan/30 hover:bg-white/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-cyan" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-white group-hover:text-primary-cyan transition-colors">
                    {service.label}
                  </h4>
                  <p className="text-xs text-primary-light/50 line-clamp-1">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary-light/30 group-hover:text-primary-cyan group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
