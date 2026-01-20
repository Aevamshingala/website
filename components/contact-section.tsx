"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Instagram, Globe } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="relative z-10 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#4a9eff]/10 border border-[#4a9eff]/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-[#4a9eff]">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Let's Build <span className="text-[#4a9eff]">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Ready to transform your digital presence? Reach out and let's discuss how we can help achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-white/[0.03] backdrop-blur-sm border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Information</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#4a9eff]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a9eff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <a href="mailto:vaqnova1712@gmail.com" className="text-white text-sm sm:text-base hover:text-[#4a9eff] transition-colors">
                      vaqnova1712@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Instagram</p>
                    <a
                      href="https://instagram.com/vaqnov_tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base hover:text-pink-400 transition-colors"
                    >
                      @vaqnov_tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#4a9eff]/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a9eff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Website</p>
                    <a
                      href="https://vaqnova.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base hover:text-[#4a9eff] transition-colors"
                    >
                      vaqnova.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#4a9eff]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#4a9eff]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                    <p className="text-white text-sm sm:text-base">Global Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-[#4a9eff]/10 to-[#8b5cf6]/10 border border-[#4a9eff]/20">
              <p className="text-[#4a9eff] font-medium mb-1 text-sm sm:text-base">Quick Response Guarantee</p>
              <p className="text-gray-400 text-xs sm:text-sm">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-white/[0.03] backdrop-blur-sm border border-white/10 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:ring-[#4a9eff]/20 h-11 sm:h-10 text-base sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:ring-[#4a9eff]/20 h-11 sm:h-10 text-base sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company"
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:ring-[#4a9eff]/20 h-11 sm:h-10 text-base sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#4a9eff] focus:ring-[#4a9eff]/20 resize-none text-base sm:text-sm"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4a9eff] hover:bg-[#3a8eef] text-white py-5 sm:py-6 rounded-xl transition-all duration-300 text-base"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
