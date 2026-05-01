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
            className="absolute top-1/2 left-1/2 w-[300vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-100"
            src="https://www.youtube.com/embed/rV7JJeoOFTo?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=rV7JJeoOFTo&modestbranding=1&playsinline=1"
            title="Mobile Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Desktop Video Background (Standard YouTube: soUn1sJFMp4) */}
        <div className="absolute inset-0 w-full h-full hidden sm:block">
          <iframe
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-[1920px] min-h-[1080px] -translate-x-1/2 -translate-y-1/2 opacity-60"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">JAI SHANKAR </span>
            <br />
            <span className="text-white">PC SERVICES</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-primary-light/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Expert PC Repair • Chip-Level Service • Custom Builds • Laptop Solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLScv7FSVPdyseb7rq10Ev7MkHIKXxh_huwIAQxzo2Sx2VpgV3Q/viewform?usp=sharing&ouid=113853534703158315370"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-primary-blue text-white rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <UserRoundSearch className="w-5 h-5" />
                Enquiry now
              </span>
            </motion.a>


            <motion.a
              href="https://drive.google.com/file/d/1gXJQW4t8s44Fh4vu-f2E0BJC5pXAKM9P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-primary-blue text-white rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <UserRoundSearch className="w-5 h-5" />
                AMC Service Broucher
              </span>
            </motion.a>





            <motion.a
              href="https://wa.me/919842139997"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#5be38a] text-white rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="relative flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </span>
            </motion.a>
            {/* ----------------------------------------------------------------------------- */}
            <motion.a
              href="https://www.linkedin.com/company/jai-shankar-pc-services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#0077B5]/50 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/shankar.jai.961"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0A5BC4] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#1877F2]/50 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw=="
              target="_blank"
              rel="noopener noreferrer"
              className=" w-12 h-12 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] via-[#8134AF] to-[#515BD4] flex items-center justify-center text-white shadow-sm hover:shadow-[0_0_15px_#DD2A7B] transition-all duration-300 "
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>


            {/* ----------------------------------------------------------------------------- */}

          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* <span className="text-primary-light/60 text-sm mr-2">Follow us:</span> 
            <motion.a
              href="https://www.linkedin.com/company/jai-shankar-pc-services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0077B5] to-[#005885] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#0077B5]/50 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/shankar.jai.961"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0A5BC4] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#1877F2]/50 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jaishankar_pc_services?igsh=MXBudW81NWhna2lhcw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#E4405F]/50 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </motion.a> */}
          </motion.div>
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

