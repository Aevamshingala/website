"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CloudBackground } from "@/components/cloud-background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Star,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Play,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function LanderPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <CloudBackground />
      <Navigation />

      {/* HERO */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            🚀 Enterprise-Grade Solutions
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              VAQNOVA
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Leading enterprise software development company specializing in ERP,
            AI solutions, and digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          {[
            ["500+", "Projects Delivered"],
            ["50+", "Countries Served"],
            ["99.9%", "Uptime SLA"],
            ["24/7", "Support"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {value}
              </div>
              <div className="text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-cyan-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Technology solutions designed for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <Zap className="h-6 w-6 text-cyan-400 mb-3" />
                <CardTitle className="text-white">ERP Solutions</CardTitle>
                <CardDescription className="text-gray-400">
                  Hotel, school & gym ERP systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Hotel Management
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  School ERP
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Gym Software
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <Globe className="h-6 w-6 text-blue-400 mb-3" />
                <CardTitle className="text-white">AI Solutions</CardTitle>
                <CardDescription className="text-gray-400">
                  Automation & intelligence
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Text-to-Video AI
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  3D Generation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  ML Consulting
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <Shield className="h-6 w-6 text-purple-400 mb-3" />
                <CardTitle className="text-white">Game Development</CardTitle>
                <CardDescription className="text-gray-400">
                  Mobile, Web, AR/VR
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Mobile Games
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Web Games
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  AR / VR
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          Let’s build something powerful together
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="border-cyan-500/30 text-cyan-400"
          >
            Schedule Demo
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
