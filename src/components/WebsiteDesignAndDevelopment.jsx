"use client"
import {
  Code,
  LayoutTemplate,
  PenTool,
  Smartphone,
  Phone,
  Calendar,
  Globe,
  CheckCircle,
  Database,
} from "lucide-react"

import { Link } from 'react-router-dom'

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import ReadytoGetStarted from "./ReadytoGetStarted"

export default function WebsiteDesignAndDevelopment() {


  const services = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "Tailored UI/UX to capture your brand identity and engage users.",
      features: ["Responsive design", "Modern UI/UX", "Brand-focused visuals", "User-centric flows"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "High-performance websites built using modern frameworks and technologies.",
      features: ["React & Vue", "Headless CMS", "E-commerce", "Speed optimization"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO & Performance",
      description: "Optimized for search engines and lightning-fast performance.",
      features: ["SEO best practices", "Technical audits", "Fast load time", "Analytics integration"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Maintenance & Support",
      description: "Ongoing updates, bug fixes, and content changes to keep your site fresh.",
      features: ["Regular backups", "Content updates", "Security patches", "Dedicated support"],
    },
  ]

 

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-3 rounded-lg">
                <LayoutTemplate className="h-8 w-8 text-white" />
              </div>
              <Badge variant="secondary" className="text-sm bg-green-100 text-green-800">
                Custom-Crafted Websites
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Website Design & Development
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Beautiful, fast, and functional websites designed to drive results. Perfect for startups, brands, and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <a href="tel:01452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors">
                <Phone className="mr-2 h-6 w-6" />
                01452905204
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-8">
            <div className="text-center">
              <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Mobile-First Design</h3>
              <p className="text-gray-600 mt-2">Fully responsive across devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We cover everything you need — from idea to launch and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs, Comparison, Testimonials, Pricing, FAQ, CTA */}
      {/* ...continue based on structure from your `ManagedITSupport.jsx`... */}
      <ReadytoGetStarted />
    </div>
  )
}
