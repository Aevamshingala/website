"use client"

import { useEffect, useRef } from "react"

export function CloudBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const stars: {
      x: number
      y: number
      size: number
      brightness: number
      twinkleSpeed: number
      vx: number
      vy: number
    }[] = []

    const clouds: {
      x: number
      y: number
      radius: number
      color: string
      opacity: number
      vx: number
      vy: number
    }[] = []

    let initialized = false

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initialized = false
    }

    resize()
    window.addEventListener("resize", resize)

    const initParticles = () => {
      stars.length = 0
      clouds.length = 0

      const starCount = Math.floor((canvas.width * canvas.height) / 2500)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          brightness: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2,
        })
      }

      const cloudCount = 25
      for (let i = 0; i < cloudCount; i++) {
        const colors = [
          "rgba(6, 182, 212,", // cyan
          "rgba(236, 72, 153,", // pink
          "rgba(139, 92, 246,", // purple
          "rgba(59, 130, 246,", // blue
        ]
        clouds.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 200 + 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.08 + 0.02,
          vx: (Math.random() - 0.3) * 0.5, // Bias movement to the right
          vy: (Math.random() - 0.5) * 0.2,
        })
      }

      initialized = true
    }

    const drawCosmicBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Base dark background
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.3,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.8,
      )
      bgGradient.addColorStop(0, "#0d0d1a")
      bgGradient.addColorStop(0.3, "#0a0a15")
      bgGradient.addColorStop(0.6, "#080812")
      bgGradient.addColorStop(1, "#050508")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (!initialized) initParticles()

      clouds.forEach((cloud) => {
        ctx.save()

        // Pulsing opacity effect
        const pulse = Math.sin(time * 0.002 + cloud.x * 0.01) * 0.02
        ctx.globalAlpha = cloud.opacity + pulse

        const cloudGradient = ctx.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, cloud.radius)
        cloudGradient.addColorStop(0, cloud.color + "0.6)")
        cloudGradient.addColorStop(0.3, cloud.color + "0.3)")
        cloudGradient.addColorStop(0.6, cloud.color + "0.1)")
        cloudGradient.addColorStop(1, "transparent")

        ctx.fillStyle = cloudGradient
        ctx.beginPath()
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Update cloud position
        cloud.x += cloud.vx
        cloud.y += cloud.vy

        // Wrap clouds around screen
        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius
        if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius
        if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius
        if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius
      })

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7
        ctx.save()
        ctx.globalAlpha = star.brightness * twinkle
        ctx.fillStyle = "#ffffff"
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        // Star glow effect
        if (star.size > 1.2) {
          ctx.globalAlpha = star.brightness * twinkle * 0.3
          const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4)
          glowGradient.addColorStop(0, "rgba(255, 255, 255, 0.5)")
          glowGradient.addColorStop(1, "transparent")
          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()

        // Update star position
        star.x += star.vx
        star.y += star.vy

        // Wrap stars around screen
        if (star.x > canvas.width) star.x = 0
        if (star.x < 0) star.x = canvas.width
        if (star.y > canvas.height) star.y = 0
        if (star.y < 0) star.y = canvas.height
      })

      if (Math.random() < 0.002) {
        const shootingStarX = Math.random() * canvas.width
        const shootingStarY = Math.random() * canvas.height * 0.5

        ctx.save()
        ctx.globalAlpha = 0.8
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(shootingStarX, shootingStarY)
        ctx.lineTo(shootingStarX + 50, shootingStarY + 30)
        ctx.stroke()

        // Shooting star glow
        const shootGlow = ctx.createLinearGradient(shootingStarX, shootingStarY, shootingStarX + 50, shootingStarY + 30)
        shootGlow.addColorStop(0, "rgba(255, 255, 255, 0.8)")
        shootGlow.addColorStop(1, "transparent")
        ctx.strokeStyle = shootGlow
        ctx.lineWidth = 4
        ctx.globalAlpha = 0.4
        ctx.stroke()
        ctx.restore()
      }

      ctx.save()
      ctx.globalAlpha = 0.03
      for (let i = 0; i < 8; i++) {
        const dustX = ((time * 0.3 + i * 250) % (canvas.width + 500)) - 250
        const dustY = canvas.height * (0.15 + (i % 4) * 0.2) + Math.sin(time * 0.002 + i * 0.5) * 50
        const dustGradient = ctx.createRadialGradient(dustX, dustY, 0, dustX, dustY, 200)
        dustGradient.addColorStop(0, i % 2 === 0 ? "rgba(6, 182, 212, 0.8)" : "rgba(236, 72, 153, 0.8)")
        dustGradient.addColorStop(0.5, i % 2 === 0 ? "rgba(6, 182, 212, 0.3)" : "rgba(236, 72, 153, 0.3)")
        dustGradient.addColorStop(1, "transparent")
        ctx.fillStyle = dustGradient
        ctx.beginPath()
        ctx.ellipse(dustX, dustY, 200, 80, Math.PI * 0.1, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()

      time += 1
      animationId = requestAnimationFrame(drawCosmicBackground)
    }

    drawCosmicBackground()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
}
