'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import LicensesCertifications from '@/components/LicensesCertifications'
import PCBuildsShowcase from '@/components/PCBuildsShowcase'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen gradient-bg"
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <LicensesCertifications />
      <PCBuildsShowcase />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </motion.main>
  )
}

