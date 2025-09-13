# Système de Design - Sylvie Marcucci

## 🎨 Identité Visuelle

### Concept Créatif
**"Atelier Artisanal Haut de Gamme"**
- Authenticité et tradition française
- Élégance contemporaine
- Chaleur humaine et professionnalisme
- Luxe accessible et authentique

### Mots-Clés Visuels
- **Artisanal** - Textures naturelles, imperfections subtiles
- **Élégant** - Compositions équilibrées, typographie raffinée
- **Chaleureux** - Couleurs terre, ambiances dorées
- **Authentique** - Photos réelles, matières vraies

## 🖌️ Palette de Couleurs

### Couleurs Principales

#### Terre de Toulouse (#8B5A3C)
- **Usage:** Titres principaux, CTA primaires
- **Symbolique:** Tradition, artisanat, région toulousaine
- **RGB:** 139, 90, 60
- **HSL:** 20°, 40%, 39%

#### Cuir Naturel (#D4A574)
- **Usage:** Accents, hover states, liens
- **Symbolique:** Cuir tanné, savoir-faire
- **RGB:** 212, 165, 116
- **HSL:** 31°, 52%, 64%

#### Beige Parchemin (#F5F1E8)
- **Usage:** Arrière-plans, cards, sections alternées
- **Symbolique:** Douceur, élégance, papier ancien
- **RGB:** 245, 241, 232
- **HSL:** 42°, 43%, 93%

### Couleurs Secondaires

#### Or Antique (#B8860B)
- **Usage:** Détails précieux, badges, prix
- **Symbolique:** Luxe, valeur, finitions dorées
- **RGB:** 184, 134, 11
- **HSL:** 43°, 89%, 38%

#### Vert Olive (#6B7A47)
- **Usage:** Elements écologiques, "fait-main"
- **Symbolique:** Nature, durabilité, éthique
- **RGB:** 107, 122, 71
- **HSL:** 78°, 26%, 38%

#### Rouge Brique (#A0522D)
- **Usage:** Alertes, promotions, badges
- **Symbolique:** Toulouse, tradition, attention
- **RGB:** 160, 82, 45
- **HSL:** 19°, 56%, 40%

### Couleurs Fonctionnelles

#### Texte Principal (#2C1810)
- **Contraste:** AAA sur blanc (15.8:1)
- **Usage:** Corps de texte, descriptions
- **RGB:** 44, 24, 16

#### Texte Secondaire (#5D4037)
- **Contraste:** AA sur blanc (7.2:1)
- **Usage:** Sous-titres, légendes
- **RGB:** 93, 64, 55

#### Liens (#8B5A3C)
- **Hover:** #A0522D
- **Visited:** #6B4E3A
- **Usage:** Navigation, liens texte

#### Succès (#4A5D23) | Erreur (#C5282F) | Warning (#E65100)
- **Validation formulaires**
- **Messages système**
- **États des commandes**

## ✍️ Typographie

### Police Principale - "Playfair Display"
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
```
- **Usage:** Titres principaux (H1, H2)
- **Caractère:** Élégant, classique, avec empattements
- **Variantes:** Regular (400), Medium (500), SemiBold (600), Bold (700)

### Police Secondaire - "Source Sans Pro"
```css
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
```
- **Usage:** Corps de texte, navigation, UI
- **Caractère:** Moderne, lisible, sans empattements
- **Variantes:** Light (300), Regular (400), SemiBold (600), Bold (700)

### Police Accent - "Dancing Script"
```css
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
```
- **Usage:** Signatures, témoignages, citations
- **Caractère:** Manuscrite, personnelle, chaleureuse
- **Utilisation limitée:** Touches d'authenticité uniquement

### Hiérarchie Typographique

```css
/* Desktop */
H1 { font: 700 42px/48px 'Playfair Display'; }
H2 { font: 600 36px/42px 'Playfair Display'; }
H3 { font: 600 24px/28px 'Source Sans Pro'; }
H4 { font: 600 20px/24px 'Source Sans Pro'; }
H5 { font: 600 18px/22px 'Source Sans Pro'; }
Body { font: 400 16px/24px 'Source Sans Pro'; }
Small { font: 400 14px/20px 'Source Sans Pro'; }

