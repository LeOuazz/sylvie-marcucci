'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-amber-50 to-white py-8 sm:py-12 mt-8">
      <div className="container-mobile">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* À propos */}
          <div className="lg:col-span-2">
            <h3 className="text-mobile-title text-gray-900 mb-3 sm:mb-4">
              Atelier Sylvie Marcucci
            </h3>
            <p className="text-mobile-body text-gray-600 mb-4">
              <strong>Artisan maroquinier à Toulouse</strong>, passion & savoir-faire français.
              Créations sur-mesure et réparations dans le respect de l'artisanat traditionnel.
            </p>
            <div className="flex items-center gap-2 text-sm text-amber-700">
              <Heart className="h-4 w-4 fill-current" />
              <span>Fabrication locale & éthique depuis 2008</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-mobile-title text-gray-900 mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 text-mobile-body">
              <li>
                <Link href="/boutique" className="text-gray-600 hover:text-amber-700 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/creation-sur-mesure" className="text-gray-600 hover:text-amber-700 transition-colors">
                  Création sur mesure
                </Link>
              </li>
              <li>
                <Link href="/reparation" className="text-gray-600 hover:text-amber-700 transition-colors">
                  Réparations
                </Link>
              </li>
              <li>
                <Link href="/stages" className="text-gray-600 hover:text-amber-700 transition-colors">
                  Stages
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-600 hover:text-amber-700 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-mobile-title text-gray-900 mb-3 sm:mb-4">Atelier Toulouse</h4>
            <div className="space-y-3 text-mobile-body text-gray-600">
              <a 
                href="mailto:atelier.vitrine.marcucci@gmail.com" 
                className="flex items-center gap-2 hover:text-amber-700 transition-colors"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">atelier.vitrine.marcucci@gmail.com</span>
              </a>
              
              <a 
                href="tel:0666809219" 
                className="flex items-center gap-2 hover:text-amber-700 transition-colors"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>06 66 80 92 19</span>
              </a>
              
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>38, rue Milhès</p>
                  <p>31300 Toulouse</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>Sur rendez-vous</p>
                  <p>Lun-Sam: 9h-18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Séparateur et copyright */}
        <div className="border-t border-amber-200 mt-8 pt-6 text-center space-y-2">
          <p className="text-mobile-body text-gray-600">
            &copy; {new Date().getFullYear()} Atelier Sylvie Marcucci - Maroquinerie Artisanale Toulouse. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500">
            Designed with <Heart className="inline h-3 w-3 mx-1 fill-red-500 text-red-500" /> by{' '}
            <span className="font-semibold text-amber-700">LeOuazz</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
