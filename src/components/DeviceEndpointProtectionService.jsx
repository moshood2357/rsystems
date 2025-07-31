"use client"
import { useState } from "react"
import {
  Smartphone,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  Monitor,
  ArrowRight,
  Shield,
  ChevronLeft,
  ChevronRight,
  Laptop,
  Lock,
} from "lucide-react"

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"
import ReadytoGetStarted from "../components/ReadytoGetStarted"

import { Link } from 'react-router-dom';

export default function DeviceEndpointProtectionService() {
  

  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Global Consulting Group",
      role: "IT Security Manager",
      rating: 5,
      comment:
        "With 500+ remote employees, their endpoint protection secured all devices seamlessly. Prevented 15 malware attacks and enabled secure BYOD without compromising security.",
      employees: "500-1000",
      industry: "Professional Services",
      achievement: "15 Attacks Prevented",
    },
    {
      name: "Michael Torres",
      company: "HealthTech Solutions",
      role: "CISO",
      rating: 5,
      comment:
        "GDPR-compliant endpoint management across 200 devices. Real-time monitoring detected and contained a ransomware attempt within 30 seconds, saving our patient data.",
      employees: "100-250",
      industry: "Healthcare Technology",
      achievement: "30-Second Response",
    },
    {
      name: "Sarah Kim",
      company: "Financial Advisors Inc.",
      role: "Compliance Director",
      rating: 5,
      comment:
        "Zero-trust endpoint security model protected sensitive financial data across mobile and desktop devices. Achieved SOC 2 compliance with comprehensive device monitoring.",
      employees: "50-100",
      industry: "Financial Services",
      achievement: "SOC 2 Compliance",
    },
    {
      name: "David Rodriguez",
      company: "Manufacturing Plus",
      role: "IT Director",
      rating: 5,
      comment:
        "Unified endpoint management streamlined device deployment and security. Reduced device management overhead by 60% while improving security posture across all endpoints.",
      employees: "250-500",
      industry: "Manufacturing",
      achievement: "60% Efficiency Gain",
    },
  ]

  const coreServices = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Endpoint Detection & Response",
      description:
        "Advanced EDR solutions with real-time threat detection, automated response, and comprehensive endpoint visibility across all devices.",
      features: ["Real-time monitoring", "Automated response", "Threat hunting", "Forensic analysis"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Device Management",
      description:
        "Complete MDM solution for smartphones, tablets, and mobile devices with policy enforcement and remote management capabilities.",
      features: ["Device enrollment", "Policy enforcement", "App management", "Remote wipe"],
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Unified Endpoint Management",
      description:
        "Centralized management platform for all endpoint types including desktops, laptops, mobile devices, and IoT endpoints.",
      features: ["Centralized console", "Patch management", "Software deployment", "Compliance reporting"],
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Zero-Trust Endpoint Security",
      description:
        "Zero-trust security model with continuous verification, device compliance checking, and conditional access controls.",
      features: ["Device compliance", "Conditional access", "Identity verification", "Risk assessment"],
    },
  ]

  const comparisonData = [
    {
      feature: "Threat Detection Time",
      withProtection: "Seconds with EDR",
      withoutProtection: "Weeks or months",
    },
    {
      feature: "Device Management",
      withProtection: "Centralized, automated",
      withoutProtection: "Manual, time-consuming",
    },
    {
      feature: "Security Incidents",
      withProtection: "90% reduction typical",
      withoutProtection: "High vulnerability",
    },
    {
      feature: "Compliance Readiness",
      withProtection: "Continuous monitoring",
      withoutProtection: "Manual audits",
    },
    {
      feature: "Remote Work Security",
      withProtection: "Secure anywhere access",
      withoutProtection: "VPN-dependent, limited",
    },
    {
      feature: "Data Loss Prevention",
      withProtection: "Real-time protection",
      withoutProtection: "Reactive measures",
    },
  ]

  const pricingTiers = [
    {
      name: "Essential Protection",
      price: "\u00A38",
      period: "per device/month",
      description: "Core endpoint security for small businesses",
      features: [
        "Antivirus & anti-malware",
        "Basic device management",
        "Patch management",
        "Email support",
        "Monthly reports",
      ],
      popular: false,
    },
    {
      name: "Advanced Security",
      price: "\u00A315",
      period: "per device/month",
      description: "Comprehensive endpoint protection for growing companies",
      features: [
        "Everything in Essential",
        "EDR capabilities",
        "Mobile device management",
        "Zero-trust controls",
        "24/7 monitoring",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise Shield",
      price: "Custom",
      period: "pricing",
      description: "Full-scale endpoint security for large organizations",
      features: [
        "Everything in Advanced",
        "Dedicated security team",
        "Custom integrations",
        "Advanced threat hunting",
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

  
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-orange-100 text-orange-800">
                  Endpoint Security
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Device & Endpoint Protection
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Secure every device in your organization with comprehensive endpoint protection. Advanced threat
                detection, device management, and zero-trust security for the modern distributed workforce.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <strong>Security Alert:</strong> 68% of organizations experienced endpoint attacks in 2023. Is every
                    device protected?
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to = "/deviceprotection">
                  <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Free Security Assessment
                  </Button>
                </Link>
                <a href="tel:01452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                   <Phone className="mr-2 h-6 w-6" />
                   01452905204
                 </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">99.9%</div>
                  <div className="text-sm text-gray-600">Threat Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{"<30"}</div>
                  <div className="text-sm text-gray-600">Sec Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <Monitor className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Endpoints</div>
                    <div className="text-xs text-green-600">Protected</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-orange-800">Threats Blocked</div>
                    <div className="text-xs text-orange-600">847 Today</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Device Compliance</span>
                      <span className="text-sm text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Security Score</span>
                      <span className="text-sm text-green-600">Excellent</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoint Threat Stats */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">68%</div>
              <div className="text-sm text-gray-300">Organizations hit by endpoint attacks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">37%</div>
              <div className="text-sm text-gray-300">Increase in endpoint threats</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">200</div>
              <div className="text-sm text-gray-300">Days average dwell time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">&pound;4.35M</div>
              <div className="text-sm text-gray-300">Average breach cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Endpoint Security Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive device and endpoint protection covering all device types, operating systems, and use cases
              for the modern distributed workforce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors">
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

      {/* Protection Value Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Protected vs. Unprotected Endpoints</h2>
              <p className="text-lg text-gray-600">
                See how comprehensive endpoint protection compares to basic or no endpoint security
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Security Factor</div>
                <div className="text-center text-orange-600">With Endpoint Protection</div>
                <div className="text-center text-red-600">Without Protection</div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-orange-600 font-medium">{row.withProtection}</div>
                  <div className="text-center text-red-600 font-medium">{row.withoutProtection}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to = "/ProtectionROI">
                <Button size="lg" className="bg-orange-600 text-white hover:bg-orange-700">
                  Discover how security protection can save you from bigger financial losses
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Endpoint Security Services</h2>
              <p className="text-lg text-gray-600">
                Explore our comprehensive endpoint protection solutions designed for modern device security challenges
              </p>
            </div>

            <Tabs defaultValue="edr" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="edr">EDR</TabsTrigger>
                <TabsTrigger value="mdm">MDM</TabsTrigger>
                <TabsTrigger value="uem">UEM</TabsTrigger>
                <TabsTrigger value="zerotrust">Zero Trust</TabsTrigger>
              </TabsList>

              <TabsContent value="edr" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Endpoint Detection & Response</h3>
                    <p className="text-gray-600 mb-6">
                      Advanced EDR capabilities with real-time threat detection, automated response, and comprehensive
                      endpoint visibility to identify and neutralize threats before they cause damage.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Real-Time Monitoring</div>
                          <div className="text-sm text-gray-600">Continuous endpoint activity surveillance</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Automated Response</div>
                          <div className="text-sm text-gray-600">Instant threat containment and remediation</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Threat Hunting</div>
                          <div className="text-sm text-gray-600">Proactive threat discovery and analysis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Monitor className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-orange-600 mb-2">{"<30"}</div>
                      <div className="text-gray-700 font-semibold">Second Detection</div>
                      <div className="text-sm text-gray-600 mt-2">Average threat detection time</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mdm" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Mobile Coverage</div>
                      <div className="text-sm text-gray-600 mt-2">All mobile platforms supported</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Device Management</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive MDM solution for smartphones, tablets, and mobile devices with policy enforcement,
                      app management, and remote security controls for BYOD and corporate devices.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Device Enrollment</div>
                          <div className="text-sm text-gray-600">Automated device onboarding and configuration</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Policy Enforcement</div>
                          <div className="text-sm text-gray-600">Automated security policy compliance</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Remote Management</div>
                          <div className="text-sm text-gray-600">Remote wipe, lock, and configuration</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="uem" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Unified Endpoint Management</h3>
                    <p className="text-gray-600 mb-6">
                      Centralized management platform for all endpoint types including desktops, laptops, mobile
                      devices, and IoT endpoints with unified policies and comprehensive visibility.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Centralized Console</div>
                          <div className="text-sm text-gray-600">Single pane of glass for all devices</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Patch Management</div>
                          <div className="text-sm text-gray-600">Automated security and software updates</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Software Deployment</div>
                          <div className="text-sm text-gray-600">Remote application installation and updates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Laptop className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">All</div>
                      <div className="text-gray-700 font-semibold">Device Types</div>
                      <div className="text-sm text-gray-600 mt-2">Windows, Mac, iOS, Android, Linux</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="zerotrust" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Lock className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
                      <div className="text-gray-700 font-semibold">Trust Model</div>
                      <div className="text-sm text-gray-600 mt-2">Never trust, always verify</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero-Trust Endpoint Security</h3>
                    <p className="text-gray-600 mb-6">
                      Zero-trust security model with continuous device verification, compliance checking, and
                      conditional access controls to ensure only trusted devices access corporate resources.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Device Compliance</div>
                          <div className="text-sm text-gray-600">Continuous compliance verification</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Conditional Access</div>
                          <div className="text-sm text-gray-600">Risk-based access decisions</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Identity Verification</div>
                          <div className="text-sm text-gray-600">Multi-factor authentication integration</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Endpoint Protection Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how our endpoint security solutions have protected organizations from device-based threats
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
                      <div className="text-sm font-medium text-orange-600">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                    <Badge variant="outline">{testimonials[activeTestimonial].employees} employees</Badge>
                    <Badge variant="outline">{testimonials[activeTestimonial].industry}</Badge>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
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
                    activeTestimonial === index ? "bg-orange-600" : "bg-gray-300"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Endpoint Protection Plans</h2>
            <p className="text-lg text-gray-600">
              Scalable endpoint security solutions that protect every device in your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-orange-600 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-600 text-white px-4 py-1">Most Popular</Badge>
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
                      tier.popular ? "bg-orange-600 text-white hover:bg-orange-700" : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.name === "Enterprise Shield" ? "Contact Security Team" : "Protect Devices"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need custom endpoint protection? We design solutions tailored to your device types and security
              requirements.
            </p>
            <Button variant="outline" size="lg">
              Schedule Device Security Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Endpoint Security Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about device and endpoint protection
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What devices can you protect?</AccordionTrigger>
                <AccordionContent>
                  We protect all device types including Windows and Mac computers, iOS and Android mobile devices,
                  tablets, Linux servers, and IoT endpoints. Our unified platform supports mixed environments with
                  consistent security policies across all device types and operating systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly can you detect threats on endpoints?</AccordionTrigger>
                <AccordionContent>
                  Our EDR solution detects threats in real-time, typically within 30 seconds of malicious activity.
                  Automated response capabilities can contain threats immediately, preventing lateral movement and data
                  exfiltration. Critical threats trigger instant alerts to our security team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you support BYOD (Bring Your Own Device) policies?</AccordionTrigger>
                <AccordionContent>
                  Yes, our MDM solution fully supports BYOD environments with containerization, app wrapping, and
                  selective wipe capabilities. We can separate personal and corporate data while maintaining security
                  compliance without compromising user privacy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if a device is lost or stolen?</AccordionTrigger>
                <AccordionContent>
                  We provide immediate remote capabilities including device location tracking, remote lock, and
                  selective or complete data wipe. Corporate data can be removed while preserving personal information
                  on BYOD devices. All actions are logged for compliance and audit purposes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How does endpoint protection work for remote employees?</AccordionTrigger>
                <AccordionContent>
                  Our cloud-based platform provides the same level of protection regardless of location. Remote devices
                  receive real-time updates, policy enforcement, and threat protection without requiring VPN
                  connections. Zero-trust architecture ensures secure access from anywhere.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Can you integrate with our existing security tools?</AccordionTrigger>
                <AccordionContent>
                  Yes, our platform integrates with most security tools including SIEM systems, identity providers,
                  network security solutions, and compliance platforms. We provide APIs and pre-built connectors for
                  seamless integration with your existing security infrastructure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Secure Every Device, Everywhere</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't leave your endpoints vulnerable to attack. Get comprehensive device protection that scales with your
              business and secures your distributed workforce from advanced threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-4 w-4 mr-2" />
                01452905204
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                30-second threat detection
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                All device types supported
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                24/7 monitoring included
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReadytoGetStarted />
    </div>
  )
}
