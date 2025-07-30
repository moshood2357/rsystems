 
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Users,
  Award,
  Zap,
  Shield,
  Target,
  Lightbulb,
  MessageCircle,
  Clock,
  Globe,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function About() {
    
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
  <title>R2 System Solution | IT Support in Cheltenham</title>
  <meta name="description" content="Get 24/7 IT support, cybersecurity, and cloud services with 15-minute response time and fixed monthly pricing. Serving Cheltenham & beyond." />
  <meta name="keywords" content="IT Support Cheltenham, Cybersecurity cheltenham, Cloud Management Cheltenham, IT Services UK, R2 System Solution, Managed IT Cheltenham, Website design and development cheltenham, Data Recovery Cheltenham, Network Support Cheltenham" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="R2 System Solution" />
  <link rel="canonical" href="https://www.r2systemsolution.co.uk/" />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.r2systemsolution.co.uk/" />
  <meta property="og:title" content="R2 System Solution | IT Support Experts in Cheltenham" />
  <meta property="og:description" content="Providing fast, reliable IT support and cybersecurity for UK businesses. Trusted by 500+ companies since 2010." />
  <meta property="og:image" content="/meta-banner.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="R2 System Solution | IT Support Experts in Cheltenham" />
  <meta name="twitter:description" content="Providing fast, reliable IT support and cybersecurity for UK businesses. Trusted by 500+ companies since 2010." />
  <meta name="twitter:image" content="/meta-banner.jpg" />


    {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "R2 System Solution",
              "url": "https://www.r2systemsolution.co.uk/",
              "logo": "https://www.r2systemsolution.co.uk/CompanyLogo.jpeg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-1452-905204",
                "contactType": "Customer Support",
                "areaServed": "GB",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/r2systemsolution"
              ]
            }
          `}
        </script>
</Helmet>
    
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
                  <Button size="lg" className="bg-white-600 text-blue hover:bg-blue-700">
                    Our services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to = "/contact">
                <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                  Contact Us
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
                  alt="Professional IT workspace at R2 system solution Ltd. "
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
                src="/IT expert.jpeg"
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
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-4 w-4 mr-2" />
                01452905204
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};