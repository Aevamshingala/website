import Image from "next/image"
import { Instagram, Mail, Globe } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-8 sm:py-10 md:py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo & Tagline */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/vaqnova-logo.png"
                  alt="VAQNOVA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-wider">
                <span className="text-[#4a9eff]">VAQ</span>
                <span className="text-white">NOVA</span>
              </span>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">
              Engineering the Future of Digital Innovation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/vaqnova_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 flex items-center justify-center transition-all duration-300 group"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="mailto:vaqnova1712@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#4a9eff]/20 flex items-center justify-center transition-all duration-300 group"
              aria-label="Email us"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#4a9eff] transition-colors" />
            </a>
            <a
              href="https://vaqnova.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#4a9eff]/20 flex items-center justify-center transition-all duration-300 group"
              aria-label="Visit our website"
            >
              <Globe className="w-5 h-5 text-gray-400 group-hover:text-[#4a9eff] transition-colors" />
            </a>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              vaqnova1712@gmail.com
            </p>
            <p className="text-gray-500 text-xs mt-1">Global Operations</p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-white/5 w-full">
            <p className="text-gray-500 text-xs sm:text-sm">
              © {currentYear} VAQNOVA. All rights reserved. | vaqnova.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
