'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Intel', logo: 'https://logos-world.net/wp-content/uploads/2025/01/Intel-Core-Logo.png' },
  { name: 'AMD', logo: '/partner/ryzen.svg' },
  { name: 'NVIDIA', logo: '/partner/nvidia.png' },
  { name: 'ASUS', logo: '/partner/asus.png' },
  { name: 'MSI', logo: '/partner/msi.jpeg' },
  { name: 'Gigabyte', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Gigabyte-Logo-700x394.png' },
  { name: 'Corsair', logo: '/partner/corsair.jpeg' },
  { name: 'Samsung', logo: '/partner/samsung.png' },
  { name: 'Western Digital', logo: '/partner/wd.png' },
  { name: 'Seagate', logo: 'https://logos-world.net/wp-content/uploads/2023/01/Seagate-Logo-500x281.png' },
]

export default function TrustedPartners() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    setIsPaused(true)
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const onMouseUpOrLeave = () => {
    isDragging.current = false
    setIsPaused(false)
  }

  // Infinite scroll
  useEffect(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    let scrollAmount = 0
    const scrollSpeed = 0.5
    let frameId: number

    const scroll = () => {
      if (!isPaused && container) {
        scrollAmount += scrollSpeed
        container.scrollLeft = scrollAmount
        if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0
      }
      frameId = requestAnimationFrame(scroll)
    }

    frameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(frameId)
  }, [isPaused])

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-900 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Trusted <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            We work with leading brands to build premium PCs with the best components.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto py-6 scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex-shrink-0 w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center shadow-md transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
