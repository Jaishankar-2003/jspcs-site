// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Link from 'next/link'
// import {
//   ChevronDown,
//   Laptop,
//   Gamepad2,
//   Wrench,
//   ArrowRight,
//   Sparkles,
// } from 'lucide-react'

// import {
//   brandRepairRoutes,
//   technicalServiceRoutes,
//   pcBuildRoutes,
// } from '@/lib/navigation-data'

// const containerVariants = {
//   hidden: {
//     opacity: 0,
//     y: 12,
//     scale: 0.96,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.25,
//       staggerChildren: 0.05,
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: 12,
//     scale: 0.96,
//     transition: {
//       duration: 0.18,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       stiffness: 140,
//       damping: 16,
//     },
//   },
// }

// export default function ServiceMegaMenu() {
//   const [isOpen, setIsOpen] = useState(true)

//   return (
//     <div
//       className="relative hidden lg:block"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       {/* Trigger */}
//       <button
//         className={`group flex items-center gap-1 font-medium transition-all duration-300 ${isOpen
//           ? 'text-cyan-400'
//           : 'text-white/90 hover:text-cyan-400'
//           }`}
//       >
//         <span className="relative">
//           Services

//           <span
//             className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'
//               }`}
//           />
//         </span>

//         <ChevronDown
//           className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''
//             }`}
//         />
//       </button>

//       {/* Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="
//               absolute top-full left-1/2 z-50 pt-5
//               -translate-x-1/2
//               w-[95vw]
//               max-w-[1100px]
//             "
//           >
//             <div
//               className="
//                 relative overflow-hidden rounded-3xl
//                 border border-white/10
//                 bg-[#071018]/95
//                 backdrop-blur-2xl
//                 shadow-[0_25px_80px_rgba(0,0,0,0.6)]
//               "
//             >
//               {/* Glow Effects */}
//               <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
//               <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

//               {/* Main Grid */}
//               <div
//                 className="
//                   relative
//                   grid
//                   gap-8
//                   p-4
//                   sm:p-6
//                   lg:p-6

//                   lg:grid-cols-[1.2fr_0.8fr_320px]
//                 "
//               >
//                 {/* LEFT SIDE */}
//                 <div
//                   className="
//                     grid
//                     gap-8

//                     md:grid-cols-2
//                     lg:grid-cols-2
//                   "
//                 >
//                   {/* Brand Repairs */}
//                   <motion.div variants={itemVariants}>
//                     <div className="flex items-center gap-2 mb-5">
//                       <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20">
//                         <Laptop className="w-4 h-4 text-cyan-400" />
//                       </div>

//                       <h4 className="text-sm font-semibold tracking-wide text-white">
//                         Brand Repairs
//                       </h4>
//                     </div>

//                     <div className="space-y-1">
//                       {brandRepairRoutes.map((route) => (
//                         <Link
//                           key={route.href}
//                           href={route.href}
//                           className="
//                             group/item
//                             flex items-center justify-between
//                             rounded-xl
//                             border border-transparent
//                             px-4 py-3
//                             text-sm
//                             text-white/70
//                             transition-all duration-300
//                             hover:border-cyan-400/20
//                             hover:bg-white/[0.04]
//                             hover:text-white
//                           "
//                         >
//                           <span className="pr-3">{route.label}</span>

//                           <ArrowRight className="w-4 h-4 shrink-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100 text-cyan-400" />
//                         </Link>
//                       ))}
//                     </div>
//                   </motion.div>

//                   {/* Technical + PC */}
//                   <div className="space-y-6">
//                     {/* Technical */}
//                     <motion.div variants={itemVariants}>
//                       <div className="flex items-center gap-2 mb-5">
//                         <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20">
//                           <Wrench className="w-4 h-4 text-cyan-400" />
//                         </div>

//                         <h4 className="text-sm font-semibold tracking-wide text-white">
//                           Technical Fixes
//                         </h4>
//                       </div>

//                       <div className="space-y-2">
//                         {technicalServiceRoutes
//                           .slice(0, 5)
//                           .map((route) => (
//                             <Link
//                               key={route.href}
//                               href={route.href}
//                               className="
//                                 group/item
//                                 flex items-center justify-between
//                                 rounded-xl
//                                 border border-transparent
//                                 px-4  py-1
//                                 text-sm
//                                 text-white/70
//                                 transition-all duration-300
//                                 hover:border-cyan-400/20
//                                 hover:bg-white/[0.04]
//                                 hover:text-white
//                               "
//                             >
//                               <span className="flex-1 text-left whitespace-nowrap">
//                                 {route.label}
//                               </span>

//                               <ArrowRight className="w-4 h-4 shrink-0 ml-auto opacity-0 transition-all duration-300 group-hover/item:opacity-100 text-cyan-400" />
//                             </Link>
//                           ))}

