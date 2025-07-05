 
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Users,
  Award,
  Zap,
  Shield,
  Monitor,
  Settings,
  HardDrive,
  Cloud,
  Wifi,
  ChevronDown,
  Target,
  Lightbulb,
  MessageCircle,
  Calendar,
  Clock,
  Globe,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";

import { Link } from 'react-router-dom';
import {  useState } from "react";

export default function About() {
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
                 <Link to ="/" className="text-gray-700 hover:text-blue-600 transition-colors     font-medium">
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
      <section
        id="home"
        className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30">
                Trusted IT Partner Since 2010
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Business Success Through Technology
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                At R2 IT SUPPORT, we've been delivering reliable and innovative IT support since 2010. Our goal is to
                empower businesses with seamless technology solutions, ensuring their operations run smoothly and
                efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to = "/services">
                   <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link >
                <Link to = "/contact">
                   <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  13+ Years Experience
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  800+ Happy Clients
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional IT workspace"
                  className="rounded-2xl w-full h-auto"
                />
              </div>

              {/* Floating Chat Widget Representation */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-4 shadow-lg animate-pulse">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer">
            <MessageCircle className="h-6 w-6" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/team collaboration.jpeg"
                alt="R2 IT Support team workspace"
                className="rounded-2xl shadow-xl w-full h-auto"
              />

              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">13+</p>
                    <p className="text-sm text-gray-600">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600">800+</p>
                    <p className="text-sm text-gray-600">Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Story</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Your Trusted Technology Partner</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, R2 IT SUPPORT has grown from a small technical team to a comprehensive IT solutions
                provider serving businesses across multiple industries. Our journey has been defined by our commitment
                to technical excellence and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We've evolved with the rapidly changing technology landscape, continuously expanding our expertise to
                include cloud services, cybersecurity, and advanced networking solutions to address the complex
                challenges businesses face today.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Certified Professionals</p>
                    <p className="text-sm text-gray-600">Expert team</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Support</p>
                    <p className="text-sm text-gray-600">Always available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional IT services that enhance productivity, improve security, and foster growth for
                  businesses of all sizes. We're committed to delivering solutions that make technology work seamlessly
                  for our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the go-to IT support partner for businesses worldwide, recognized for our expertise and
                  commitment to excellence. We envision a future where technology empowers every business to reach its
                  full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Foundation</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Customer-Centric",
                description:
                  "Your success is our priority. We listen to your needs and deliver solutions tailored to your business goals.",
                color: "blue",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service, from technical expertise to customer support.",
                color: "green",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation",
                description:
                  "We continuously explore emerging technologies to provide cutting-edge solutions that keep you ahead.",
                color: "purple",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Integrity",
                description: "We build relationships based on trust, transparency, and ethical business practices.",
                color: "orange",
              },
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-${value.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`text-${value.color}-600`}>{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Why Choose Us</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why Choose R2 IT SUPPORT?</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="h-6 w-6 text-blue-600" />,
                    title: "Expert Team with certified IT professionals",
                    description: "Our team holds industry certifications and stays current with latest technologies",
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-green-600" />,
                    title: " Transparent pricing, no long-term lock-ins",
                    description: "Simple pricing with the freedom to leave anytime.",
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-purple-600" />,
                    title: "Proactive approach to IT management",
                    description: "We prevent problems before they occur with monitoring and maintenance",
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-orange-600" />,
                    title: "24/7 support availability",
                    description: "Round-the-clock support ensures your business never stops running",
                  },
                  {
                    icon: <Target className="h-6 w-6 text-red-600" />,
                    title: "Customized solutions for businesses of all sizes",
                    description: "Tailored IT solutions that grow with your business needs",
                  },
                   {
                    icon: <Target className="h-6 w-6 text-red-600" />,
                    title: " Trusted by local professionals in legal, finance, and healthcare",
                    description: "Preferred IT partner for law firms, finance teams, and clinics.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/expert.jpeg"
                alt="Expert IT team at work"
                className="rounded-2xl shadow-xl w-full h-auto"
              />

              {/* Expert Team Badge */}
              <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Expert Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to transform your IT infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you achieve your business goals with our comprehensive IT solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to = "/contact">
               <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to ="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to ="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to ="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to ="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>01452 960 004</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@r2systemsolution.co.uk</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <div>
                    <p>Hartley House, 39 Cambray Place,</p>
                    <p>Cheltenham, Gloucestershire, England,</p>
                    <p>GL50 1JP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-bold text-lg mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  to ="/contact"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link
                  to ="/contact"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-bold text-lg mb-6">About Us</h3>
              <p className="text-gray-400 leading-relaxed">
                Proudly supporting small businesses across Cheltenham, Gloucestershire, Stroud, and the surrounding
                areas with peace of mind.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <Link>
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">R2</span>
                    </div>
                    <span className="font-semibold">R2 System Solution Ltd</span>
                </div>
              </Link>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link to ="/privacy" className="hover:text-white transition-colors">
                  Privacy Notice
                </Link>
                <Link to ="/policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <span>© 2024 R2 System Solution Ltd. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};