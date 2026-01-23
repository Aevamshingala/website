import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "VAQNOVA | Enterprise Software Development & AI Solutions | Global Technology Partner",
  description:
    "VAQNOVA delivers enterprise-grade ERP systems, AI-powered solutions, and immersive game development. Specializing in Hotel Management ERP, School ERP, Gym Management, Text-to-Video AI, Text-to-3D AI, and custom software development for businesses worldwide. Transform your business with cutting-edge technology.",
  keywords: [
    "enterprise software development",
    "ERP solutions",
    "hotel management software",
    "school management system",
    "gym management ERP",
    "bus management system",
    "AI video generation",
    "text to video AI",
    "text to 3D AI",
    "3D asset generation",
    "game development company",
    "mobile app development",
    "web application development",
    "custom software development",
    "digital transformation",
    "cloud solutions",
    "SaaS development",
    "enterprise technology partner",
    "global software company",
    "AI integration services",
    "machine learning solutions",
    "business automation",
    "India software company",
    "international software development",
    "offshore software development",
    "custom ERP development",
    "AI consulting services",
    "blockchain development",
    "IoT solutions",
    "cloud migration services",
    "digital marketing automation",
    "e-commerce development",
    "fintech solutions",
    "healthcare software",
    "education technology",
    "hospitality software",
    "fitness management software",
    "transportation ERP",
    "supply chain management",
    "CRM development",
    "business intelligence",
    "data analytics",
    "cybersecurity solutions",
    "software outsourcing",
    "nearshore development",
    "agile development",
    "devops services",
    "microservices architecture",
    "API development",
    "software consulting",
    "technology transformation",
    "digital innovation",
    "startup development",
    "enterprise applications",
    "mobile game development",
    "VR/AR development",
    "metaverse solutions",
  ],
  authors: [{ name: "VAQNOVA", url: "https://vaqnova.com" }],
  creator: "VAQNOVA",
  publisher: "VAQNOVA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vaqnova.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "en-AU": "/",
      "en-CA": "/",
      "en-IN": "/",
    },
  },
  openGraph: {
    title:
      "VAQNOVA | Enterprise Software Development & AI Solutions | Global Technology Partner",
    description:
      "Transform your business with enterprise-grade ERP systems, AI-powered solutions, and immersive game development. Your trusted global technology partner for digital innovation and software excellence.",
    url: "https://vaqnova.com",
    siteName: "VAQNOVA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/vaqnova-logo.png",
        width: 1200,
        height: 630,
        alt: "VAQNOVA - Global Technology Innovation Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAQNOVA | Enterprise Software & AI Solutions",
    description:
      "Enterprise-grade ERP systems, AI-powered solutions, and game development. Your global technology partner for digital transformation.",
    images: ["/vaqnova-logo.png"],
    creator: "@vaqnova_tech",
    site: "@vaqnova_tech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://vaqnova.com" />
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hreflang="en-us" href="https://vaqnova.com" />
        <link rel="alternate" hreflang="en-gb" href="https://vaqnova.com" />
        <link rel="alternate" hreflang="en-au" href="https://vaqnova.com" />
        <link rel="alternate" hreflang="en-ca" href="https://vaqnova.com" />
        <link rel="alternate" hreflang="en-in" href="https://vaqnova.com" />
        <link rel="alternate" hreflang="x-default" href="https://vaqnova.com" />

        {/* Geographic targeting */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="20.5937;78.9629" />
        <meta name="ICBM" content="20.5937, 78.9629" />

        {/* Business information */}
        <meta name="business:contact_data:street_address" content="India" />
        <meta name="business:contact_data:locality" content="India" />
        <meta name="business:contact_data:region" content="IN" />
        <meta name="business:contact_data:postal_code" content="" />
        <meta name="business:contact_data:country_name" content="India" />
        <meta
          name="business:contact_data:email"
          content="vaqnova1712@gmail.com"
        />
        <meta name="business:contact_data:phone_number" content="" />
        <meta
          name="business:contact_data:website"
          content="https://vaqnova.com"
        />

        {/* Additional SEO meta tags */}
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Enhanced Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VAQNOVA",
              url: "https://vaqnova.com",
              logo: "https://vaqnova.com/vaqnova-logo.png",
              description:
                "Leading enterprise software development company specializing in ERP systems, AI solutions, game development, and digital transformation services for global businesses.",
              foundingDate: "2023",
              sameAs: [
                "https://instagram.com/vaqnova_tech",
                "https://linkedin.com/company/vaqnova",
                "https://github.com/vaqnova",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "vaqnova1712@gmail.com",
                  contactType: "customer service",
                  availableLanguage: ["English", "Hindi"],
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  url: "https://vaqnova.com/contact",
                  contactType: "sales",
                  availableLanguage: ["English"],
                  areaServed: "Worldwide",
                },
              ],
              areaServed: [
                {
                  "@type": "Country",
                  name: "United States",
                },
                {
                  "@type": "Country",
                  name: "United Kingdom",
                },
                {
                  "@type": "Country",
                  name: "Canada",
                },
                {
                  "@type": "Country",
                  name: "Australia",
                },
                {
                  "@type": "Country",
                  name: "Germany",
                },
                {
                  "@type": "Country",
                  name: "France",
                },
                {
                  "@type": "Country",
                  name: "Netherlands",
                },
                {
                  "@type": "Country",
                  name: "India",
                },
              ],
              serviceType: [
                "Enterprise Software Development",
                "ERP Solutions",
                "AI & Machine Learning",
                "Game Development",
                "Mobile App Development",
                "Web Development",
                "Cloud Solutions",
                "Digital Transformation",
                "Blockchain Development",
                "IoT Solutions",
                "Cybersecurity",
                "DevOps Services",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "VAQNOVA Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom ERP Development",
                      description:
                        "Tailored ERP solutions for hotels, schools, gyms, and businesses",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Solutions",
                      description:
                        "Text-to-Video AI, Text-to-3D AI, and machine learning services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Game Development",
                      description: "Immersive mobile and web game development",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
              },
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VAQNOVA",
              url: "https://vaqnova.com",
              description:
                "Global technology partner for enterprise software development, AI solutions, and digital transformation",
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vaqnova.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "VAQNOVA",
              },
            }),
          }}
        />

        {/* Local Business Schema for India */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "VAQNOVA",
              image: "https://vaqnova.com/vaqnova-logo.png",
              url: "https://vaqnova.com",
              telephone: "",
              email: "vaqnova1712@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "India",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 20.5937,
                longitude: 78.9629,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: ["https://instagram.com/vaqnova_tech"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
