"use client"
import { useState } from "react"
import {
  Lightbulb,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  TrendingUp,
  ArrowRight,
  Users,
  ChevronLeft,
  ChevronRight,
  Target,
  Briefcase,
  BookOpen,
  Monitor,
  Settings,
  Cloud,
  HardDrive,
  ChevronDown,Wifi,
  Shield
} from "lucide-react";

import { Link } from 'react-router-dom';

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

export default function ITConsultancyService() {

  
       const [isServicesOpen, setIsServicesOpen] = useState(false);
       const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      name: "Rachel Thompson",
      company: "Global Manufacturing Inc.",
      role: "CEO",
      rating: 5,
      comment:
        "Their digital transformation strategy increased our operational efficiency by 60%. The roadmap they created guided us through a complete technology overhaul with measurable ROI.",
      employees: "1000+",
      industry: "Manufacturing",
      achievement: "60% Efficiency Gain",
    },
    {
      name: "Marcus Johnson",
      company: "FinTech Innovations",
      role: "CTO",
      rating: 5,
      comment:
        "The IT governance framework they implemented helped us achieve SOC 2 compliance and scale from 50 to 500 employees without technology bottlenecks.",
      employees: "200-500",
      industry: "Financial Technology",
      achievement: "10x Team Growth",
    },
    {
      name: "Dr. Sarah Kim",
      company: "Regional Healthcare Network",
      role: "Chief Information Officer",
      rating: 5,
      comment:
        "Their healthcare IT expertise was invaluable. We modernized our entire patient management system while maintaining HIPAA compliance and improving patient care quality.",
      employees: "500-1000",
      industry: "Healthcare",
      achievement: "System Modernization",
    },
    {
      name: "David Martinez",
      company: "EduTech Solutions",
      role: "Founder",
      rating: 5,
      comment:
        "From startup to market leader, their strategic IT guidance helped us make the right technology decisions at every growth stage. Saved us millions in wrong investments.",
      employees: "50-100",
      industry: "Education Technology",
      achievement: "Strategic Growth",
    },
  ]

  const coreServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "IT Strategy & Planning",
      description:
        "Comprehensive IT strategic planning aligned with business objectives, including technology roadmaps and digital transformation strategies.",
      features: ["Strategic roadmapping", "Technology assessments", "Digital transformation", "ROI analysis"],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "CIO/CTO Advisory",
      description:
        "Executive-level IT leadership and guidance for organizations without full-time IT executives or needing specialized expertise.",
      features: ["Executive advisory", "Board presentations", "Budget planning", "Vendor negotiations"],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation consulting to modernize business processes and technology infrastructure.",
      features: ["Process optimization", "Technology modernization", "Change management", "Training programs"],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "IT Governance & Compliance",
      description:
        "Establish robust IT governance frameworks and ensure compliance with industry regulations and standards.",
      features: ["Governance frameworks", "Compliance audits", "Risk management", "Policy development"],
    },
  ]

  const comparisonData = [
    {
      feature: "Strategic Planning",
      withConsultant: "Expert-guided roadmap",
      withoutConsultant: "Ad-hoc decisions",
    },
    {
      feature: "Technology Investments",
      withConsultant: "ROI-focused selections",
      withoutConsultant: "Trial and error approach",
    },
    {
      feature: "Implementation Success",
      withConsultant: "95% project success rate",
      withoutConsultant: "60% typical success rate",
    },
    {
      feature: "Change Management",
      withConsultant: "Structured adoption process",
      withoutConsultant: "Resistance and delays",
    },
    {
      feature: "Risk Mitigation",
      withConsultant: "Proactive risk assessment",
      withoutConsultant: "Reactive problem solving",
    },
    {
      feature: "Cost Optimization",
      withConsultant: "20-40% cost reduction",
      withoutConsultant: "Uncontrolled spending",
    },
  ]

  const pricingTiers = [
    {
      name: "Strategic Advisory",
      price: "\u00A32,500",
      period: "per month",
      description: "Essential IT strategy guidance for growing businesses",
      features: [
        "Monthly strategy sessions",
        "Technology assessments",
        "Vendor recommendations",
        "Budget planning support",
        "Email & phone support",
      ],
      popular: false,
    },
    {
      name: "Transformation Partner",
      price: "\u00A35,000",
      period: "per month",
      description: "Comprehensive consulting for digital transformation",
      features: [
        "Everything in Strategic",
        "Dedicated consultant",
        "Project management",
        "Change management",
        "Training programs",
        "Executive reporting",
      ],
      popular: true,
    },
    {
      name: "Enterprise Advisory",
      price: "Custom",
      period: "engagement",
      description: "Full-scale consulting for large organizations",
      features: [
        "Everything in Transformation",
        "Multi-consultant team",
        "Board-level presentations",
        "Custom frameworks",
        "24/7 advisory support",
        "Long-term partnerships",
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

  return (
    <div className="min-h-screen bg-background">
        {/* Header */}
           <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
             <div className="container mx-auto px-4 py-4">
               <div className="flex items-center justify-between">
                <Link to = "/">
                  <div className="flex items-center space-x-2">
                    {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">R2</span>
                    </div>
                    <div>
                      <h1 className="font-bold text-xl text-gray-900">R2 System Solution</h1>
                      <p className="text-sm text-gray-600">IT Solutions & Support</p>
                    </div> */}
                     <img src = "/CompanyLogo.jpeg" alt = "logo" style={{height: "50px"}}/>
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
                 
                               <Link to ="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                                 About
                               </Link>
                               {/* <a href ="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                                 Reviews
                               </a> */}
                               <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                                 Contact
                               </a>
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
      <section className="relative bg-gradient-to-br from-purple-50 to-indigo-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-purple-100 text-purple-800">
                  Strategic Expertise
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                IT Consultancy & Strategic Advisory
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with expert IT strategy and guidance. Our experienced consultants help you make
                informed technology decisions, optimize investments, and accelerate digital transformation.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Proven Results:</strong> Our clients achieve 3x faster digital transformation with 40%
                    better ROI on technology investments.
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Strategy Session
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600  hover:bg-purple-50 bg-transparent"
                >
                  Free IT Assessment
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-purple-800">Strategy Status</div>
                    <div className="text-xs text-purple-600">Optimized</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">ROI Tracking</div>
                    <div className="text-xs text-green-600">Positive</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Digital Maturity</span>
                      <span className="text-sm text-green-600">Advanced</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Technology Alignment</span>
                      <span className="text-sm text-purple-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Impact Stats */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-sm text-gray-300">Faster digital transformation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-sm text-gray-300">Better technology ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-sm text-gray-300">Reduction in failed projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">&pound;2M</div>
              <div className="text-sm text-gray-300">Average cost savings per client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Strategic IT Consulting Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT consulting services designed to align technology with business strategy, optimize
              investments, and accelerate digital transformation initiatives.
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

      {/* Consulting Value Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Value of Professional IT Consulting
              </h2>
              <p className="text-lg text-gray-600">
                See how expert IT consulting compares to going it alone when making critical technology decisions
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Decision Factor</div>
                <div className="text-center text-purple-600">With IT Consulting</div>
                <div className="text-center text-gray-600">Without Consulting</div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-purple-600 font-medium">{row.withConsultant}</div>
                  <div className="text-center text-gray-600">{row.withoutConsultant}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                Calculate Your Consulting ROI
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Consulting Expertise</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed consulting services designed to drive strategic business outcomes
              </p>
            </div>

            <Tabs defaultValue="strategy" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
                <TabsTrigger value="advisory">Advisory</TabsTrigger>
                <TabsTrigger value="transformation">Transformation</TabsTrigger>
                <TabsTrigger value="governance">Governance</TabsTrigger>
              </TabsList>

              <TabsContent value="strategy" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Strategy & Planning</h3>
                    <p className="text-gray-600 mb-6">
                      Develop comprehensive IT strategies aligned with business objectives. Our strategic planning
                      process ensures technology investments drive measurable business value and competitive advantage.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Technology Roadmapping</div>
                          <div className="text-sm text-gray-600">3-5 year strategic technology plans</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Business Alignment</div>
                          <div className="text-sm text-gray-600">Technology strategy tied to business goals</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">ROI Analysis</div>
                          <div className="text-sm text-gray-600">Quantified business case development</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Target className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Strategy Alignment</div>
                      <div className="text-sm text-gray-600 mt-2">Technology plans matched to business goals</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="advisory" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Briefcase className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">C-Level</div>
                      <div className="text-gray-700 font-semibold">Executive Advisory</div>
                      <div className="text-sm text-gray-600 mt-2">Strategic guidance for leadership teams</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">CIO/CTO Advisory Services</h3>
                    <p className="text-gray-600 mb-6">
                      Executive-level IT leadership for organizations without full-time IT executives. Strategic
                      guidance, board presentations, and technology leadership when you need it most.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Executive Leadership</div>
                          <div className="text-sm text-gray-600">Fractional CIO/CTO services</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Board Presentations</div>
                          <div className="text-sm text-gray-600">Technology updates for stakeholders</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Vendor Management</div>
                          <div className="text-sm text-gray-600">Strategic vendor relationships and negotiations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="transformation" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
                    <p className="text-gray-600 mb-6">
                      End-to-end digital transformation consulting that modernizes business processes, technology
                      infrastructure, and organizational capabilities for the digital age.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Process Optimization</div>
                          <div className="text-sm text-gray-600">Streamline operations with technology</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Change Management</div>
                          <div className="text-sm text-gray-600">Structured approach to organizational change</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Technology Modernization</div>
                          <div className="text-sm text-gray-600">Legacy system upgrades and replacements</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                      <div className="text-gray-700 font-semibold">Efficiency Improvement</div>
                      <div className="text-sm text-gray-600 mt-2">Average operational efficiency gain</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="governance" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <BookOpen className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Compliance Success</div>
                      <div className="text-sm text-gray-600 mt-2">Clients pass regulatory audits</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Governance & Compliance</h3>
                    <p className="text-gray-600 mb-6">
                      Establish robust IT governance frameworks that ensure compliance, manage risk, and optimize IT
                      investments while supporting business objectives and regulatory requirements.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Governance Frameworks</div>
                          <div className="text-sm text-gray-600">COBIT, ITIL, and custom frameworks</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Risk Management</div>
                          <div className="text-sm text-gray-600">Comprehensive IT risk assessment and mitigation</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Policy Development</div>
                          <div className="text-sm text-gray-600">Custom IT policies and procedures</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Strategic Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how our IT consulting expertise has transformed businesses across industries
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Strategic Consulting Packages</h2>
            <p className="text-lg text-gray-600">
              Flexible consulting engagements designed to deliver strategic value at every business stage
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
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${
                      tier.popular ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.name === "Enterprise Advisory" ? "Contact Consulting Team" : "Start Consulting"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom consulting engagement? We design solutions tailored to your specific business challenges and
              objectives.
            </p>
            <Button variant="outline" size="lg">
              Schedule Custom Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Consulting Questions Answered</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about IT consulting and strategic advisory services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What makes your IT consulting approach different?</AccordionTrigger>
                <AccordionContent>
                  Our approach combines deep technical expertise with business strategy knowledge. We focus on
                  measurable outcomes, not just recommendations. Every engagement includes ROI analysis, change
                  management support, and ongoing partnership to ensure successful implementation of our strategies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do you measure the success of consulting engagements?</AccordionTrigger>
                <AccordionContent>
                  We establish clear KPIs and success metrics at the beginning of each engagement, including cost
                  savings, efficiency improvements, risk reduction, and strategic goal achievement. Regular progress
                  reviews ensure we're delivering measurable value throughout the consulting relationship.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you work with businesses of all sizes?</AccordionTrigger>
                <AccordionContent>
                  Yes, we work with organizations from startups to Fortune 500 companies. Our consulting approach is
                  tailored to each client's size, industry, and maturity level. We have specialized frameworks for
                  different business stages, from rapid growth startups to established enterprises.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How long do typical consulting engagements last?</AccordionTrigger>
                <AccordionContent>
                  Engagement length varies based on scope and objectives. Strategic assessments typically take 4-6
                  weeks, digital transformation projects range from 6-18 months, and ongoing advisory relationships can
                  last several years. We provide detailed timelines during the initial consultation phase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can you help with vendor selection and management?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We provide vendor-neutral guidance for technology selection, RFP development, contract
                  negotiation, and ongoing vendor relationship management. Our extensive industry knowledge helps you
                  make informed decisions and avoid costly mistakes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Do you provide ongoing support after the initial consulting engagement?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer various ongoing support options including monthly advisory retainers, quarterly strategy
                  reviews, and project-based follow-up engagements. Many clients benefit from long-term strategic
                  partnerships that evolve with their business needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your IT Strategy?</h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with experienced IT consultants who understand your business challenges. Get strategic guidance
              that drives measurable results and accelerates your digital transformation journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Strategy Session
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call: (555) 123-CONSULT
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free initial consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No long-term commitments
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Proven methodology
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
