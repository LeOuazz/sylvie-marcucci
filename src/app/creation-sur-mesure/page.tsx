'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function CreationSurMesurePage() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description: "Décrivez votre projet, vos goûts, vos besoins. Nous discutons ensemble de vos attentes."
    },
    {
      step: "02", 
      title: "Conception",
      description: "Choix du cuir, forme, couleur, taille et détails. Création du patron personnalisé."
    },
    {
      step: "03",
      title: "Fabrication", 
      description: "Réalisation artisanale dans notre atelier toulousain avec un suivi régulier."
    },
    {
      step: "04",
      title: "Livraison",
      description: "Réception de votre pièce unique, avec conseils d'entretien personnalisés."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Création sur-mesure • Pièce unique
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Votre sac sur-mesure
              <span className="block text-2xl md:text-4xl text-amber-700 mt-2">
                Maroquinerie personnalisée à Toulouse
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Imaginez et commandez un <strong>sac, un accessoire ou un objet en cuir</strong> entièrement personnalisé, 
              fabriqué selon vos envies dans notre <strong>atelier artisanal à Toulouse</strong>. 
              Choisissez forme, couleur, taille et détails.
            </p>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6 mr-4">
              Décrivez votre projet
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Recevoir un devis personnalisé
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Le processus de création sur-mesure</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De l'idée à la réalisation, découvrez les étapes de création de votre pièce unique
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full border-t-4 border-t-amber-500">
                  <div className="text-4xl font-bold text-amber-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples and Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Exemples de créations personnalisées</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-l-amber-500 pl-4">
                  <h4 className="font-semibold">Sac cuir personnalisé</h4>
                  <p className="text-gray-600 text-sm">Dimensions sur-mesure, choix du cuir, couleur, doublure, poches intérieures</p>
                  <span className="text-amber-700 font-medium">À partir de €320</span>
                </div>
                <div className="border-l-4 border-l-amber-500 pl-4">
                  <h4 className="font-semibold">Maroquinier créateur Toulouse</h4>
                  <p className="text-gray-600 text-sm">Portefeuilles, étuis, trousses personnalisées selon vos besoins</p>
                  <span className="text-amber-700 font-medium">À partir de €85</span>
                </div>
                <div className="border-l-4 border-l-amber-500 pl-4">
                  <h4 className="font-semibold">Commande spéciale</h4>
                  <p className="text-gray-600 text-sm">Objets uniques, cadeaux personnalisés, accessoires sur-mesure</p>
                  <span className="text-amber-700 font-medium">Devis sur mesure</span>
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
              <h3 className="text-2xl font-semibold mb-4 text-center">Devenez l'unique propriétaire</h3>
              <p className="text-gray-600 mb-6 text-center">
                <strong>d'une pièce d'exception</strong> conçue spécialement pour vous dans notre atelier de maroquinerie toulousain.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Consultation gratuite et sans engagement</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Devis détaillé sous 48h</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Délai de création : 2 à 4 semaines</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  <span className="text-sm">Garantie artisan et conseils d'entretien</span>
                </div>
              </div>
              
              <Button className="w-full mt-6" size="lg">
                Commencer mon projet sur-mesure
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}