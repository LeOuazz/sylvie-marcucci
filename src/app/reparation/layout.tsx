import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Réparation Sac Cuir Toulouse - Restauration Maroquinerie | Atelier Sylvie Marcucci",
  description: "Redonnez vie à vos sacs, ceintures ou objets en cuir grâce à notre savoir-faire artisanal. Diagnostic gratuit, devis rapide, réparations réalisées dans notre atelier toulousain.",
  keywords: ["réparation sac cuir Toulouse", "restauration maroquinerie", "atelier réparation cuir", "remise à neuf", "expertise artisanale"]
}

export default function ReparationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}