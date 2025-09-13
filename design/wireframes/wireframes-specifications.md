# Spécifications Wireframes - Sylvie Marcucci

## 📐 Grille et Breakpoints

### Breakpoints Responsives
```
Mobile:     320px - 767px   (Mobile-first)
Tablette:   768px - 1023px  (iPad, tablettes)
Desktop:    1024px - 1439px (Écrans standards)
Large:      1440px+         (Grands écrans)
```

### Grille Desktop (1200px container)
- **12 colonnes** avec gouttières 24px
- **Marges latérales** 60px minimum
- **Container max** 1200px centré

### Grille Mobile (100% width)
- **Marges latérales** 16px
- **Espacement vertical** 24px entre sections
- **Touch targets** minimum 44px x 44px

## 🖼️ Wireframes Pages Principales

### 1. Page d'Accueil

#### Desktop (1200px)
```
┌──────────────────────────────────────────────────────────────┐
│ HEADER (80px height)                                         │
│ ┌─────┐ [Navigation Horizontale]    [Recherche] [Icônes]    │
│ │Logo │ Boutique | Sur Mesure | Services | Contact          │
│ └─────┘                              [🔍] [👤] [🛒(0)]     │
├──────────────────────────────────────────────────────────────┤
│ HERO BANNER (500px height)                                   │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ [Background: Photo Atelier Artisan]                   │   │
│ │                                                        │   │
│ │ "Maroquinerie Artisanale d'Exception"                 │   │
│ │ "Créations sur mesure à Toulouse depuis 15 ans"      │   │
│ │                                                        │   │
│ │ [CTA: Découvrir Boutique] [CTA: Création Sur Mesure] │   │
│ └────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────┤
│ SERVICES PRINCIPAUX (300px height)                           │
│ "Nos Services"                                               │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│ │[Icône Shop] │ │[Icône Tools]│ │[Icône Cours]│           │
│ │             │ │             │ │             │           │
│ │ BOUTIQUE    │ │ SUR MESURE  │ │ ATELIERS    │           │
│ │ EN LIGNE    │ │ & RÉPARAT.  │ │ & STAGES    │           │
│ │             │ │             │ │             │           │
│ │[Découvrir] │ │[Configurer] │ │[Réserver]  │           │
│ └─────────────┘ └─────────────┘ └─────────────┘           │
├──────────────────────────────────────────────────────────────┤
│ PRODUITS VEDETTES (400px)                                   │
│ "Nos Créations d'Exception"              [Voir Tous →]     │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                      │
│ │[Img] │ │[Img] │ │[Img] │ │[Img] │                      │
│ │      │ │      │ │      │ │      │                      │
│ │Sac A │ │Porte │ │Cein- │ │Sac B │                      │
│ │285€  │ │150€  │ │95€   │ │320€  │                      │
│ │[♥]   │ │[♥]   │ │[♥]   │ │[♥]   │                      │
│ └──────┘ └──────┘ └──────┘ └──────┘                      │
├──────────────────────────────────────────────────────────────┤
│ SAVOIR-FAIRE (350px)                                        │
│ ┌─────────────────┐ ┌─────────────────────────────────────┐ │
│ │                 │ │ "L'Art du Cuir à Toulouse"         │ │
│ │ [Vidéo/Photo    │ │                                     │ │
│ │  Atelier]       │ │ Description du savoir-faire,       │ │
│ │                 │ │ de la tradition, des valeurs...    │ │
│ │ [Play Button]   │ │                                     │ │
│ │                 │ │ [En Savoir Plus]                   │ │
│ └─────────────────┘ └─────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ TÉMOIGNAGES CLIENTS (250px)                                 │
│ "Ce que disent nos clients"                                 │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │ ★★★★★           │ │ ★★★★★           │ │ ★★★★★           │ │
│ │ "Très satisfaite│ │ "Travail de     │ │ "Délais        │ │
│ │ de mon sac..."  │ │ qualité..."     │ │ respectés..."   │ │
│ │ - Marie D.      │ │ - Sophie L.     │ │ - Claire M.     │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
├──────────────────────────────────────────────────────────────┤
│ FOOTER (200px)                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐ │
│ │BOUTIQUE  │ │SERVICES  │ │CONTACT   │ │NEWSLETTER        │ │
│ │- Sacs    │ │- Réparat.│ │Tél: 05.. │ │"Restez informé   │ │
│ │- Access. │ │- Ateliers│ │Email: .. │ │des nouveautés"   │ │
│ │- Hommes  │ │- Sur Mes.│ │Adresse   │ │[Email] [S'abonne]│ │
│ └──────────┘ └──────────┘ └──────────┘ └──────────────────┘ │
│ [Réseaux Sociaux] [Mentions] [CGV] [Confidentialité]       │
└──────────────────────────────────────────────────────────────┘
```

