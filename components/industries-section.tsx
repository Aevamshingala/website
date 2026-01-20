"use client"

import { Building2, ShoppingCart, Heart, GraduationCap, Banknote, Factory } from "lucide-react"

const industries = [
  {
    icon: Building2,
    title: "Enterprise",
    description: "Digital transformation solutions for large-scale organizations",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Scalable platforms driving online retail success",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant solutions for modern healthcare providers",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Innovative EdTech platforms for enhanced learning",
  },
  {
    icon: Banknote,
    title: "FinTech",
    description: "Secure financial technology solutions and integrations",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industry 4.0 solutions for operational excellence",
  },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="relative z-10 py-16 sm:py-20 md:py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-[#8b5cf6]">Sectors We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Industries We <span className="text-[#8b5cf6]">Transform</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Our expertise spans across diverse sectors, delivering tailored solutions that address industry-specific
            challenges.
          </p>
        </div>

        {/* Industries Grid - single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.title}
                className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#8b5cf6]/30 transition-all duration-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8b5cf6]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8b5cf6]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-[#8b5cf6] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{industry.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
