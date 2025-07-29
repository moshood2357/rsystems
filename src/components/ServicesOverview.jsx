"use client"
import {
  Shield,
  Cloud,
  Lightbulb,
  Headphones,
  CheckCircle,
  Zap,
  Users,
  Award,
  Phone
} from "lucide-react"

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { Button } from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"



export default function ServicesOverview() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive IT Services & Solutions</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From cybersecurity and cloud infrastructure to device management and strategic consulting, we provide
              end-to-end IT solutions that drive business success and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to = "/contact">
                 
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  >
                    Schedule Consultation
                  </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of IT services designed to meet your business needs, from basic support
              to enterprise-level solutions.
            </p>
          </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Managed IT support",
                description:
                  "We monitor, maintain, and manage your entire IT environment so you can focus on growing your business. Whether you’re a 5-person law firm or a 50-seat finance office, our UK-based support team is just a call away — 24/7.",
                features: ["24/7 helpdesk", "Remote support", "On-site support", "Proactive monitoring", "Patch management"],
                link: "/support", 
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Cybersecurity services",
                description:
                  "Defend against malware, phishing, ransomware, and zero-day threats with next-gen security tools.",
                features: ["Endpoint protection (antivirus, EDR)", "Managed firewalls", "Security awareness training ", "Email security (anti-phishing, spam filters)", "Security audits and compliance (GDPR, ISO 27001)", "Data loss prevention (DLP) solutions", "Incident response and remediation services"],
                link: "/cybersecurity", 
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Cloud & Infrastructure management",
                description: "Optimize, secure, and scale your IT operations with reliable cloud and infrastructure services.",
                features: ["Microsoft 365 & Google Workspace Support", "Secure Cloud Storage & File Sharing", "Seamless setup, licensing, and administration for cloud productivity tools" , "Server Management & Virtualisation", "Full lifecycle management of on-prem and cloud servers, including Hyper-V and VMware.e", "Backup and disaster recovery solutions"],
                link: "/cloud", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Backup and Data Recovery",
                description:
                  "Ensure business continuity and rapid recovery from accidental deletion, hardware failure, or cyber incidents with reliable backup and recovery solutions.",
                features: ["Cloud and on-premises backup solutions", "Automated scheduled backups", "Disaster recovery planning", "Rapid data restoration servicesRapid data restoration servicesRapid data restoration servicesRapid data restoration services", "Ransomware-resistant backup strategies", "Backup monitoring and reporting", "Compliance-aligned data retention policies"],
                link: "/backup", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Network Management",
                description:
                  "Keep your business connected with secure, reliable, and high-performance networks tailored to your needs.",
                features: ["Network design and implementation", "Proactive network monitoring", "Wi-Fi and LAN management", "Managed switches and routing", "Network performance optimization", "VPN setup and management", "Network security and access control"],
                link: "/network", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Vendor Management",
                description:
                  "Simplify your technology relationships with streamlined vendor management, ensuring you get the best value and support for your IT investments.",
                features: ["Single point of contact for all IT vendors", "Internet and telecom provider management", "Contract and renewal tracking", "Hardware and software licensing management", "Vendor performance monitoring", "Escalation and issue resolution", "Cost optimization and vendor negotiations"],
                link: "/vendor", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "VoIP and Unified Communication",
                description:
                  "Enhance team collaboration and customer communication with flexible, scalable VoIP and unified communication solutions.",
                features: ["Cloud-based VoIP phone systems", "Video conferencing setup and management", "Instant messaging and team collaboration tools", "Call routing and auto-attendant configuration", "Mobile device integration", "Voicemail-to-email and call recording", "Reliable support and monitoring"],
                link: "/VoIP", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "IT consultancy",
                description:
                  "Align your technology with your business goals through expert guidance, planning, and strategic IT consultancy services.",
                features: ["IT strategy and roadmap development", "Technology audits and assessments", "Cloud readiness and migration planning", "Cybersecurity consulting", "Compliance and risk management", "Infrastructure and system optimization", "Budget planning and cost reduction strategies"],
                link: "/consultancy", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Compliance & Governance",
                description:
                  "Protect your business and build trust with structured compliance and governance solutions aligned with industry standards.",
                features: ["Compliance gap assessments", "GDPR and ISO 27001 compliance support", "Policy development and documentation", "Data protection and privacy management", "Risk assessments and mitigation planning", "Regular compliance audits", "Governance frameworks and best practices"],
                link: "/compliance", 
              },
               {
                icon: <Zap className="h-8 w-8" />,
                title: "Website design and development",
                description:
                  "Transform your digital landscape with web design and development services. We create responsive and user-friendly websites that reflect your brand and help you convert visitors into client.",
                features: ["Fully responsive", "Conversion-focused", "Bespoke design", "Optimized for search engine", "CMS integration"],
                link: "/webdesign&developmement", 
              },
              {
                icon: <Zap className="h-8 w-8 " />,
                title: "Device & Endpoint Protection",
                description:
                  "Keep your devices secure, updated, and performing efficiently with proactive endpoint management services.",
                features: ["Endpoint security (antivirus, EDR)", "Patch management and updates", "Asset tracking and inventory management", "Mobile device management (MDM)", "Remote monitoring and support", "Device configuration and policy enforcement", "Lifecycle management and device replacement planning"],
                link: "/protection", 
              },
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate(service.link)}>Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional IT solutions with proven expertise, cutting-edge technology, and unwavering
              commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Security</h3>
              <p className="text-gray-600">
                Industry-leading security measures with 99.9% threat detection rate and zero breaches.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support with average response time under 15 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Certified professionals with 25+ years of combined experience in IT solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible IT solutions that grow with your business from startup to enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-xl text-gray-300">
              Our track record speaks for itself with measurable results and satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">15min</div>
              <div className="text-gray-300">Avg Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with a free consultation and discover how our comprehensive IT services can drive your
              business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                              size="lg"
                              variant="outline"
                              className="bg-white text-blue-600 hover:bg-gray-100"
                            >
                              <Phone className="h-4 w-4 mr-2" />
                              01452905204
                            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
