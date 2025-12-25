'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Cpu, Zap, MemoryStick, HardDrive, Battery, Box } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const pcBuilds = [
  {
    //https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80
    image: '/pc build/build1.jpeg?w=1000&q=80',
    title: 'Ultra Gaming Beast',
    description: 'High-end gaming rig built for 4K gaming and streaming. Features RGB lighting and premium cooling solutions.',
    specs: [
      { icon: Cpu, label: 'CPU', value: 'Intel Core i9-13900K (5.8GHz)' },
      { icon: Zap, label: 'GPU', value: 'NVIDIA RTX 4090 (24GB VRAM)' },
      { icon: MemoryStick, label: 'RAM', value: '32GB DDR5 6000MHz' },
      { icon: HardDrive, label: 'Storage', value: '2TB NVMe Gen 4.0 SSD' },
      { icon: Battery, label: 'PSU', value: '1000W 80+ Gold Modular' },
      { icon: Box, label: 'Cabinet', value: 'RGB Mid-Tower with Tempered Glass' },
    ],
    gradient: 'from-primary-blue to-primary-cyan',
  },
  {
    //https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80
    image: '/pc build/build2.jpeg',
    title: 'Professional Workstation',
    description: 'Powerful workstation optimized for content creation, video editing, and 3D rendering. Built for professionals.',
    specs: [
      { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 9 7950X (16-Core)' },
      { icon: Zap, label: 'GPU', value: 'NVIDIA RTX 4070 Ti (12GB VRAM)' },
      { icon: MemoryStick, label: 'RAM', value: '64GB DDR5 5600MHz' },
      { icon: HardDrive, label: 'Storage', value: '1TB NVMe + 4TB HDD' },
      { icon: Battery, label: 'PSU', value: '850W 80+ Platinum Modular' },
      { icon: Box, label: 'Cabinet', value: 'Silent Full-Tower Case' },
    ],
    gradient: 'from-primary-cyan to-secondary-sky',
  },
  {
    image: '/pc build/build3.jpeg',
    title: 'Budget Performance PC',
    description: 'Affordable build that delivers excellent performance for gaming and productivity without breaking the bank.',
    specs: [
      { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 5 5600X (6-Core)' },
      { icon: Zap, label: 'GPU', value: 'NVIDIA RTX 3060 (12GB VRAM)' },
      { icon: MemoryStick, label: 'RAM', value: '16GB DDR4 3200MHz' },
      { icon: HardDrive, label: 'Storage', value: '512GB NVMe SSD' },
      { icon: Battery, label: 'PSU', value: '650W 80+ Bronze Semi-Modular' },
      { icon: Box, label: 'Cabinet', value: 'Compact ATX Mid-Tower' },
    ],
    gradient: 'from-accent-green to-primary-cyan',
  },
  {
    image: '/pc build/build4.jpeg',
    title: 'Compact Mini-ITX Build',
    description: 'Small form factor PC with powerful components. Perfect for space-constrained setups without compromising performance.',
    specs: [
      { icon: Cpu, label: 'CPU', value: 'Intel Core i7-13700K (5.4GHz)' },
      { icon: Zap, label: 'GPU', value: 'NVIDIA RTX 4070 (12GB VRAM)' },
      { icon: MemoryStick, label: 'RAM', value: '32GB DDR5 5600MHz' },
      { icon: HardDrive, label: 'Storage', value: '1TB NVMe Gen 4.0 SSD' },
      { icon: Battery, label: 'PSU', value: '750W SFX 80+ Gold Modular' },
      { icon: Box, label: 'Cabinet', value: 'Mini-ITX SFF Case' },
    ],
    gradient: 'from-primary-blue to-accent-green',
  },
  {
    image: '/pc build/build5.jpeg',
    title: 'Silent Powerhouse',
    description: 'Whisper-quiet build focused on silence without sacrificing performance. Ideal for home offices and studios.',
    specs: [
      { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7 7700X (8-Core)' },
      { icon: Zap, label: 'GPU', value: 'NVIDIA RTX 4080 (16GB VRAM)' },
      { icon: MemoryStick, label: 'RAM', value: '32GB DDR5 5200MHz' },
      { icon: HardDrive, label: 'Storage', value: '2TB NVMe SSD' },
      { icon: Battery, label: 'PSU', value: '850W 80+ Gold Silent Fan' },
      { icon: Box, label: 'Cabinet', value: 'Silent Dampened Case' },
    ],
    gradient: 'from-secondary-sky to-primary-cyan',
  },
  {
    image: '/pc build/build6.jpeg',
    title: 'RGB Showcase Build',
    description: 'Stunning visual build with synchronized RGB lighting throughout. Performance meets aesthetics.',
    specs: [
      { icon: Cpu, label: 'CPU', value: 'Intel Core i9-12900K (5.2GHz)' },
      { icon: Zap, label: 'GPU', value: 'NVIDIA RTX 3080 Ti (12GB VRAM)' },
      { icon: MemoryStick, label: 'RAM', value: '64GB DDR4 4000MHz RGB' },
      { icon: HardDrive, label: 'Storage', value: '2TB NVMe + 2TB SSD' },
      { icon: Battery, label: 'PSU', value: '1000W 80+ Gold RGB Modular' },
      { icon: Box, label: 'Cabinet', value: 'RGB Tempered Glass Showcase' },
    ],
    gradient: 'from-primary-cyan to-primary-blue',
  },
]

export default function PCBuildsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)




  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const dragDistance = useRef(0)






  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    dragDistance.current = 0
    setIsPaused(true)
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }
  
  const onMouseLeave = () => {
    isDragging.current = false
    setIsPaused(false)
  }
  
  const onMouseUp = () => {
    isDragging.current = false
    setIsPaused(false)
  }
  
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    dragDistance.current += Math.abs(walk)
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }







  useEffect(() => {
    if (!scrollRef.current) return
  
    const container = scrollRef.current
    let rafId: number
  
    const autoScroll = () => {
      if (!isPaused) {
        container.scrollLeft += 1
  
        // Seamless loop
        if (
          container.scrollLeft >=
          container.scrollWidth / 2
        ) {
          container.scrollLeft = 0
        }
      }
      rafId = requestAnimationFrame(autoScroll)
    }
  
    rafId = requestAnimationFrame(autoScroll)
  
    return () => cancelAnimationFrame(rafId)
  }, [isPaused])

  // Duplicate builds for seamless infinite scroll
  const duplicatedBuilds = [...pcBuilds, ...pcBuilds]

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

        {/* Horizontal Scrolling Container */}
        {/* <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
        > */}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >




          {duplicatedBuilds.map((build, index) => (
            <motion.div
              key={`${build.title}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
             // whileHover={{ scale: 1.02, y: -5 }}
              className="flex-shrink-0 w-full lg:w-[calc(50%-12px)]"
            >
              

              {/* <div className="glass-strong rounded-2xl overflow-hidden h-full neon-border transition-all duration-300 hover:border-primary-cyan/80 hover:shadow-[0_0_50px_rgba(49,195,242,0.5)] group"> */}

              

              <div
                className="
                  glass-strong rounded-2xl overflow-hidden h-full 
                  neon-border transition-all duration-300
                  hover:border-primary-cyan/80
                  hover:shadow-[0_20px_60px_rgba(49,195,242,0.35)]
                  group
                  relative
                "
              >




                <div className="flex flex-col lg:flex-row h-full">
                  {/* PC Build Image - Left on desktop, Top on mobile */}



                  {/* <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px] overflow-hidden"> */}

                  <div
                  className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px] overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    // Prevent opening preview when dragging
                    if  (dragDistance.current > 10) return;
                    e.stopPropagation();
                    setPreviewImage(build.image);
                    setIsPaused(true);
                  }}
                >




                    <Image
                      src={build.image}
                      alt={build.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      quality={85}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${build.gradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`} />
                    
                    {/* Title Overlay on Mobile */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent lg:hidden">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary-cyan transition-colors">
                        {build.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content - Right on desktop, Below on mobile */}
                  <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                    {/* Title - Hidden on mobile (shown in overlay) */}
                    <div className="hidden lg:block mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-primary-cyan transition-colors">
                        {build.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-primary-light/70 mb-6 leading-relaxed text-sm lg:text-base">
                      {build.description}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-3 flex-1">
                      {build.specs.map((spec, specIndex) => (
                        <motion.div
                          key={specIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: specIndex * 0.05 }}
                          className="flex items-start gap-3 group/spec"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${build.gradient} flex items-center justify-center flex-shrink-0 group-hover/spec:scale-110 transition-transform duration-300`}>
                            <spec.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-primary-light/50 uppercase tracking-wider mb-1">
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
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${build.gradient} opacity-10 blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Scrollbar Hide */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {previewImage && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    onClick={() => {
      setPreviewImage(null)
      setIsPaused(false)
    }}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="relative max-w-6xl w-full max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        src={previewImage}
        alt="PC Preview"
        width={1600}
        height={900}
        className="w-full h-auto object-contain rounded-2xl shadow-2xl"
        quality={100}
        priority
      />

      {/* Close Button */}
      <button
        onClick={() => {
          setPreviewImage(null)
          setIsPaused(false)
        }}
        className="absolute top-4 right-4 bg-black/60 text-white rounded-full px-4 py-2 text-sm hover:bg-black/80 transition"
      >
        ✕ Close
      </button>
    </motion.div>
  </motion.div>
)}






    </section>
  )
}
