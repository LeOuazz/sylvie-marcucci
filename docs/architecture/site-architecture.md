# Architecture du Site - Sylvie Marcucci

## 🗺️ Plan de Site Optimisé

```
ACCUEIL (/)
├── BOUTIQUE (/boutique/)
│   ├── Sacs à Main (/boutique/sacs-main/)
│   │   ├── Sacs Cabas (/boutique/sacs-main/cabas/)
│   │   ├── Sacs Bandoulière (/boutique/sacs-main/bandouliere/)
│   │   ├── Sacs de Soirée (/boutique/sacs-main/soiree/)
│   │   └── Pochettes (/boutique/sacs-main/pochettes/)
│   ├── Accessoires (/boutique/accessoires/)
│   │   ├── Portefeuilles (/boutique/accessoires/portefeuilles/)
│   │   ├── Ceintures (/boutique/accessoires/ceintures/)
│   │   ├── Porte-clés (/boutique/accessoires/porte-cles/)
│   │   └── Étuis (/boutique/accessoires/etuis/)
│   ├── Maroquinerie Homme (/boutique/homme/)
│   │   ├── Portefeuilles (/boutique/homme/portefeuilles/)
│   │   ├── Sacoches (/boutique/homme/sacoches/)
│   │   └── Ceintures (/boutique/homme/ceintures/)
│   ├── Nouveautés (/boutique/nouveautes/)
│   ├── Promotions (/boutique/promotions/)
│   └── [Fiche Produit] (/boutique/[categorie]/[nom-produit]/)
├── SUR MESURE (/sur-mesure/)
│   ├── Configurateur (/sur-mesure/configurateur/)
│   ├── Réalisations (/sur-mesure/realisations/)
│   ├── Process de Création (/sur-mesure/process/)
│   ├── Tarifs (/sur-mesure/tarifs/)
│   └── Demande de Devis (/sur-mesure/devis/)
├── SERVICES (/services/)
│   ├── Réparations (/services/reparations/)
│   │   ├── Tarifs Réparations (/services/reparations/tarifs/)
│   │   ├── Portfolio Réparations (/services/reparations/portfolio/)
│   │   └── Demande de Diagnostic (/services/reparations/diagnostic/)
│   └── Ateliers & Stages (/services/ateliers/)
│       ├── Calendrier (/services/ateliers/calendrier/)
│       ├── Formations Disponibles (/services/ateliers/formations/)
│       └── Réservation (/services/ateliers/reservation/)
├── L'ATELIER (/atelier/)
│   ├── À Propos (/atelier/a-propos/)
│   ├── Savoir-Faire (/atelier/savoir-faire/)
│   ├── Engagement Éthique (/atelier/ethique/)
│   ├── L'Artisane (/atelier/sylvie-marcucci/)
│   └── Photos Atelier (/atelier/galerie/)
├── ACTUALITÉS (/actualites/)
│   ├── [Article Blog] (/actualites/[nom-article]/)
│   └── Événements (/actualites/evenements/)
├── TÉMOIGNAGES (/avis-clients/)
└── CONTACT (/contact/)
    ├── Informations Pratiques (/contact/infos/)
    ├── Points de Vente (/contact/points-de-vente/)
    └── FAQ (/contact/faq/)

PAGES LÉGALES
├── Mentions Légales (/mentions-legales/)
├── CGV (/conditions-generales-vente/)
├── Politique de Confidentialité (/confidentialite/)
├── Politique de Retour (/retours/)
└── Plan du Site (/sitemap/)

ESPACE CLIENT (Connexion requise)
├── Mon Compte (/mon-compte/)
├── Mes Commandes (/mon-compte/commandes/)
├── Mes Projets Sur Mesure (/mon-compte/projets/)
├── Mes Réparations (/mon-compte/reparations/)
└── Mes Informations (/mon-compte/profil/)

PROCESSUS E-COMMERCE
├── Panier (/panier/)
├── Commande (/commande/)
│   ├── Étape 1 : Identification (/commande/identification/)
│   ├── Étape 2 : Livraison (/commande/livraison/)
│   ├── Étape 3 : Paiement (/commande/paiement/)
│   └── Confirmation (/commande/confirmation/)
└── Suivi Commande (/suivi-commande/[numero]/)
```