//                         <Link
//                           href="/chip-level-service-in-madurai"
//                           className="
//                             inline-flex items-center gap-2
//                             text-xs font-semibold
//                             text-cyan-400
//                             mt-3
//                             hover:text-cyan-300
//                             transition-colors
//                           "
//                         >
//                           View All Services
//                           <ArrowRight className="w-3 h-3" />
//                         </Link>
//                       </div>
//                     </motion.div>

//                     {/* PC Builds */}
//                     <motion.div variants={itemVariants}>
//                       <div className="flex items-center gap-2 mb-5">
//                         <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20">
//                           <Gamepad2 className="w-4 h-4 text-cyan-400" />
//                         </div>

//                         <h4 className="text-sm font-semibold tracking-wide text-white">
//                           PC Builds
//                         </h4>
//                       </div>

//                       <div className="space-y-1">
//                         {pcBuildRoutes.map((route) => (
//                           <Link
//                             key={route.href}
//                             href={route.href}
//                             className="
//                               group/item
//                               flex items-center justify-between
//                               rounded-xl
//                               border border-transparent
//                               px-4 py-1
//                               text-sm
//                               text-white/70
//                               transition-all duration-300
//                               hover:border-cyan-400/20
//                               hover:bg-white/[0.04]
//                               hover:text-white
//                             "
//                           >
//                             <span className="flex-1 text-left whitespace-nowrap">{route.label}</span>

//                             <ArrowRight className="w-4 h-4 shrink-0 ml-auto opacity-0 transition-all duration-300 group-hover/item:opacity-100 text-cyan-400" />
//                           </Link>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* FEATURED CARD */}
//                 <motion.div
//                   variants={itemVariants}
//                   className="
//                   relative

//                   self-center
//                   h-fit
//                   lg:left-16


//                   overflow-hidden rounded-3xl
//                   border border-cyan-400/20
//                   bg-gradient-to-br
//                   from-cyan-500/10
//                   via-blue-500/10
//                   to-transparent

//                   p-4
//                   "
//                 >
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_50%)]" />

//                   <div className="relative flex flex-col gap-4">
//                     <div>
//                       <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
//                         <Sparkles className="w-3 h-3" />
//                         Featured Service
//                       </div>

//                       <h3 className="mt-5 text-2xl xl:text-3xl font-bold text-white leading-tight">
//                         Custom Gaming
//                         <br />
//                         PC Builds
//                       </h3>

//                       <p className="mt-4 text-sm leading-relaxed text-white/65">
//                         High-performance gaming PCs,
//                         workstation builds, RGB setups and
//                         thermal optimized custom systems.
//                       </p>
//                     </div>

//                     <Link
//                       href="/custom-gaming-pc-build-in-madurai"
//                       className="
//                         group
//                         mt-8
//                         inline-flex items-center justify-center gap-2
//                         rounded-2xl
//                         bg-cyan-400
//                         px-5 py-3
//                         text-sm font-semibold
//                         text-black
//                         transition-all duration-300
//                         hover:scale-[1.03]
//                         hover:bg-cyan-300
//                       "
//                     >
//                       Explore Builds

//                       <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                     </Link>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronDown,
  Laptop,
  Gamepad2,
  Wrench,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import {
  brandRepairRoutes,
  technicalServiceRoutes,
  pcBuildRoutes,
} from '@/lib/navigation-data'

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.96,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.28,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.96,
    filter: 'blur(8px)',
    transition: {
      duration: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 16,
    },
  },
}

