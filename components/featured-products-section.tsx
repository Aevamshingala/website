"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Bus,
  Dumbbell,
  GraduationCap,
  Video,
  Box,
  FileText,
  Gamepad2,
  Swords,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { ComingSoonModal } from "./coming-soon-modal"

const productCategories = [
  {
    title: "ERP Solutions",
    color: "cyan",
    products: [
      {
        title: "Hotel Management ERP",
        icon: Building2,
        description: "Complete hotel operations management with room booking, table & banquet booking, online food ordering, and centralized admin control.",
        features: ["Room Booking", "Table & Banquet", "Food Ordering", "Real-time Analytics"],
      },
      {
        title: "Bus & Ride Management ERP",
        icon: Bus,
        description: "Transportation business solution with bus ticket booking, hail ride system, route management, and real-time operational monitoring.",
        features: ["Ticket Booking", "Hail Rides", "Route Management", "Driver Management"],
      },
      {
        title: "Gym Management ERP",
        icon: Dumbbell,
        description: "Fitness center platform with membership management, workout planning, diet tracking, and calorie analysis.",
        features: ["Membership", "Workout Plans", "Diet Management", "Progress Analytics"],
      },
      {
        title: "School Management ERP",
        icon: GraduationCap,
        description: "Academic management with Teacher & Student apps, session management, homework distribution, and exam tracking.",
        features: ["Multi-App System", "Timetable", "Homework", "Exam Results"],
      },
    ],
  },
  {
    title: "AI Solutions",
    color: "purple",
    products: [
      {
        title: "Text to Video AI",
        icon: Video,
        description: "Generate high-quality videos from text prompts with scene creation, transitions, automatic subtitles, and voice-over generation.",
        features: ["AI Video Gen", "Auto Subtitles", "Voice-over", "Export System"],
      },
      {
        title: "Text to 3D Asset AI",
        icon: Box,
        description: "Convert text descriptions into 3D assets for games, AR/VR, and web applications with multiple format support.",
        features: ["GLB/FBX/OBJ", "Asset Preview", "Style Control", "Optimization"],
      },
      {
        title: "AI Documentation Tool",
        icon: FileText,
        description: "Automated project documentation generation from code with README files, API docs, and technical reports.",
        features: ["Auto Generation", "API Docs", "PDF/DOCX Export", "Templates"],
      },
    ],
  },
  {
    title: "Game Development",
    color: "pink",
    products: [
      {
        title: "Suryapath - 3D Adventure Game",
        icon: Gamepad2,
        description: "Story-driven 3D adventure game inspired by Indian mythology with open-world exploration and puzzle-solving mechanics.",
        features: ["Open World", "Mythology Theme", "Combat System", "PC/Console Ready"],
      },
      {
        title: "Kite 3D Fight",
        icon: Swords,
        description: "Fast-paced 3D action fighting game with real-time kite battles, PvP combat, and skill-based controls.",
        features: ["Real-time PvP", "Dynamic Physics", "Multiple Arenas", "Power-ups"],
      },
    ],
  },
]

const colorClasses = {
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    icon: "text-cyan-400 bg-cyan-500/10",
    border: "hover:border-cyan-500/30",
    button: "bg-cyan-500 hover:bg-cyan-400",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "text-purple-400 bg-purple-500/10",
    border: "hover:border-purple-500/30",
    button: "bg-purple-500 hover:bg-purple-400",
  },
  pink: {
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    icon: "text-pink-400 bg-pink-500/10",
    border: "hover:border-pink-500/30",
    button: "bg-pink-500 hover:bg-pink-400",
  },
}

export function FeaturedProductsSection() {
  const [showDemoModal, setShowDemoModal] = useState(false)

  return (
    <section id="products" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-cyan-400">Our Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Enterprise-grade solutions designed for scalability, performance, and global reach. From ERP systems to AI-powered tools.
          </p>
        </div>

        {/* Product Categories */}
        {productCategories.map((category) => {
          const colors = colorClasses[category.color as keyof typeof colorClasses]
          return (
            <div key={category.title} className="mb-12 sm:mb-16">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Badge variant="outline" className={colors.badge}>
                  {category.title}
                </Badge>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {category.products.map((product) => {
                  const Icon = product.icon
                  return (
                    <div
                      key={product.title}
                      className={`group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white/[0.03] backdrop-blur-sm border border-white/10 ${colors.border} transition-all duration-500 hover:bg-white/[0.05]`}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Demo Button */}
                      <Button
                        onClick={() => setShowDemoModal(true)}
                        size="sm"
                        className={`w-full ${colors.button} text-white rounded-lg transition-all duration-300`}
                      >
                        View Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <ComingSoonModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </section>
  )
}