## 🏗️ Architecture de l'Information

### Hiérarchie des Contenus

#### Niveau 1 - Navigation Principale (7 sections)
1. **Accueil** - Point d'entrée et orientation
2. **Boutique** - Catalogue e-commerce
3. **Sur Mesure** - Services personnalisés
4. **Services** - Réparations et formations
5. **L'Atelier** - Storytelling et valeurs
6. **Actualités** - Blog et événements
7. **Contact** - Coordonnées et FAQ

#### Niveau 2 - Sous-sections (2-5 par section)
- **Regroupement logique** par type de produit/service
- **Navigation facile** entre catégories apparentées
- **Éviter** les niveaux trop profonds (3 max)

#### Niveau 3 - Pages de contenu
- **Fiches produits** individuelles
- **Articles de blog** 
- **Pages de processus** détaillés

## 📱 Wireframes - Structure des Pages

### Page d'Accueil - Desktop
```
┌─────────────────────────────────────────────────────┐
│ HEADER                                              │
│ [Logo] [Nav: Boutique|Sur Mesure|Services|Contact] │
│        [Recherche] [Compte] [Panier(0)]            │
├─────────────────────────────────────────────────────┤
│ HERO BANNER                                         │
│ [Grande Image Atelier]                              │
│ "Maroquinerie Artisanale d'Exception à Toulouse"   │
│ [CTA: Découvrir la Boutique] [CTA: Sur Mesure]     │
├─────────────────────────────────────────────────────┤
│ SERVICES PRINCIPAUX                                 │
│ [Boutique]  [Sur Mesure]  [Réparations]           │
│ [Image]     [Image]       [Image]                  │
│ [Texte]     [Texte]       [Texte]                  │
├─────────────────────────────────────────────────────┤
│ PRODUITS VEDETTES                                   │
│ "Nos Créations d'Exception"                        │
│ [Produit 1] [Produit 2] [Produit 3] [Produit 4]   │
├─────────────────────────────────────────────────────┤
│ SAVOIR-FAIRE                                        │
│ [Video/Images Atelier] + [Texte Storytelling]      │
├─────────────────────────────────────────────────────┤
│ TÉMOIGNAGES                                         │
│ [Avis 1] [Avis 2] [Avis 3]                        │
├─────────────────────────────────────────────────────┤
│ ACTUALITÉS                                          │
│ "Dernières Nouvelles de l'Atelier"                 │
│ [Article 1] [Article 2]                            │
├─────────────────────────────────────────────────────┤
│ FOOTER                                              │
│ [Contact] [Réseaux] [Newsletter] [Mentions]        │
└─────────────────────────────────────────────────────┘
```

### Page d'Accueil - Mobile
```
┌─────────────────────┐
│ HEADER MOBILE       │
│ [☰] [Logo] [🛒]     │
├─────────────────────┤
│ HERO COMPACT        │
│ [Image]             │
│ Titre Principal     │
│ [CTA Boutique]      │
├─────────────────────┤
│ SERVICES (Stack)    │
│ [Boutique]          │
│ [Sur Mesure]        │
│ [Réparations]       │
├─────────────────────┤
│ PRODUITS VEDETTES   │
│ Swiper Horizontal   │
│ [P1][P2][P3][P4]    │
├─────────────────────┤
│ SAVOIR-FAIRE        │
│ [Image]             │
│ [Texte Court]       │
├─────────────────────┤
│ TÉMOIGNAGES         │
│ Carousel            │
├─────────────────────┤
│ FOOTER MOBILE       │
└─────────────────────┘
```

