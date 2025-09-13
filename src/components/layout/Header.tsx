'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import MobileMenu from './MobileMenu'
import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo - Responsive */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <span className="font-bold text-base sm:text-lg lg:text-xl text-primary">
            Atelier Sylvie Marcucci
          </span>
        </Link>
        
        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            className="p-2"
            asChild
          >
            <Link href="tel:0666809219" aria-label="Appeler">
              <Phone className="h-4 w-4" />
            </Link>
          </Button>
          <MobileMenu />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
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
