# Atelier Sylvie Marcucci - Maroquinerie Artisanale Website

This document outlines the complete setup for the Atelier Sylvie Marcucci leather craftsmanship website.

## About the Business

Atelier Sylvie Marcucci is an artisanal leather workshop located in Toulouse, France, specializing in:
- Handmade leather bags and accessories
- Custom leather creations
- Leather repair and restoration services  
- Leather crafting workshops and classes

## Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion + GSAP
- **CMS**: Sanity
- **Payments**: Stripe
- **Hosting**: Vercel
- **SEO**: Structured data, sitemap, robots.txt
- **Language**: French (fr-FR)

## Project Structure

```
src/
├── app/                    # Next.js app router
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── common/             # Reusable components
│   └── forms/              # Form components
├── lib/                    # Utility libraries
│   ├── sanity.ts          # Sanity client configuration
│   ├── stripe.ts          # Stripe configuration
│   └── utils.ts           # General utilities
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
└── styles/                 # Additional styles
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token_with_read_write_permissions

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual values
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Installed Packages

### Core Dependencies
- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - TypeScript support

### UI & Styling
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library
- `gsap` - Professional animation library
- `@radix-ui/*` - Primitive UI components (via shadcn/ui)

### CMS & Data
- `@sanity/client` - Sanity CMS client
- `@sanity/image-url` - Sanity image URL builder
- `next-sanity` - Next.js integration for Sanity

### Payments
- `stripe` - Stripe Node.js library
- `@stripe/stripe-js` - Stripe JavaScript SDK

## Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Deployment

The project is configured for deployment on Vercel:

1. **Connect to Vercel**:
   - Import your repository to Vercel
   - Configure environment variables in Vercel dashboard

2. **Set Environment Variables**:
   - Add all variables from `.env.local` to Vercel
   - Update `NEXT_PUBLIC_SITE_URL` to your production URL

3. **Deploy**:
   - Vercel will automatically deploy on push to main branch

## Next Steps

1. **Set up Sanity Studio**:
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```

2. **Configure Stripe**:
   - Set up products and pricing in Stripe dashboard
   - Configure webhooks for payment processing

3. **Add Content**:
   - Create content schemas in Sanity
   - Add initial content for the website

4. **Customize Styling**:
   - Update theme colors in `tailwind.config.js`
   - Add custom animations and interactions

## Support

For any issues or questions, refer to the documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [Stripe Docs](https://stripe.com/docs)