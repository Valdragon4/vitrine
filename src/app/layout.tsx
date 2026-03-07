import type { Metadata } from "next";
import "./globals.css";
import { PosthogInit } from "@/components/PosthogInit";

export const metadata: Metadata = {
  metadataBase: new URL('https://valentin-marot.fr'),
  title: "Valentin MAROT - Développeur Web & DevOps | Solutions sur mesure",
  description: "Développeur web & DevOps freelance spécialisé en Python, Docker, Linux. Création d'applications web, automatisation et administration système. Solutions sur mesure pour entreprises et associations.",
  keywords: [
    "développeur web", 
    "développeur Python", 
    "DevOps", 
    "Docker", 
    "Linux", 
    "Flask", 
    "automatisation", 
    "administration système", 
    "VPS", 
    "auto-hébergement",
    "freelance",
    "solutions sur mesure",
    "API",
    "WordPress",
    "Nginx"
  ],
  authors: [{ name: "Valentin MAROT" }],
  creator: "Valentin MAROT",
  publisher: "Valentin MAROT",
  category: "Technology",
  classification: "Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://valentin-marot.fr',
  },
  openGraph: {
    title: "Valentin MAROT - Développeur Web & DevOps | Solutions sur mesure",
    description: "Développeur web & DevOps freelance spécialisé en Python, Docker, Linux. Création d'applications web, automatisation et administration système.",
    url: 'https://valentin-marot.fr',
    siteName: 'Valentin MAROT - Portfolio',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://valentin-marot.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Valentin MAROT - Développeur Web & DevOps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentin MAROT - Développeur Web & DevOps',
    description: 'Développeur web & DevOps freelance spécialisé en Python, Docker, Linux. Solutions sur mesure.',
    images: ['https://valentin-marot.fr/og-image.jpg'],
    creator: '@valentin_marot',
  },
  verification: {
    google: 'your-google-verification-code', // À remplacer par votre code Google Search Console
  },
  other: {
    'theme-color': '#2563eb',
    'color-scheme': 'light dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Valentin MAROT',
    'application-name': 'Valentin MAROT Portfolio',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Métadonnées structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Valentin MAROT",
              "jobTitle": "Développeur Web & DevOps",
              "description": "Développeur web & DevOps freelance spécialisé en Python, Docker, Linux",
              "url": "https://valentin-marot.fr",
              "sameAs": [
                "https://github.com/Valentin-MAROT",
                "https://linkedin.com/in/valentin-marot"
              ],
              "knowsAbout": [
                "Python", "Flask", "Docker", "Linux", "DevOps", 
                "Web Development", "System Administration", "API Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "FR"
              }
            })
          }}
        />
        
        {/* Métadonnées pour le site web */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Valentin MAROT - Portfolio",
              "url": "https://valentin-marot.fr",
              "description": "Portfolio de Valentin MAROT, développeur web & DevOps freelance",
              "author": {
                "@type": "Person",
                "name": "Valentin MAROT"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://valentin-marot.fr/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-slate-950">
        <PosthogInit />
        {children}
      </body>
    </html>
  );
}
