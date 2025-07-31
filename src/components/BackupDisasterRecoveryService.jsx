"use client"
import { useState } from "react"
import {
  Shield,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Database,
  AlertTriangle,
  RefreshCw,
  Monitor,
  Clock,
  Lock,
} from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs"

import ReadytoGetStarted from "../components/ReadytoGetStarted"

export default function BackupDisasterRecovery() {
 

  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Manufacturing Plus Ltd",
      role: "Operations Director",
      rating: 5,
      comment:
        "When our server crashed during peak season, we were back online in 2 hours thanks to their disaster recovery plan. Zero data loss and minimal downtime saved our business.",
      employees: "150-300",
      industry: "Manufacturing",
      achievement: "2 Hour Recovery",
    },
    {
      name: "David Chen",
      company: "Legal Associates Group",
      role: "Managing Partner",
      rating: 5,
      comment:
        "The ransomware attack could have destroyed our firm. Their backup system restored 5 years of client data within hours. Professional, reliable, and absolutely essential.",
      employees: "50-100",
      industry: "Legal Services",
      achievement: "100% Data Recovery",
    },
    {
      name: "Emma Rodriguez",
      company: "Healthcare Innovations",
      role: "IT Manager",
      rating: 5,
      comment:
        "GDPR compliance was critical for us. Their backup solution not only protects patient data but ensures we meet all regulatory requirements with automated reporting.",
      employees: "200-500",
      industry: "Healthcare",
      achievement: "GDPR Compliant",
    },
    {
      name: "Michael Thompson",
      company: "Retail Solutions Inc",
      role: "CEO",
      rating: 5,
      comment:
        "Fire damaged our main office, but business continued seamlessly. Their disaster recovery plan activated automatically, and we operated from backup systems for weeks.",
      employees: "75-150",
      industry: "Retail Technology",
      achievement: "Zero Downtime",
    },
  ]

  const coreServices = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Automated Data Backup",
      description:
        "Comprehensive automated backup solutions with continuous data protection, versioning, and instant recovery capabilities.",
      features: [
        "Real-time backup monitoring",
        "Multiple backup versions",
        "Automated scheduling",
        "Cross-platform support",
      ],
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Disaster Recovery Planning",
      description:
        "Complete disaster recovery strategies with tested recovery procedures, failover systems, and business continuity planning.",
      features: ["Recovery time objectives", "Failover automation", "Regular DR testing", "Business continuity"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ransomware Protection",
      description:
        "Advanced protection against ransomware with immutable backups, threat detection, and rapid recovery systems.",
      features: ["Immutable backup storage", "Threat detection", "Air-gapped backups", "Rapid restoration"],
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Monitoring & Support",
      description:
        "Round-the-clock monitoring of backup systems with immediate alerts, proactive maintenance, and expert support.",
      features: ["Continuous monitoring", "Instant alerts", "Proactive maintenance", "Expert support team"],
    },
  ]

  const comparisonData = [
    {
      feature: "Recovery Time",
      modern: "Minutes to hours",
      traditional: "Days to weeks",
    },
    {
      feature: "Data Loss Risk",
      modern: "Near-zero with continuous backup",
      traditional: "Hours to days of data loss",
    },
    {
      feature: "Ransomware Protection",
      modern: "Immutable, air-gapped backups",
      traditional: "Vulnerable to encryption",
    },
    {
      feature: "Testing Frequency",
      modern: "Automated monthly testing",
      traditional: "Manual, infrequent testing",
    },
    {
      feature: "Scalability",
      modern: "Automatic scaling",
      traditional: "Manual hardware upgrades",
    },
    {
      feature: "Compliance Reporting",
      modern: "Automated compliance reports",
      traditional: "Manual documentation",
    },
  ]

  const pricingTiers = [
    {
      name: "Backup Essentials",
      price: "\u00A3199",
      period: "per month",
      description: "Essential backup protection for small businesses",
      features: [
        "Daily automated backups",
        "30-day retention policy",
        "Email notifications",
        "Basic recovery support",
        "Cloud storage included",
      ],
      popular: false,
    },
    {
      name: "Business Continuity",
      price: "\u00A3449",
      period: "per month",
      description: "Complete backup and disaster recovery solution",
      features: [
        "Everything in Essentials",
        "Continuous data protection",
        "Disaster recovery planning",
        "24/7 monitoring & support",
        "Ransomware protection",
        "Priority recovery assistance",
      ],
      popular: true,
    },
    {
      name: "Enterprise Protection",
      price: "Custom",
      period: "pricing",
      description: "Advanced protection for large organizations",
      features: [
        "Everything in Business Continuity",
        "Dedicated backup architect",
        "Custom retention policies",
        "Advanced compliance reporting",
        "Executive briefings",
        "On-site recovery support",
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
      <section className="relative bg-gradient-to-br from-red-50 to-orange-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="text-sm bg-red-100 text-red-800">
                  Data Protection & Recovery
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Backup & Disaster Recovery Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Protect your business with comprehensive backup solutions and disaster recovery planning. Ensure
                business continuity with automated backups, rapid recovery, and 24/7 monitoring.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-orange-800">
                    <strong>Critical Protection:</strong> 60% of businesses that lose data shut down within 6 months.
                    Don't become a statistic - protect your business today.
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to = "/recovery">
                   <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                     <Calendar className="h-4 w-4 mr-2" />
                     Free Backup Assessment
                   </Button>
                </Link>
                <a href="tel:01452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                   <Phone className="mr-2 h-6 w-6" />
                   01452905204
                 </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{"<"}15min</div>
                  <div className="text-sm text-gray-600">Recovery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">99.9%</div>
                  <div className="text-sm text-gray-600">Data Recovery Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Backup Status</div>
                    <div className="text-xs text-green-600">Protected</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-blue-800">Last Backup</div>
                    <div className="text-xs text-blue-600">2 min ago</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Data Protection</span>
                      <span className="text-sm text-green-600">Active</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Recovery Readiness</span>
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

      {/* Backup Statistics */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Of businesses close within 6 months of data loss</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">&pound;4.45M</div>
              <div className="text-sm text-gray-300">Average cost of a data breach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">93%</div>
              <div className="text-sm text-gray-300">Of companies without DR plan fail within a year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">{"<"}1hr</div>
              <div className="text-sm text-gray-300">Our average recovery time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Complete Data Protection Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive backup and disaster recovery services designed to protect your business from data loss,
              system failures, and cyber threats with rapid recovery capabilities.
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

      {/* Modern vs Traditional Comparison */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern vs. Traditional Backup Solutions
              </h2>
              <p className="text-lg text-gray-600">
                See how modern backup and disaster recovery solutions compare to traditional methods
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-gray-900">
                <div>Recovery Factor</div>
                <div className="text-center text-red-600">Modern Solutions</div>
                <div className="text-center text-gray-600">Traditional Methods</div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 p-4 border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-25" : "bg-white"}`}
                >
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-red-600 font-medium">{row.modern}</div>
                  <div className="text-center text-gray-600">{row.traditional}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to = "/backupROI">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                Assess Your Current Backup
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Protection Services</h2>
              <p className="text-lg text-gray-600">
                Explore our detailed backup and disaster recovery services designed to protect your business
              </p>
            </div>
            <Tabs defaultValue="backup" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="backup">Backup</TabsTrigger>
                <TabsTrigger value="recovery">Recovery</TabsTrigger>
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>
              <TabsContent value="backup" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Data Backup</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive automated backup solutions with continuous data protection, multiple retention
                      policies, and instant recovery capabilities for all your critical business data.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Continuous Data Protection</div>
                          <div className="text-sm text-gray-600">Real-time backup with minimal data loss</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Multiple Retention Policies</div>
                          <div className="text-sm text-gray-600">Flexible retention from days to years</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Cross-Platform Support</div>
                          <div className="text-sm text-gray-600">Windows, Mac, Linux, and mobile devices</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Database className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-gray-700 font-semibold">Automated Backups</div>
                      <div className="text-sm text-gray-600 mt-2">Continuous protection without interruption</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="recovery" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <RefreshCw className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-green-600 mb-2">{"<"}15min</div>
                      <div className="text-gray-700 font-semibold">Recovery Time</div>
                      <div className="text-sm text-gray-600 mt-2">Rapid restoration of critical systems</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Disaster Recovery Planning</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive disaster recovery strategies with tested procedures, automated failover systems, and
                      business continuity planning to minimize downtime and data loss.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Automated Failover</div>
                          <div className="text-sm text-gray-600">Instant switching to backup systems</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Regular DR Testing</div>
                          <div className="text-sm text-gray-600">Monthly testing ensures recovery readiness</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Business Continuity</div>
                          <div className="text-sm text-gray-600">Keep operations running during disasters</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="monitoring" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Monitoring & Support</h3>
                    <p className="text-gray-600 mb-6">
                      Round-the-clock monitoring of all backup systems with proactive alerts, automatic issue
                      resolution, and expert support team available whenever you need assistance.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Proactive Monitoring</div>
                          <div className="text-sm text-gray-600">Continuous system health monitoring</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Instant Alerts</div>
                          <div className="text-sm text-gray-600">Immediate notification of any issues</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Expert Support Team</div>
                          <div className="text-sm text-gray-600">Certified professionals available 24/7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Monitor className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                      <div className="text-gray-700 font-semibold">System Monitoring</div>
                      <div className="text-sm text-gray-600 mt-2">Continuous oversight and support</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="compliance" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <Lock className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                      <div className="text-gray-700 font-semibold">Compliance Ready</div>
                      <div className="text-sm text-gray-600 mt-2">Meet all regulatory requirements</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance & Governance</h3>
                    <p className="text-gray-600 mb-6">
                      Comprehensive compliance management with automated reporting, audit trails, and adherence to
                      industry regulations including GDPR, SOX, and more.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Automated Reporting</div>
                          <div className="text-sm text-gray-600">Regular compliance reports and documentation</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Audit Trails</div>
                          <div className="text-sm text-gray-600">Complete backup and recovery audit logs</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">Regulatory Compliance</div>
                          <div className="text-sm text-gray-600">GDPR, SOX, PCI-DSS compliance</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Disaster Recovery Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how businesses have protected their operations with our backup and disaster recovery solutions
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
                      <div className="text-sm font-medium text-red-600">{testimonials[activeTestimonial].company}</div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4 mt-4 text-xs text-gray-500">
                    <Badge variant="outline">{testimonials[activeTestimonial].employees} employees</Badge>
                    <Badge variant="outline">{testimonials[activeTestimonial].industry}</Badge>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
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
                    activeTestimonial === index ? "bg-red-600" : "bg-gray-300"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Backup & Recovery Plans</h2>
            <p className="text-lg text-gray-600">
              Comprehensive data protection plans that scale with your business needs and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-red-600 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">Most Popular</Badge>
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
                      tier.popular ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.name === "Enterprise Protection" ? "Contact Recovery Team" : "Start Protection"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need custom backup and disaster recovery? We design solutions tailored to your specific requirements and
              compliance needs.
            </p>
            <Button variant="outline" size="lg">
              Schedule Recovery Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Backup & Recovery Questions</h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about backup solutions and disaster recovery planning
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How quickly can you recover our data after a disaster?</AccordionTrigger>
                <AccordionContent>
                  Recovery times depend on the type of disaster and data volume, but our typical recovery time is under
                  15 minutes for critical systems. We guarantee Recovery Time Objectives (RTO) of 1-4 hours for complete
                  system restoration, and Recovery Point Objectives (RPO) of less than 15 minutes, meaning minimal data
                  loss.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What types of disasters does your solution protect against?</AccordionTrigger>
                <AccordionContent>
                  Our comprehensive solution protects against all types of disasters including hardware failures,
                  ransomware attacks, natural disasters, human error, cyber attacks, power outages, and system
                  corruption. We use multiple backup locations and immutable storage to ensure your data is always
                  recoverable.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How often are backups performed and tested?</AccordionTrigger>
                <AccordionContent>
                  Backups are performed continuously throughout the day with our real-time protection, ensuring minimal
                  data loss. We also perform comprehensive system backups daily. All backup systems are tested monthly
                  with full disaster recovery drills to ensure they work when needed. You receive detailed reports of
                  all backup and test activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is our backup data secure and compliant?</AccordionTrigger>
                <AccordionContent>
                  Yes, all backup data is encrypted both in transit and at rest using military-grade encryption. We
                  maintain compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requirements. Our facilities
                  are SOC 2 certified, and we provide detailed audit trails and compliance reporting for your records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What happens if your backup service goes down?</AccordionTrigger>
                <AccordionContent>
                  We use redundant systems across multiple data centers to ensure 99.9% uptime. If one system fails,
                  backups automatically continue through alternate systems. We also maintain local backup copies and
                  provide multiple recovery options including cloud, local, and hybrid recovery methods to ensure your
                  data is always accessible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can you help us create a disaster recovery plan?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We provide comprehensive disaster recovery planning services including business impact
                  analysis, risk assessment, recovery strategy development, and staff training. We create customized DR
                  plans that include step-by-step recovery procedures, contact lists, and regular testing schedules to
                  ensure your team is prepared.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't Wait for Disaster to Strike</h2>
            <p className="text-xl mb-8 opacity-90">
              Protect your business with comprehensive backup and disaster recovery solutions. Get started with a free
              assessment and ensure your business can survive any disaster.
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
                Free disaster recovery planning
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                No setup fees
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
