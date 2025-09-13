'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import MobileCTA from '@/components/mobile/MobileCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile First */}
      <section className="relative vh-mobile flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container-mobile text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-4 sm:mb-6"
          >
            <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-2 sm:px-4">
              Maroquinerie artisanale • Toulouse • Fait main
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-mobile-hero text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Sacs & accessoires en cuir, faits main à Toulouse
            <span className="block text-xl sm:text-3xl lg:text-5xl text-amber-700 mt-2">
              Pièces uniques, réparations & stages
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-mobile-body text-gray-600 mb-6 sm:mb-8 max-w-2xl lg:max-w-4xl mx-auto"
          >
            <strong>Artisanat local</strong>, matières naturelles, <strong>fabrication française</strong> – Atelier visible à Toulouse
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="hidden sm:flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Button size="lg" className="btn-touch text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
              <Link href="/boutique">Découvrir la boutique</Link>
            </Button>
            <Button variant="outline" size="lg" className="btn-touch text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
              <Link href="/reparation">Réparations & prix</Link>
            </Button>
            <Button variant="secondary" size="lg" className="btn-touch text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6" asChild>
              <Link href="/stages">Stages & inscription</Link>
            </Button>
          </motion.div>
          
          {/* Mobile CTA Inline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="sm:hidden mt-6"
          >
            <MobileCTA variant="inline" showOnScroll={false} />
          </motion.div>
        </div>
      </section>

      {/* Services Preview - Mobile Optimized */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-mobile-title text-gray-900 mb-3 sm:mb-4">
              Nos Services
            </h2>
            <p className="text-mobile-body text-gray-600 max-w-2xl mx-auto">
              <strong>Boutique</strong>, <strong>création sur-mesure</strong>, <strong>réparations</strong> et <strong>stages</strong> à Toulouse
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Boutique",
                description: "Sacs cabas cuir – 290 € TTC\nSac bandoulière mini – 180 € TTC\nPochette upcyéclée – 65 € TTC\nCeinture cuir – 75 € TTC",
                icon: "👜",
                href: "/boutique",
                badge: "Prix visibles"
              },
              {
                title: "Sur-mesure", 
                description: "Création personnalisée\nDevis sous 24h\nChoisissez forme, couleur, finitions\nFabrication artisanale",
                icon: "✂️",
                href: "/creation-sur-mesure",
                badge: "Devis gratuit"
              },
              {
                title: "Réparations",
                description: "Fermeture éclair – 35-45 €\nRestauration doublure – 60-85 €\nCouture poignée – 20-35 €\nNettoyage cuir – 15-30 €", 
                icon: "🔧",
                href: "/reparation",
                badge: "Tarifs fixes"
              },
              {
                title: "Stages",
                description: "Stage sac cabas – 180 €\nStage pochette – 90 €\nStage fauteuil – 240 €\nTout inclus, matériel fourni", 
                icon: "🎯",
                href: "/stages",
                badge: "Inscription"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href} className="block group">
                  <Card className="card-mobile h-full hover-desktop border-l-4 border-l-amber-500 group-hover:shadow-lg transition-all duration-200">
                    <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-mobile-title text-gray-900">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <Badge variant="secondary" className="text-xs ml-2 flex-shrink-0">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                      {service.description}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact Section - Mobile Optimized */}
      <section className="section-mobile bg-amber-50">
        <div className="container-mobile">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-mobile-title text-gray-900 mb-4 sm:mb-6">
                <strong>Artisanat local</strong>, matières naturelles, <strong>fabrication française</strong>
              </h2>
              <p className="text-mobile-body text-gray-700 mb-4 sm:mb-6">
                Atelier visible à Toulouse – Chaque pièce façonnée selon les techniques traditionnelles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>Cuirs français sélectionnés</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>Fabrication artisanale</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>Pièces uniques</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span>Production locale</span>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-mobile"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🎨</div>
                <h3 className="text-mobile-title mb-3 sm:mb-4">Contact & Infos</h3>
                <div className="text-mobile-body text-gray-600 space-y-2 mb-4 sm:mb-6">
                  <p><strong>38, rue Milhès, 31300 Toulouse</strong></p>
                  <p>Tél : <strong>06 66 80 92 19</strong></p>
                  <p>Email : <strong>atelier.vitrine.marcucci@gmail.com</strong></p>
                  <p>Horaires : <em>Sur rendez-vous</em></p>
                </div>
                <div className="hidden sm:block space-y-3">
                  <Button size="lg" className="w-full btn-touch" asChild>
                    <Link href="/contact">Demander un devis</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full btn-touch" asChild>
                    <Link href="tel:0666809219">Appeler l'atelier</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Compact */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-mobile-title text-gray-900 mb-6 sm:mb-8">Ils nous font confiance</h3>
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
              {[
                { name: "Annick", text: "Travail très soigné, je recommande !" },
                { name: "Laurence", text: "J'ai adoré mon stage maroquinerie" },
                { name: "Michel", text: "Parfait pour la réparation de mon sac" }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-mobile text-center"
                >
                  <p className="text-mobile-body text-gray-600 mb-2 italic">“{testimonial.text}”</p>
                  <p className="text-sm font-medium text-amber-700">– {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
