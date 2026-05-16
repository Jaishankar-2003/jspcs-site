'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Linkedin, Facebook, Instagram, UserRoundSearch } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from './Logo'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">

        {/* Mobile Video Background (YouTube Short: rV7JJeoOFTo) */}
        {/* We make it very large to hide YouTube UI and black bars, centering it perfectly */}
        <div className="absolute inset-0 w-full h-full sm:hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[300vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-30"
            src="https://www.youtube.com/embed/rV7JJeoOFTo?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=rV7JJeoOFTo&modestbranding=1&playsinline=1"
            title="Mobile Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Desktop Video Background (Standard YouTube: soUn1sJFMp4) */}
        <div className="absolute inset-0 w-full h-full hidden sm:block">
          <iframe
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-[1920px] min-h-[1080px] -translate-x-1/2 -translate-y-1/2 opacity-15"
            src="https://www.youtube.com/embed/soUn1sJFMp4?start=25&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=soUn1sJFMp4&modestbranding=1&playsinline=1"
            title="Desktop Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Dynamic Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/30 to-primary-dark/95" />
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(49, 195, 242, 0.4) 0%, transparent 70%)',
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(13, 110, 253, 0.4) 0%, transparent 70%)',
            right: `${mousePosition.x / 25}px`,
            bottom: `${mousePosition.y / 25}px`,
            transition: 'all 0.4s ease-out',
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,195,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(49,195,242,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-0 pb-22 flex flex-col items-center justify-center">

        {/* Top Section: Text (Left) & Image (Right) */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12 mb-10">

          {/* Top Text Content */}
          <motion.div
            className="text-center lg:text-left z-10 flex-1 max-w-[520px] mx-auto lg:mx-0 lg:ml-16 flex flex-col items-center lg:items-start justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Premium Badge */}
            <motion.div
              className="mb-5 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-primary-cyan/20 shadow-[0_0_15px_rgba(49,195,242,0.15)]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(49,195,242,0.3)" }}
            >
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-primary-cyan uppercase">
                Trusted PC Service in Tamil Nadu
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-[0.95] tracking-tight w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue drop-shadow-[0_0_20px_rgba(49,195,242,0.4)]">
                JAI SHANKAR
              </span>
              <br />
              <span className="text-white">PC SERVICES</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold leading-loose tracking-wider mt-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-default inline-block">Expert PC Repair</span>
              <span className="text-primary-cyan mx-4 text-lg">•</span>
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-default inline-block">Chip-Level Service</span>
              <br className="hidden sm:block" />
              <div className="sm:hidden h-3"></div>
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-default inline-block">Custom Gaming Builds</span>
              <span className="text-primary-cyan mx-4 text-lg hidden sm:inline-block">•</span>
              <span className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all duration-300 cursor-default inline-block mt-2 sm:mt-0">Laptop Solutions</span>
            </motion.p>
          </motion.div>

          {/* Huge Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
            className="flex-1 w-full flex justify-center lg:justify-end items-center z-0 relative"
          >
            <motion.div
              animate={{ y: [10, 16, 10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[580px] xl:h-[580px] translate-y-10 lg:translate-y-12"
            >
              <Image
                src="/perfect.png"
                alt="PC Build"
                fill
                priority
                className="object-contain drop-shadow-[0_0_40px_rgba(49,195,242,0.4)]"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Action Buttons & Social Links Group - Glassmorphism Container */}
        <motion.div
          className="z-20 w-full flex justify-center -mt-10 lg:-mt-15"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 lg:gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-3 sm:p-4 shadow-[0_0_40px_rgba(49,195,242,0.15)] max-w-[95vw]">

            {/* Action Buttons */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScv7FSVPdyseb7rq10Ev7MkHIKXxh_huwIAQxzo2Sx2VpgV3Q/viewform?usp=sharing&ouid=113853534703158315370"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3.5 md:px-8 bg-primary-blue text-white rounded-full font-semibold text-sm md:text-base lg:text-lg overflow-hidden flex-shrink-0 shadow-lg shadow-primary-blue/20 hover:scale-105 transition-all duration-300 flex items-center justify-center h-[54px] md:h-[60px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 whitespace-nowrap">
                <UserRoundSearch className="w-5 h-5" />
                Enquiry now
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/1gXJQW4t8s44Fh4vu-f2E0BJC5pXAKM9P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3.5 md:px-8 bg-primary-blue text-white rounded-full font-semibold text-sm md:text-base lg:text-lg overflow-hidden flex-shrink-0 shadow-lg shadow-primary-blue/20 hover:scale-105 transition-all duration-300 flex items-center justify-center h-[54px] md:h-[60px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 whitespace-nowrap">
                <UserRoundSearch className="w-5 h-5" />
                AMC Service Broucher
              </span>
            </a>

            <a
              href="https://wa.me/919842139997"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3.5 md:px-8 bg-[#5be38a] text-white rounded-full font-semibold text-sm md:text-base lg:text-lg overflow-hidden flex-shrink-0 shadow-lg shadow-[#5be38a]/20 hover:scale-105 transition-all duration-300 flex items-center justify-center h-[54px] md:h-[60px]"
            >
              <span className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="relative flex items-center gap-2 whitespace-nowrap">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </span>
            </a>

            {/* Divider (Desktop Only) */}
            <div className="hidden lg:block w-px h-[40px] bg-white/20 mx-2"></div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <a
                href="https://www.linkedin.com/company/jai-shankar-pc-services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#0077B5]/50 transition-all duration-300 hover:-translate-y-1 hover:scale-110 flex-shrink-0"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.facebook.com/shankar.jai.961"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-full bg-gradient-to-br from-[#1877F2] to-[#0A5BC4] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#1877F2]/50 transition-all duration-300 hover:-translate-y-1 hover:scale-110 flex-shrink-0"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-[1.2rem] bg-gradient-to-br from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4] flex items-center justify-center text-white shadow-sm hover:shadow-[0_0_15px_#DD2A7B] transition-all duration-300 hover:-translate-y-1 hover:scale-110 flex-shrink-0"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary-cyan/50 rounded-full flex justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-3 bg-primary-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
