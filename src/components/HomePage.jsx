
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Wifi,
  HardDrive,
  Settings,
  Cloud,
  Monitor,
  ChevronDown
} from "lucide-react";

import { Button } from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';



export default function HomePage() {
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
  return (
    <div className="min-h-screen bg-white">
      
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
              <AnchorLink href = "#testimonials"  className="text-gray-700 hover:text-blue-600 transition-colors">
                Reviews
              </AnchorLink>
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
    <a href="tel:+4401452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
       <Phone className="mr-2 h-6 w-6" />
       +4401452905204
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant = "outline" className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Trusted IT partner</Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
               Are You Ready To Put An End To Expensive, Frustrating IT Problems in Cheltenham & beyond Finally?

              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop losing time and money to IT problems. Get 24/7 support, 15-minute response time, and fixed monthly pricing. Serving accountants, law firms, and healthcare providers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to = "/contact">
                  <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    Get Free IT assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                 <a href="tel:+4401452905204" className="text-2xl font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                   <Phone className="mr-2 h-6 w-6" />
                   +4401452905204
                 </a>
                
                {/* <AnchorLink href = "#contact"  className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </AnchorLink> */}
                
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  15-Min Response Time
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Fixed Monthly Price
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    99.9% Uptime
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img
                  src="/support-min.png"
                  alt="IT support"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-900">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete IT Solutions for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From computer repairs to network setup, we provide comprehensive IT services to keep your business running
              efficiently.
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
          <Link to = "/services">
             <div className="mt-8 text-center text-blue" size="lg">
                See All Services
            </div>
          </Link>
            
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/tech-support.jpg"
                alt="IT professional working on a computer"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">About Us</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Your Trusted IT Partner Since 2010</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                R2 System Solution has been providing reliable IT services to businesses and individuals across the UK.
                Our team of certified professionals is dedicated to delivering exceptional service and support.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">13+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-gray-600">Support Available</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">98%</p>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
              </div>

              <Link to = "/about"> 
                 <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
              </Link>

              
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Client Reviews</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "Local Business Owner",
                rating: 5,
                review:
                  "Excellent service! They fixed my computer quickly and explained everything clearly. Highly recommended for anyone needing IT support.",
              },
              {
                name: "Mike Thompson",
                company: "Small Business",
                rating: 5,
                review:
                  "R2 System Solution set up our entire office network. Professional, efficient, and great value for money. Our systems run perfectly now.",
              },
              {
                name: "Emma Davis",
                company: "Freelancer",
                rating: 5,
                review:
                  "Fast response time and expert knowledge. They recovered all my important files when my laptop crashed. Couldn't be happier with the service.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contact us today for a free consultation and see how we can help improve your IT infrastructure and
                support.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Phone className="h-6 w-6 mr-4 text-blue-200" />
                  <span className="text-lg">+44 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="h-6 w-6 mr-4 text-blue-200" />
                  <span className="text-lg">info@r2systemsolution.co.uk</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="h-6 w-6 mr-4 text-blue-200" />
                  <span className="text-lg">United Kingdom</span>
                </div>
              </div>
            </div>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Get Your Free Quote</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all" required
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all" required
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email<span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all" required
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed<span className="text-red-500">*</span></label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Computer Repair</option>
                    <option>Network Setup</option>
                    <option>IT Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message<span className="text-red-500">*</span></label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all" required
                    placeholder="Tell us about your IT needs..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R2</span>
                </div>
                <span className="font-bold text-lg">R2 System Solution</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional IT solutions and support services for businesses and individuals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to ="/services" className="hover:text-white transition-colors">
                    Computer Repair
                  </Link>
                </li>
                <li>
                  <Link to ="/solutions" className="hover:text-white transition-colors">
                    Network Solutions
                  </Link>
                </li>
                <li>
                  <Link to ="/support" className="hover:text-white transition-colors">
                    IT Support
                  </Link>
                </li>
                <li>
                  <Link to ="/recovery" className="hover:text-white transition-colors">
                    Data Recovery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to ="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to ="/team" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to ="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to ="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>+44 (0) 123 456 7890</p>
                <p>info@r2systemsolution.co.uk</p>
                <p>United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 R2 System Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
          </div>
  );
}
