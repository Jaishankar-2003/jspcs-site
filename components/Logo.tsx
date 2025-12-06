
'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
}

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
  xl: 'h-28 w-28',
}

const textSizeClasses = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
}

export default function Logo({ 
  className = '', 
  size = 'md', 
  showText = true
}: LogoProps) {
  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Logo Text with Enhanced Styling */}
      {showText && (
        <div className="flex flex-col gap-0.5">
          <span className={`font-bold ${textSizeClasses[size]} text-gradient leading-tight tracking-tight`}>
            JAI SHANKAR PC
          </span>
          <span className={`font-bold ${textSizeClasses[size]} text-white leading-tight tracking-tight drop-shadow-sm`}>
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









