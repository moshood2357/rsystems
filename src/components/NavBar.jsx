import { Phone, ArrowRight, Cloud, Settings, HardDrive, Monitor, Shield, Wifi, ChevronDown } from "lucide-react";

import { Button } from "../ui/Button";
import { Link } from 'react-router-dom';
import { useState } from 'react';

  export default function NavBar(){
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
      href: "/cloud"

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

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const products = [
  { title: "CRM", href: "https://crm.r2systemsolution.co.uk/login" },
  { title: "Loan App", href: "/products/product-b" },
    ];

  return (
    <div className="bg-white">
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
                   {/* Products Dropdown */}
                  <div className="relative group">
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium">
                      Products
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
    
                    {/* Products Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                      <div className="p-2">
                        <a
                          href="https://crm.r2systemsolution.co.uk/login"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                        >
                          CRM
                        </a>
                        <a
                          href="https://example.com/loan-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                        >
                          Loan App
                        </a>
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
                  <a href = "/contact">
                     <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </a>
                  
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
        {/* Products Dropdown */}
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="flex justify-between items-center text-gray-700 hover:text-blue-600 text-lg font-medium"
          >
            Products
            <ChevronDown className={`h-5 w-5 transform transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
          </button>
          {isProductsOpen && (
            <div className="flex flex-col space-y-2 pl-4 border-l border-gray-200">
              {products.map((product, idx) => (
                <a
                  key={idx}
                  href={product.href || "/products"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-600 text-base"
                >
                  {product.title}
                </a>
              ))}
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
    
        <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4">
            Get Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    )}
    </div>
  );
  }
