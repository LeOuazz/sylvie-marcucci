'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Atelier Sylvie Marcucci</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/boutique" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Boutique
          </Link>
          <Link 
            href="/creation-sur-mesure" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Création sur mesure
          </Link>
          <Link 
            href="/reparation" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Réparation
          </Link>
          <Link 
            href="/stages" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Stages
          </Link>
          <Link 
            href="/a-propos" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            À propos
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <Button variant="default" size="sm">
            Devis gratuit
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}