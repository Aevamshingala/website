"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { X, CheckCircle2, Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/services-data"

interface ServiceModalProps {
  service: Service | null
  isOpen: boolean
  onClose: () => void
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  const [activeTab, setActiveTab] = useState<"services" | "projects">("services")
  const [isClosing, setIsClosing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const startY = useRef(0)
  const currentY = useRef(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setIsClosing(false)
      setActiveTab("services")
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleTouchStart = (e: React.TouchEvent) => {
    if (contentRef.current && contentRef.current.scrollTop === 0) {
      startY.current = e.touches[0].clientY
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (contentRef.current && contentRef.current.scrollTop === 0) {
      currentY.current = e.touches[0].clientY
    }
  }

  const handleTouchEnd = () => {
    const diff = currentY.current - startY.current
    if (diff > 100) {
      handleClose()
    }
    startY.current = 0
    currentY.current = 0
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 200)
  }

  if (!service || !isOpen) return null

  const Icon = service.icon

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-200 ${isClosing ? "opacity-0" : "opacity-100"}`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Modal - fullscreen on mobile, centered card on desktop */}
      <div
        className={`absolute inset-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-4xl sm:max-h-[85vh] sm:rounded-3xl bg-[#0a0a12] sm:bg-[#12121a] border-0 sm:border sm:border-white/10 shadow-2xl flex flex-col transition-transform duration-200 ${isClosing ? "translate-y-full sm:translate-y-0 sm:scale-95" : "translate-y-0 sm:scale-100"}`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile header - fixed at top */}
        <div className="flex-shrink-0 sticky top-0 z-20 bg-[#0a0a12] sm:bg-[#12121a]/95 sm:backdrop-blur-xl">
          {/* Mobile drag indicator with hint */}
          <div className="sm:hidden flex flex-col items-center pt-3 pb-1">
            <div className="w-12 h-1.5 rounded-full bg-white/30" />
            <span className="text-[10px] text-white/40 mt-1">Swipe down to close</span>
          </div>

          {/* Header content */}
          <div className="relative px-4 sm:px-8 py-4 sm:py-6 border-b border-white/10">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 transition-all duration-150 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-4 pr-14">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#4a9eff]/30 to-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#4a9eff]/20 animate-pulse">
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#4a9eff]" />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl sm:text-3xl font-bold text-white">{service.title}</h2>
                <p className="text-gray-400 text-sm sm:text-lg line-clamp-2 sm:line-clamp-none mt-1">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-4 sm:hidden">
              <button
                onClick={() => setActiveTab("services")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === "services"
                    ? "bg-[#4a9eff] text-white shadow-lg shadow-[#4a9eff]/30"
                    : "bg-white/5 text-gray-400 active:bg-white/10"
                }`}
              >
                Sub-Services
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === "projects"
                    ? "bg-[#8b5cf6] text-white shadow-lg shadow-[#8b5cf6]/30"
                    : "bg-white/5 text-gray-400 active:bg-white/10"
                }`}
              >
                Projects
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-8 py-4 sm:py-6">
          {/* Desktop: side by side grid */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-8">
            {/* Sub-services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#4a9eff]" />
                Sub-Services
              </h3>
              <ul className="space-y-2">
                {service.subServices.map((subService, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#4a9eff]/30 hover:bg-white/[0.05] transition-all duration-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4a9eff] mt-1.5 flex-shrink-0" />
                    {subService}
                  </li>
                ))}
              </ul>
            </div>

            {/* Example Projects */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#8b5cf6]" />
                Example Projects
              </h3>
              <div className="space-y-3">
                {service.exampleProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-[#8b5cf6]/10 to-transparent border border-[#8b5cf6]/20 hover:border-[#8b5cf6]/40 transition-all duration-200"
                  >
                    <p className="text-gray-300">{project}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:hidden">
            {activeTab === "services" && (
              <div className="space-y-3 animate-in fade-in slide-in-from-left-4 duration-200">
                {service.subServices.map((subService, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 active:bg-white/[0.08] transition-all duration-150"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#4a9eff]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#4a9eff]" />
                    </div>
                    <span className="text-gray-200 text-[15px] leading-snug">{subService}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-200">
                {service.exampleProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-gradient-to-br from-[#8b5cf6]/10 to-[#4a9eff]/5 border border-[#8b5cf6]/20 active:border-[#8b5cf6]/40 transition-all duration-150"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-[#8b5cf6]" />
                      </div>
                      <p className="text-gray-200 text-[15px] leading-relaxed pt-2">{project}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer - fixed at bottom on mobile */}
        <div className="flex-shrink-0 sticky bottom-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12] to-[#0a0a12]/95 sm:bg-transparent border-t border-white/10 sm:border-0 px-4 sm:px-8 py-4 sm:py-6 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:pb-6">
          <Button
            onClick={() => {
              handleClose()
              setTimeout(() => {
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }, 250)
            }}
            className="w-full sm:w-auto bg-gradient-to-r from-[#4a9eff] to-[#06b6d4] hover:from-[#3a8eef] hover:to-[#05a5c3] active:scale-[0.98] text-white rounded-xl h-14 sm:h-12 text-base font-semibold shadow-lg shadow-[#4a9eff]/30 transition-all duration-150"
          >
            <span>Get Started with {service.title}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <Button
            onClick={handleClose}
            variant="ghost"
            className="hidden sm:inline-flex border-white/20 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl h-12 text-base ml-3"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