export default function ServiceMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <button
        className={`group flex items-center gap-1 font-medium transition-all duration-300 hover:scale-[1.03] ${isOpen
            ? 'text-cyan-400'
            : 'text-white/90 hover:text-cyan-400'
          }`}
      >
        <span className="relative">
          Services

          <span
            className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
          />
        </span>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''
            }`}
        />
      </button>

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              absolute top-full left-1/2 z-50 pt-5
              -translate-x-1/2
              w-[95vw]
              max-w-[1100px]
            "
          >
            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-white/10
                bg-[#071018]/95
                backdrop-blur-3xl
                shadow-[0_25px_80px_rgba(0,0,0,0.6)]
              "
            >
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

              {/* Glow Effects */}
              <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

              {/* Main Grid */}
              <div
                className="
                  relative
                  grid
                  gap-8
                  p-4
                  sm:p-6
                  lg:p-6
                  lg:grid-cols-[1.2fr_0.8fr_320px]
                "
              >
                {/* LEFT SIDE */}
                <div
                  className="
                    grid
                    gap-8
                    md:grid-cols-2
                    lg:grid-cols-2
                  "
                >
                  {/* Brand Repairs */}
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center gap-2 mb-5">
                      <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 shadow-[0_0_18px_rgba(34,211,238,0.15)]">
                        <Laptop className="w-4 h-4 text-cyan-400" />
                      </div>

                      <h4 className="text-sm font-semibold tracking-wide text-white">
                        Brand Repairs
                      </h4>
                    </div>

                    <div className="space-y-1">
                      {brandRepairRoutes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          className="
                            group/item
                            flex items-center gap-3 justify-between
                            rounded-xl
                            border border-transparent
                            px-4 py-3
                            text-sm
                            text-white/70
                            transition-all duration-300
                            hover:border-cyan-400/20
                            hover:bg-white/[0.04]
                            hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]
                            hover:-translate-y-[2px]
                            hover:text-white
                          "
                        >
                          <div className="w-0 group-hover/item:w-1 h-5 rounded-full bg-cyan-400 transition-all duration-300" />

                          <span className="flex-1 text-left whitespace-nowrap">
                            {route.label}
                          </span>

                          <ArrowRight className="w-4 h-4 shrink-0 opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-1 text-cyan-400" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technical + PC */}
                  <div className="space-y-6">
                    {/* Technical */}
                    <motion.div variants={itemVariants}>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 shadow-[0_0_18px_rgba(34,211,238,0.15)]">
                          <Wrench className="w-4 h-4 text-cyan-400" />
                        </div>

                        <h4 className="text-sm font-semibold tracking-wide text-white">
                          Technical Fixes
                        </h4>
                      </div>

                      <div className="space-y-2">
                        {technicalServiceRoutes
                          .slice(0, 5)
                          .map((route) => (
                            <Link
                              key={route.href}
                              href={route.href}
                              className="
                                group/item
                                flex items-center gap-3 justify-between
                                rounded-xl
                                border border-transparent
                                px-4 py-1
                                text-sm
                                text-white/70
                                transition-all duration-300
                                hover:border-cyan-400/20
                                hover:bg-white/[0.04]
                                hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]
                                hover:-translate-y-[2px]
                                hover:text-white
                              "
                            >
                              <div className="w-0 group-hover/item:w-1 h-5 rounded-full bg-cyan-400 transition-all duration-300" />

                              <span className="flex-1 text-left whitespace-nowrap">
                                {route.label}
                              </span>

                              <ArrowRight className="w-4 h-4 shrink-0 opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-1 text-cyan-400" />
                            </Link>
                          ))}

                        <Link
                          href="/chip-level-service-in-madurai"
                          className="
                            inline-flex items-center gap-2
                            text-xs font-semibold
                            text-cyan-400
                            mt-3
                            hover:text-cyan-300
                            transition-all duration-300
                            hover:translate-x-1
                          "
                        >
                          View All Services
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>

                    {/* PC Builds */}
                    <motion.div variants={itemVariants}>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 shadow-[0_0_18px_rgba(34,211,238,0.15)]">
                          <Gamepad2 className="w-4 h-4 text-cyan-400" />
                        </div>

                        <h4 className="text-sm font-semibold tracking-wide text-white">
                          PC Builds
                        </h4>
                      </div>

                      <div className="space-y-1">
                        {pcBuildRoutes.map((route) => (
                          <Link
                            key={route.href}
                            href={route.href}
                            className="
                              group/item
                              flex items-center gap-3 justify-between
                              rounded-xl
                              border border-transparent
                              px-4 py-1
                              text-sm
                              text-white/70
                              transition-all duration-300
                              hover:border-cyan-400/20
                              hover:bg-white/[0.04]
                              hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]
                              hover:-translate-y-[2px]
                              hover:text-white
                            "
                          >
                            <div className="w-0 group-hover/item:w-1 h-5 rounded-full bg-cyan-400 transition-all duration-300" />

                            <span className="flex-1 text-left whitespace-nowrap">
                              {route.label}
                            </span>

                            <ArrowRight className="w-4 h-4 shrink-0 opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-1 text-cyan-400" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* FEATURED CARD */}
                <motion.div
                  variants={itemVariants}
                  className="
                    relative
                    self-center
                    h-fit
                    lg:left-16

                    overflow-hidden rounded-3xl
                    border border-cyan-400/20
                    bg-gradient-to-br
                    from-cyan-500/10
                    via-blue-500/10
                    to-transparent

                    p-4
                  "
                >
                  {/* Animated Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full"
                  />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_55%)]" />

                  <div className="relative flex flex-col gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.15)]">
                        <Sparkles className="w-3 h-3" />
                        Featured Service
                      </div>

                      <h3 className="mt-5 text-2xl xl:text-3xl font-bold text-white leading-tight">
                        Custom Gaming
                        <br />
                        PC Builds
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-white/65">
                        High-performance gaming PCs,
                        workstation builds, RGB setups and
                        thermal optimized custom systems.
                      </p>
                    </div>

                    <Link
                      href="/custom-gaming-pc-build-in-madurai"
                      className="
                        group
                        mt-8
                        inline-flex items-center justify-center gap-2
                        rounded-2xl
                        bg-cyan-400
                        px-5 py-3
                        text-sm font-semibold
                        text-black
                        transition-all duration-300
                        hover:scale-[1.03]
                        hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                        hover:bg-cyan-300
                      "
                    >
                      Explore Builds

                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}