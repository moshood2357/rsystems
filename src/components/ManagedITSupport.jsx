"use client"
import { useState } from "react"
import {
  Shield,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  Server,
  Headphones,
  Lock,
  TrendingUp,
  ArrowRight,
  Globe,
  Database,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Monitor,
  Wifi,
  HardDrive,
  Cloud,
  Settings,
  
} from "lucide-react"


import { Link } from 'react-router-dom';

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

export default function ManagedITSupport() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0)

   const services = [
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "Managed IT support",
      description: "We manage your IT. You grow. 24/7 UK support.",
      href: "/support"

    },
    {
      icon: <Wifi className="h-5 w-5" />,
      title: "Cybersecurity services",
      description: "Block threats with next-gen security.",
        href: "/cybersecurity"

    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Cloud & Infrastructure Management",
      description: "Secure, streamline, and scale with cloud.",
      href: "/cloud"

    },
    {
      icon: <HardDrive className="h-5 w-5" />,
      title: "IT consultancy",
      description: "Align tech with goals.",
      href: "/consultancy"

    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: "Compliance & Governace",
      description: "Stay secure and compliant.",
      href: "/compliance"

    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Device & Endpoint Management",
      description: "Secure and manage devices.",
      href: "/protection"

    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "TechFlow Solutions",
      role: "CEO",
      rating: 5,
      comment:
        "Since partnering with their managed IT services, our downtime has decreased by 90%. Their proactive monitoring caught issues before they became problems.",
      employees: "50-100",
      industry: "Software Development",
    },
    {
      name: "Lisa Chen",
      company: "Healthcare Partners",
      role: "Operations Director",
      rating: 5,
      comment:
        "The 24/7 support has been invaluable. When our systems went down at 2 AM, they had us back online within 30 minutes.",
      employees: "100-250",
      industry: "Healthcare",
    },
    {
      name: "Robert Johnson",
      company: "Manufacturing Corp",
      role: "IT Manager",
      rating: 5,
      comment:
        "Their cybersecurity expertise has kept us compliant and secure. The monthly reports give us complete visibility into our IT infrastructure.",
      employees: "250-500",
      industry: "Manufacturing",
    },
    {
      name: "Amanda Foster",
      company: "Legal Associates",
      role: "Managing Partner",
      rating: 5,
      comment:
        "Cost-effective solution that eliminated the need for a full-time IT staff. We get enterprise-level support at a fraction of the cost.",
      employees: "25-50",
      industry: "Legal Services",
    },
  ]

  const coreServices = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "24/7 Network Monitoring",
      description:
        "Continuous monitoring of your IT infrastructure with real-time alerts and proactive issue resolution.",
      features: ["Real-time monitoring", "Automated alerts", "Performance optimization", "Capacity planning"],
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Help Desk Support",
      description: "Dedicated support team available around the clock to resolve technical issues and user requests.",
      features: ["24/7 availability", "Multi-channel support", "Ticket management", "Remote assistance"],
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Cybersecurity Management",
      description:
        "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: ["Threat detection", "Security audits", "Compliance management", "Employee training"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Backup & Recovery",
      description: "Automated backup solutions with rapid recovery capabilities to ensure business continuity.",
      features: ["Automated backups", "Cloud storage", "Disaster recovery", "Regular testing"],
    },
  ]

  const comparisonData = [
    {
      feature: "Initial Setup Cost",
      managed: "Low - No upfront investment",
      inhouse: "High - Equipment & hiring costs",
    },
    {
      feature: "Monthly Operating Cost",
      managed: "Predictable monthly fee",
      inhouse: "Variable - Salaries, benefits, training",
    },
    {
      feature: "Expertise Level",
      managed: "Team of specialists",
      inhouse: "Limited to hired staff knowledge",
    },
    {
      feature: "24/7 Availability",
      managed: "Always available",
      inhouse: "Limited to business hours",
    },
    {
      feature: "Technology Updates",
      managed: "Included in service",
      inhouse: "Additional cost and time",
    },
    {
      feature: "Scalability",
      managed: "Instant scaling",
      inhouse: "Requires hiring and training",
    },
  ]

  const pricingTiers = [
    {
      name: "Essential",
      price: "\u00A399",
      period: "per user/month",
      description: "Perfect for small businesses getting started",
      features: ["24/7 monitoring", "Help desk support", "Basic security", "Monthly reports", "Email support"],
      popular: false,
    },
    {
      name: "Professional",
      price: "\u00A3149",
      period: "per user/month",
      description: "Comprehensive IT management for growing businesses",
      features: [
        "Everything in Essential",
        "Advanced security",
        "Data backup & recovery",
        "Priority support",
        "Quarterly reviews",
        "Compliance assistance",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "On-site support",
        "Strategic IT planning",
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
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-green-100 text-green-800">
                  Enterprise-Grade Support
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Managed IT Support Services
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive IT management and support services that keep your business running smoothly. Get
                enterprise-level IT infrastructure without the enterprise costs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to = "/contact">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Request Consultation
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Get Custom Quote
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">System Health</div>
                    <div className="text-xs text-green-600">Optimal</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-800">Network Status</div>
                    <div className="text-xs text-blue-600">Connected</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Server Performance</span>
                    <span className="text-sm text-green-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete IT Management Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our managed IT services provide comprehensive support for all your technology needs, from infrastructure
              monitoring to cybersecurity and user support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
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

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Managed IT vs. In-House IT</h2>
              <p className="text-lg text-gray-600">
                See how managed IT services compare to maintaining an in-house IT department
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Feature</div>
                <div className="text-center text-blue-600">Managed IT Support</div>
                <div className="text-center">In-House IT</div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-green-600 font-medium">{row.managed}</div>
                  <div className="text-center text-gray-600">{row.inhouse}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                See How Much You Can Save
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Service Coverage</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed service offerings designed to keep your business technology running smoothly
              </p>
            </div>

            <Tabs defaultValue="monitoring" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
                <TabsTrigger value="backup">Backup</TabsTrigger>
              </TabsList>

              <TabsContent value="monitoring" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Proactive Network Monitoring</h3>
                    <p className="text-gray-600 mb-6">
                      Our advanced monitoring systems watch your IT infrastructure 24/7, identifying and resolving
                      issues before they impact your business operations.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Real-time Alerts</div>
                          <div className="text-sm text-gray-600">Instant notifications for any system anomalies</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Performance Analytics</div>
                          <div className="text-sm text-gray-600">Detailed insights into system performance trends</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Automated Resolution</div>
                          <div className="text-sm text-gray-600">
                            Many issues resolved automatically without downtime
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Server className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                      <div className="text-gray-700 font-semibold">Uptime Guarantee</div>
                      <div className="text-sm text-gray-600 mt-2">
                        Industry-leading uptime with proactive monitoring
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Lock className="h-16 w-16 text-red-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-red-600 mb-2">Zero</div>
                      <div className="text-gray-700 font-semibold">Security Breaches</div>
                      <div className="text-sm text-gray-600 mt-2">Track record of protecting client data</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Cybersecurity</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive security solutions that protect your business from evolving cyber threats while
                      ensuring compliance with industry regulations.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Threat Detection & Response</div>
                          <div className="text-sm text-gray-600">AI-powered threat identification and mitigation</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Compliance Management</div>
                          <div className="text-sm text-gray-600">HIPAA, SOX, PCI-DSS compliance assistance</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Employee Training</div>
                          <div className="text-sm text-gray-600">Security awareness training for your team</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="support" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Help Desk Support</h3>
                    <p className="text-gray-600 mb-6">
                      Round-the-clock technical support from certified professionals who understand your business and
                      can resolve issues quickly and efficiently.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Multi-Channel Support</div>
                          <div className="text-sm text-gray-600">Phone, email, chat, and remote assistance</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Priority Ticketing</div>
                          <div className="text-sm text-gray-600">Intelligent routing based on urgency and impact</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Knowledge Base</div>
                          <div className="text-sm text-gray-600">Self-service portal for common issues</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Headphones className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">{"<15"}</div>
                      <div className="text-gray-700 font-semibold">Minutes Response</div>
                      <div className="text-sm text-gray-600 mt-2">Average response time for critical issues</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="backup" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Database className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                      <div className="text-gray-700 font-semibold">Recovery Success</div>
                      <div className="text-sm text-gray-600 mt-2">Proven data recovery track record</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Backup & Recovery</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive backup solutions with rapid recovery capabilities ensure your business data is
                      always protected and accessible when you need it.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Automated Daily Backups</div>
                          <div className="text-sm text-gray-600">Set-and-forget backup scheduling</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Cloud & Local Storage</div>
                          <div className="text-sm text-gray-600">Hybrid backup strategy for maximum protection</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Disaster Recovery Planning</div>
                          <div className="text-sm text-gray-600">Complete business continuity strategies</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their IT operations with our managed services
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
                      <div className="text-sm font-medium text-blue-600">{testimonials[activeTestimonial].company}</div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                    <Badge variant="outline">{testimonials[activeTestimonial].employees} employees</Badge>
                    <Badge variant="outline">{testimonials[activeTestimonial].industry}</Badge>
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
                    activeTestimonial === index ? "bg-blue-600" : "bg-gray-300"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing Plans</h2>
            <p className="text-lg text-gray-600">
              Choose the managed IT support plan that fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-blue-600 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
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
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${
                      tier.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We can tailor our services to your specific requirements.
            </p>
            <Button variant="outline" size="lg">
              Schedule a Custom Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our managed IT support services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What's included in managed IT support?</AccordionTrigger>
                <AccordionContent>
                  Our managed IT support includes 24/7 network monitoring, help desk support, cybersecurity management,
                  data backup and recovery, software updates, hardware maintenance, and strategic IT planning. The
                  specific services depend on your chosen plan.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly do you respond to support requests?</AccordionTrigger>
                <AccordionContent>
                  We guarantee response times based on issue severity: Critical issues receive response within 15
                  minutes, high priority within 1 hour, medium priority within 4 hours, and low priority within 24
                  hours. Our 24/7 monitoring often resolves issues before you even notice them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can you work with our existing IT infrastructure?</AccordionTrigger>
                <AccordionContent>
                  We work with all major technology platforms and can integrate with your existing infrastructure. Our
                  team will conduct a comprehensive assessment and create a transition plan that minimizes disruption to
                  your business operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if we need to scale up or down?</AccordionTrigger>
                <AccordionContent>
                  Our managed IT services are designed to scale with your business. You can easily add or remove users,
                  upgrade service levels, or adjust coverage as your needs change. We offer flexible contracts and can
                  accommodate both growth and downsizing scenarios.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do you ensure data security and compliance?</AccordionTrigger>
                <AccordionContent>
                  We implement multi-layered security measures including advanced threat detection, regular security
                  audits, employee training, and compliance management for standards like HIPAA, SOX, and PCI-DSS. All
                  our technicians are certified and follow strict security protocols.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What's your uptime guarantee?</AccordionTrigger>
                <AccordionContent>
                  We provide a 99.9% uptime Service Level Agreement (SLA). If we fail to meet this commitment, you'll
                  receive service credits. Our proactive monitoring and redundant systems help us consistently exceed
                  this guarantee for our clients.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
                
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your IT Operations?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of businesses that have improved their efficiency and reduced IT costs with our managed
              support services. Get started with a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to = "/contact">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Free Consultation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call: (555) 123-4567
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No long-term contracts
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                30-day money-back guarantee
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free migration assistance
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
