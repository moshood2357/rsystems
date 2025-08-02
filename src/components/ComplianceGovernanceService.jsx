"use client"
import { useState } from "react"
import { Shield, CheckCircle, Star, Phone, Calendar, FileCheck, ArrowRight, AlertTriangle,  ChevronLeft, ChevronRight, Scale, BookOpen } from 'lucide-react'

import { Link } from 'react-router-dom';

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"
import ReadytoGetStarted from "../components/ReadytoGetStarted"


export default function ComplianceGovernanceService() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Dr. Patricia Williams",
      company: "Metro Healthcare System",
      role: "Chief Compliance Officer",
      rating: 5,
      comment:
        "Their HIPAA compliance framework helped us achieve 100% audit success rate for three consecutive years. The risk management program prevented potential $2M in fines.",
      employees: "2000+",
      industry: "Healthcare",
      achievement: "100% Audit Success",
    },
    {
      name: "Robert Chen",
      company: "First National Bank",
      role: "Risk Management Director",
      rating: 5,
      comment:
        "The SOX compliance program streamlined our financial reporting processes while ensuring full regulatory adherence. Reduced compliance costs by 35% while improving controls.",
      employees: "500-1000",
      industry: "Financial Services",
      achievement: "35% Cost Reduction",
    },
    {
      name: "Maria Rodriguez",
      company: "Global Retail Corp",
      role: "Data Protection Officer",
      rating: 5,
      comment:
        "GDPR compliance implementation was seamless. Their privacy framework protected us from potential €20M fines while improving customer trust and data handling processes.",
      employees: "5000+",
      industry: "Retail",
      achievement: "€20M Risk Mitigation",
    },
    {
      name: "James Thompson",
      company: "TechStart Solutions",
      role: "CEO",
      rating: 5,
      comment:
        "SOC 2 Type II certification opened doors to enterprise clients. Their governance framework scaled with our growth from startup to 200 employees without compliance gaps.",
      employees: "100-250",
      industry: "Technology",
      achievement: "SOC 2 Certification",
    },
  ]

  const coreServices = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Regulatory Compliance",
      description:
        "Comprehensive compliance programs for SOX, PCI-DSS, GDPR, and industry-specific regulations with ongoing monitoring and reporting.",
      features: [ "SOX controls", "PCI-DSS certification", "GDPR privacy"],
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "IT Governance Frameworks",
      description:
        "Implementation of proven governance frameworks including COBIT, ITIL, and ISO 27001 to optimize IT operations and risk management.",
      features: ["COBIT implementation", "ITIL processes", "ISO 27001 certification", "Custom frameworks"],
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment, mitigation strategies, and continuous monitoring to protect your organization from compliance and operational risks.",
      features: ["Risk assessments", "Mitigation strategies", "Continuous monitoring", "Incident response"],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Policy & Documentation",
      description:
        "Development of comprehensive policies, procedures, and documentation to support compliance requirements and governance objectives.",
      features: ["Policy development", "Procedure documentation", "Training materials", "Audit preparation"],
    },
  ]

  const comparisonData = [
    {
      feature: "Compliance Costs",
      withGovernance: "30-50% reduction typical",
      withoutGovernance: "Reactive, expensive fixes",
    },
    {
      feature: "Audit Success Rate",
      withGovernance: "95%+ pass rate",
      withoutGovernance: "60% typical pass rate",
    },
    {
      feature: "Risk Exposure",
      withGovernance: "Proactive risk mitigation",
      withoutGovernance: "High penalty exposure",
    },
    {
      feature: "Documentation",
      withGovernance: "Comprehensive, audit-ready",
      withoutGovernance: "Incomplete, scattered",
    },
    {
      feature: "Training & Awareness",
      withGovernance: "Regular, structured programs",
      withoutGovernance: "Ad-hoc or minimal",
    },
    {
      feature: "Incident Response",
      withGovernance: "Structured, documented process",
      withoutGovernance: "Reactive, uncoordinated",
    },
  ]

  const pricingTiers = [
    {
      name: "Compliance Essentials",
      price: "\u00A31,500",
      period: "per month",
      description: "Core compliance support for small to medium businesses",
      features: [
        "Single regulation focus",
        "Policy templates",
        "Quarterly assessments",
        "Basic training materials",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Governance Professional",
      price: "\u00A33,500",
      period: "per month",
      description: "Comprehensive compliance and governance program",
      features: [
        "Multi-regulation support",
        "Custom policy development",
        "Monthly risk assessments",
        "Staff training programs",
        "Audit preparation",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise Governance",
      price: "Custom",
      period: "pricing",
      description: "Full-scale governance for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated compliance team",
        "Board-level reporting",
        "Custom frameworks",
        "24/7 incident response",
        "Multi-site support",
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
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-green-100 text-green-800">
                  Regulatory Excellence
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Compliance & Governance Solutions
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Navigate complex regulatory requirements with confidence. Our comprehensive compliance and governance
                solutions ensure regulatory adherence, reduce risk, and optimize operational efficiency.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-red-800">
                    <strong>Compliance Alert:</strong> Non-compliance penalties average &pound;14.8M per incident. Are you
                    adequately protected?
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to = "/governance">
                  <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  Free Compliance Assessment
                </Button>
                </Link>
               <a href="tel:01452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                   <Phone className="mr-2 h-6 w-6" />
                   01452905204
                 </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Audit Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">&pound;50M+</div>
                  <div className="text-sm text-gray-600">Fines Prevented</div>
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
                    <Scale className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Compliance Status</div>
                    <div className="text-xs text-green-600">Compliant</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <FileCheck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-800">Audit Readiness</div>
                    <div className="text-xs text-blue-600">Ready</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Risk Score</span>
                      <span className="text-sm text-green-600">Low</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Policy Coverage</span>
                      <span className="text-sm text-green-600">Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Risk Stats */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">&pound;14.8M</div>
              <div className="text-sm text-gray-300">Average non-compliance penalty</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">83%</div>
              <div className="text-sm text-gray-300">Of companies experienced data breach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">277</div>
              <div className="text-sm text-gray-300">Days average breach detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Of small companies close after breach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Compliance & Governance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end compliance and governance solutions designed to meet regulatory requirements, reduce risk, and
              optimize operational efficiency across all business functions.
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

      {/* Governance Value Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Value of Professional Governance
              </h2>
              <p className="text-lg text-gray-600">
                See how structured compliance and governance programs compare to ad-hoc approaches
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Compliance Factor</div>
                <div className="text-center text-green-600">With Governance Program</div>
                <div className="text-center text-red-600">Without Structure</div>
              </div>

              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-green-600 font-medium">{row.withGovernance}</div>
                  <div className="text-center text-red-600 font-medium">{row.withoutGovernance}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to = "/ComplianceROI">
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                  Calculate Compliance ROI
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Specialized Compliance Services</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed compliance and governance solutions designed for regulatory excellence
              </p>
            </div>

            <Tabs defaultValue="regulatory" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="regulatory">Regulatory</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="risk">Risk</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
              </TabsList>

              <TabsContent value="regulatory" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive compliance programs for major regulations including SOX, PCI-DSS, GDPR, and
                      industry-specific requirements with continuous monitoring and reporting.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">GDPR Compliance</div>
                          <div className="text-sm text-gray-600">Healthcare data protection and privacy</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">SOX Controls</div>
                          <div className="text-sm text-gray-600">Financial reporting and internal controls</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">GDPR Privacy</div>
                          <div className="text-sm text-gray-600">European data protection compliance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Scale className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Compliance Success</div>
                      <div className="text-sm text-gray-600 mt-2">Perfect audit track record</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="frameworks" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <FileCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">ISO</div>
                      <div className="text-gray-700 font-semibold">27001 Certified</div>
                      <div className="text-sm text-gray-600 mt-2">Information security management</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Governance Frameworks</h3>
                    <p className="text-gray-600 mb-6">
                      Implementation of proven governance frameworks including COBIT, ITIL, and ISO 27001 to optimize IT
                      operations, ensure compliance, and manage risk effectively.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">COBIT Implementation</div>
                          <div className="text-sm text-gray-600">IT governance and management framework</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">ITIL Processes</div>
                          <div className="text-sm text-gray-600">IT service management best practices</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">ISO 27001</div>
                          <div className="text-sm text-gray-600">Information security management systems</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="risk" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Management</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive risk assessment, mitigation strategies, and continuous monitoring to protect your
                      organization from compliance violations, operational risks, and security threats.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Risk Assessments</div>
                          <div className="text-sm text-gray-600">Comprehensive risk identification and analysis</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Mitigation Strategies</div>
                          <div className="text-sm text-gray-600">Tailored risk reduction plans</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Continuous Monitoring</div>
                          <div className="text-sm text-gray-600">Ongoing risk surveillance and reporting</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <AlertTriangle className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                      <div className="text-gray-700 font-semibold">Risk Reduction</div>
                      <div className="text-sm text-gray-600 mt-2">Average risk score improvement</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documentation" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                      <div className="text-gray-700 font-semibold">Policy Templates</div>
                      <div className="text-sm text-gray-600 mt-2">Comprehensive documentation library</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy & Documentation</h3>
                    <p className="text-gray-600 mb-6">
                      Development of comprehensive policies, procedures, and documentation to support compliance
                      requirements, governance objectives, and audit readiness.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Policy Development</div>
                          <div className="text-sm text-gray-600">Custom policies aligned with regulations</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Procedure Documentation</div>
                          <div className="text-sm text-gray-600">Step-by-step operational procedures</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Audit Preparation</div>
                          <div className="text-sm text-gray-600">Audit-ready documentation and evidence</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Compliance Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how our compliance and governance solutions have protected businesses from regulatory risks
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
                      <div className="text-sm font-medium text-green-600">{testimonials[activeTestimonial].company}</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Compliance Investment Plans</h2>
            <p className="text-lg text-gray-600">
              Comprehensive compliance and governance programs that cost less than a single regulatory fine
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
              <a href="tel:01452905204">
                <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-4 w-4 mr-2" />
                01452905204
              </Button>
              </a>
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

      <ReadytoGetStarted />
    </div>
  )
}
