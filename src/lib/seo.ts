export const structuredDataBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Atelier Sylvie Marcucci",
  "description": "Artisan maroquinier à Toulouse, spécialisé dans la création de sacs et accessoires en cuir artisanaux, réparation et stages de maroquinerie.",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "telephone": "05-XX-XX-XX-XX",
  "email": "contact@ateliersylviemarcucci.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "XX rue de la Maroquinerie",
    "addressLocality": "Toulouse",
    "postalCode": "31000",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.6043,
    "longitude": 1.4437
  },
  "openingHours": "Tu-Sa 10:00-18:00",
  "priceRange": "€€",
  "servesCuisine": [],
  "acceptsReservations": true,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de Maroquinerie",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sacs en cuir artisanaux",
          "description": "Création de sacs en cuir fait main avec des cuirs français sélectionnés"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Création sur-mesure",
          "description": "Conception et fabrication d'accessoires en cuir personnalisés"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Réparation de maroquinerie",
          "description": "Service de réparation et restauration de sacs et accessoires en cuir"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Stages de maroquinerie", 
          "description": "Ateliers créatifs d'initiation à la maroquinerie pour tous niveaux"
        }
      }
    ]
  },
  "sameAs": [
    // Add social media URLs when available
  ]
}

export const structuredDataWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Atelier Sylvie Marcucci",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
}

export const structuredDataBreadcrumb = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export function generateProductStructuredData(product: {
  name: string
  description: string
  price: string
  image?: string
  availability?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "price": product.price.replace('€', '').replace('À partir de ', ''),
      "priceCurrency": "EUR",
      "availability": product.availability || "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Atelier Sylvie Marcucci"
      }
    },
    "brand": {
      "@type": "Brand", 
      "name": "Atelier Sylvie Marcucci"
    },
    "category": "Maroquinerie artisanale"
  }
}