#### Mobile (375px)
```
┌─────────────────────────────────┐
│ HEADER MOBILE (60px)            │
│ [☰] [Logo Sylvie M] [🛒(0)]     │
├─────────────────────────────────┤
│ HERO COMPACT (300px)            │
│ [Background Image]              │
│                                 │
│ "Maroquinerie Artisanale"      │
│ "d'Exception"                   │
│                                 │
│ [Découvrir la Boutique]        │
├─────────────────────────────────┤
│ SERVICES STACK (240px)          │
│ ┌─────────────────────────────┐ │
│ │ [Icône] BOUTIQUE EN LIGNE   │ │
│ │ Découvrez nos créations     │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ [Icône] SUR MESURE         │ │
│ │ Créez votre pièce unique    │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ [Icône] ATELIERS           │ │
│ │ Apprenez les techniques     │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│ PRODUITS (200px)                │
│ "Nos Créations" [Voir Tous →]  │
│ [Swiper Horizontal]             │
│ [P1] [P2] [P3] [P4] ···        │
├─────────────────────────────────┤
│ SAVOIR-FAIRE (200px)            │
│ [Image Atelier]                 │
│ "L'Art du Cuir"                │
│ Texte court...                  │
│ [En Savoir Plus]               │
├─────────────────────────────────┤
│ TÉMOIGNAGES (150px)             │
│ [Carousel Auto]                 │
│ ● ○ ○ (indicateurs)            │
├─────────────────────────────────┤
│ FOOTER MOBILE                   │
│ [Contact] [Réseaux] [Mentions]  │
└─────────────────────────────────┘
```

### 2. Page Boutique

#### Desktop Layout
```
┌──────────────────────────────────────────────────────────────┐
│ HEADER + NAVIGATION                                          │
├──────────────────────────────────────────────────────────────┤
│ BREADCRUMB (40px)                                           │
│ Accueil > Boutique                                          │
├──────────────────────────────────────────────────────────────┤
│ PAGE HEADER (120px)                                         │
│ "Boutique" + Description courte                             │
│ [Tri: Pertinence ▼] [Vue: ⊞ ☰] [24 par page ▼]          │
├────────────┬─────────────────────────────────────────────────┤
│ FILTRES    │ ZONE PRODUITS                                   │
│ (280px)    │                                                 │
│            │ ┌──────┬──────┬──────┬──────┐                  │
│ CATÉGORIES │ │[Img] │[Img] │[Img] │[Img] │                  │
│ □ Sacs Main│ │Nom   │Nom   │Nom   │Nom   │                  │
│ □ Access.  │ │Prix  │Prix  │Prix  │Prix  │                  │
│ □ Homme    │ │[♥]   │[♥]   │[♥]   │[♥]   │                  │
│            │ └──────┴──────┴──────┴──────┘                  │
│ MATIÈRE    │ ┌──────┬──────┬──────┬──────┐                  │
│ □ Cuir     │ │[Img] │[Img] │[Img] │[Img] │                  │
│ □ Toile    │ │Nom   │Nom   │Nom   │Nom   │                  │
│            │ │Prix  │Prix  │Prix  │Prix  │                  │
│ PRIX       │ │[♥]   │[♥]   │[♥]   │[♥]   │                  │
│ [===|====] │ └──────┴──────┴──────┴──────┘                  │
│ 50€ - 500€ │                                                 │
│            │ [Pagination: ← 1 2 3 ... 8 →]                  │
│ [Appliquer]│                                                 │
│ [Effacer]  │                                                 │
├────────────┴─────────────────────────────────────────────────┤
│ FOOTER                                                       │
└──────────────────────────────────────────────────────────────┘
```

