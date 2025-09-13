'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import MobileCTA from '../mobile/MobileCTA'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex-1 relative"
      >
        {/* Safe area for mobile with notch */}
        <div className="w-full h-full pb-20 sm:pb-0">
          {children}
        </div>
      </motion.main>
      <Footer />
      
      {/* Mobile CTA - Only visible on mobile */}
      <MobileCTA variant="sticky" showOnScroll={true} />
    </div>
  )
}
