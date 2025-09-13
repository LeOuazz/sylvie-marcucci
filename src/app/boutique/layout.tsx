import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Boutique Sacs Cuir Artisanal - Fait main à Toulouse | Atelier Sylvie Marcucci",
  description: "Explorez nos sacs, pochettes, ceintures et accessoires fabriqués artisanalement dans le respect des traditions. Chaque pièce est conçue dans notre atelier à Toulouse, à partir de cuirs français soigneusement sélectionnés.",
  keywords: ["sacs en cuir artisanal", "accessoires cuir Toulouse", "fabrication française", "maroquinerie haut de gamme", "création éthique"]
}

export default function BoutiqueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}