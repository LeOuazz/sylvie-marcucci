'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-4"
          >
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Maroquinerie artisanale • Toulouse • Fait main
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Sacs et accessoires en cuir artisanaux
            <span className="block text-3xl md:text-5xl lg:text-6xl text-amber-700 mt-2">
              Atelier Sylvie Marcucci, Toulouse
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Créations uniques et réparations sur-mesure, réalisées à la main dans notre atelier toulousain. 
            Découvrez l'art de la <strong>maroquinerie française</strong>, éthique et durable.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="text-lg px-8 py-6">
              Découvrir la boutique
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Création sur-mesure
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services de Maroquinerie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du <strong>sac en cuir artisanal</strong> aux réparations sur-mesure, 
              découvrez toute l'expertise de notre <strong>atelier de création</strong> toulousain
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Boutique Cuir",
                description: "Sacs, pochettes, ceintures et accessoires en cuir fait main à Toulouse avec des cuirs français sélectionnés",
                icon: "👜",
                keywords: "sacs en cuir artisanal, accessoires cuir Toulouse"
              },
              {
                title: "Création sur Mesure", 
                description: "Votre sac personnalisé et unique, conçu selon vos désirs dans notre atelier de maroquinerie",
                icon: "✂️",
                keywords: "sac cuir personnalisé, création sur mesure"
              },
              {
                title: "Réparation & Restauration",
                description: "Service artisanal de réparation sac cuir à Toulouse. Remise à neuf avec expertise traditionnelle", 
                icon: "🔧",
                keywords: "réparation sac cuir Toulouse, restauration maroquinerie"
              },
              {
                title: "Stages & Ateliers",
                description: "Initiez-vous à la maroquinerie dans un atelier créatif. Stage maroquinerie à Toulouse pour tous niveaux", 
                icon: "🎯",
                keywords: "stage maroquinerie Toulouse, atelier créatif cuir"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-l-4 border-l-amber-500">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    {service.keywords}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savoir-faire Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <strong>Savoir-faire traditionnel</strong> & <strong>fabrication locale</strong>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dans notre atelier toulousain, chaque pièce est façonnée selon les techniques 
                ancestrales de la <strong>maroquinerie française</strong>. Cuir pleine fleur, 
                finitions soignées, et attention portée aux détails.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Cuirs français soigneusement sélectionnés
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Fabrication entièrement artisanale
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Pièces uniques et personnalisables
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Production locale et éthique
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-semibold mb-4">Visitez l'Atelier</h3>
                <p className="text-gray-600 mb-6">
                  Découvrez notre atelier, rencontrez Sylvie et 
                  voyez naître votre prochaine création en cuir.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full text-lg px-6 py-4">
                    Réserver une visite
                  </Button>
                  <Button variant="outline" size="lg" className="w-full text-lg px-6 py-4">
                    Demander un devis
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt pour votre <strong>création en cuir</strong> ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contactez-nous pour discuter de votre projet : création sur-mesure, 
              réparation ou découverte de nos <strong>sacs artisanaux toulousains</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                📞 Appeler l'atelier
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-gray-900">
                ✉️ Écrire un message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
