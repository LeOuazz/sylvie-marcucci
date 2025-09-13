// Common types for the application
export interface PageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Sanity CMS Types
export interface Page {
  _id: string
  _type: 'page'
  title: string
  slug: {
    current: string
  }
  content?: any[]
  seo?: SEO
}

export interface SEO {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: {
    asset: {
      url: string
    }
    alt?: string
  }
}

// Animation types for Framer Motion
export interface AnimationProps {
  initial?: any
  animate?: any
  exit?: any
  transition?: any
  variants?: any
}

// Stripe types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  image?: string
}

export interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
}