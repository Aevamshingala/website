import {
  Code2,
  Gamepad2,
  Cloud,
  Shield,
  BarChart3,
  Megaphone,
  Headphones,
  Lightbulb,
  Layers,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  icon: LucideIcon
  subServices: string[]
  exampleProjects: string[]
}

export const servicesData: Service[] = [
  {
    id: "development-engineering",
    title: "Development & Engineering",
    shortDescription: "Custom web, mobile, and AI-powered applications built for scale.",
    description:
      "End-to-end software development services delivering robust, scalable applications tailored to your business requirements.",
    icon: Code2,
    subServices: [
      "Web Application Development",
      "Mobile Application Development (iOS & Android)",
      "Custom Software Design & Deployment",
      "AI & Machine Learning Integration (Web & Mobile)",
    ],
    exampleProjects: ["Enterprise Workflow Automation Platform", "AI-Powered Business Management System"],
  },
  {
    id: "game-development",
    title: "Game Development",
    shortDescription: "Immersive gaming experiences across all platforms and engines.",
    description:
      "Full-cycle game development from concept to launch, delivering engaging experiences across mobile, PC, and web platforms.",
    icon: Gamepad2,
    subServices: [
      "Mobile Game Development",
      "PC & Web-Based Game Development",
      "2D & 3D Game Development",
      "Multiplayer & Real-Time Games",
      "Game Backend Development & APIs",
      "Unity & Unreal Engine Development",
      "Game UI/UX Design & Optimization",
      "Game Testing, Performance & Monetization",
    ],
    exampleProjects: ["Multiplayer Strategy Game Platform", "Real-Time Unity-Based Simulation System"],
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & Infrastructure",
    shortDescription: "Modern cloud architecture and automated deployment pipelines.",
    description:
      "Enterprise-grade cloud solutions and DevOps practices that ensure reliability, scalability, and operational excellence.",
    icon: Cloud,
    subServices: [
      "Cloud Architecture & Migration (AWS, Azure, GCP)",
      "DevOps Automation",
      "CI/CD Pipeline Setup",
      "Infrastructure Optimization & Scalability",
    ],
    exampleProjects: ["High-Availability Cloud Migration for SaaS", "Enterprise CI/CD Automation Framework"],
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    shortDescription: "Comprehensive protection and regulatory compliance solutions.",
    description:
      "Robust security frameworks and compliance support to protect your digital assets and meet industry regulations.",
    icon: Shield,
    subServices: [
      "Data Protection & Encryption",
      "Secure Authentication & Authorization",
      "Compliance Support (GDPR, HIPAA, SOC 2)",
      "Vulnerability Assessment & Penetration Testing",
    ],
    exampleProjects: ["Secure Enterprise Identity Platform", "Compliance-Ready Cloud Security Architecture"],
  },
  {
    id: "data-analytics",
    title: "Data, Analytics & Intelligence",
    shortDescription: "Transform raw data into actionable business intelligence.",
    description:
      "Advanced data solutions that unlock insights and drive data-driven decision making across your organization.",
    icon: BarChart3,
    subServices: [
      "Data Engineering & Database Architecture",
      "Business Intelligence Dashboards",
      "Data Analytics & Reporting",
      "Predictive Analytics & AI Insights",
      "Big Data Processing & Optimization",
    ],
    exampleProjects: ["Executive BI Dashboard Suite", "AI-Driven Predictive Analytics Engine"],
  },
  {
    id: "digital-marketing",
    title: "Digital Growth & Marketing",
    shortDescription: "Strategic digital marketing and conversion optimization.",
    description:
      "Data-driven digital marketing strategies that increase visibility, drive traffic, and maximize conversions.",
    icon: Megaphone,
    subServices: [
      "Search Engine Optimization (SEO)",
      "Technical SEO & Performance Audits",
      "Conversion Rate Optimization (CRO)",
      "Analytics Setup (Google Analytics, GTM)",
      "Content Strategy & Digital Consulting",
    ],
    exampleProjects: ["Enterprise SEO Growth Framework", "Data-Driven Conversion Optimization Program"],
  },
  {
    id: "maintenance-support",
    title: "Maintenance, Support & Monitoring",
    shortDescription: "Reliable 24/7 system monitoring and continuous improvements.",
    description:
      "Comprehensive support services ensuring your systems remain secure, performant, and always available.",
    icon: Headphones,
    subServices: [
      "24/7 System Monitoring & Incident Response",
      "Application Maintenance & Updates",
      "Performance & Uptime Management",
      "Bug Fixing & Continuous Improvements",
      "Dedicated Customer Support",
    ],
    exampleProjects: ["Managed Enterprise Application Support", "Real-Time Infrastructure Monitoring System"],
  },
  {
    id: "consulting-strategy",
    title: "Consulting & Strategy",
    shortDescription: "Expert guidance for digital transformation and technology roadmaps.",
    description:
      "Strategic consulting services that align technology initiatives with business objectives for maximum impact.",
    icon: Lightbulb,
    subServices: [
      "Digital Transformation Consulting",
      "Technology Roadmap Planning",
      "Product Strategy & MVP Development",
      "Startup & Enterprise Consulting",
      "Code Review & Technical Due Diligence",
    ],
    exampleProjects: ["Startup MVP Acceleration Program", "Enterprise Digital Transformation Blueprint"],
  },
  {
    id: "saas-engineering",
    title: "SaaS Product Engineering",
    shortDescription: "Scalable multi-tenant SaaS platforms built for growth.",
    description: "End-to-end SaaS development services creating scalable, secure, and monetizable software products.",
    icon: Layers,
    subServices: [
      "SaaS Architecture Design",
      "Multi-Tenant Application Development",
      "Subscription & Billing Systems",
      "SaaS Scalability & Optimization",
      "SaaS Security & Compliance",
    ],
    exampleProjects: ["Multi-Tenant SaaS Platform", "Subscription-Based Enterprise Software System"],
  },
]
