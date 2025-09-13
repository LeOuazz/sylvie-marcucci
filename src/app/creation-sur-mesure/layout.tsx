import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sac Cuir Sur-Mesure Toulouse - Maroquinerie Personnalisée | Atelier Sylvie Marcucci",
  description: "Imaginez et commandez un sac, un accessoire ou un objet en cuir entièrement personnalisé, fabriqué selon vos envies dans notre atelier artisanal à Toulouse. Choisissez forme, couleur, taille et détails.",
  keywords: ["création sur mesure", "sac cuir personnalisé", "maroquinier créateur Toulouse", "commande spéciale", "atelier de maroquinerie"]
}

export default function CreationSurMesureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}