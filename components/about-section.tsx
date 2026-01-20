"use client"

import { Users, Award, Globe, Zap } from "lucide-react"

const stats = [
  { icon: Users, value: "150+", label: "Team Members" },
  { icon: Award, value: "200+", label: "Projects Delivered" },
  { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: Zap, value: "99.9%", label: "Uptime SLA" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-16 sm:py-20 md:py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#4a9eff]/10 border border-[#4a9eff]/20 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-[#4a9eff]">About VAQNOVA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Pioneering <span className="text-[#4a9eff]">Digital Excellence</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6">
              VAQNOVA is a premier technology company dedicated to engineering innovative digital solutions. We combine
              deep technical expertise with strategic thinking to deliver transformative results for businesses
              worldwide.
            </p>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              Our team of seasoned engineers, designers, and strategists work collaboratively to solve complex
              challenges and build scalable solutions that drive growth and operational efficiency.
            </p>

            {/* Values - wraps nicely on mobile */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {["Innovation", "Excellence", "Integrity", "Collaboration"].map((value) => (
                <span
                  key={value}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Stats - 2x2 grid on all sizes */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 text-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#4a9eff]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4a9eff]" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