/* Mobile */
H1 { font: 700 32px/36px 'Playfair Display'; }
H2 { font: 600 28px/32px 'Playfair Display'; }
H3 { font: 600 20px/24px 'Source Sans Pro'; }
Body { font: 400 16px/22px 'Source Sans Pro'; }
```

## 🖼️ Moodboard Conceptuel

### Références Visuelles

#### Atmosphère Générale
- **Atelier artisan** - Outils de maroquinerie, établi en bois
- **Matières nobles** - Cuirs texturés, fils, boucles métalliques
- **Lumière naturelle** - Éclairage chaleureux, ombres douces
- **Toulouse** - Architecture en brique, références régionales

#### Style Photographique
- **Éclairage naturel** avec compléments dorés
- **Compositions soignées** mais naturelles
- **Gros plans sur matières** et détails artisanaux
- **Portraits authentiques** de l'artisane au travail

#### Inspirations Design
- **Maisons de luxe européennes** (Hermès, Bottega Veneta)
- **E-commerce artisanal** premium
- **Sites institutionnels** d'artisans reconnus
- **Boutiques physiques** haut de gamme

### Planche Inspiration - Couleurs
```
┌─────────────────────────────────────────────────┐
│ CUIR NATUREL     TERRE TOULOUSE    OR ANTIQUE   │
│ [Texture cuir]   [Brique rose]     [Métal doré] │
│                                                 │
│ BEIGE PARCHEMIN  VERT OLIVE        ROUGE BRIQUE │
│ [Papier ancien]  [Feuillage]       [Tuile]     │
└─────────────────────────────────────────────────┘
```

### Planche Inspiration - Textures
- **Cuir grainé** - Texture naturelle, imperfections
- **Bois vieilli** - Établi d'atelier, authenticité
- **Métal brossé** - Boucles, rivets, finitions
- **Tissu lin** - Doublures, sacs, naturel
- **Pierre/Brique** - Architecture toulousaine

## 🧩 Composants UI

### Boutons

#### Bouton Primaire
```css
.btn-primary {
  background: #8B5A3C;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 4px;
  font: 600 16px 'Source Sans Pro';
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: #A0522D;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 90, 60, 0.3);
}
```

#### Bouton Secondaire
```css
.btn-secondary {
  background: transparent;
  color: #8B5A3C;
  border: 2px solid #8B5A3C;
  padding: 10px 24px;
  border-radius: 4px;
}
.btn-secondary:hover {
  background: #8B5A3C;
  color: #FFFFFF;
}
```

### Cards Produits
```css
.product-card {
  background: #FFFFFF;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(44, 24, 16, 0.1);
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(44, 24, 16, 0.15);
}
```

### Formulaires
```css
.form-input {
  border: 1px solid #D4A574;
  border-radius: 4px;
  padding: 12px 16px;
  font: 400 16px 'Source Sans Pro';
  transition: border-color 0.3s ease;
}
.form-input:focus {
  border-color: #8B5A3C;
  outline: none;
  box-shadow: 0 0 0 3px rgba(139, 90, 60, 0.1);
}
```

## 🎭 Iconographie

### Style d'Icônes
- **Style:** Ligne fine (2px stroke)
- **Finition:** Coins arrondis (rounded caps)
- **Taille standard:** 24px x 24px
- **Couleur:** #5D4037 (texte secondaire)

### Icônes Spécifiques
- **Panier** - Shopping bag avec poignées cuir
- **Cœur** - Forme traditionnelle, pas remplie
- **Loupe** - Simple, moderne
- **Utilisateur** - Silhouette élégante
- **Outils** - Spécialisés maroquinerie (alène, marteau, etc.)

## 📐 Grille et Espacement

### Système d'Espacement (8px base)
```css
/* Variables CSS */
:root {
  --spacing-xs: 4px;   /* 0.5 units */
  --spacing-sm: 8px;   /* 1 unit */
  --spacing-md: 16px;  /* 2 units */
  --spacing-lg: 24px;  /* 3 units */
  --spacing-xl: 32px;  /* 4 units */
  --spacing-xxl: 48px; /* 6 units */
  --spacing-xxxl: 64px; /* 8 units */
}
```

### Grid System
- **Container max-width:** 1200px
- **Colonnes:** 12 (desktop), 4 (tablet), 1 (mobile)
- **Gouttières:** 24px (desktop), 16px (mobile)

## 🌟 Principes de Design

### Hiérarchie Visuelle
1. **Contraste** - Tailles, poids, couleurs distinctes
2. **Proximité** - Éléments liés proches visuellement
3. **Répétition** - Cohérence des patterns
4. **Alignement** - Structure claire et organisée

### Accessibilité
- **Contraste minimum:** AA (4.5:1) pour le texte normal
- **Large texte:** AAA (7:1) pour les titres
- **Focus states** visibles et cohérents
- **Touch targets** minimum 44px

### Animation & Transitions
```css
/* Standards */
.transition-fast { transition: all 0.15s ease; }
.transition-normal { transition: all 0.3s ease; }
.transition-slow { transition: all 0.5s ease; }

/* Easing curves */
.ease-in-out-cubic { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
```

### États Interactifs
- **Hover:** Transformation subtile + shadow
- **Active:** Légère dépression (inset shadow)
- **Focus:** Border accent + shadow
- **Disabled:** 50% opacité + cursor not-allowed