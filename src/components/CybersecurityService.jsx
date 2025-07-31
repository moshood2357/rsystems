"use client"
import { useState } from "react"
import {
  Shield,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  AlertTriangle,
  Eye,
  FileText,
  ArrowRight,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Link } from 'react-router-dom';

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"
import ReadytoGetStarted from "../components/ReadytoGetStarted"

export default function CybersecurityService() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Regional Medical Center",
      role: "CISO",
      rating: 5,
      comment:
        "Their cybersecurity team prevented a ransomware attack that could have cost us millions. The 24/7 monitoring and rapid response saved our hospital operations.",
      employees: "500-1000",
      industry: "Healthcare",
      threat: "Ransomware Prevention",
    },
    {
      name: "Michael Torres",
      company: "First National Bank",
      role: "IT Security Director",
      rating: 5,
      comment:
        "The compliance expertise helped us achieve PCI-DSS certification seamlessly. Their penetration testing revealed vulnerabilities we never knew existed.",
      employees: "200-500",
      industry: "Financial Services",
      threat: "Compliance & Testing",
    },
    {
      name: "Sarah Kim",
      company: "TechStart Solutions",
      role: "CEO",
      rating: 5,
      comment:
        "As a growing startup, we couldn't afford a full security team. Their managed security services give us enterprise-level protection at a fraction of the cost.",
      employees: "25-50",
      industry: "Technology",
      threat: "Comprehensive Protection",
    },
    {
      name: "David Rodriguez",
      company: "Manufacturing Plus",
      role: "Operations Manager",
      rating: 5,
      comment:
        "The security awareness training transformed our company culture. Employees now actively report suspicious emails instead of clicking on them.",
      employees: "100-250",
      industry: "Manufacturing",
      threat: "Phishing Prevention",
    },
  ]

  
  const coreServices = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "24/7 Threat Monitoring",
      description:
        "Advanced threat detection and response with AI-powered security operations center monitoring your systems around the clock.",
      features: ["Real-time threat detection", "Automated response", "Incident investigation", "Threat intelligence"],
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Vulnerability Assessment",
      description:
        "Comprehensive security testing to identify and remediate vulnerabilities before attackers exploit them.",
      features: ["Penetration testing", "Vulnerability scanning", "Risk assessment", "Remediation planning"],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Compliance Management",
      description:
        "Expert guidance and implementation for regulatory compliance including HIPAA, PCI-DSS, SOX, and GDPR requirements.",
      features: ["Compliance audits", "Policy development", "Documentation", "Ongoing monitoring"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Incident Response",
      description:
        "Rapid response team ready to contain, investigate, and recover from security incidents and breaches.",
      features: ["24/7 response team", "Forensic analysis", "Containment strategies", "Recovery planning"],
    },
  ]

  const comparisonData = [
    {
      feature: "Average Cost of Data Breach",
      withSecurity: "$pound;1.76M (with security)",
      withoutSecurity: "4.45M (without security)",
    },
    {
      feature: "Detection Time",
      withSecurity: "Minutes with monitoring",
      withoutSecurity: "287 days average",
    },
    {
      feature: "Compliance Readiness",
      withSecurity: "Continuous compliance",
      withoutSecurity: "Reactive, costly audits",
    },
    {
      feature: "Staff Training",
      withSecurity: "Regular security awareness",
      withoutSecurity: "Ad-hoc or none",
    },
    {
      feature: "Threat Intelligence",
      withSecurity: "Real-time updates",
      withoutSecurity: "Limited visibility",
    },
    {
      feature: "Recovery Time",
      withSecurity: "Hours with planning",
      withoutSecurity: "Weeks or months",
    },
  ]

  const pricingTiers = [
    {
      name: "Essential Security",
      price: "\u00A3199",
      period: "per user/month",
      description: "Core cybersecurity protection for small businesses",
      features: [
        "24/7 threat monitoring",
        "Email security",
        "Basic vulnerability scans",
        "Security awareness training",
        "Incident response support",
      ],
      popular: false,
    },
    {
      name: "Advanced Protection",
      price: "\u00A3299",
      period: "per user/month",
      description: "Comprehensive security for growing organizations",
      features: [
        "Everything in Essential",
        "Advanced threat detection",
        "Penetration testing",
        "Compliance assistance",
        "Security policy development",
        "Priority incident response",
      ],
      popular: true,
    },
    {
      name: "Enterprise Security",
      price: "Custom",
      period: "pricing",
      description: "Full-scale security operations for large enterprises",
      features: [
        "Everything in Advanced",
        "Dedicated security team",
        "Custom threat intelligence",
        "Advanced forensics",
        "Executive reporting",
        "On-site security consulting",
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
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-red-100 text-red-800">
                  Critical Protection
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Cybersecurity Services & Solutions
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Protect your business from cyber threats with comprehensive security solutions. Advanced threat
                detection, compliance management, and incident response from certified security experts.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <strong>Security Alert:</strong> Cyber attacks increase by 67% annually. Is your business protected?
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to = "/cyber">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Free Security Assessment
                </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Emergency Response: (555) 911-HELP
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">99.9%</div>
                  <div className="text-sm text-gray-600">Threat Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{"<5"}</div>
                  <div className="text-sm text-gray-600">Min Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">Zero</div>
                  <div className="text-sm text-gray-600">Breaches</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Security Status</div>
                    <div className="text-xs text-green-600">Protected</div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-red-800">Threats Blocked</div>
                    <div className="text-xs text-red-600">1,247 Today</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Firewall Protection</span>
                      <span className="text-sm text-green-600">Active</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Threat Detection</span>
                      <span className="text-sm text-green-600">Monitoring</span>
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

      {/* Threat Landscape Stats */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">&pound;4.45M</div>
              <div className="text-sm text-gray-300">Average cost of a data breach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">287</div>
              <div className="text-sm text-gray-300">Days to identify a breach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">43%</div>
              <div className="text-sm text-gray-300">Of attacks target small businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Of small companies close within 6 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Security Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multi-layered cybersecurity approach designed to protect your business from evolving threats while
              ensuring regulatory compliance and business continuity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
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

      {/* Security ROI Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Cost of Security vs. Breaches</h2>
              <p className="text-lg text-gray-600">
                Investing in cybersecurity is significantly more cost-effective than dealing with the aftermath of a
                breach
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Security Factor</div>
                <div className="text-center text-green-600">With Cybersecurity</div>
                <div className="text-center blue-red-600">Without Protection</div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-green-600 font-medium">{row.withSecurity}</div>
                  <div className="text-center text-blue-600 font-medium">{row.withoutSecurity}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to = "/CybersecurityROI">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Calculate Your Security ROI
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Security Services</h2>
              <p className="text-lg text-gray-600">
                Explore our comprehensive cybersecurity solutions designed to protect against modern threats
              </p>
            </div>

            <Tabs defaultValue="monitoring" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
                <TabsTrigger value="response">Response</TabsTrigger>
              </TabsList>

              <TabsContent value="monitoring" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Security Monitoring</h3>
                    <p className="text-gray-600 mb-6">
                      Our Security Operations Center (SOC) provides round-the-clock monitoring using advanced AI and
                      machine learning to detect and respond to threats in real-time.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">AI-Powered Threat Detection</div>
                          <div className="text-sm text-gray-600">Machine learning algorithms identify anomalies</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Real-Time Alerts</div>
                          <div className="text-sm text-gray-600">Instant notifications for security events</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Automated Response</div>
                          <div className="text-sm text-gray-600">Immediate containment of identified threats</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Eye className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-gray-700 font-semibold">Continuous Monitoring</div>
                      <div className="text-sm text-gray-600 mt-2">Never-sleeping security operations center</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="testing" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Target className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                      <div className="text-gray-700 font-semibold">Vulnerabilities Found</div>
                      <div className="text-sm text-gray-600 mt-2">Before attackers can exploit them</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Penetration Testing & Assessment</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive security testing that simulates real-world attacks to identify vulnerabilities and
                      weaknesses in your systems before malicious actors can exploit them.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Ethical Hacking</div>
                          <div className="text-sm text-gray-600">Certified professionals simulate attacks</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Vulnerability Scanning</div>
                          <div className="text-sm text-gray-600">Automated tools identify security gaps</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Detailed Reporting</div>
                          <div className="text-sm text-gray-600">Actionable recommendations for remediation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="compliance" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
                    <p className="text-gray-600 mb-6">
                      Expert guidance and implementation for meeting regulatory requirements including PCI-DSS,
                      SOX, GDPR, and industry-specific compliance standards.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Compliance Audits</div>
                          <div className="text-sm text-gray-600">Regular assessments and gap analysis</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Policy Development</div>
                          <div className="text-sm text-gray-600">Custom security policies and procedures</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Documentation Support</div>
                          <div className="text-sm text-gray-600">Audit-ready documentation and reporting</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <FileText className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Compliance Success</div>
                      <div className="text-sm text-gray-600 mt-2">All clients pass regulatory audits</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="response" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-red-50 to-orange-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Zap className="h-16 w-16 text-red-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-red-600 mb-2">{"<5"}</div>
                      <div className="text-gray-700 font-semibold">Minutes Response</div>
                      <div className="text-sm text-gray-600 mt-2">Emergency incident response time</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response & Recovery</h3>
                    <p className="text-gray-600 mb-6">
                      Rapid response team ready to contain, investigate, and recover from security incidents. Our proven
                      methodology minimizes damage and ensures quick recovery.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Emergency Response</div>
                          <div className="text-sm text-gray-600">24/7 incident response hotline</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Forensic Analysis</div>
                          <div className="text-sm text-gray-600">Digital forensics and evidence collection</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Recovery Planning</div>
                          <div className="text-sm text-gray-600">Business continuity and disaster recovery</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Security Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how our cybersecurity solutions have protected businesses from real threats
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
                      {testimonials[activeTestimonial].threat}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Security Investment Plans</h2>
            <p className="text-lg text-gray-600">
              Comprehensive cybersecurity protection that costs less than a single data breach
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
                    {tier.name === "Enterprise Security" ? "Contact Security Team" : "Start Protection"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom security solution? We can design protection specific to your industry and threats.
            </p>
            <Link to = "/contact">
            <Button variant="outline" size="lg">
              Schedule Security Consultation
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Security Questions Answered</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about cybersecurity and our protection services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How quickly can you detect and respond to threats?</AccordionTrigger>
                <AccordionContent>
                  Our AI-powered monitoring systems detect threats in real-time, with automated responses triggered
                  within seconds. For incidents requiring human intervention, our security team responds within 5
                  minutes for critical threats and 15 minutes for high-priority issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What types of cyber threats do you protect against?</AccordionTrigger>
                <AccordionContent>
                  We protect against all major cyber threats including ransomware, phishing attacks, malware, advanced
                  persistent threats (APTs), insider threats, DDoS attacks, and zero-day exploits. Our multi-layered
                  approach provides comprehensive protection across all attack vectors.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you help with regulatory compliance?</AccordionTrigger>
                <AccordionContent>
                  Yes, we specialize in helping businesses achieve and maintain compliance with regulations including PCI-DSS, SOX, GDPR, CCPA, and industry-specific standards. We provide compliance audits, policy
                  development, documentation, and ongoing monitoring to ensure continuous compliance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What happens if we experience a security breach?</AccordionTrigger>
                <AccordionContent>
                  Our incident response team immediately contains the threat, conducts forensic analysis, and begins
                  recovery procedures. We handle communication with stakeholders, regulatory reporting if required, and
                  provide detailed post-incident reports with recommendations to prevent future breaches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do you train our employees on security awareness?</AccordionTrigger>
                <AccordionContent>
                  We provide comprehensive security awareness training including interactive modules, simulated phishing
                  campaigns, regular security updates, and role-specific training. Our programs are designed to create a
                  security-conscious culture and significantly reduce human error risks.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Can you work with our existing security tools?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We integrate with most existing security infrastructure and can enhance your current tools
                  rather than replace them. Our team will assess your current setup and recommend the best approach to
                  maximize your security investment while filling any gaps.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't Wait for a Cyber Attack</h2>
            <p className="text-xl mb-8 opacity-90">
              Every day without proper cybersecurity protection puts your business at risk. Get comprehensive security
              solutions from certified experts who understand the evolving threat landscape.
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
                24/7 emergency response
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No long-term contracts
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Certified security experts
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReadytoGetStarted />
    </div>
  )
}