### 3. Fiche Produit

#### Desktop Layout
```
┌──────────────────────────────────────────────────────────────┐
│ HEADER + NAVIGATION                                          │
├──────────────────────────────────────────────────────────────┤
│ BREADCRUMB                                                   │
│ Accueil > Boutique > Sacs à Main > Cabas Emma              │
├──────────────────────────────┬───────────────────────────────┤
│ GALERIE (600px x 450px)      │ INFORMATIONS PRODUIT          │
│                              │                               │
│ ┌──────────────────────────┐ │ Cabas Emma                    │
│ │                          │ │ Cuir Naturel Vachette        │
│ │  [Image Principale]      │ │                               │
│ │                          │ │ ★★★★★ (24 avis) [Voir avis]  │
│ │                          │ │                               │
│ │   [Zoom] [Plein écran]   │ │ 285€                          │
│ └──────────────────────────┘ │ (Livraison gratuite > 200€)   │
│                              │                               │
│ [Mini1] [Mini2] [Mini3] [4]  │ Description produit détaillée │
│                              │ - Dimensions: 35x28x15cm      │
│ [♥ Favoris] [📤 Partager]   │ - Poids: 800g                 │
│                              │ - Fermeture: Zip + bouton     │
│                              │                               │
│                              │ ┌─ PERSONNALISATION ─────────┐ │
│                              │ │ Couleur cuir:              │ │
│                              │ │ [●Marron] [●Noir] [●Cognac] │ │
│                              │ │                           │ │
│                              │ │ Finition:                 │ │
│                              │ │ [Lisse ▼]                │ │
│                              │ │                           │ │
│                              │ │ Monogramme: [_______]     │ │
│                              │ │ (+15€)                    │ │
│                              │ └───────────────────────────┘ │
│                              │                               │
│                              │ Quantité: [−] 1 [+]          │
│                              │                               │
│                              │ [AJOUTER AU PANIER]          │
│                              │ [ACHETER MAINTENANT]         │
├──────────────────────────────┴───────────────────────────────┤
│ ONGLETS DE CONTENU                                          │
│ [Description] [Caractéristiques] [Avis Clients] [Entretien] │
│                                                             │
│ Contenu de l'onglet sélectionné avec textes détaillés...   │
├─────────────────────────────────────────────────────────────┤
│ PRODUITS SIMILAIRES                                         │
│ "Vous pourriez aussi aimer"                                │
│ [Produit 1] [Produit 2] [Produit 3] [Produit 4]           │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└─────────────────────────────────────────────────────────────┘
```

## 📏 Spécifications de Composants

### Header
- **Hauteur Desktop:** 80px
- **Hauteur Mobile:** 60px
- **Logo:** 140px x 40px (desktop) / 120px x 32px (mobile)
- **Zone de recherche:** 300px x 40px
- **Icônes:** 24px x 24px avec espacement 16px

### Navigation
- **Liens principaux:** 16px, semi-bold
- **Hover state:** transition 0.3s
- **Active state:** border-bottom 2px

### Boutons CTA
- **Hauteur:** 48px (desktop) / 44px (mobile)
- **Padding horizontal:** 32px (desktop) / 24px (mobile)
- **Border-radius:** 4px
- **Font-size:** 16px, medium weight

### Cards Produits
- **Ratio image:** 4:3
- **Padding:** 16px
- **Hover effect:** Shadow + scale(1.02)
- **Transition:** 0.3s ease

### Filtres
- **Largeur sidebar:** 280px
- **Spacing vertical:** 24px entre sections
- **Checkboxes:** 16px avec 8px de marge
- **Slider prix:** Track 4px, handle 20px

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1440px) { }
```