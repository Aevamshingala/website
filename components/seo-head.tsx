"use client"

import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  structuredData?: object
}

export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Update meta tags dynamically if needed
    if (title) {
      document.title = title
    }
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', description)
      }
    }
  }, [title, description])

  return null
}

// Predefined structured data for common pages
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Enterprise Software Development",
  "description": "Custom enterprise software development, ERP systems, and AI solutions",
  "provider": {
    "@type": "Organization",
    "name": "VAQNOVA"
  },
  "areaServed": "Worldwide",
  "serviceType": "Software Development"
}

export const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "VAQNOVA ERP Solutions",
  "description": "Enterprise-grade ERP systems for hotels, schools, gyms, and businesses",
  "brand": {
    "@type": "Brand",
    "name": "VAQNOVA"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "price": "0",
    "priceValidUntil": "2026-12-31"
  }
}