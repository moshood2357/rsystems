import React, { useState } from 'react';
import { Users, CheckCircle, AlertTriangle, Award, Monitor, Lightbulb, TrendingUp, Phone, Mail, Building, User, X, Zap, Target } from 'lucide-react';

import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  serviceCategory: string;
}

const ITConsultancyLanding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    serviceCategory: 'IT Consultancy',
  });
  const [showBio, setShowBio] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
     "service_98wbl6a",
     "template_iykrcrf",
      {
        fullName: formData.fullName,
        companyName: formData.companyName,
        businessEmail: formData.businessEmail,
        phoneNumber: formData.phoneNumber,
        serviceCategory: formData.serviceCategory,
      },
      "usjHoNFTTChknODfx"
    );

    console.log('Email successfully sent:', result.text);
    setSubmitted(true); 
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phoneNumber: '',
      serviceCategory: 'IT Consultancy',
    });
  } catch (error: any) {
    console.error('EmailJS Error:', error?.status, error?.text, error);
    alert(`An error occurred while sending your request. ${error?.text ?? ''}`);
  } finally {
    setIsSubmitting(false);
  }
};

  const consultancyServices = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Digital Transformation Strategy",
      description: "Develop comprehensive roadmaps for modernizing your technology landscape"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "IT Strategy & Planning",
      description: "Align technology initiatives with business objectives for maximum ROI"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Identify and eliminate bottlenecks to improve system efficiency"
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Technology Selection",
      description: "Expert guidance on choosing the right tools and platforms for your needs"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Process Automation",
      description: "Streamline operations through intelligent automation solutions"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Change Management",
      description: "Ensure smooth technology adoption with comprehensive change strategies"
    }
  ];

  const benefits = [
    "Unbiased technology recommendations",
    "Proven methodologies and best practices",
    "Cost-effective solution implementation",
    "Risk mitigation and compliance guidance",
    "Ongoing support and knowledge transfer",
    "Industry-specific expertise and insights"
  ];

  const trustIndicators = [
    { icon: <Award className="h-8 w-8" />, text: "Certified Consultants" },
    { icon: <Monitor className="h-8 w-8" />, text: "Technology Partners" },
    { icon: <Users className="h-8 w-8" />, text: "500+ Projects" },
    { icon: <CheckCircle className="h-8 w-8" />, text: "97% Success Rate" }
  ];

    if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="bg-white rounded-2xl shadow-2xl p-12 relative">
            {/* Top-right "×" button */}
            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
  
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Consultancy Request Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in our IT Consultancy services.
              Our senior consultant will contact you within 24 hours to discuss your requirements.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-blue-800 space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                  Discovery call to understand your needs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                  Tailored proposal and timeline
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                  Strategic roadmap development
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              Questions? Call us directly at <span className="font-semibold">(555) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-flex items-center bg-orange-500/20 text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Expert IT Consultancy Services - Strategic Technology Leadership
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Strategic IT
                  <span className="text-yellow-400"> Consultancy</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100 mb-8 leading-relaxed">
                  Transform Your Business with Expert Technology Guidance & Strategic Planning
                </p>
              </div>

              {/* Value Proposition */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Professional IT Consultancy Services
                </h2>
                <p className="text-lg text-indigo-100 mb-6">
                  <span className="text-yellow-400 font-semibold">Tailored Solutions for Your Business</span> - Expert Guidance from Industry Leaders
                </p>
                <div className="bg-indigo-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Our Comprehensive Consultancy Services:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {consultancyServices.map((service, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-yellow-400 mt-1">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{service.title}</h4>
                          <p className="text-sm text-indigo-200">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What You'll Get */}
              <div className="bg-white rounded-2xl p-8 mb-12 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our IT Consultancy?
                </h2>
                <div className="space-y-4">
                  {[
                    "Independent advice tailored to your business objectives",
                    "Proven strategies that deliver measurable results",
                    "Technology roadmaps aligned with industry best practices",
                    "Risk assessment and mitigation strategies",
                    "Cost optimization and budget planning guidance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-yellow-400">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Get Expert IT Consultancy
                    </h3>
                    <p className="text-gray-600">Start your strategic transformation today</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="businessEmail"
                          name="businessEmail"
                          required
                          value={formData.businessEmail}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Enter your business email"
                        />
                      </div>
                    </div>
                     <div>
                      <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 mb-2">
                        Service needed*
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="serviceCategory"
                          name="serviceCategory"
                          value="IT Consultancy"
                          readOnly
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                          placeholder="IT Consultancy"
                        />
                      </div>
                      </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        "Get My Consultancy Quote"
                      )}
                    </button>
                  </form>

                  {/* Professional Bio */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/akorede.jpg"
                        alt="IT Expert"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ridwan Akorede, CEO</h4>
                        <p className="text-sm text-gray-600">Senior IT Strategy Consultant</p>
                        <button
                          onClick={() => setShowBio(true)}
                          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                        >
                          Who Is Ridwan Akorede? →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="text-white font-semibold mb-4 text-center">Trusted by Industry Leaders</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {trustIndicators.map((indicator, index) => (
                      <div key={index} className="text-center">
                        <div className="text-yellow-400 flex justify-center mb-2">
                          {indicator.icon}
                        </div>
                        <p className="text-white text-sm">{indicator.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your IT Strategy?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 500+ businesses that have successfully transformed their technology landscape with our expert guidance.
          </p>
          <button
            onClick={() => document.getElementById('fullName')?.focus()}
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold py-4 px-8 rounded-lg hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
          >
            Start My IT Transformation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="h-8 w-8" />
              <span className="text-xl font-bold">R2 System Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your information is completely confidential and will never be shared with third parties.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 R2 System Solutions. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* Bio Modal */}
      {showBio && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">About Ridwan Akorede, MCSE</h3>
                <button
                  onClick={() => setShowBio(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex items-start space-x-6 mb-6">
                <img
                  src="/akorede.jpg"
                  alt="Ridwan Akorede"
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Senior IT Strategy Consultant</h4>
                  <p className="text-gray-600 mb-4">
                    15+ years of strategic IT consultancy and digital transformation experience
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-indigo-600" />
                      Microsoft Certified Systems Engineer (MCSE)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target className="h-4 w-4 mr-2 text-indigo-600" />
                      Certified Strategy & Innovation Professional
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 mr-2 text-indigo-600" />
                      Digital Transformation Specialist
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Ridwan Akorede is a seasoned IT strategy consultant with over 15 years of experience 
                  helping organizations navigate complex technology decisions and digital transformation 
                  initiatives. His expertise spans strategic planning, technology selection, and 
                  change management across various industries.
                </p>
                <p>
                  As a trusted advisor to C-level executives, Ridwan has successfully guided over 500 
                  organizations through strategic IT initiatives, resulting in improved operational 
                  efficiency, reduced costs, and enhanced competitive positioning.
                </p>
                <p>
                  His consultative approach focuses on understanding business objectives first, then 
                  developing technology strategies that deliver measurable value while minimizing 
                  risks and maximizing return on investment.
                </p>
              </div>
              
              <div className="mt-8 bg-indigo-50 rounded-lg p-6">
                <h5 className="font-semibold text-indigo-900 mb-2">Notable Achievements:</h5>
                <ul className="text-indigo-800 space-y-1">
                  <li>• Led digital transformation for Fortune 500 manufacturing company</li>
                  <li>• Achieved average 35% cost reduction through strategic IT optimization</li>
                  <li>• Keynote speaker at major technology and business conferences</li>
                  <li>• Published thought leader on IT strategy and digital innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ITConsultancyLanding;
