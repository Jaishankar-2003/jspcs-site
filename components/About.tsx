'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Package, Truck } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const features = [
    { icon: Clock, text: '5+ years chip-level experience' },
    { icon: CheckCircle2, text: 'Fast diagnosis' },
    { icon: Package, text: 'Genuine parts' },
    { icon: Truck, text: 'Doorstep pickup & delivery' },
  ]

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Circuit Board Background"
          fill
          className="object-cover"
          quality={50}
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
         //className="grid md:grid-cols-2 gap-12 grid-cols-1"
        >
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-strong neon-border group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="PC Repair Workshop"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                quality={90}
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-primary-cyan/40 to-transparent" />
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2 text-[#0A1E2D]">Expert Service</h3>
                  <p className="text-2xl font-bold mb-1 text-[#064B57]">Professional & Reliable</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">About</span> Us
            </h2>
            <p className="text-xl sm:text-1xl text-primary-light/90 mb-9 leading-relaxed">
              At <span className="text-primary-cyan font-semibold">Jai Shankar PC Services</span>, we bring{' '}
              is a professional computer service center specializing in PC and
              laptop repairs, upgrades, and custom solutions.  
              <span className="text-accent-green font-semibold">  5+ years of chip-level expertise</span> to ensure your devices get the highest-quality care. 
            </p>
            <p className="text-xl text-primary-light/90 mb-9 leading-relaxed"> From simple fixes to advanced motherboard repairs, we diagnose and fix problems that most regular service centers cannot.</p>
            <p className="text-xl text-primary-light/90 mb-9 leading-relaxed"> Our mission is simple — provide honest service, transparent pricing, and long-lasting repair solutions using genuine parts.</p>




            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 glass rounded-lg p-4 neon-border"
                >
                  <feature.icon className="w-6 h-6 text-primary-cyan flex-shrink-0" />
                  <span className="text-primary-light">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


//=======================================================================================================================================


// 'use client'

// import { motion } from 'framer-motion'
// import {
//   CheckCircle2,
//   Clock,
//   Package,
//   Truck,
//   Cpu,
//   ShieldCheck,
// } from 'lucide-react'
// import Image from 'next/image'

// export default function AboutPage() {
//   const highlights = [
//     {
//       icon: Clock,
//       title: '5+ Years Experience',
//       text: 'Professional chip-level diagnosis and repair experience.',
//     },
//     {
//       icon: Cpu,
//       title: 'Advanced Repairs',
//       text: 'Motherboard, GPU, power issues, and complex hardware faults.',
//     },
//     {
//       icon: Package,
//       title: 'Genuine Parts',
//       text: 'Only original and high-quality replacement components used.',
//     },
//     {
//       icon: Truck,
//       title: 'Doorstep Service',
//       text: 'Pickup & delivery available for hassle-free repairs.',
//     },
//     {
//       icon: ShieldCheck,
//       title: 'Trusted & Secure',
//       text: 'Your data and hardware are handled with full responsibility.',
//     },
//     {
//       icon: CheckCircle2,
//       title: 'Fast Turnaround',
//       text: 'Quick diagnosis and transparent repair timelines.',
//     },
//   ]

//   return (
//     <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <Image
//           src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
//           alt="Technology Background"
//           fill
//           className="object-cover opacity-10"
//           quality={60}
//         />
//         <div className="absolute inset-0 bg-primary-dark/90" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center max-w-3xl mx-auto mb-20"
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold mb-6">
//             About <span className="text-gradient">Jai Shankar PC Services</span>
//           </h1>
//           <p className="text-lg text-primary-light/80 leading-relaxed">
//             Reliable PC & laptop repair solutions built on experience, trust,
//             and technical excellence.
//           </p>
//         </motion.div>

//         {/* Main Content */}
//         <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative aspect-square rounded-2xl overflow-hidden glass-strong neon-border"
//           >
//             <Image
//               src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
//               alt="PC Repair Workspace"
//               fill
//               className="object-cover"
//               quality={90}
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 via-primary-cyan/30 to-transparent" />
//           </motion.div>

//           {/* Text */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl font-bold mb-6">
//               Who We Are
//             </h2>
//             <p className="text-primary-light/80 mb-5 leading-relaxed">
//               <span className="text-primary-cyan font-semibold">
//                 Jai Shankar PC Services
//               </span>{' '}
//               is a professional computer service center specializing in PC and
//               laptop repairs, upgrades, and custom solutions.
//             </p>
//             <p className="text-primary-light/80 mb-5 leading-relaxed">
//               With over{' '}
//               <span className="text-accent-green font-semibold">
//                 5+ years of hands-on chip-level experience
//               </span>
//               , we diagnose and fix problems that most regular service centers
//               cannot.
//             </p>
//             <p className="text-primary-light/80 leading-relaxed">
//               Our mission is simple — provide honest service, transparent
//               pricing, and long-lasting repair solutions using genuine parts.
//             </p>
//           </motion.div>
//         </div>

//         {/* Highlights */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Why Choose Us
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="glass rounded-xl p-6 neon-border"
//               >
//                 <item.icon className="w-8 h-8 text-primary-cyan mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-primary-light/75 text-sm">
//                   {item.text}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
