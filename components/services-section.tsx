"use client"

import { useState } from "react"
import { ServiceCard } from "@/components/service-card"
import { ServiceModal } from "@/components/service-modal"
import { servicesData, type Service } from "@/lib/services-data"

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <section id="services" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#4a9eff]/10 border border-[#4a9eff]/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-[#4a9eff]">What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Our <span className="text-[#4a9eff]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive sustainable
            business growth.
          </p>
        </div>

        {/* Services Grid - single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} onViewDetails={() => setSelectedService(service)} />
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal service={selectedService} isOpen={!!selectedService} onClose={() => setSelectedService(null)} />
    </section>
  )
}
