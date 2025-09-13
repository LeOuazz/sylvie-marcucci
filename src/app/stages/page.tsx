'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Users, Check } from 'lucide-react'

const stages = [
  {
    id: 'sac-cabas',
    title: 'Stage sac cabas cuir',
    date: '12 oct. 2024',
    duration: '1 journée',
    price: '180 €',
    participants: 'Max 6 personnes',
    description: 'Créez votre sac cabas en cuir de A à Z. Apprentissage des techniques de base : découpe, assemblage, couture.',
    includes: [
      'Cuir pleine fleur fourni',
      'Tous les outils et accessoires', 
      'Déjeuner inclus',
      'Repartez avec votre création'
    ],
    level: 'Débutant'
  },
  {
    id: 'pochette',
    title: 'Stage pochette',
    date: '2 nov. 2024',
    duration: '1/2 journée',
    price: '90 €',
    participants: 'Max 8 personnes',
    description: 'Initiation parfaite à la maroquinerie. Réalisez une élégante pochette en cuir avec fermeture à rabat.',
    includes: [
      'Cuir et matériel fourni',
      'Encadrement personnalisé',
      'Techniques de finition',
      'Conseils d\'entretien'
    ],
    level: 'Débutant'
  },
  {
    id: 'tapisserie',
    title: 'Stage fauteuil tapisserie',
    date: '16-17 nov. 2024',
    duration: '2 jours',
    price: '240 €',
    participants: 'Max 4 personnes',
    description: 'Formation avancée : restauration complète d\'un fauteuil avec techniques traditionnelles de tapisserie.',
    includes: [
      'Fauteuil à restaurer fourni',
      'Tissus et matériaux inclus',
      'Techniques professionnelles',
      'Certificat de stage'
    ],
    level: 'Intermédiaire'
  }
]

export default function StagesPage() {
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
              Stages maroquinerie • Toulouse • Tous niveaux
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-mobile-hero text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Ateliers d'initiation à la maroquinerie
            <span className="block text-xl sm:text-3xl lg:text-5xl text-amber-700 mt-2">
              Créez votre sac en une journée
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-mobile-body text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            <strong>Apprentissage personnalisé</strong> dans notre atelier toulousain. 
            Matériel fourni, <strong>encadrement expert</strong>, repartez avec votre création.
          </motion.p>
        </div>
      </section>

      {/* Stages List - Mobile Optimized */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-mobile-title text-gray-900 mb-3 sm:mb-4">
              Nos Prochains Stages
            </h2>
            <p className="text-mobile-body text-gray-600">
              Inscriptions ouvertes • Groupes limités • Matériel inclus
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-mobile border-l-4 border-l-amber-500">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    {/* Main Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-mobile-title text-gray-900 mb-2">
                            {stage.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge variant="outline" className="text-xs">
                              {stage.level}
                            </Badge>
                            <span className="text-2xl font-bold text-amber-700">
                              {stage.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-mobile-body text-gray-600 mb-4">
                        {stage.description}
                      </p>

                      {/* Stage Info Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-amber-600" />
                          <span>{stage.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-600" />
                          <span>{stage.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 col-span-2 sm:col-span-2">
                          <Users className="h-4 w-4 text-amber-600" />
                          <span>{stage.participants}</span>
                        </div>
                      </div>

                      {/* What's included */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Inclus dans le stage :</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {stage.includes.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2">
                              <Check className="h-3 w-3 text-green-600 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex-shrink-0 sm:w-32">
                      <Button 
                        className="w-full btn-touch" 
                        size="sm"
                        asChild
                      >
                        <Link href="/contact">
                          Je m'inscris
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section - Mobile Compact */}
      <section className="section-mobile bg-amber-50">
        <div className="container-mobile">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Practical Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-mobile"
            >
              <h3 className="text-mobile-title text-gray-900 mb-4">
                Infos pratiques
              </h3>
              <div className="space-y-3 text-mobile-body text-gray-600">
                <p><strong>Lieu :</strong> 38, rue Milhès, 31300 Toulouse</p>
                <p><strong>Niveau :</strong> Aucune expérience requise</p>
                <p><strong>Matériel :</strong> Tout fourni (cuir, outils, accessoires)</p>
                <p><strong>Groupe :</strong> 4 à 8 participants maximum</p>
                <p><strong>Réservation :</strong> Obligatoire, places limitées</p>
                <p><strong>Annulation :</strong> Possible jusqu'à 48h avant</p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-mobile text-center"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-mobile-title mb-4">
                Inscription & Renseignements
              </h3>
              <div className="space-y-3 text-mobile-body text-gray-600 mb-6">
                <p>Sylvie Marcucci</p>
                <p><strong>06 66 80 92 19</strong></p>
                <p><strong>atelier.vitrine.marcucci@gmail.com</strong></p>
              </div>
              <div className="space-y-3">
                <Button className="w-full btn-touch" asChild>
                  <Link href="tel:0666809219">
                    Appeler pour s'inscrire
                  </Link>
                </Button>
                <Button variant="outline" className="w-full btn-touch" asChild>
                  <Link href="/contact">
                    Poser une question
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}