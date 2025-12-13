'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Award, GraduationCap, Shield, FileText, FileCheck, Badge } from 'lucide-react'

const licenses = [
  {
    icon: Award,
    title: 'Chip-Level Repair Certification',
    issuedBy: 'International Electronics Association',
    issuedDate: 'March 2025',
    iconColor: 'from-primary-blue to-primary-cyan',
    image: '/certificates/chip.png', // local image in public/certificates
  },
  {
    icon: GraduationCap,
    title: 'Advanced Motherboard Repair',
    issuedBy: 'Tech Repair Institute',
    issuedDate: 'March 2022',
    iconColor: 'from-primary-cyan to-secondary-sky',
    image: '/certificates/motherboard-cert.png',
  },
  {
    icon: Shield,
    title: 'Data Recovery Specialist',
    issuedBy: 'Data Recovery Council',
    issuedDate: 'June 2023',
    iconColor: 'from-accent-green to-primary-cyan',
    image: '/certificates/data-recovery-cert.png',
  },
  {
    icon: FileText,
    title: 'OS Installation & Configuration',
    issuedBy: 'Microsoft Partner Network',
    issuedDate: 'September 2022',
    iconColor: 'from-primary-blue to-accent-green',
    image: '/certificates/os-install-cert.png',
  },
  {
    icon: FileCheck,
    title: 'Network & WiFi Configuration',
    issuedBy: 'Network Professional Association',
    issuedDate: 'November 2023',
    iconColor: 'from-secondary-sky to-primary-cyan',
    image: '/certificates/network-config-cert.png',
  },
  {
    icon: Badge,
    title: 'Customer Service Excellence',
    issuedBy: 'Service Quality Institute',
    issuedDate: 'April 2024',
    iconColor: 'from-primary-cyan to-primary-blue',
    image: '/certificates/customer-service-cert.png',
  },
]

export default function LicensesCertifications() {
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  return (
    <section id="licenses-certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Certificates Background"
          fill
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-primary-dark" />
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
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-primary-light/70 max-w-2xl mx-auto">
            Certified expertise and professional qualifications that guarantee quality service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {licenses.map((license, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-zoom-in"
              onClick={() => setPreviewImage(license.image)} // Open preview
            >
              <div className="glass-strong rounded-2xl p-6 h-full neon-border transition-all duration-300 hover:border-primary-cyan/80 hover:shadow-[0_0_40px_rgba(49,195,242,0.4)] relative overflow-hidden">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${license.iconColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  <license.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-cyan transition-colors">
                  {license.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-light/50 text-sm">Issued by:</span>
                    <span className="text-primary-light/80 text-sm font-medium flex-1">
                      {license.issuedBy}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-primary-light/50 text-sm">Date:</span>
                    <span className="text-primary-light/80 text-sm font-medium">
                      {license.issuedDate}
                    </span>
                  </div>
                </div>

                {/* Subtle background pattern */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <license.icon className="w-full h-full text-primary-cyan" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setPreviewImage(null)}
        >
          <Image
            src={previewImage}
            alt="Certificate Preview"
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  )
}
