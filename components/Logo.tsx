
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  useImage?: boolean
  logoSrc?: string
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
}

const textSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
}

export default function Logo({ 
  className = '', 
  size = 'md', 
  showText = true,
  useImage = true,
  logoSrc = '/logo.png'
}: LogoProps) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Logo Graphic */}
      <div className={`${sizeClasses[size]} flex-shrink-0 relative`}>
        {/* Use Image if provided and no error, otherwise use SVG */}
        {useImage && !imageError ? (
          <Image
            src={logoSrc}
            alt="Jai Shankar PC Services Logo"
            fill
            className="object-contain"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          /* SVG Fallback Logo - Circuit Board Design */
          <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Left Component */}
          <path
            d="M20 20 L20 35 L35 35 L35 50 L20 50 L20 20 Z"
            fill="currentColor"
            className="text-primary-cyan"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="35" cy="35" r="3" fill="currentColor" className="text-primary-cyan" />
          
          {/* Top Right Component */}
          <path
            d="M80 20 L80 35 L65 35 L65 50 L80 50 L80 20 Z"
            fill="currentColor"
            className="text-primary-cyan"
            stroke="currentColor"
            strokeWidth="2"
            transform="rotate(90 72.5 35)"
          />
          <circle cx="65" cy="35" r="3" fill="currentColor" className="text-primary-cyan" />
          
          {/* Bottom Left Component */}
          <path
            d="M20 80 L20 65 L35 65 L35 50 L20 50 L20 80 Z"
            fill="currentColor"
            className="text-primary-cyan"
            stroke="currentColor"
            strokeWidth="2"
            transform="rotate(-90 27.5 65)"
          />
          <circle cx="35" cy="65" r="3" fill="currentColor" className="text-primary-cyan" />
          
          {/* Bottom Right Component */}
          <path
            d="M80 80 L80 65 L65 65 L65 50 L80 50 L80 80 Z"
            fill="currentColor"
            className="text-primary-cyan"
            stroke="currentColor"
            strokeWidth="2"
            transform="rotate(180 72.5 65)"
          />
          <circle cx="65" cy="65" r="3" fill="currentColor" className="text-primary-cyan" />
          
          {/* Connection Lines */}
          <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="1.5" className="text-primary-cyan/50" />
          <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="1.5" className="text-primary-cyan/50" />
        </svg>
        )}
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizeClasses[size]} text-gradient leading-tight`}>
            JAI SHANKAR PC
          </span>
          <span className={`font-bold ${textSizeClasses[size]} text-white leading-tight`}>
            SERVICES
          </span>
        </div>
      )}
    </motion.div>
  )
}


// ===========================================================================

// 'use client'

// import Image from "next/image"
// import { motion } from "framer-motion"

// interface LogoProps {
//   className?: string
//   size?: "sm" | "md" | "lg" | "xl"
//   showText?: boolean
//   useImage?: boolean
//   logoSrc?: string
// }

// export default function Logo({
//   className = "",
//   size = "xl",
//   showText = true,
//   useImage = true,
//   logoSrc = "/logo.png",
// }: LogoProps) {
  
//   // Bigger and cleaner sizes
//   const sizes: Record<string, number> = {
//     sm: 50,
//     md: 70,
//     lg: 90,
//     xl: 120,
//   }

//   return (
//     <motion.div
//       className={`flex items-center gap-4 ${className}`}
//       whileHover={{ scale: 1.06 }}
//       whileTap={{ scale: 0.96 }}
//     >
//       {/* ⭕ Circular Logo */}
//       <div
//         className="rounded-full overflow-hidden bg-white flex items-center justify-center"
//         style={{
//           width: sizes[size],
//           height: sizes[size],
//         }}
//       >
//         {useImage && (
//           <Image
//             src={logoSrc}
//             alt="Jai Shankar PC Services Logo"
//             width={sizes[size] * 0.8}   // Slightly smaller to fit well
//             height={sizes[size] * 0.8}
//             className="object-contain"  // Changed from object-cover
//             priority
//           />
//         )}
//       </div>

//       {/* ⚡ Text */}
//       {showText && (
//         <div className="flex flex-col leading-tight">
//           <span className="font-bold text-xl tracking-tight text-white">
//             JAI SHANKAR PC
//           </span>
//           <span className="font-bold text-xl tracking-tight text-cyan-300">
//             SERVICES
//           </span>
//         </div>
//       )}
//     </motion.div>
//   )
// }









