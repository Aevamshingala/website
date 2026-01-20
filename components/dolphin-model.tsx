"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

export function DolphinModel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 5)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Controls for interaction
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.5
    controls.minPolarAngle = Math.PI / 3
    controls.maxPolarAngle = Math.PI / 1.5

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
    scene.add(ambientLight)

    // Cyan glow light
    const cyanLight = new THREE.PointLight(0x06b6d4, 2, 10)
    cyanLight.position.set(2, 2, 2)
    scene.add(cyanLight)

    // Magenta glow light
    const magentaLight = new THREE.PointLight(0xec4899, 1.5, 10)
    magentaLight.position.set(-2, -1, 2)
    scene.add(magentaLight)

    // Blue accent light
    const blueLight = new THREE.PointLight(0x4a9eff, 1.5, 10)
    blueLight.position.set(0, 3, -2)
    scene.add(blueLight)

    // Rim light for glow effect
    const rimLight = new THREE.DirectionalLight(0x06b6d4, 1)
    rimLight.position.set(-5, 0, -5)
    scene.add(rimLight)

    let dolphinMesh: THREE.Object3D | null = null
    let mixer: THREE.AnimationMixer | null = null

    // Load the dolphin model
    const loader = new GLTFLoader()
    loader.load(
      "/dolphin.glb",
      (gltf) => {
        dolphinMesh = gltf.scene

        // Apply glowing wireframe material to the dolphin
        dolphinMesh.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh
            // Create glowing material
            mesh.material = new THREE.MeshStandardMaterial({
              color: 0x06b6d4,
              emissive: 0x06b6d4,
              emissiveIntensity: 0.3,
              metalness: 0.8,
              roughness: 0.2,
              transparent: true,
              opacity: 0.9,
            })
          }
        })

        // Scale and position the dolphin
        dolphinMesh.scale.set(1.5, 1.5, 1.5)
        dolphinMesh.position.set(0, 0, 0)
        dolphinMesh.rotation.y = -Math.PI / 4

        scene.add(dolphinMesh)

        // Setup animations if available
        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(dolphinMesh)
          const action = mixer.clipAction(gltf.animations[0])
          action.play()
        }

        setIsLoading(false)
      },
      undefined,
      (error) => {
        console.error("Error loading dolphin model:", error)
        setIsLoading(false)
      },
    )

    // Create particle system around dolphin
    const particleCount = 100
    const particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 6
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    // Animation loop
    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const delta = clock.getDelta()
      const elapsed = clock.getElapsedTime()

      // Update controls
      controls.update()

      // Update animation mixer
      if (mixer) {
        mixer.update(delta)
      }

      // Gentle floating animation for dolphin
      if (dolphinMesh) {
        dolphinMesh.position.y = Math.sin(elapsed * 0.5) * 0.2
        dolphinMesh.rotation.z = Math.sin(elapsed * 0.3) * 0.1
      }

      // Animate particles
      particles.rotation.y = elapsed * 0.05
      particles.rotation.x = Math.sin(elapsed * 0.1) * 0.1

      // Animate lights
      cyanLight.position.x = Math.sin(elapsed * 0.5) * 3
      cyanLight.position.z = Math.cos(elapsed * 0.5) * 3
      magentaLight.position.x = Math.cos(elapsed * 0.3) * 2
      magentaLight.position.y = Math.sin(elapsed * 0.4) * 2

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth
      const newHeight = container.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}
