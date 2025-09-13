'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ShoppingBag, Wrench, Palette, GraduationCap, User, Home, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigationItems = [
  {
    title: 'Accueil',
    href: '/',
    icon: Home,
    description: 'Retour à l\'accueil'
  },
  {
    title: 'Boutique',
    href: '/boutique',
    icon: ShoppingBag,
    description: 'Nos créations uniques',
    badge: 'Prix visibles'
  },
  {
    title: 'Création sur mesure',
    href: '/creation-sur-mesure',
    icon: Palette,
    description: 'Votre sac unique',
    badge: 'Devis gratuit'
  },
  {
    title: 'Réparations',
    href: '/reparation',
    icon: Wrench,
    description: 'Tarifs clairs & rapides',
    badge: 'Prix fixes'
  },
  {
    title: 'Stages',
    href: '/stages',
    icon: GraduationCap,
    description: 'Apprenez la maroquinerie',
    badge: 'Inscription'
  },
  {
    title: 'À propos',
    href: '/a-propos',
    icon: User,
    description: 'Notre savoir-faire'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: Mail,
    description: 'Devis & renseignements',
    badge: 'Réponse 24h'
  }
]

const ctaButtons = [
  {
    title: 'Devis gratuit',
    href: '/contact',
    variant: 'default',
    icon: Mail,
    priority: true
  },
  {
    title: 'Nous appeler',
    href: 'tel:0666809219',
    variant: 'outline',
    icon: Phone,
    priority: true
  }
]

interface MobileMenuProps {
  className?: string
}

export default function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    }
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  const itemVariants = {
    closed: {
      x: -20,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <>
      {/* Menu Burger Button */}
      <Button
        variant="ghost"
        size="icon"
        className={`lg:hidden relative z-50 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu principal"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed left-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl border-r lg:hidden overflow-hidden"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}
            >
              <div className="flex h-full flex-col bg-white">
                {/* Header - Sans padding top pour coller au haut */}
                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 bg-gradient-to-r from-amber-50 to-white">
                  <Link 
                    href="/" 
                    className="text-base font-bold text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Atelier Sylvie Marcucci
                  </Link>
                  <span className="text-xs text-amber-700 font-medium bg-amber-100 px-2 py-1 rounded-full">Toulouse</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto">
                  <motion.div
                    initial="closed"
                    animate="open"
                    transition={{ staggerChildren: 0.05 }}
                    className="space-y-1 p-3"
                  >
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <motion.div
                          key={item.href}
                          variants={itemVariants}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-amber-800 group active:scale-95"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center group-hover:border-amber-200 group-hover:bg-amber-50 transition-all duration-200">
                              <IconComponent className="h-5 w-5 text-gray-600 group-hover:text-amber-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900 group-hover:text-amber-800">{item.title}</span>
                                {item.badge && (
                                  <span className="rounded-full bg-gradient-to-r from-amber-100 to-orange-100 px-2 py-0.5 text-xs font-medium text-amber-700 border border-amber-200">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 group-hover:text-amber-600 leading-tight">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                  
                  {/* Tarifs Express */}
                  <div className="px-3 pt-2 pb-1">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Tarifs Express</h4>
                    <div className="space-y-2">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">👜</span>
                            <span className="text-xs font-medium text-blue-800">Boutique</span>
                          </div>
                          <Link 
                            href="/boutique"
                            className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            Voir →
                          </Link>
                        </div>
                        <div className="text-xs text-blue-700 space-y-1">
                          <div className="flex justify-between">
                            <span>Sac cabas cuir</span>
                            <span className="font-semibold">290 €</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pochette upcyclée</span>
                            <span className="font-semibold">65 €</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🔧</span>
                            <span className="text-xs font-medium text-green-800">Réparations</span>
                          </div>
                          <Link 
                            href="/reparation"
                            className="text-xs text-green-600 hover:text-green-800 font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            Voir →
                          </Link>
                        </div>
                        <div className="text-xs text-green-700 space-y-1">
                          <div className="flex justify-between">
                            <span>Fermeture éclair</span>
                            <span className="font-semibold">35-45 €</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Couture poignée</span>
                            <span className="font-semibold">20-35 €</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">🎯</span>
                            <span className="text-xs font-medium text-orange-800">Stages</span>
                          </div>
                          <Link 
                            href="/stages"
                            className="text-xs text-orange-600 hover:text-orange-800 font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            Inscrire →
                          </Link>
                        </div>
                        <div className="text-xs text-orange-700 space-y-1">
                          <div className="flex justify-between">
                            <span>Stage pochette</span>
                            <span className="font-semibold">90 €</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Stage sac cabas</span>
                            <span className="font-semibold">180 €</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* CTA Section */}
                <div className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 p-3 space-y-2">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Contact Direct</h4>
                  {ctaButtons.filter(cta => cta.priority <= 2).map((cta, index) => {
                    const IconComponent = cta.icon
                    return (
                      <motion.div
                        key={cta.href}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Button
                          variant={cta.variant as 'default' | 'outline' | 'secondary'}
                          size="sm"
                          className={`w-full justify-start gap-3 h-12 rounded-xl font-medium transition-all duration-200 active:scale-95 ${
                            cta.color || (cta.variant === 'default' ? 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white' : '')
                          }`}
                          asChild
                        >
                          <Link href={cta.href} onClick={() => setIsOpen(false)}>
                            <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                              <IconComponent className="h-4 w-4" />
                            </div>
                            {cta.title}
                          </Link>
                        </Button>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-amber-50 p-3">
                  <div className="text-center space-y-2">
                    <div className="text-base mb-1">🏠</div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Atelier Sylvie Marcucci</p>
                        <p className="text-xs text-gray-600">38, rue Milhès, 31300 Toulouse</p>
                      </div>
                      <div className="flex items-center justify-center gap-4 pt-2">
                        <a 
                          href="tel:0666809219" 
                          className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Phone className="h-3 w-3" />
                          <span>06 66 80 92 19</span>
                        </a>
                        <a 
                          href="mailto:atelier.vitrine.marcucci@gmail.com" 
                          className="flex items-center gap-1 text-xs text-amber-700 hover:text-amber-800 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <Mail className="h-3 w-3" />
                          <span>Email</span>
                        </a>
                      </div>
                      <p className="text-xs text-gray-500 italic">Sur rendez-vous • Lun-Sam 9h-18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}