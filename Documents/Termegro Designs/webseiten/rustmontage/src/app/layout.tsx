import type { Metadata } from 'next'
import { Roboto, Merriweather } from 'next/font/google'
import './globals.css'
import LuxuryCursor from '@/components/LuxuryCursor'
import ChatIntegration from '@/components/ChatIntegration'
import CookieBanner from '@/components/CookieBanner'

const inter = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rustmontage – Tischler in Wien | Küchen- & Möbelmontage',
  description: 'Rustmontage: Zuverlässige Küchen- & Möbelmontage in Wien. 10 Jahre Erfahrung, präzise Arbeiten, persönlicher Service.',
  keywords: 'Tischler Wien, Möbelmontage Wien, Küchenmontage Wien, Einbauschränke Wien, Tischlerarbeiten, Möbel reparieren, Meistertischler, Holzarbeiten Wien',
  authors: [{ name: 'Rustmontage' }],
  creator: 'Rustmontage',
  publisher: 'Rustmontage',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rustmontage.at'
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://rustmontage.at',
    title: 'Rustmontage – Tischler in Wien | Küchen- & Möbelmontage',
    description: 'Rustmontage: Zuverlässige Küchen- & Möbelmontage in Wien. 10 Jahre Erfahrung, präzise Arbeiten, persönlicher Service.',
    siteName: 'Rustmontage',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Rustmontage - Meistertischler für Küchen- & Möbelmontage'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rustmontage – Tischler in Wien | Küchen- & Möbelmontage',
    description: 'Rustmontage: Zuverlässige Küchen- & Möbelmontage in Wien. 10 Jahre Erfahrung, präzise Arbeiten, persönlicher Service.',
    images: ['/images/hero-bg.jpg']
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rustmontage",
              "description": "Meistertischler für exklusive Küchen- & Möbelmontage in Wien und Niederösterreich",
              "image": "https://rustmontage.at/images/hero-bg.jpg",
              "telephone": "+4366565788972",
              "email": "office@rustmontage.at",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pfalzgasse 5",
                "postalCode": "1220",
                "addressLocality": "Wien",
                "addressCountry": "AT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.2379",
                "longitude": "16.4449"
              },
              "url": "https://rustmontage.at",
              "sameAs": [],
              "openingHours": [
                "Mo-Fr 07:00-18:00",
                "Sa 08:00-14:00"
              ],
              "priceRange": "€€",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "48.2379",
                  "longitude": "16.4449"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tischlerleistungen",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Küchenmontage",
                      "description": "Professionelle Montage hochwertiger Küchen"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Möbelmontage",
                      "description": "Fachgerechte Montage von Designermöbeln"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tischlerarbeiten",
                      "description": "Individuelle Tischlerarbeiten und maßgeschneiderte Lösungen"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="bg-wood font-inter pt-16 cursor-none">
        <LuxuryCursor rootSelector="main" />
        <ChatIntegration />
        <CookieBanner />
        <main>{children}</main>
      </body>
    </html>
  )
}