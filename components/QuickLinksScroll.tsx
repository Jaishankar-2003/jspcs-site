'use client'

import { allNavRoutes } from '@/lib/navigation-data'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function QuickLinksScroll() {
  return (
    <div className="hidden sticky top-20 z-40 bg-secondary-dark/80 backdrop-blur-md border-y border-white/5 py-3 px-4">
      <div className="flex overflow-x-auto gap-3 no-scrollbar scroll-smooth">
        {allNavRoutes.filter(r => r.category !== 'Blog').map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="flex-shrink-0 px-4 py-1.5 rounded-full glass-light border border-white/10 text-xs font-bold text-white/80 whitespace-nowrap hover:bg-primary-blue hover:text-white transition-all active:scale-95"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
