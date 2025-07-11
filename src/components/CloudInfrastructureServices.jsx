"use client"
import { useState } from "react"
import {
  Cloud,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  TrendingUp,
  ArrowRight,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Shield,
  Wifi,
  Monitor,
  HardDrive,
  ChevronDown,
} from "lucide-react"

import { Link } from 'react-router-dom';


import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

export default function CloudInfrastructureServices() {

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
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "RetailMax Corporation",
      role: "CTO",
      rating: 5,
      comment:
        "The cloud migration reduced our infrastructure costs by 40% while improving performance. Their team handled the entire transition seamlessly with zero downtime.",
      employees: "200-500",
      industry: "E-commerce",
      achievement: "40% Cost Reduction",
    },
    {
      name: "Maria Santos",
      company: "HealthTech Solutions",
      role: "IT Director",
      rating: 5,
      comment:
        "Auto-scaling during our product launch handled 10x traffic increase flawlessly. The cloud infrastructure adapted in real-time without any manual intervention.",
      employees: "100-250",
      industry: "Healthcare Technology",
      achievement: "10x Scale Handling",
    },
    {
      name: "James Wilson",
      company: "Financial Dynamics",
      role: "Infrastructure Manager",
      rating: 5,
      comment:
        "Multi-cloud strategy eliminated vendor lock-in concerns while optimizing costs across AWS, Azure, and GCP. Best decision we made for our infrastructure.",
      employees: "500-1000",
      industry: "Financial Services",
      achievement: "Multi-Cloud Success",
    },
    {
      name: "Sophie Chen",
      company: "StartupFlow",
      role: "Founder & CEO",
      rating: 5,
      comment:
        "From startup to scale-up, their cloud infrastructure grew with us. We went from 5 to 500 users without any infrastructure headaches or major investments.",
      employees: "10-50",
      industry: "SaaS Startup",
      achievement: "100x User Growth",
    },
  ]
  
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const coreServices = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Migration & Modernization",
      description:
        "Seamless migration from on-premises to cloud with application modernization and infrastructure optimization.",
      features: [
        "Migration planning",
        "Zero-downtime transitions",
        "Application refactoring",
        "Performance optimization",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Multi-Cloud Management",
      description:
        "Unified management across AWS, Azure, Google Cloud, and hybrid environments with cost optimization.",
      features: ["Multi-cloud strategy", "Vendor neutrality", "Cost optimization", "Unified monitoring"],
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Infrastructure Automation",
      description: "DevOps practices with Infrastructure as Code, CI/CD pipelines, and automated deployment workflows.",
      features: ["Infrastructure as Code", "CI/CD pipelines", "Automated scaling", "Configuration management"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cloud Security & Compliance",
      description:
        "Comprehensive cloud security with compliance management for regulated industries and data protection.",
      features: ["Security monitoring", "Compliance frameworks", "Data encryption", "Access management"],
    },
  ]

  const comparisonData = [
    {
      feature: "Infrastructure Costs",
      cloud: "30-50% reduction typical",
      onpremise: "High upfront & maintenance",
    },
    {
      feature: "Scalability",
      cloud: "Instant auto-scaling",
      onpremise: "Manual, time-consuming",
    },
    {
      feature: "Disaster Recovery",
      cloud: "Built-in redundancy",
      onpremise: "Expensive separate setup",
    },
    {
      feature: "Maintenance",
      cloud: "Managed by cloud provider",
      onpremise: "Full internal responsibility",
    },
    {
      feature: "Global Reach",
      cloud: "Worldwide in minutes",
      onpremise: "Requires physical presence",
    },
    {
      feature: "Innovation Speed",
      cloud: "Rapid deployment",
      onpremise: "Slow procurement cycles",
    },
  ]

  const pricingTiers = [
    {
      name: "Cloud Essentials",
      price: "\u00A3299",
      period: "per month",
      description: "Perfect for small businesses moving to the cloud",
      features: [
        "Cloud migration planning",
        "Basic monitoring & alerts",
        "Cost optimization reports",
        "Email support",
        "Monthly health checks",
      ],
      popular: false,
    },
    {
      name: "Cloud Professional",
      price: "\u00A3599",
      period: "per month",
      description: "Comprehensive cloud management for growing companies",
      features: [
        "Everything in Essentials",
        "Multi-cloud management",
        "24/7 monitoring & support",
        "Infrastructure automation",
        "DevOps consulting",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Cloud Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Full-scale cloud operations for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated cloud architect",
        "Custom automation workflows",
        "Advanced security & compliance",
        "Executive reporting",
        "On-site consulting",
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
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-blue-100 text-blue-800">
                  Cloud-Native Solutions
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Cloud & Infrastructure Management
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with modern cloud infrastructure. Scalable, secure, and cost-effective cloud
                solutions that grow with your business needs and accelerate innovation.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-green-800">
                    <strong>Cost Savings:</strong> Our clients typically reduce infrastructure costs by 30-50% while
                    improving performance and scalability.
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to = "/infrastructure">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Free Cloud Assessment
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Migration Consultation
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.99%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">40%</div>
                  <div className="text-sm text-gray-600">Avg Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-800">Cloud Status</div>
                    <div className="text-xs text-blue-600">Optimized</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Performance</div>
                    <div className="text-xs text-green-600">Excellent</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Resource Utilization</span>
                      <span className="text-sm text-green-600">Optimized</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Cost Efficiency</span>
                      <span className="text-sm text-blue-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Benefits Stats */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
              <div className="text-sm text-gray-300">Of enterprises use cloud services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">23%</div>
              <div className="text-sm text-gray-300">Average cost reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">3.2x</div>
              <div className="text-sm text-gray-300">Faster time to market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Cloud reliability average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Cloud Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud infrastructure management from migration planning to ongoing optimization, security, and
              support across all major cloud platforms.
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

      {/* Cloud vs On-Premise Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cloud vs. On-Premise Infrastructure</h2>
              <p className="text-lg text-gray-600">
                See how cloud infrastructure compares to traditional on-premise solutions across key business factors
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Business Factor</div>
                <div className="text-center text-blue-600">Cloud Infrastructure</div>
                <div className="text-center text-gray-600">On-Premise</div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-blue-600 font-medium">{row.cloud}</div>
                  <div className="text-center text-gray-600">{row.onpremise}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Calculate Your Cloud Savings
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Cloud Services</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed cloud infrastructure management services designed for modern businesses
              </p>
            </div>

            <Tabs defaultValue="migration" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="migration">Migration</TabsTrigger>
                <TabsTrigger value="management">Management</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="migration" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Migration & Modernization</h3>
                    <p className="text-gray-600 mb-6">
                      Strategic cloud migration with minimal disruption to your business operations. We assess, plan,
                      and execute migrations while modernizing applications for optimal cloud performance.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Migration Assessment</div>
                          <div className="text-sm text-gray-600">Comprehensive analysis of current infrastructure</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Zero-Downtime Migration</div>
                          <div className="text-sm text-gray-600">Seamless transition with business continuity</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Application Modernization</div>
                          <div className="text-sm text-gray-600">Optimize applications for cloud-native benefits</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Cloud className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">Zero</div>
                      <div className="text-gray-700 font-semibold">Downtime Migrations</div>
                      <div className="text-sm text-gray-600 mt-2">Seamless transition to the cloud</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="management" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">Multi</div>
                      <div className="text-gray-700 font-semibold">Cloud Management</div>
                      <div className="text-sm text-gray-600 mt-2">AWS, Azure, GCP unified control</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Cloud Management</h3>
                    <p className="text-gray-600 mb-6">
                      Unified management across multiple cloud providers with cost optimization, performance monitoring,
                      and strategic resource allocation to avoid vendor lock-in.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Unified Dashboard</div>
                          <div className="text-sm text-gray-600">Single pane of glass for all cloud resources</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Cost Optimization</div>
                          <div className="text-sm text-gray-600">Automated cost analysis and recommendations</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Vendor Neutrality</div>
                          <div className="text-sm text-gray-600">Avoid lock-in with multi-cloud strategy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automation" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Automation</h3>
                    <p className="text-gray-600 mb-6">
                      Modern DevOps practices with Infrastructure as Code, automated CI/CD pipelines, and intelligent
                      scaling that adapts to your business needs automatically.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Infrastructure as Code</div>
                          <div className="text-sm text-gray-600">Version-controlled, repeatable deployments</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">CI/CD Pipelines</div>
                          <div className="text-sm text-gray-600">Automated testing and deployment workflows</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Auto-Scaling</div>
                          <div className="text-sm text-gray-600">Dynamic resource allocation based on demand</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Settings className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Automated Deployments</div>
                      <div className="text-sm text-gray-600 mt-2">Zero manual intervention required</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                      <div className="text-gray-700 font-semibold">Security Monitoring</div>
                      <div className="text-sm text-gray-600 mt-2">Continuous cloud security oversight</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Security & Compliance</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive cloud security with continuous monitoring, compliance management, and advanced
                      threat protection designed specifically for cloud environments.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Cloud Security Posture</div>
                          <div className="text-sm text-gray-600">Continuous security configuration monitoring</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Compliance Frameworks</div>
                          <div className="text-sm text-gray-600">SOC 2, HIPAA, PCI-DSS, and more</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Identity & Access Management</div>
                          <div className="text-sm text-gray-600">Zero-trust security model implementation</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cloud Transformation Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how businesses have transformed their operations with our cloud infrastructure solutions
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
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cloud Management Plans</h2>
            <p className="text-lg text-gray-600">
              Flexible cloud infrastructure management plans that scale with your business growth
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
                    {tier.name === "Cloud Enterprise" ? "Contact Cloud Team" : "Start Cloud Journey"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom cloud architecture? We design solutions tailored to your specific requirements and scale.
            </p>
            <Button variant="outline" size="lg">
              Schedule Architecture Review
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cloud Infrastructure Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about cloud migration and infrastructure management
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does a typical cloud migration take?</AccordionTrigger>
                <AccordionContent>
                  Migration timelines vary based on complexity, but most small to medium businesses complete migration
                  within 4-8 weeks. Large enterprise migrations typically take 3-6 months. We provide detailed timelines
                  during the assessment phase and ensure minimal disruption to your operations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What cloud platforms do you support?</AccordionTrigger>
                <AccordionContent>
                  We support all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google
                  Cloud Platform (GCP), and hybrid cloud environments. We also specialize in multi-cloud strategies that
                  leverage the best features of each platform while avoiding vendor lock-in.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How much can I save by moving to the cloud?</AccordionTrigger>
                <AccordionContent>
                  Most businesses see 30-50% reduction in infrastructure costs, though savings vary based on current
                  setup and usage patterns. Beyond direct cost savings, you'll benefit from improved scalability,
                  reduced maintenance overhead, and faster deployment times. We provide detailed ROI analysis during
                  consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Is my data secure in the cloud?</AccordionTrigger>
                <AccordionContent>
                  Yes, cloud security often exceeds on-premise security. Major cloud providers invest billions in
                  security infrastructure. We implement additional security layers including encryption, access
                  controls, monitoring, and compliance frameworks. All data is encrypted in transit and at rest.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What happens if there's a cloud outage?</AccordionTrigger>
                <AccordionContent>
                  We design resilient architectures with redundancy across multiple availability zones and regions. Most
                  cloud providers offer 99.9%+ uptime SLAs. We implement disaster recovery and backup strategies to
                  ensure business continuity even in rare outage scenarios.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Can you help optimize our existing cloud costs?</AccordionTrigger>
                <AccordionContent>
                  We provide cloud cost optimization services for existing cloud deployments. This includes rightsizing
                  resources, implementing auto-scaling, optimizing storage tiers, and leveraging reserved instances.
                  Most clients see 20-40% cost reduction through optimization alone.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses that have modernized their operations with cloud infrastructure. Get started
              with a free assessment and see how much you can save while improving performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="h-4 w-4 mr-2" />
                Free Cloud Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call: (555) 123-CLOUD
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free migration planning
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No upfront costs
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                24/7 support included
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
