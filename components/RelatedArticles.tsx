'use client'

import { blogRoutes } from '@/lib/navigation-data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, ArrowRight, Calendar, User } from 'lucide-react'

export default function RelatedArticles({ title = "Latest from Our Knowledge Hub", limit = 3 }) {
  const articles = blogRoutes.slice(0, limit)

  return (
    <section className="py-24 px-4 bg-secondary-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-primary-light/60 text-lg">
              Expert tips, guides, and technical insights from the JSPCS team to help you make informed decisions.
            </p>
          </div>
          <Link 
            href="/blog/ssd-vs-hdd-performance-comparison" 
            className="flex items-center gap-2 text-primary-cyan font-bold hover:gap-3 transition-all underline underline-offset-8"
          >
            View All Guides <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={article.href} className="block">
                <div className="glass-strong border border-white/10 rounded-3xl p-8 h-full hover:border-primary-cyan/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-500 relative overflow-hidden">
                  {/* Decorative Background Icon */}
                  <BookOpen className="absolute -right-8 -bottom-8 w-32 h-32 text-white/5 opacity-10 group-hover:opacity-20 transition-opacity" />
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary-blue/20 border border-primary-blue/30">
                      <BookOpen className="w-6 h-6 text-primary-cyan" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-primary-cyan uppercase tracking-widest">Article</span>
                      <span className="text-xs text-white/40">5 min read</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-cyan transition-colors leading-tight">
                    {article.label}
                  </h3>
                  
                  <p className="text-primary-light/60 text-sm mb-8 line-clamp-2">
                    {article.description || "Learn expert tips and technical advice for your laptop and PC maintenance."}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      May 2024
                    </div>
                    <div className="flex items-center gap-1 text-primary-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Full Guide <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  )
}
