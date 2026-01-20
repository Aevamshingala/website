"use client"
import { ChevronRight } from "lucide-react"
import type { Service } from "@/lib/services-data"

interface ServiceCardProps {
  service: Service
  onViewDetails: () => void
}

export function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <button
      onClick={onViewDetails}
      className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#4a9eff]/30 active:border-[#4a9eff]/50 transition-all duration-300 hover:bg-white/[0.05] active:bg-white/[0.08] active:scale-[0.98] w-full text-left"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#4a9eff]/0 to-[#8b5cf6]/0 group-hover:from-[#4a9eff]/5 group-hover:to-[#8b5cf6]/5 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon with improved animation */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#4a9eff]/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#4a9eff]/20 group-hover:scale-110 group-active:scale-100 transition-all duration-300">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#4a9eff]" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-[#4a9eff] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 sm:mb-5 line-clamp-2">{service.shortDescription}</p>

        {/* CTA indicator */}
        <div className="flex items-center text-[#4a9eff] font-medium text-sm">
          <span>View Details</span>
          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  )
}
