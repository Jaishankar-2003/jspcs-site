import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jai Shankar PC Services | Expert PC Repair & Chip-Level Service',
  description: 'Expert PC Repair, Chip-Level Service, Custom PC Builds, and Laptop Solutions. 5+ years of experience with genuine parts and doorstep pickup & delivery.',
  keywords: 'PC repair, laptop repair, chip-level service, custom PC builds, computer repair, Chennai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

