'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
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
              Contact • Devis gratuit • Réponse rapide
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="text-mobile-hero text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Contact & Devis
            <span className="block text-xl sm:text-3xl lg:text-5xl text-amber-700 mt-2">
              Atelier Sylvie Marcucci
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-mobile-body text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            <strong>Devis gratuit sous 24h</strong> • Réparations, créations sur-mesure, stages
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-mobile bg-white">
        <div className="container-mobile">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="card-mobile">
                <h2 className="text-mobile-title text-gray-900 mb-6">
                  Demander un devis
                </h2>
                
                <form className="form-mobile">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <Input className="input-mobile" placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <Input className="input-mobile" placeholder="Votre nom" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input 
                      className="input-mobile" 
                      type="email" 
                      placeholder="votre@email.fr" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <Input 
                      className="input-mobile" 
                      type="tel" 
                      placeholder="06 XX XX XX XX" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de demande *
                    </label>
                    <select className="input-mobile" required>
                      <option value="">Choisir...</option>
                      <option value="creation">Création sur-mesure</option>
                      <option value="reparation">Réparation</option>
                      <option value="stage">Inscription stage</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <Textarea 
                      className="input-mobile min-h-[120px] resize-none"
                      placeholder="Décrivez votre projet, vos besoins, ou joignez une photo..."
                      required
                    />
                  </div>
                  
                  <Button className="w-full btn-touch" size="lg">
                    Envoyer ma demande
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Réponse sous 24h • Devis gratuit • Aucun engagement
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Quick Contact */}
              <Card className="card-mobile">
                <h3 className="text-mobile-title text-gray-900 mb-4">
                  Contact Direct
                </h3>
                <div className="space-y-4">
                  <a href="tel:0666809219" className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium text-gray-900">06 66 80 92 19</div>
                      <div className="text-sm text-gray-600">Appel direct</div>
                    </div>
                  </a>
                  
                  <a href="mailto:atelier.vitrine.marcucci@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">atelier.vitrine.marcucci@gmail.com</div>
                      <div className="text-sm text-gray-600">Email</div>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Address & Hours */}
              <Card className="card-mobile">
                <h3 className="text-mobile-title text-gray-900 mb-4">
                  Atelier & Horaires
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">38, rue Milhès</div>
                      <div className="text-gray-600">31300 Toulouse</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">Sur rendez-vous</div>
                      <div className="text-sm text-gray-600">
                        Lun-Sam: 9h-18h<br/>
                        Dimanche: Fermé
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Services Quick Access */}
              <Card className="card-mobile">
                <h3 className="text-mobile-title text-gray-900 mb-4">
                  Nos Services
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">👜</div>
                    <div className="font-medium">Boutique</div>
                    <div className="text-gray-600 text-xs">Créations uniques</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">✂️</div>
                    <div className="font-medium">Sur mesure</div>
                    <div className="text-gray-600 text-xs">Devis gratuit</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🔧</div>
                    <div className="font-medium">Réparations</div>
                    <div className="text-gray-600 text-xs">Tarifs fixes</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="font-medium">Stages</div>
                    <div className="text-gray-600 text-xs">Inscription</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}