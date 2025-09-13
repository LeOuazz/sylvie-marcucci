'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ReparationPage() {
  const services = [
    {
      icon: "🔧",
      title: "Réparation fermetures",
      description: "Remplacement de fermetures éclairs, pressions, boucles défectueuses",
      price: "À partir de €25"
    },
    {
      icon: "🪡", 
      title: "Coutures et ourlets",
      description: "Reprise de coutures, renforcement, ourlets et finitions",
      price: "À partir de €15"
    },
    {
      icon: "🎨",
      title: "Restauration cuir",
      description: "Nettoyage, teinture, traitement des taches et craquelures",
      price: "À partir de €40"
    },
    {
      icon: "✂️",
      title: "Remise à neuf",
      description: "Restauration complète, changement de doublure, remontage",
      price: "Devis personnalisé"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Réparation & Restauration • Expertise artisanale
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Réparation et restauration de sacs en cuir
              <span className="block text-2xl md:text-4xl text-amber-700 mt-2">
                Service artisanal à Toulouse
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Redonnez vie à vos <strong>sacs, ceintures ou objets en cuir</strong> grâce à notre savoir-faire artisanal. 
              <strong>Diagnostic gratuit</strong>, devis rapide, réparations réalisées dans notre 
              <strong>atelier toulousain</strong>.
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6 mr-4">
              Diagnostic gratuit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Déposer un sac
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos services de réparation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertise traditionnelle pour redonner une seconde vie à vos pièces en cuir
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <span className="text-amber-700 font-medium text-sm">{service.price}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Guarantees */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Comment ça marche ?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">1</span>
                  <div>
                    <h4 className="font-semibold mb-1">Diagnostic gratuit</h4>
                    <p className="text-gray-600 text-sm">Apportez votre sac à l'atelier ou envoyez-nous des photos pour un premier diagnostic</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">2</span>
                  <div>
                    <h4 className="font-semibold mb-1">Devis rapide</h4>
                    <p className="text-gray-600 text-sm">Nous établissons un devis détaillé sous 48h avec délais de réparation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">3</span>
                  <div>
                    <h4 className="font-semibold mb-1">Réparation experte</h4>
                    <p className="text-gray-600 text-sm">Réalisation dans notre atelier avec techniques traditionnelles et matériaux de qualité</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-semibold text-sm mr-4">4</span>
                  <div>
                    <h4 className="font-semibold mb-1">Récupération</h4>
                    <p className="text-gray-600 text-sm">Votre pièce restaurée vous attend à l'atelier avec conseils d'entretien</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">Pourquoi choisir notre atelier ?</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm"><strong>15+ années d'expérience</strong> en restauration maroquinerie</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Techniques traditionnelles respectées</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Matériaux et accessoires de qualité</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Garantie 6 mois sur les réparations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Délais respectés et qualité assurée</span>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2 text-amber-800">Atelier réparation cuir Toulouse</h4>
                <p className="text-sm text-amber-700">
                  Spécialisé dans la <strong>remise à neuf</strong> de maroquinerie, 
                  notre atelier conjugue savoir-faire traditionnel et <strong>expertise artisanale</strong>.
                </p>
              </div>
              
              <Button className="w-full" size="lg">
                Prendre rendez-vous pour diagnostic
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}