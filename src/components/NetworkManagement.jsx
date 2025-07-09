"use client"
import { useState } from "react"
import {
  Wifi,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  ArrowRight,
  Settings,
  ChevronLeft,
  ChevronRight,
  Network,
  Activity,
  Router,
  Monitor,
  HardDrive,
  ChevronDown,
  Zap,
  Shield,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

export default function NetworkManagement() {
  const services = [
    {
      icon: <Monitor className="h-5 w-5" />,
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
      icon: <Network className="h-5 w-5" />,
      title: "Cloud & Infrastructure Management",
      description: "Secure, streamline, and scale with cloud.",
      href: "/cloud",
    },
    {
      icon: <HardDrive className="h-5 w-5" />,
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
      icon: <Router className="h-5 w-5" />,
      title: "Device & Endpoint Management",
      description: "Secure and manage devices.",
      href: "/protection",
    },
  ]

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    {
      name: "Robert Johnson",
      company: "TechFlow Solutions",
      role: "IT Director",
      rating: 5,
      comment:
        "Network downtime dropped from 8 hours monthly to virtually zero. Their proactive monitoring caught issues before they affected our operations. Productivity increased by 25%.",
      employees: "100-250",
      industry: "Technology Services",
      achievement: "Zero Downtime",
    },
    {
      name: "Lisa Anderson",
      company: "Global Manufacturing Corp",
      role: "Operations Manager",
      rating: 5,
      comment:
        "Multi-site network integration was seamless. All 15 locations now operate as one unified network with consistent performance and security across the board.",
      employees: "500-1000",
      industry: "Manufacturing",
      achievement: "15 Sites Connected",
    },
    {
      name: "Mark Stevens",
      company: "Financial Partners Ltd",
      role: "CTO",
      rating: 5,
      comment:
        "Network security was our biggest concern. Their managed network services include advanced threat protection that blocked 99.7% of attempted intrusions last year.",
      employees: "200-500",
      industry: "Financial Services",
      achievement: "99.7% Threat Block Rate",
    },
    {
      name: "Jennifer Walsh",
      company: "Healthcare Network Plus",
      role: "Network Administrator",
      rating: 5,
      comment:
        "HIPAA compliance requirements were complex, but their network management ensures all data transmission meets regulatory standards with detailed audit trails.",
      employees: "300-750",
      industry: "Healthcare",
      achievement: "HIPAA Compliant",
    },
  ]

  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const coreServices = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Network Monitoring & Performance",
      description:
        "24/7 network monitoring with real-time performance analytics, bandwidth optimization, and proactive issue resolution.",
      features: ["Real-time monitoring", "Performance analytics", "Bandwidth optimization", "Proactive alerts"],
    },
    {
      icon: <Router className="h-8 w-8" />,
      title: "Infrastructure Management",
      description:
        "Complete network infrastructure management including routers, switches, firewalls, and wireless systems with centralized control.",
      features: ["Centralized management", "Hardware maintenance", "Configuration control", "Capacity planning"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Network Security Services",
      description:
        "Advanced network security with firewall management, intrusion detection, VPN services, and threat protection systems.",
      features: ["Firewall management", "Intrusion detection", "VPN services", "Threat protection"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Network Optimization",
      description:
        "Performance optimization services including traffic analysis, QoS implementation, and network design improvements.",
      features: ["Traffic analysis", "QoS implementation", "Design optimization", "Performance tuning"],
    },
  ]

  const comparisonData = [
    {
      feature: "Network Uptime",
      managed: "99.9% guaranteed uptime",
      traditional: "Reactive, frequent outages",
    },
    {
      feature: "Issue Detection",
      managed: "Proactive monitoring & alerts",
      traditional: "Problems discovered by users",
    },
    {
      feature: "Security Updates",
      managed: "Automated security patches",
      traditional: "Manual, delayed updates",
    },
    {
      feature: "Performance Optimization",
      managed: "Continuous optimization",
      traditional: "Periodic manual tuning",
    },
    {
      feature: "Scalability",
      managed: "Planned capacity expansion",
      traditional: "Reactive hardware purchases",
    },
    {
      feature: "Support Response",
      managed: "24/7 expert support",
      traditional: "Business hours only",
    },
  ]

  const pricingTiers = [
    {
      name: "Network Essentials",
      price: "\u00A3349",
      period: "per month",
      description: "Basic network management for small businesses",
      features: [
        "24/7 network monitoring",
        "Basic performance reports",
        "Email alerts",
        "Monthly health checks",
        "Remote support",
      ],
      popular: false,
    },
    {
      name: "Network Professional",
      price: "\u00A3699",
      period: "per month",
      description: "Comprehensive network management solution",
      features: [
        "Everything in Essentials",
        "Advanced security monitoring",
        "Performance optimization",
        "Priority support",
        "Network documentation",
        "Capacity planning",
      ],
      popular: true,
    },
    {
      name: "Network Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Advanced network management for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated network engineer",
        "Custom network design",
        "Advanced analytics",
        "Executive reporting",
        "On-site support",
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
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-green-100 text-green-800">
                  Network Infrastructure Management
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Network Management Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Optimize your network infrastructure with comprehensive management services. Ensure reliable
                connectivity, peak performance, and robust security with 24/7 monitoring and expert support.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Performance Boost:</strong> Our clients typically see 40% improvement in network performance
                    and 95% reduction in downtime with proactive management.
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Free Network Assessment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Network Optimization
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.9%</div>
                  <div className="text-sm text-gray-600">Network Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-sm text-gray-600">Performance Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <Wifi className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Network Status</div>
                    <div className="text-xs text-green-600">Optimal</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-800">Performance</div>
                    <div className="text-xs text-blue-600">Excellent</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Bandwidth Utilization</span>
                      <span className="text-sm text-green-600">Optimized</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Security Status</span>
                      <span className="text-sm text-blue-600">Protected</span>
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

      {/* Network Statistics */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">87%</div>
              <div className="text-sm text-gray-300">Of businesses experience network downtime monthly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">&pound;5,600</div>
              <div className="text-sm text-gray-300">Average cost per minute of downtime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2.5x</div>
              <div className="text-sm text-gray-300">Faster issue resolution with monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">{"<"}5min</div>
              <div className="text-sm text-gray-300">Our average response time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Network Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end network management services from monitoring and optimization to security and support, ensuring
              your network infrastructure operates at peak performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
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

      {/* Managed vs Traditional Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Managed vs. Traditional Network Management
              </h2>
              <p className="text-lg text-gray-600">
                See how managed network services compare to traditional in-house network management approaches
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Network Factor</div>
                <div className="text-center text-green-600">Managed Services</div>
                <div className="text-center text-gray-600">Traditional Management</div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-green-600 font-medium">{row.managed}</div>
                  <div className="text-center text-gray-600">{row.traditional}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                Analyze Your Network Performance
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Network Services</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed network management services designed to optimize your network infrastructure
              </p>
            </div>
            <Tabs defaultValue="monitoring" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="optimization">Optimization</TabsTrigger>
              </TabsList>
              <TabsContent value="monitoring" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Monitoring & Performance</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive 24/7 network monitoring with real-time performance analytics, bandwidth
                      optimization, and proactive issue detection to ensure optimal network performance.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Real-Time Monitoring</div>
                          <div className="text-sm text-gray-600">Continuous network performance tracking</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Performance Analytics</div>
                          <div className="text-sm text-gray-600">Detailed insights and trend analysis</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Proactive Alerts</div>
                          <div className="text-sm text-gray-600">Instant notification of potential issues</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Activity className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-gray-700 font-semibold">Network Monitoring</div>
                      <div className="text-sm text-gray-600 mt-2">Continuous performance oversight</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="infrastructure" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Router className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Infrastructure Control</div>
                      <div className="text-sm text-gray-600 mt-2">Complete network device management</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Management</h3>
                    <p className="text-gray-600 mb-6">
                      Complete network infrastructure management including routers, switches, firewalls, and wireless
                      systems with centralized control and automated maintenance.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Centralized Management</div>
                          <div className="text-sm text-gray-600">Single point of control for all devices</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Hardware Maintenance</div>
                          <div className="text-sm text-gray-600">Proactive maintenance and updates</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Capacity Planning</div>
                          <div className="text-sm text-gray-600">Strategic growth and expansion planning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="security" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Security Services</h3>
                    <p className="text-gray-600 mb-6">
                      Advanced network security with comprehensive firewall management, intrusion detection systems, VPN
                      services, and continuous threat monitoring and protection.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Firewall Management</div>
                          <div className="text-sm text-gray-600">Advanced firewall configuration and monitoring</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Intrusion Detection</div>
                          <div className="text-sm text-gray-600">Real-time threat detection and response</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">VPN Services</div>
                          <div className="text-sm text-gray-600">Secure remote access solutions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Shield className="h-16 w-16 text-red-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-red-600 mb-2">99.7%</div>
                      <div className="text-gray-700 font-semibold">Threat Block Rate</div>
                      <div className="text-sm text-gray-600 mt-2">Advanced security protection</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="optimization" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Zap className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                      <div className="text-gray-700 font-semibold">Performance Improvement</div>
                      <div className="text-sm text-gray-600 mt-2">Average optimization results</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Optimization</h3>
                    <p className="text-gray-600 mb-6">
                      Performance optimization services including traffic analysis, Quality of Service implementation,
                      network design improvements, and continuous performance tuning.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Traffic Analysis</div>
                          <div className="text-sm text-gray-600">Detailed network traffic pattern analysis</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">QoS Implementation</div>
                          <div className="text-sm text-gray-600">Priority-based traffic management</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Performance Tuning</div>
                          <div className="text-sm text-gray-600">Continuous optimization and fine-tuning</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Network Management Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how businesses have improved their network performance and reliability with our management services
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
                      <div className="text-sm font-medium text-green-600">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                    <Badge variant="outline">{testimonials[activeTestimonial].employees} employees</Badge>
                    <Badge variant="outline">{testimonials[activeTestimonial].industry}</Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
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
                    activeTestimonial === index ? "bg-green-600" : "bg-gray-300"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Network Management Plans</h2>
            <p className="text-lg text-gray-600">
              Comprehensive network management plans designed to optimize performance and ensure reliability
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-green-600 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1">Most Popular</Badge>
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
                      tier.popular ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.name === "Network Enterprise" ? "Contact Network Team" : "Start Network Management"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need custom network architecture? We design and manage solutions tailored to your specific requirements
              and scale.
            </p>
            <Button variant="outline" size="lg">
              Schedule Network Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Network Management Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about network management and optimization services
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How quickly can you detect and resolve network issues?</AccordionTrigger>
                <AccordionContent>
                  Our monitoring systems detect network issues within seconds and automatically alert our team. Most
                  issues are resolved within 5-15 minutes through automated responses or remote intervention. For
                  complex issues requiring on-site support, our average response time is under 2 hours with resolution
                  typically within 4 hours.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What types of networks do you manage?</AccordionTrigger>
                <AccordionContent>
                  We manage all types of business networks including LAN, WAN, wireless networks, hybrid cloud networks,
                  and multi-site configurations. Our services cover routers, switches, firewalls, wireless access
                  points, and network security appliances from all major vendors including Cisco, Juniper, Fortinet, and
                  others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do you ensure network security?</AccordionTrigger>
                <AccordionContent>
                  Network security is integrated into all our services. We provide firewall management, intrusion
                  detection and prevention, VPN services, network segmentation, and continuous security monitoring. All
                  security configurations follow industry best practices and compliance requirements. We also perform
                  regular security assessments and updates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can you help optimize our existing network performance?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide comprehensive network optimization services. This includes traffic analysis, bandwidth
                  optimization, Quality of Service (QoS) configuration, network redesign recommendations, and
                  performance tuning. Most clients see 30-50% improvement in network performance after optimization.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What happens during network maintenance windows?</AccordionTrigger>
                <AccordionContent>
                  We schedule maintenance during off-peak hours to minimize business impact. Most maintenance is
                  performed remotely with minimal or no downtime. For major updates requiring downtime, we coordinate
                  with your team to schedule during agreed maintenance windows and provide detailed change management
                  procedures.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Do you provide network documentation and reporting?</AccordionTrigger>
                <AccordionContent>
                  Yes, we maintain comprehensive network documentation including network diagrams, device
                  configurations, IP address management, and change logs. You receive monthly performance reports,
                  security reports, and capacity planning recommendations. All documentation is kept current and
                  accessible through our client portal.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Optimize Your Network Performance Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your network infrastructure with professional management services. Get started with a free
              assessment and discover how much you can improve performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                <Calendar className="h-4 w-4 mr-2" />
                Free Network Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call: 01452905204
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free performance analysis
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No setup costs
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                24/7 monitoring included
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
