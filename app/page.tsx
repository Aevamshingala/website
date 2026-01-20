import { Navigation } from "@/components/navigation"
import { FeaturedProductsSection } from "@/components/featured-products-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CloudBackground } from "@/components/cloud-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <CloudBackground />
      <Navigation />
      <div className="pt-20" /> {/* Spacer for removed hero section */}
      <FeaturedProductsSection />
      <ServicesSection />
      <IndustriesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
