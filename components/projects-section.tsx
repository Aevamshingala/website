"use client"

import { useState } from "react"
import { ExternalLink, Building2, Brain, Gamepad2 } from "lucide-react"
import { ComingSoonModal } from "./coming-soon-modal"

const projects = [
  {
    title: "Hotel Management ERP",
    category: "Enterprise Solutions",
    description: "Complete hotel operations with room booking, banquet management, and real-time analytics dashboard",
    icon: Building2,
    color: "cyan",
  },
  {
    title: "Text to Video AI Platform",
    category: "AI & Machine Learning",
    description: "Advanced AI solution for generating high-quality videos from text prompts with auto subtitles",
    icon: Brain,
    color: "purple",
  },
  {
    title: "Suryapath - 3D Adventure",
    category: "Game Development",
    description: "Story-driven mythological adventure game with open-world exploration and immersive gameplay",
    icon: Gamepad2,
    color: "pink",
  },
]

const colorClasses = {
  cyan: {
    icon: "text-cyan-400 bg-cyan-500/10",
    category: "text-cyan-400",
    hover: "group-hover:text-cyan-400",
  },
  purple: {
    icon: "text-purple-400 bg-purple-500/10",
    category: "text-purple-400",
    hover: "group-hover:text-purple-400",
  },
  pink: {
    icon: "text-pink-400 bg-pink-500/10",
    category: "text-pink-400",
    hover: "group-hover:text-pink-400",
  },
}

export function ProjectsSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="projects" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-[#06b6d4]">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Featured <span className="text-[#06b6d4]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Explore our portfolio of enterprise-grade solutions delivering measurable results for clients worldwide.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project) => {
            const Icon = project.icon
            const colors = colorClasses[project.color as keyof typeof colorClasses]
            return (
              <button
                type="button"
                key={project.title}
                onClick={() => setShowModal(true)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-[#06b6d4]/30 transition-all duration-500 text-left w-full"
              >
                {/* Icon Header */}
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div className={`w-20 h-20 rounded-2xl ${colors.icon} flex items-center justify-center`}>
                    <Icon className="w-10 h-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <span className={`text-[10px] sm:text-xs ${colors.category} font-medium uppercase tracking-wider`}>
                    {project.category}
                  </span>
                  <h3 className={`text-lg sm:text-xl font-semibold text-white mt-1.5 sm:mt-2 mb-1.5 sm:mb-2 ${colors.hover} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{project.description}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#06b6d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#06b6d4]/20 flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4]" />
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <ComingSoonModal open={showModal} onOpenChange={setShowModal} />
    </section>
  )
}