### Page Boutique - Desktop
```
┌─────────────────────────────────────────────────────┐
│ HEADER + NAVIGATION                                 │
├─────────────────────────────────────────────────────┤
│ BREADCRUMB                                          │
│ Accueil > Boutique                                  │
├─────────────────────────────────────────────────────┤
│ BANNIÈRE CATÉGORIE                                  │
│ "Découvrez nos Créations Artisanales"              │
├─────┬───────────────────────────────────────────────┤
│FILT.│ ZONE PRODUITS                                 │
│     │                                               │
│Cat. │ [Tri: Nouveautés ▼] [Vue: Grille/Liste]     │
│Matière                                              │
│Prix │ ┌─────────┬─────────┬─────────┬─────────┐   │
│Coul.│ │[Image] │[Image] │[Image] │[Image] │   │
│     │ │Nom     │Nom     │Nom     │Nom     │   │
│[Appl│ │Prix    │Prix    │Prix    │Prix    │   │
│ iquer│ │[♥ Fav] │[♥ Fav] │[♥ Fav] │[♥ Fav] │   │
│     │ └─────────┴─────────┴─────────┴─────────┘   │
│[RAZ]│ [Plus de produits - Pagination]              │
├─────┴───────────────────────────────────────────────┤
│ FOOTER                                              │
└─────────────────────────────────────────────────────┘
```

### Fiche Produit - Desktop
```
┌─────────────────────────────────────────────────────┐
│ HEADER + NAVIGATION                                 │
├─────────────────────────────────────────────────────┤
│ BREADCRUMB                                          │
│ Accueil > Boutique > Sacs à Main > Cabas Emma      │
├───────────────────────┬─────────────────────────────┤
│ GALERIE PRODUIT       │ INFORMATIONS PRODUIT        │
│                       │                             │
│ [Image Principale]    │ Cabas Emma - Cuir Naturel   │
│                       │ ★★★★★ (24 avis)             │
│ [Mini 1][Mini 2]      │ 285€                        │
│ [Mini 3][Mini 4]      │                             │
│                       │ Description détaillée...    │
│ [🔍 Zoom] [♥ Favoris] │                             │
│                       │ ┌─PERSONNALISATION───────┐   │
│                       │ │ Couleur: [●●●]          │   │
│                       │ │ Finition: [Lisse ▼]    │   │
│                       │ │ Monogramme: [___]       │   │
│                       │ └─────────────────────────┘   │
│                       │                             │
│                       │ [- 1 +] [AJOUTER PANIER]   │
│                       │ [ACHETER MAINTENANT]        │
├───────────────────────┴─────────────────────────────┤
│ ONGLETS: [Description] [Caractéristiques] [Avis]   │
│                                                     │
│ Contenu de l'onglet sélectionné...                 │
├─────────────────────────────────────────────────────┤
│ PRODUITS SIMILAIRES                                 │
│ [Produit 1] [Produit 2] [Produit 3] [Produit 4]   │
├─────────────────────────────────────────────────────┤
│ FOOTER                                              │
└─────────────────────────────────────────────────────┘
```

## 🧭 Flux de Navigation Optimisés

### Parcours d'Achat Principal
```
Accueil → Boutique → [Filtres] → Fiche Produit → Panier → Commande → Confirmation
```

### Parcours Sur Mesure
```
Accueil → Sur Mesure → Configurateur → [Options] → Devis → Validation → Suivi
```

### Parcours Découverte
```
Accueil → L'Atelier → Savoir-Faire → Boutique → [Produit Spécifique]
```

## 📐 Règles d'Architecture

### Profondeur Maximum
- **3 niveaux** maximum depuis l'accueil
- **URLs courtes** et descriptives
- **Breadcrumbs** sur toutes les pages > niveau 2

### Cohérence de Navigation
- **Menu principal** identique sur toutes les pages
- **Footer** complet avec liens utiles
- **Recherche** accessible depuis toute page
- **Panier** toujours visible

### Accessibilité
- **Navigation au clavier** complète
- **Liens de saut** pour le contenu principal
- **Hiérarchie H1-H6** respectée
- **Alt text** sur toutes les images