"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Rocket, Instagram } from "lucide-react"
import Image from "next/image"

interface ComingSoonModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ComingSoonModal({ open, onOpenChange }: ComingSoonModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0a0a12]/95 backdrop-blur-xl border-white/10 text-white max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20">
              <Image
                src="/vaqnova-logo.png"
                alt="VAQNOVA"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Rocket className="w-6 h-6 text-cyan-400" />
            Coming Soon
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-center pt-4">
            <p className="mb-4">
              We're working hard to bring you an amazing demo experience. Our team is crafting something special at{" "}
              <span className="text-cyan-400 font-semibold">vaqnova.com</span>
            </p>
            <p className="mb-6">
              Stay tuned for updates and be the first to experience our innovative solutions!
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/vaqnov_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                Follow @vaqnov_tech
              </a>
              <Button
                onClick={() => onOpenChange(false)}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Got it!
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
