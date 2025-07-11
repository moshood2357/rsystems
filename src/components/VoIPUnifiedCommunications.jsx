"use client"
import { useState } from "react"
import {
  Phone,
  CheckCircle,
  Star,
  Calendar,
  ArrowRight,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
  TrendingUp,
  Shield,
  ChevronDown,
  FileText,
  Target,
  MessageSquare,
  Video,
  Users,
} from "lucide-react"


import { Link } from 'react-router-dom';

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

export default function VoIPUnifiedCommunications() {
  const services = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Managed IT support",
      description: "We manage your IT. You grow. 24/7 UK support.",
      href: "/support",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Cybersecurity services",
      description: "Block threats with next-gen security.",
      href: "/cybersecurity",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Cloud & Infrastructure Management",
      description: "Secure, streamline, and scale with cloud.",
      href: "/cloud",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "IT consultancy",
      description: "Align tech with goals.",
      href: "/consultancy",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Compliance & Governace",
      description: "Stay secure and compliant.",
      href: "/compliance",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Device & Endpoint Management",
      description: "Secure and manage devices.",
      href: "/protection",
    },
  ]

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    {
      name: "Michael Thompson",
      company: "TechFlow Solutions",
      role: "Communications Director",
      rating: 5,
      comment:
        "Communication costs reduced by 60% while improving call quality and adding video conferencing. The unified platform transformed how our remote teams collaborate.",
      employees: "100-250",
      industry: "Technology Services",
      achievement: "60% Cost Reduction",
    },
    {
      name: "Sarah Williams",
      company: "Global Manufacturing Corp",
      role: "Operations Manager",
      rating: 5,
      comment:
        "Connecting 20 locations with seamless communication was challenging. Now all sites have unified calling, messaging, and video with crystal-clear quality.",
      employees: "500-1000",
      industry: "Manufacturing",
      achievement: "20 Sites Connected",
    },
    {
      name: "David Chen",
      company: "Financial Partners Ltd",
      role: "IT Director",
      rating: 5,
      comment:
        "Security and compliance were critical for our financial communications. Their VoIP solution meets all regulatory requirements with encrypted calls and audit trails.",
      employees: "200-500",
      industry: "Financial Services",
      achievement: "100% Compliance",
    },
    {
      name: "Lisa Rodriguez",
      company: "Healthcare Network Plus",
      role: "Communications Manager",
      rating: 5,
      comment:
        "HIPAA-compliant communications across all departments. Secure messaging, encrypted calls, and integrated patient communication systems work flawlessly.",
      employees: "300-750",
      industry: "Healthcare",
      achievement: "HIPAA Compliant",
    },
  ]

  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const coreServices = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "VoIP Phone Systems",
      description:
        "Advanced cloud-based phone systems with HD voice quality, auto-attendant, call routing, and comprehensive call management features.",
      features: ["HD voice quality", "Auto-attendant", "Call routing", "Mobile integration"],
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Conferencing",
      description:
        "Professional video conferencing solutions with screen sharing, recording capabilities, and seamless integration across all devices.",
      features: ["HD video quality", "Screen sharing", "Meeting recording", "Multi-device support"],
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Unified Messaging",
      description:
        "Integrated messaging platform combining instant messaging, SMS, voicemail, and email in one unified communication hub.",
      features: ["Instant messaging", "SMS integration", "Voicemail to email", "Message archiving"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description:
        "Comprehensive collaboration tools including file sharing, project workspaces, presence indicators, and team communication channels.",
      features: ["File sharing", "Team workspaces", "Presence indicators", "Channel communication"],
    },
  ]

  const comparisonData = [
    {
      feature: "Communication Costs",
      unified: "60-80% cost reduction",
      traditional: "High monthly phone bills",
    },
    {
      feature: "System Integration",
      unified: "Single unified platform",
      traditional: "Multiple separate systems",
    },
    {
      feature: "Remote Work Support",
      unified: "Full mobile & remote access",
      traditional: "Limited remote capabilities",
    },
    {
      feature: "Scalability",
      unified: "Instant user addition/removal",
      traditional: "Hardware-dependent scaling",
    },
    {
      feature: "Feature Updates",
      unified: "Automatic cloud updates",
      traditional: "Manual system upgrades",
    },
    {
      feature: "Maintenance",
      unified: "Zero on-site maintenance",
      traditional: "Regular hardware maintenance",
    },
  ]

  const pricingTiers = [
    {
      name: "VoIP Essentials",
      price: "\u00A325",
      period: "per user/month",
      description: "Basic VoIP calling for small businesses",
      features: [
        "HD voice calling",
        "Voicemail to email",
        "Call forwarding",
        "Mobile app access",
        "Basic auto-attendant",
      ],
      popular: false,
    },
    {
      name: "Unified Professional",
      price: "\u00A345",
      period: "per user/month",
      description: "Complete unified communications solution",
      features: [
        "Everything in Essentials",
        "Video conferencing",
        "Team messaging",
        "File sharing",
        "Advanced call features",
        "CRM integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise Communications",
      price: "Custom",
      period: "pricing",
      description: "Advanced communications for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support manager",
        "Custom integrations",
        "Advanced analytics",
        "Compliance features",
        "Priority support",
      ],
      popular: false,
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const products = [
  { title: "CRM", href: "https://crm.r2systemsolution.co.uk/login" },
  { title: "Loan App", href: "/products/product-b" },
];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to = "/">
              <div className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                   <span className="text-white font-bold text-lg">R2</span>
                </div> */}
                <div>
                  <img src = "/CompanyLogo.jpeg" alt = "logo" style={{height: "50px"}}/>
                  {/* <h1 className="font-bold text-xl text-gray-900">R2 System Solution</h1>
                  <p className="text-sm text-gray-600">IT Solutions & Support</p> */}
                </div>
              </div>
            </Link>
            

             <nav className="hidden md:flex items-center space-x-8">
              <Link to ="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                            {service.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-gray-900 text-sm group-hover/item:text-blue-600 transition-colors">
                              {service.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        to ="/services"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        View All Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
               {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Products Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="p-2">
                    <a
                      href="https://crm.r2systemsolution.co.uk/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      CRM
                    </a>
                    <a
                      href="https://example.com/loan-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      Loan App
                    </a>
                  </div>
                  </div>
                  </div>
                  

              <Link to ="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About 
              </Link>
              {/* <AnchorLink href = "#testimonials"  className="text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </AnchorLink> */}
              <Link to ="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
               <a href="tel:01452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                 <Phone className="mr-2 h-6 w-6" />
                01452905204
              </a>
              <Link to = "/contact">
                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
              
            </nav>

             
            {/* Mobile menu button */}
            <Button variant="ghost" className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                 <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
        {isMobileMenuOpen && (
  <div className="md:hidden fixed inset-0 z-40 bg-white p-6 pt-40 flex flex-col space-y-4 overflow-y-auto">
    <Link to ="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
      Home
    </Link>

    {/* Services Dropdown */}
    <div className="flex flex-col space-y-2">
      <button
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        className="flex justify-between items-center text-gray-700 hover:text-blue-600 text-lg font-medium"
      >
        Services
        <ChevronDown
          className={`h-5 w-5 transform transition-transform ${
            isServicesOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isServicesOpen && (
        <div className="flex flex-col space-y-2 pl-4 border-l border-gray-200">
          {services.map((service, idx) => (
            <Link
              key={idx}
              to={service.href || "/services"}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 text-base"
            >
              {service.title}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-blue-600 hover:underline text-base font-medium mt-2"
          >
            View All Services
          </Link>
        </div>
      )}
    </div>
    {/* Products Dropdown */}
    <div className="flex flex-col space-y-2">
      <button
        onClick={() => setIsProductsOpen(!isProductsOpen)}
        className="flex justify-between items-center text-gray-700 hover:text-blue-600 text-lg font-medium"
      >
        Products
        <ChevronDown className={`h-5 w-5 transform transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
      </button>
      {isProductsOpen && (
        <div className="flex flex-col space-y-2 pl-4 border-l border-gray-200">
          {products.map((product, idx) => (
            <a
              key={idx}
              href={product.href || "/products"}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 text-base"
            >
              {product.title}
            </a>
          ))}
        </div>
      )}
    </div>

    <Link
      to="/about"
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-gray-700 hover:text-blue-600 text-lg font-medium"
    >
      About
    </Link>

    <Link
      to="/contact"
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-gray-700 hover:text-blue-600 text-lg font-medium"
    >
      Contact
    </Link>
    <a href="tel:01452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
       <Phone className="mr-2 h-6 w-6" />
       01452905204
    </a>

    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">
        Get Quote
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
)}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-teal-600 p-3 rounded-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-teal-100 text-teal-800">
                  VoIP & Unified Communications
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                VoIP & Unified Communications
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business communications with advanced VoIP and unified communication solutions. 
                Reduce costs, improve collaboration, and enable seamless communication across all devices and locations.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Cost Savings:</strong> Our clients typically achieve 60-80% reduction in communication costs 
                    and 50% improvement in team collaboration with unified communications.
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to = "/VoIPcommunication">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Free Communications Assessment
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  VoIP Demo
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">70%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-teal-50 p-4 rounded-lg text-center">
                    <Phone className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-teal-800">Call Quality</div>
                    <div className="text-xs text-teal-600">HD Voice</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Video className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-800">Video Calls</div>
                    <div className="text-xs text-blue-600">Active</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">System Reliability</span>
                      <span className="text-sm text-teal-600">99.9% Uptime</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: "99%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">User Satisfaction</span>
                      <span className="text-sm text-blue-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communications Statistics */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">78%</div>
              <div className="text-sm text-gray-300">Of businesses overpay for traditional phone systems</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">$1,200</div>
              <div className="text-sm text-gray-300">Average annual savings per employee with VoIP</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">3.2x</div>
              <div className="text-sm text-gray-300">Productivity increase with unified communications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">{"<"}2hrs</div>
              <div className="text-sm text-gray-300">Our deployment time for new users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Communication Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive VoIP and unified communication services that integrate voice, video, messaging, and collaboration 
              tools into one seamless platform for enhanced productivity and reduced costs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-teal-500 flex-shrink-0" />
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

      {/* Unified vs Traditional Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unified vs. Traditional Communications
              </h2>
              <p className="text-lg text-gray-600">
                See how unified communications compare to traditional phone systems and separate communication tools
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Communication Aspect</div>
                <div className="text-center text-teal-600">Unified Communications</div>
                <div className="text-center text-gray-600">Traditional Systems</div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-teal-600 font-medium">{row.unified}</div>
                  <div className="text-center text-gray-600">{row.traditional}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Calculate Your Communication Savings
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Communication Services</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed VoIP and unified communication services designed to transform your business communications
              </p>
            </div>
            <Tabs defaultValue="voip" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="voip">VoIP Systems</TabsTrigger>
                <TabsTrigger value="video">Video Conferencing</TabsTrigger>
                <TabsTrigger value="messaging">Unified Messaging</TabsTrigger>
                <TabsTrigger value="collaboration">Team Collaboration</TabsTrigger>
              </TabsList>
              <TabsContent value="voip" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">VoIP Phone Systems</h3>
                    <p className="text-gray-600 mb-6">
                      Advanced cloud-based phone systems with HD voice quality, intelligent call routing, auto-attendant, 
                      and comprehensive call management features that work seamlessly across all devices.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">HD Voice Quality</div>
                          <div className="text-sm text-gray-600">Crystal-clear audio with advanced codecs</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Smart Call Routing</div>
                          <div className="text-sm text-gray-600">Intelligent call distribution and forwarding</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Mobile Integration</div>
                          <div className="text-sm text-gray-600">Seamless mobile and desktop applications</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Phone className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-teal-600 mb-2">HD</div>
                      <div className="text-gray-700 font-semibold">Voice Quality</div>
                      <div className="text-sm text-gray-600 mt-2">Crystal-clear communications</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="video" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Video className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">4K</div>
                      <div className="text-gray-700 font-semibold">Video Quality</div>
                      <div className="text-sm text-gray-600 mt-2">Professional video conferencing</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Conferencing</h3>
                    <p className="text-gray-600 mb-6">
                      Professional video conferencing solutions with HD video quality, screen sharing, meeting recording, 
                      and seamless integration across all devices and platforms for enhanced collaboration.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">HD Video Quality</div>
                          <div className="text-sm text-gray-600">Up to 4K video resolution for clear meetings</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Screen Sharing</div>
                          <div className="text-sm text-gray-600">Share screens, applications, and documents</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Meeting Recording</div>
                          <div className="text-sm text-gray-600">Automatic recording and cloud storage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="messaging" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Unified Messaging</h3>
                    <p className="text-gray-600 mb-6">
                      Integrated messaging platform that combines instant messaging, SMS, voicemail, and email into one 
                      unified communication hub with advanced search and archiving capabilities.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Instant Messaging</div>
                          <div className="text-sm text-gray-600">Real-time team and individual messaging</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">SMS Integration</div>
                          <div className="text-sm text-gray-600">Send and receive SMS from business number</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Voicemail to Email</div>
                          <div className="text-sm text-gray-600">Automatic voicemail transcription and delivery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <MessageSquare className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">All-in-One</div>
                      <div className="text-gray-700 font-semibold">Messaging Hub</div>
                      <div className="text-sm text-gray-600 mt-2">Unified communication platform</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="collaboration" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">Team</div>
                      <div className="text-gray-700 font-semibold">Collaboration</div>
                      <div className="text-sm text-gray-600 mt-2">Enhanced productivity tools</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Collaboration</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive collaboration tools including file sharing, project workspaces, presence indicators, 
                      and team communication channels that enhance productivity and streamline workflows.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">File Sharing</div>
                          <div className="text-sm text-gray-600">Secure document sharing and collaboration</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Team Workspaces</div>
                          <div className="text-sm text-gray-600">Dedicated spaces for project collaboration</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Presence Indicators</div>
                          <div className="text-sm text-gray-600">Real-time availability and status updates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Communication Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how businesses have transformed their communications and reduced costs with our VoIP and unified solutions
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8">
                <CardContent className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    "{testimonials[activeTestimonial].comment}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</div>
                      <div className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</div>
                      <div className="text-sm font-medium text-teal-600">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                    <Badge variant="outline">{testimonials[activeTestimonial].employees} employees</Badge>
                    <Badge variant="outline">{testimonials[activeTestimonial].industry}</Badge>
                    <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                      {testimonials[activeTestimonial].achievement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? "bg-teal-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">VoIP & Communications Plans</h2>
            <p className="text-lg text-gray-600">
              Flexible communication plans designed to meet your business needs and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-teal-600 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-teal-600 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    {tier.period && <span className="text-gray-600 ml-1">/{tier.period}</span>}
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-teal-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      tier.popular ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {tier.name === "Enterprise Communications" ? "Contact Communications Team" : "Start VoIP Service"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need custom communication solutions? We design and implement systems tailored to your specific business requirements.
            </p>
            <Button variant="outline" size="lg">
              Schedule Communications Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">VoIP & Communications Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about VoIP and unified communication services
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does VoIP compare to traditional phone systems in terms of cost?</AccordionTrigger>
                <AccordionContent>
                  VoIP typically reduces communication costs by 60-80% compared to traditional phone systems. You eliminate 
                  expensive hardware, reduce monthly service fees, and benefit from free internal calls and low-cost 
                  international calling. Additional savings come from reduced maintenance costs and the ability to use 
                  existing internet infrastructure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What internet speed do I need for reliable VoIP service?</AccordionTrigger>
                <AccordionContent>
                  For optimal VoIP quality, we recommend at least 100 kbps upload and download speed per concurrent call. 
                  For a typical office with 10 users, a 5 Mbps connection is sufficient. We provide network assessment 
                  and optimization services to ensure your internet connection can support high-quality VoIP communications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I keep my existing phone numbers when switching to VoIP?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can keep all your existing phone numbers through number porting. We handle the entire porting 
                  process, which typically takes 2-5 business days. During the transition, we ensure there's no service 
                  interruption, and your customers won't notice any difference in how they reach you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How reliable is VoIP compared to traditional phone service?</AccordionTrigger>
                <AccordionContent>
                  Modern VoIP systems are extremely reliable, often more so than traditional phone systems. We provide 
                  99.9% uptime SLA with redundant data centers, automatic failover, and backup internet connections. 
                  Our cloud-based infrastructure eliminates single points of failure common in traditional phone systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What features are included with unified communications?</AccordionTrigger>
                <AccordionContent>
                  Unified communications includes VoIP calling, video conferencing, instant messaging, file sharing, 
                  presence indicators, voicemail-to-email, call recording, auto-attendant, call forwarding, conference 
                  calling, mobile apps, and CRM integration. All features work seamlessly across desktop and mobile devices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>How quickly can VoIP service be deployed?</AccordionTrigger>
                <AccordionContent>
                  VoIP deployment is typically much faster than traditional phone systems. Basic service can be activated 
                  within 24-48 hours for existing internet connections. Complete deployment including number porting, 
                  user training, and advanced features usually takes 1-2 weeks. We provide project management and support 
                  throughout the entire process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transform Your Business Communications Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Reduce costs, improve collaboration, and enhance productivity with modern VoIP and unified communication solutions. 
              Get started with a free assessment and discover how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                <Calendar className="h-4 w-4 mr-2" />
                Free Communications Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call: 01452905204
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free system assessment
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No setup costs
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Keep existing numbers
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}