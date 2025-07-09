"use client"
import { useState } from "react"
import {
  Users,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  ArrowRight,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
  TrendingUp,
  Shield,
  ChevronDown,
  DollarSign,
  FileText,
  BarChart3,
  Target,
} from "lucide-react"

import { Link } from 'react-router-dom';


import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

export default function VendorManagement() {
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
      name: "Sarah Mitchell",
      company: "TechFlow Solutions",
      role: "Procurement Director",
      rating: 5,
      comment:
        "Vendor costs reduced by 32% while improving service quality. Their strategic vendor management transformed our procurement process and vendor relationships completely.",
      employees: "100-250",
      industry: "Technology Services",
      achievement: "32% Cost Reduction",
    },
    {
      name: "David Richardson",
      company: "Global Manufacturing Corp",
      role: "Supply Chain Manager",
      rating: 5,
      comment:
        "Managing 80+ vendors was chaotic before their system. Now we have complete visibility, standardized contracts, and vendors that actually perform to expectations.",
      employees: "500-1000",
      industry: "Manufacturing",
      achievement: "80+ Vendors Managed",
    },
    {
      name: "Jennifer Adams",
      company: "Financial Partners Ltd",
      role: "Operations Director",
      rating: 5,
      comment:
        "Vendor risk assessment identified critical issues we missed. Their proactive vendor management prevented 3 major service disruptions last year alone.",
      employees: "200-500",
      industry: "Financial Services",
      achievement: "Zero Service Disruptions",
    },
    {
      name: "Michael Torres",
      company: "Healthcare Network Plus",
      role: "Vendor Relations Manager",
      rating: 5,
      comment:
        "HIPAA compliance across all vendors was complex. Their vendor management ensures all suppliers meet regulatory standards with complete audit trails.",
      employees: "300-750",
      industry: "Healthcare",
      achievement: "100% Compliance",
    },
  ]

  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const coreServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Vendor Selection & Onboarding",
      description:
        "Strategic vendor assessment, selection, and comprehensive onboarding process with performance baseline establishment and contract negotiation.",
      features: ["Vendor assessment", "Due diligence", "Contract negotiation", "Onboarding process"],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Management",
      description:
        "Continuous vendor performance monitoring with KPI tracking, SLA management, and regular performance reviews to ensure optimal service delivery.",
      features: ["KPI tracking", "SLA monitoring", "Performance reviews", "Improvement plans"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Risk & Compliance Management",
      description:
        "Comprehensive vendor risk assessment, compliance monitoring, and risk mitigation strategies to protect your business from vendor-related risks.",
      features: ["Risk assessment", "Compliance monitoring", "Audit management", "Risk mitigation"],
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Optimization",
      description:
        "Strategic cost analysis, contract optimization, and spend management to maximize value and reduce vendor-related expenses across your organization.",
      features: ["Cost analysis", "Contract optimization", "Spend management", "Value maximization"],
    },
  ]

  const comparisonData = [
    {
      feature: "Vendor Oversight",
      managed: "Centralized vendor management",
      traditional: "Scattered vendor relationships",
    },
    {
      feature: "Contract Management",
      managed: "Standardized, optimized contracts",
      traditional: "Inconsistent contract terms",
    },
    {
      feature: "Performance Tracking",
      managed: "Real-time KPI monitoring",
      traditional: "Annual reviews only",
    },
    {
      feature: "Risk Management",
      managed: "Proactive risk assessment",
      traditional: "Reactive issue resolution",
    },
    {
      feature: "Cost Control",
      managed: "Strategic cost optimization",
      traditional: "Ad-hoc price negotiations",
    },
    {
      feature: "Compliance",
      managed: "Automated compliance monitoring",
      traditional: "Manual compliance checks",
    },
  ]

  const pricingTiers = [
    {
      name: "Vendor Essentials",
      price: "\u00A3449",
      period: "per month",
      description: "Basic vendor management for small businesses",
      features: [
        "Up to 10 vendor relationships",
        "Basic performance tracking",
        "Contract repository",
        "Monthly vendor reviews",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Vendor Professional",
      price: "\u00A3899",
      period: "per month",
      description: "Comprehensive vendor management solution",
      features: [
        "Unlimited vendor relationships",
        "Advanced performance analytics",
        "Risk assessment & monitoring",
        "Contract optimization",
        "Priority support",
        "Compliance management",
      ],
      popular: true,
    },
    {
      name: "Vendor Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Advanced vendor management for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated vendor manager",
        "Custom vendor strategies",
        "Executive reporting",
        "On-site vendor reviews",
        "Strategic vendor partnerships",
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

  const products = [
  { title: "CRM", href: "/products/product-a" },
  { title: "Loan app", href: "/products/product-b" },
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
                      href="https://example.com/cr"
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
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-purple-100 text-purple-800">
                  Strategic Vendor Management
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Vendor Management Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Optimize your vendor relationships with comprehensive management services. Reduce costs, improve performance, 
                and mitigate risks with strategic vendor partnership management and continuous oversight.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Cost Savings:</strong> Our clients typically achieve 25-35% cost reduction and 90% improvement 
                    in vendor performance with strategic vendor management.
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Free Vendor Assessment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Vendor Optimization
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">35%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">90%</div>
                  <div className="text-sm text-gray-600">Performance Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-purple-800">Vendor Status</div>
                    <div className="text-xs text-purple-600">All Performing</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-800">Performance</div>
                    <div className="text-xs text-blue-600">Excellent</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Cost Optimization</span>
                      <span className="text-sm text-purple-600">32% Saved</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Compliance Score</span>
                      <span className="text-sm text-blue-600">98% Compliant</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Statistics */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">73%</div>
              <div className="text-sm text-gray-300">Of businesses lack vendor performance visibility</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">$2.4M</div>
              <div className="text-sm text-gray-300">Average annual vendor overspend per company</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">4.2x</div>
              <div className="text-sm text-gray-300">ROI improvement with strategic vendor management</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">{"<"}24hrs</div>
              <div className="text-sm text-gray-300">Our vendor issue resolution time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Vendor Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end vendor management services from selection and onboarding to performance monitoring and cost optimization, 
              ensuring all vendor relationships deliver maximum value to your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
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
                        <CheckCircle className="h-4 w-4 mr-2 text-purple-500 flex-shrink-0" />
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

      {/* Managed vs Traditional Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Managed vs. Traditional Vendor Management
              </h2>
              <p className="text-lg text-gray-600">
                See how strategic vendor management compares to traditional ad-hoc vendor relationship approaches
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Vendor Management Aspect</div>
                <div className="text-center text-purple-600">Strategic Management</div>
                <div className="text-center text-gray-600">Traditional Approach</div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-purple-600 font-medium">{row.managed}</div>
                  <div className="text-center text-gray-600">{row.traditional}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Analyze Your Vendor Portfolio
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Vendor Services</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed vendor management services designed to optimize your vendor relationships and performance
              </p>
            </div>
            <Tabs defaultValue="selection" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="selection">Selection</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="risk">Risk & Compliance</TabsTrigger>
                <TabsTrigger value="optimization">Cost Optimization</TabsTrigger>
              </TabsList>
              <TabsContent value="selection" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Vendor Selection & Onboarding</h3>
                    <p className="text-gray-600 mb-6">
                      Strategic vendor assessment and selection process with comprehensive due diligence, contract negotiation, 
                      and structured onboarding to ensure optimal vendor partnerships from day one.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Vendor Assessment</div>
                          <div className="text-sm text-gray-600">Comprehensive capability and cultural fit evaluation</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Due Diligence</div>
                          <div className="text-sm text-gray-600">Financial, legal, and operational verification</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Contract Negotiation</div>
                          <div className="text-sm text-gray-600">Optimized terms and performance agreements</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Target className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Vendor Qualification</div>
                      <div className="text-sm text-gray-600 mt-2">Comprehensive vetting process</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="performance" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                      <div className="text-gray-700 font-semibold">Performance Improvement</div>
                      <div className="text-sm text-gray-600 mt-2">Average vendor performance increase</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Management</h3>
                    <p className="text-gray-600 mb-6">
                      Continuous vendor performance monitoring with KPI tracking, SLA management, and regular performance reviews 
                      to ensure optimal service delivery and value realization.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">KPI Tracking</div>
                          <div className="text-sm text-gray-600">Real-time performance metrics and dashboards</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">SLA Monitoring</div>
                          <div className="text-sm text-gray-600">Automated service level agreement tracking</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Performance Reviews</div>
                          <div className="text-sm text-gray-600">Regular assessments and improvement planning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="risk" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk & Compliance Management</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive vendor risk assessment and compliance monitoring to protect your organization from 
                      vendor-related risks while ensuring regulatory compliance across all vendor relationships.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Risk Assessment</div>
                          <div className="text-sm text-gray-600">Comprehensive vendor risk profiling and analysis</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Compliance Monitoring</div>
                          <div className="text-sm text-gray-600">Automated regulatory compliance tracking</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Risk Mitigation</div>
                          <div className="text-sm text-gray-600">Proactive risk reduction strategies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
                      <div className="text-gray-700 font-semibold">Risk Mitigation</div>
                      <div className="text-sm text-gray-600 mt-2">Vendor risk reduction rate</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="optimization" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <DollarSign className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                      <div className="text-gray-700 font-semibold">Cost Reduction</div>
                      <div className="text-sm text-gray-600 mt-2">Average vendor cost savings</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cost Optimization</h3>
                    <p className="text-gray-600 mb-6">
                      Strategic cost analysis and contract optimization to maximize value and reduce vendor-related expenses 
                      while maintaining or improving service quality and performance standards.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Cost Analysis</div>
                          <div className="text-sm text-gray-600">Detailed spend analysis and cost benchmarking</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Contract Optimization</div>
                          <div className="text-sm text-gray-600">Renegotiation and terms improvement</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Value Maximization</div>
                          <div className="text-sm text-gray-600">Strategic value engineering and optimization</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vendor Management Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how businesses have optimized costs and improved vendor performance with our management services
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
                      <div className="text-sm font-medium text-purple-600">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                    <Badge variant="outline">{testimonials[activeTestimonial].employees} employees</Badge>
                    <Badge variant="outline">{testimonials[activeTestimonial].industry}</Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
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
                    activeTestimonial === index ? "bg-purple-600" : "bg-gray-300"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vendor Management Plans</h2>
            <p className="text-lg text-gray-600">
              Comprehensive vendor management plans designed to optimize relationships and maximize value
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-purple-600 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-purple-600 text-white px-4 py-1">Most Popular</Badge>
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
                        <CheckCircle className="h-4 w-4 mr-3 text-purple-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      tier.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {tier.name === "Vendor Enterprise" ? "Contact Vendor Team" : "Start Vendor Management"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need custom vendor strategy? We design and manage vendor programs tailored to your specific industry and requirements.
            </p>
            <Button variant="outline" size="lg">
              Schedule Vendor Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Vendor Management Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about vendor management and optimization services
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do you assess and select the right vendors for our business?</AccordionTrigger>
                <AccordionContent>
                  Our vendor selection process includes comprehensive capability assessment, financial stability analysis, 
                  cultural fit evaluation, and reference checks. We evaluate vendors against your specific requirements, 
                  industry best practices, and strategic objectives to ensure optimal partnerships that align with your business goals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What kind of cost savings can we expect from vendor management?</AccordionTrigger>
                <AccordionContent>
                  Most clients achieve 25-35% cost reduction through strategic vendor management. Savings come from contract 
                  optimization, consolidated purchasing, performance-based pricing, elimination of redundant vendors, and 
                  improved negotiation strategies. We also identify hidden costs and implement value-based pricing models.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you monitor and improve vendor performance?</AccordionTrigger>
                <AccordionContent>
                  We implement comprehensive KPI dashboards with real-time monitoring, regular performance reviews, and 
                  SLA tracking. Our system includes automated alerts for performance issues, regular vendor scorecards, 
                  and improvement action plans. We conduct quarterly business reviews and annual strategic assessments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do you handle vendor risk and compliance management?</AccordionTrigger>
                <AccordionContent>
                  We conduct thorough risk assessments covering financial, operational, security, and compliance risks. 
                  Our platform monitors vendor compliance continuously, maintains audit trails, and provides risk mitigation 
                  strategies. We ensure all vendors meet regulatory requirements and industry standards relevant to your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can you help with contract negotiation and management?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide end-to-end contract lifecycle management including negotiation strategy, terms optimization, 
                  renewal management, and contract performance monitoring. Our legal and procurement experts ensure contracts 
                  protect your interests while maximizing value and minimizing risk.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What reporting and analytics do you provide?</AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive vendor performance dashboards, cost analysis reports, risk assessments, compliance 
                  status reports, and strategic vendor portfolio analytics. Reports are customizable and available in real-time 
                  through our client portal, with executive summaries and detailed operational metrics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transform Your Vendor Relationships Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Optimize your vendor portfolio with strategic management services. Get started with a free assessment 
              and discover how much you can save while improving vendor performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Calendar className="h-4 w-4 mr-2" />
                Free Vendor Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call: 01452905204
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free vendor portfolio analysis
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No setup costs
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Immediate cost optimization
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}