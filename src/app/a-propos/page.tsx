'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Heart, MapPin, Clock, Star, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile First */}
      <section className="section-mobile bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container-mobile text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-4 sm:mb-6"
          >
            <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-2 sm:px-4">
              Artisan créateur • Toulouse • Maroquinerie française
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-mobile-hero text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            À propos de Sylvie Marcucci
            <span className="block text-xl sm:text-3xl lg:text-5xl text-amber-700 mt-2">
              Notre savoir-faire artisanal
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-mobile-body text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            <strong>Passionnée de maroquinerie depuis 15 ans</strong>, je vous accueille dans mon atelier 
            toulousain pour créer, réparer et transmettre l'art du cuir.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-mobile-title text-gray-900 mb-4 sm:mb-6">
                Une passion devenue métier
              </h2>
              
              <div className="space-y-4 text-mobile-body text-gray-600">
                <p>
                  C'est en 2008 que j'ai découvert la <strong>maroquinerie traditionnelle</strong> lors 
                  d'un stage d'initiation. Ce qui devait être une simple curiosité est rapidement 
                  devenu une véritable passion.
                </p>
                
                <p>
                  Formée auprès de maîtres artisans, j'ai appris les techniques ancestrales : 
                  <strong>sélection des cuirs</strong>, découpe précise, assemblage minutieux et 
                  finitions soignées. Chaque geste compte dans cette discipline exigeante.
                </p>
                
                <p>
                  Aujourd'hui installée à <strong>Toulouse</strong>, je perpétue cette tradition 
                  en créant des pièces uniques et en transmettant mon savoir-faire lors de mes 
                  stages d'initiation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-first lg:order-last"
            >
              <Card className="card-mobile text-center">
                <div className="text-6xl mb-4">👩‍🎨</div>
                <h3 className="text-mobile-title text-gray-900 mb-4">
                  Sylvie Marcucci
                </h3>
                <p className="text-mobile-body text-gray-600 mb-6">
                  Artisan maroquinier, créatrice passionnée et formatrice
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-amber-700">15</div>
                    <div className="text-gray-600">ans d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-amber-700">500+</div>
                    <div className="text-gray-600">créations uniques</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values & Expertise */}
      <section className="section-mobile bg-amber-50">
        <div className="container-mobile">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-mobile-title text-gray-900 mb-3 sm:mb-4">
              Nos valeurs & expertise
            </h2>
            <p className="text-mobile-body text-gray-600">
              Ce qui nous guide au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "Amour du bel ouvrage et des matières nobles"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Techniques traditionnelles et finitions parfaites"
              },
              {
                icon: MapPin,
                title: "Local",
                description: "Fabrication toulousaine avec cuirs français"
              },
              {
                icon: Users,
                title: "Transmission",
                description: "Stages et formations pour partager le savoir-faire"
              }
            ].map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-mobile text-center h-full">
                    <IconComponent className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="card-mobile">
                <div className="text-4xl sm:text-6xl mb-4 text-center">🏛️</div>
                <h3 className="text-mobile-title text-gray-900 mb-4 text-center">
                  L'atelier toulousain
                </h3>
                <div className="space-y-3 text-mobile-body text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    <span><strong>38, rue Milhès, 31300 Toulouse</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    <span>Ouvert sur rendez-vous</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-600 flex-shrink-0" />
                    <span>Atelier visible et accessible</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-mobile-title text-gray-900 mb-4 sm:mb-6">
                Un espace de création authentique
              </h3>
              
              <div className="space-y-4 text-mobile-body text-gray-600 mb-6">
                <p>
                  Mon atelier est un véritable <strong>espace de création</strong> où traditions 
                  et innovation se rencontrent. Chaque coin est pensé pour optimiser le processus 
                  créatif et garantir la qualité de chaque pièce.
                </p>
                
                <p>
                  Les <strong>visiteurs sont les bienvenus</strong> pour découvrir les techniques 
                  traditionnelles en action et comprendre le processus de fabrication de leurs 
                  futurs accessoires en cuir.
                </p>
              </div>

              <div className="hidden sm:block space-y-3">
                <Button className="w-full btn-touch" asChild>
                  <Link href="/contact">Visiter l'atelier</Link>
                </Button>
                <Button variant="outline" className="w-full btn-touch" asChild>
                  <Link href="/stages">Découvrir nos stages</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-mobile bg-gray-50">
        <div className="container-mobile">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-mobile-title text-gray-900 mb-3">
              Témoignages clients
            </h3>
            <p className="text-mobile-body text-gray-600">
              Ils ont fait confiance à notre savoir-faire
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              {
                name: "Marie L.",
                text: "Sylvie a redonné vie à mon sac vintage. Un travail remarquable !",
                service: "Réparation"
              },
              {
                name: "Thomas B.",
                text: "Stage très enrichissant, j'ai appris énormément. Sylvie est une excellente formatrice.",
                service: "Stage maroquinerie"
              },
              {
                name: "Claire M.",
                text: "Ma pochette sur-mesure est exactement ce que j'espérais. Magnifique !",
                service: "Création sur mesure"
              },
              {
                name: "Jean-Pierre R.",
                text: "Artisan de grande qualité, je recommande vivement cet atelier.",
                service: "Boutique"
              },
              {
                name: "Sophie D.",
                text: "Un accueil chaleureux et des conseils précieux pour l'entretien de mes cuirs.",
                service: "Conseil"
              },
              {
                name: "Michel K.",
                text: "Travail soigné et dans les délais. Parfait pour ma ceinture réparée.",
                service: "Réparation"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-mobile h-full">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-mobile-body text-gray-600 mb-3 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-amber-700">
                      {testimonial.service}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}