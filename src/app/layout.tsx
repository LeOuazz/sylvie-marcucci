import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { structuredDataBusiness, structuredDataWebsite } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sacs cuir faits main Toulouse – Atelier Sylvie Marcucci",
  description: "Créations uniques et réparations sur-mesure, réalisées à la main dans notre atelier toulousain. Découvrez l'art de la maroquinerie française, éthique et durable.",
  keywords: [
    "maroquinerie artisanale Toulouse",
    "sacs en cuir fait main",
    "accessoires cuir français",
    "atelier de création sur mesure",
    "savoir-faire traditionnel",
    "réparation sac cuir",
    "stage maroquinerie"
  ],
  authors: [{ name: "Sylvie Marcucci" }],
  creator: "Sylvie Marcucci",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Atelier Sylvie Marcucci - Maroquinerie Artisanale Toulouse",
    description: "Sacs et accessoires en cuir artisanaux, créations sur-mesure et réparations. Atelier de maroquinerie française à Toulouse.",
    siteName: "Atelier Sylvie Marcucci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Sylvie Marcucci - Maroquinerie Artisanale Toulouse",
    description: "Sacs et accessoires en cuir artisanaux, créations sur-mesure et réparations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataWebsite) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
