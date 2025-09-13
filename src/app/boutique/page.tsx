'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'


export default function BoutiquePage() {
  const products = [
    {
      id: 1,
      name: "Sac Cabas Pleine Fleur",
      description: "Pièce unique réalisée à la main, cuir pleine fleur, finitions soignées. Disponible en plusieurs coloris.",
      price: "€285",
      image: "/images/sac-cabas-demo.jpg",
      features: ["Cuir pleine fleur français", "Fait main à Toulouse", "Personnalisable", "Livraison France"]
    },
    {
      id: 2,
      name: "Pochette Cuir Souple",
      description: "Élégante pochette en cuir souple, idéale pour le quotidien ou les sorties.",
      price: "€95", 
      image: "/images/pochette-demo.jpg",
      features: ["Cuir souple", "Format pratique", "Doublure tissu", "Made in Toulouse"]
    },
    {
      id: 3,
      name: "Ceinture Artisanale",
      description: "Ceinture en cuir de qualité, boucle artisanale, taille ajustable.",
      price: "€65",
      image: "/images/ceinture-demo.jpg", 
      features: ["Cuir épais", "Boucle métal", "Tailles disponibles", "Fabrication locale"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Maroquinerie française • Fabrication artisanale
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Découvrez notre collection de sacs et accessoires en cuir
              <span className="block text-2xl md:text-4xl text-amber-700 mt-2">
                Fait main à Toulouse
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explorez nos <strong>sacs, pochettes, ceintures et accessoires</strong> fabriqués artisanalement 
              dans le respect des traditions. Chaque pièce est conçue dans notre atelier à Toulouse, 
              à partir de <strong>cuirs français soigneusement sélectionnés</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-6xl">📸</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                    
                    <ul className="space-y-1 mb-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-amber-700">{product.price}</span>
                      <Button>Voir le produit</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Pourquoi choisir nos sacs en cuir artisanal ?</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-3">Fabrication française de qualité</h3>
                <p className="mb-4">
                  Nos <strong>sacs en cuir artisanal</strong> sont entièrement fabriqués dans notre 
                  atelier toulousain selon les techniques traditionnelles de la maroquinerie française.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Matières naturelles sélectionnées</h3>
                <p className="mb-4">
                  Nous utilisons exclusivement des cuirs français de première qualité, 
                  sélectionnés pour leur durabilité et leur beauté naturelle.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Production locale et éthique</h3>
                <p className="mb-4">
                  Chaque création respecte l'environnement et soutient l'artisanat local, 
                  pour des <strong>accessoires cuir Toulouse</strong> authentiques.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Personnalisation possible</h3>
                <p className="mb-4">
                  Nos pièces peuvent être personnalisées selon vos goûts : 
                  couleurs, tailles, détails sur demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}