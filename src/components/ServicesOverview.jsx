"use client"
import {
  Shield,
  Cloud,
  Lightbulb,
  Headphones,
  CheckCircle,
  Phone,
  ArrowRight,
  ChevronDown,
  Settings,
  Wifi,
  HardDrive,
  Monitor,

  Zap,
  Users,
  Award
} from "lucide-react"

import { useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import { useState } from "react";

import { Button } from "../ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card"



export default function ServicesOverview() {

  const navigate = useNavigate();
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

  // const services = [
  //   {
  //     icon: <Monitor className="h-8 w-8" />,
  //     iconBg: "bg-blue-100",
  //     iconColor: "text-blue-600",
  //     title: "Managed IT support",
  //     description:
  //       "Fast and reliable computer repair services for all makes and models. Hardware and software issues resolved quickly by certified technicians.",
  //     features: [
  //       "Hardware diagnostics and repair",
  //       "Software troubleshooting and optimization",
  //       "Data recovery services",
  //       "Virus removal and security",
  //       "Same-day service available",
  //       "90-day warranty on all repairs",
  //       "On-site and remote support",
  //     ],
  //     badge: "Popular",
  //     badgeColor: "bg-green-100 text-green-800",
  //   },
  //   {
  //     icon: <Shield className="h-8 w-8" />,
  //     iconBg: "bg-red-100",
  //     iconColor: "text-red-600",
  //     title: "Cyber security services",
  //     description: "Defend against malware, phishing, ransomware, and zero-day threats with next-gen security tools.",
  //     features: [
  //       "Endpoint protection (antivirus, EDR)",
  //       "Managed firewalls",
  //       "Security awareness training",
  //       "Email security (anti-phishing, spam filters)",
  //       "Security audits and compliance (GDPR, ISO 27001)",
  //       "Data loss prevention (DLP) solutions",
  //       "Incident response and remediation services",
  //     ],
  //     badge: "Critical",
  //     badgeColor: "bg-red-100 text-red-800",
  //   },
  //   {
  //     icon: <Server className="h-8 w-8" />,
  //     iconBg: "bg-blue-100",
  //     iconColor: "text-blue-600",
  //     title: "Managed IT Support",
  //     description:
  //       "Comprehensive IT management and support services that keep your business running smoothly with enterprise-level infrastructure.",
  //     features: [
  //       "24/7 network monitoring and alerts",
  //       "Help desk support and ticketing",
  //       "Proactive maintenance and updates",
  //       "Backup and disaster recovery",
  //       "Cloud services management",
  //       "Vendor management and procurement",
  //       "Strategic IT planning and consulting",
  //     ],
  //     badge: "Enterprise",
  //     badgeColor: "bg-blue-100 text-blue-800",
  //   },
  //   {
  //     icon: <Cloud className="h-8 w-8" />,
  //     iconBg: "bg-cyan-100",
  //     iconColor: "text-cyan-600",
  //     title: "Cloud & Infrastructure Management",
  //     description:
  //       "Transform your business with modern cloud infrastructure. Scalable, secure, and cost-effective solutions that grow with your needs.",
  //     features: [
  //       "Cloud migration and modernization",
  //       "Multi-cloud management (AWS, Azure, GCP)",
  //       "Infrastructure automation and DevOps",
  //       "Cloud security and compliance",
  //       "Cost optimization and monitoring",
  //       "Disaster recovery planning",
  //       "Hybrid cloud solutions",
  //     ],
  //     badge: "Scalable",
  //     badgeColor: "bg-cyan-100 text-cyan-800",
  //   },
  //   {
  //     icon: <Smartphone className="h-8 w-8" />,
  //     iconBg: "bg-orange-100",
  //     iconColor: "text-orange-600",
  //     title: "Device & Endpoint Protection",
  //     description:
  //       "Secure every device in your organization with comprehensive endpoint protection and zero-trust security for the modern workforce.",
  //     features: [
  //       "Endpoint detection and response (EDR)",
  //       "Mobile device management (MDM)",
  //       "Unified endpoint management (UEM)",
  //       "Zero-trust endpoint security",
  //       "BYOD policy enforcement",
  //       "Remote device management",
  //       "Device compliance monitoring",
  //     ],
  //     badge: "Advanced",
  //     badgeColor: "bg-orange-100 text-orange-800",
  //   },
  //   {
  //     icon: <Lightbulb className="h-8 w-8" />,
  //     iconBg: "bg-purple-100",
  //     iconColor: "text-purple-600",
  //     title: "IT Consultancy & Strategic Advisory",
  //     description:
  //       "Transform your business with expert IT strategy and guidance. Make informed technology decisions and accelerate digital transformation.",
  //     features: [
  //       "IT strategy and roadmap development",
  //       "Digital transformation consulting",
  //       "Technology assessment and planning",
  //       "CIO/CTO advisory services",
  //       "Vendor selection and management",
  //       "Project management and oversight",
  //       "ROI analysis and business cases",
  //     ],
  //     badge: "Strategic",
  //     badgeColor: "bg-purple-100 text-purple-800",
  //   },
  //   {
  //     icon: <Scale className="h-8 w-8" />,
  //     iconBg: "bg-green-100",
  //     iconColor: "text-green-600",
  //     title: "Compliance & Governance",
  //     description:
  //       "Navigate complex regulatory requirements with confidence. Comprehensive compliance solutions that reduce risk and optimize operations.",
  //     features: [
  //       "Regulatory compliance (HIPAA, SOX, PCI-DSS)",
  //       "IT governance frameworks (COBIT, ITIL)",
  //       "Risk management and assessment",
  //       "Policy development and documentation",
  //       "Audit preparation and support",
  //       "Compliance monitoring and reporting",
  //       "Training and awareness programs",
  //     ],
  //     badge: "Certified",
  //     badgeColor: "bg-green-100 text-green-800",
  //   },
  //   {
  //     icon: <Headphones className="h-8 w-8" />,
  //     iconBg: "bg-indigo-100",
  //     iconColor: "text-indigo-600",
  //     title: "24/7 Technical Support",
  //     description:
  //       "Round-the-clock technical support and help desk services to keep your business operations running without interruption.",
  //     features: [
  //       "24/7 help desk and phone support",
  //       "Remote troubleshooting and assistance",
  //       "Ticket management and tracking",
  //       "Multi-channel support (phone, email, chat)",
  //       "Escalation procedures and SLAs",
  //       "Knowledge base and self-service",
  //       "User training and documentation",
  //     ],
  //     badge: "24/7",
  //     badgeColor: "bg-indigo-100 text-indigo-800",
  //   },
  // ]

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

    <AnchorLink
      href="#testimonials"
      onClick={() => setIsMobileMenuOpen(false)}
      className="text-gray-700 hover:text-blue-600 text-lg font-medium"
    >
      Reviews
    </AnchorLink>

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
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive IT Services & Solutions</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From cybersecurity and cloud infrastructure to device management and strategic consulting, we provide
              end-to-end IT solutions that drive business success and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                Schedule Consultation
              </Button>
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
                title: "Cyber security services",
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
                link: "/support", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Vendor Management",
                description:
                  "Simplify your technology relationships with streamlined vendor management, ensuring you get the best value and support for your IT investments.",
                features: ["Single point of contact for all IT vendors", "Internet and telecom provider management", "Contract and renewal tracking", "Hardware and software licensing management", "Vendor performance monitoring", "Escalation and issue resolution", "Cost optimization and vendor negotiations"],
                link: "/support", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "VoIP and Unified Communication",
                description:
                  "Enhance team collaboration and customer communication with flexible, scalable VoIP and unified communication solutions.",
                features: ["Cloud-based VoIP phone systems", "Video conferencing setup and management", "Instant messaging and team collaboration tools", "Call routing and auto-attendant configuration", "Mobile device integration", "Voicemail-to-email and call recording", "Reliable support and monitoring"],
                link: "/support", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "IT consultancy",
                description:
                  "Align your technology with your business goals through expert guidance, planning, and strategic IT consultancy services.",
                features: ["IT strategy and roadmap development", "Technology audits and assessments", "Cloud readiness and migration planning", "Cybersecurity consulting", "Compliance and risk management", "Infrastructure and system optimization", "Budget planning and cost reduction strategies"],
                link: "/support", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Compliance & Governace",
                description:
                  "Protect your business and build trust with structured compliance and governance solutions aligned with industry standards.",
                features: ["Compliance gap assessments", "GDPR, ISO 27001, and HIPAA compliance support", "Policy development and documentation", "Data protection and privacy management", "Risk assessments and mitigation planning", "Regular compliance audits", "Governance frameworks and best practices"],
                link: "/support", 
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Device & Endpoint Management",
                description:
                  "Keep your devices secure, updated, and performing efficiently with proactive endpoint management services.",
                features: ["Endpoint security (antivirus, EDR)", "Patch management and updates", "Asset tracking and inventory management", "Mobile device management (MDM)", "Remote monitoring and support", "Device configuration and policy enforcement", "Lifecycle management and device replacement planning"],
                link: "/support", 
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
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Call: (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
