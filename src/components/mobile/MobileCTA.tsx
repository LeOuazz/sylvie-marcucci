'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, ShoppingBag, MessageCircle, X, ChevronUp, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTAButton {
  id: string
  title: string
  href: string
  icon: LucideIcon
  variant: 'default' | 'outline' | 'secondary'
  color?: string
  priority: number
}

const ctaButtons: CTAButton[] = [
  {
    id: 'call',
    title: 'Appeler',
    href: 'tel:0666809219',
    icon: Phone,
    variant: 'default',
    color: 'bg-green-600 hover:bg-green-700',
    priority: 1
  },
  {
    id: 'quote',
    title: 'Devis gratuit',
    href: '/contact',
    icon: Mail,
    variant: 'default',
    color: 'bg-primary hover:bg-primary/90',
    priority: 2
  },
  {
    id: 'shop',
    title: 'Boutique',
    href: '/boutique',
    icon: ShoppingBag,
    variant: 'outline',
    priority: 3
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    href: 'https://wa.me/33666809219?text=Bonjour, je souhaiterais des informations sur vos créations artisanales.',
    icon: MessageCircle,
    variant: 'secondary',
    color: 'bg-green-500 hover:bg-green-600',
    priority: 4
  }
]

interface MobileCTAProps {
  className?: string
  showOnScroll?: boolean
  variant?: 'sticky' | 'floating' | 'inline'
}

export default function MobileCTA({ 
  className = '', 
  showOnScroll = true, 
  variant = 'sticky' 
}: MobileCTAProps) {
  const [isVisible, setIsVisible] = useState(!showOnScroll)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!showOnScroll) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show CTA when scrolled down 200px
      if (currentScrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showOnScroll])

  const primaryButtons = ctaButtons.filter(btn => btn.priority <= 2)
  const secondaryButtons = ctaButtons.filter(btn => btn.priority > 2)

  if (variant === 'inline') {
    return (
      <div className={`grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 ${className}`}>
        {ctaButtons.map((cta) => {
          const IconComponent = cta.icon
          return (
            <Button
              key={cta.id}
              variant={cta.variant}
              size="sm"
              className={`btn-touch justify-center gap-2 ${cta.color || ''}`}
              asChild
            >
              <Link href={cta.href}>
                <IconComponent className="h-4 w-4" />
                <span className="hidden sm:inline">{cta.title}</span>
              </Link>
            </Button>
          )
        })}
      </div>
    )
  }

  if (variant === 'floating') {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={`fixed bottom-6 right-6 z-50 sm:hidden ${className}`}
          >
            <div className="relative">
              {/* Expand/Collapse Button */}
              <Button
                size="icon"
                className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="expand"
                      initial={{ rotate: 180 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: -180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronUp className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              {/* Expanded Menu */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-16 right-0 space-y-2"
                  >
                    {ctaButtons.map((cta, index) => {
                      const IconComponent = cta.icon
                      return (
                        <motion.div
                          key={cta.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Button
                            size="sm"
                            variant={cta.variant}
                            className={`w-auto min-w-[120px] justify-start gap-2 shadow-lg ${cta.color || ''}`}
                            asChild
                          >
                            <Link href={cta.href} onClick={() => setIsExpanded(false)}>
                              <IconComponent className="h-4 w-4" />
                              {cta.title}
                            </Link>
                          </Button>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  // Sticky variant (default)
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden safe-area-mobile ${className}`}
        >
          <div className="bg-white border-t shadow-lg">
            {/* Primary Actions */}
            <div className="flex gap-2 p-3">
              {primaryButtons.map((cta) => {
                const IconComponent = cta.icon
                return (
                  <Button
                    key={cta.id}
                    variant={cta.variant}
                    size="sm"
                    className={`flex-1 btn-touch gap-2 ${cta.color || ''}`}
                    asChild
                  >
                    <Link href={cta.href}>
                      <IconComponent className="h-4 w-4" />
                      {cta.title}
                    </Link>
                  </Button>
                )
              })}
            </div>

            {/* Expandable Secondary Actions */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t bg-gray-50"
                >
                  <div className="flex gap-2 p-3">
                    {secondaryButtons.map((cta) => {
                      const IconComponent = cta.icon
                      return (
                        <Button
                          key={cta.id}
                          variant={cta.variant}
                          size="sm"
                          className={`flex-1 btn-touch gap-2 ${cta.color || ''}`}
                          asChild
                        >
                          <Link href={cta.href} onClick={() => setIsExpanded(false)}>
                            <IconComponent className="h-4 w-4" />
                            {cta.title}
                          </Link>
                        </Button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand/Collapse Button */}
            {secondaryButtons.length > 0 && (
              <button
                className="w-full py-2 text-xs text-gray-500 bg-gray-50 border-t"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronUp className="h-4 w-4 mx-auto" />
                </motion.div>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}