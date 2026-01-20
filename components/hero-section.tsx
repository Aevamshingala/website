"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import { ComingSoonModal } from "./coming-soon-modal"

export function HeroSection() {
  const [showDemoModal, setShowDemoModal] = useState(false)

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-20 w-full">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 md:gap-8 items-center min-h-[60vh] md:min-h-[70vh]">
          {/* Left side - Text content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight text-balance">
              <span className="text-white">Navigating the Future of</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Technology.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 text-pretty">
              Your vision, launched into orbit. We build enterprise-grade ERP systems, AI solutions, and immersive games.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 border-0 w-full sm:w-auto"
              >
                Start Your Project
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => setShowDemoModal(true)}
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px] w-full flex items-center justify-center">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl" />
            </div>
            <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] animate-pulse">
              <Image
                src="/vaqnova-logo.png"
                alt="VAQNOVA - Technology Innovation"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 px-4 sm:px-6 hidden sm:block">
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-16 text-xs sm:text-sm text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About Us
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Portfolio
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              Services
            </a>
          </div>
        </div>
      </div>

      <ComingSoonModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </section>
  )
}
