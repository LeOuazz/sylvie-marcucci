export default function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Atelier Sylvie Marcucci</h3>
            <p className="text-muted-foreground">
              Artisan maroquinier à Toulouse, passion & savoir-faire français.
              Créations sur-mesure et réparations dans le respect de l'artisanat traditionnel.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/boutique" className="hover:text-primary">Boutique</a></li>
              <li><a href="/creation-sur-mesure" className="hover:text-primary">Création sur mesure</a></li>
              <li><a href="/reparation" className="hover:text-primary">Réparation</a></li>
              <li><a href="/stages" className="hover:text-primary">Stages</a></li>
              <li><a href="/a-propos" className="hover:text-primary">À propos</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Atelier Toulouse</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: contact@ateliersylviemarcucci.fr</p>
              <p>Téléphone: 05 XX XX XX XX</p>
              <p>Adresse: XX rue de la Maroquinerie<br />31000 Toulouse</p>
              <p className="text-sm mt-3">Ouvert du mardi au samedi<br />10h-18h sur rendez-vous</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Atelier Sylvie Marcucci - Maroquinerie Artisanale Toulouse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}