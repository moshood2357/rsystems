import React, { useState } from 'react';
import { Cloud, CheckCircle, AlertTriangle, Users, Award, Server, Zap, Shield, DollarSign, Phone, Mail, Building, User, X, Database, Globe } from 'lucide-react';
import Back from './Back';

import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  serviceCategory: string;
}

const CloudInfrastructureLanding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    serviceCategory: 'Cloud Infrastructure',
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
      serviceCategory: 'Cloud Infrastructure',
      
    });
  } catch (error) {
    console.error('EmailJS Error:', error);
    alert("An error occurred while sending your request. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};

  const assessmentFeatures = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Readiness Evaluation",
      description: "Comprehensive analysis of your current infrastructure's cloud migration potential"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Optimization Analysis",
      description: "Identify potential savings and ROI opportunities in cloud migration"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance Review",
      description: "Evaluate cloud security posture and regulatory compliance requirements"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Assess scalability needs and performance improvement opportunities"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Migration Strategy",
      description: "Develop secure and efficient data migration and backup strategies"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Cloud Architecture",
      description: "Design optimal cloud architecture across AWS, Azure, and Google Cloud"
    }
  ];

  const benefits = [
    "Completely confidential evaluation",
    "No disruption to current operations",
    "Comprehensive Cloud Strategy Report",
    "Custom migration roadmap and timeline",
    "Zero obligation to implement recommendations",
    "Senior cloud architect-led assessment"
  ];

  const trustIndicators = [
    { icon: <Award className="h-8 w-8" />, text: "AWS Advanced Partner" },
    { icon: <Cloud className="h-8 w-8" />, text: "Azure Gold Partner" },
    { icon: <Users className="h-8 w-8" />, text: "200+ Migrations" },
    { icon: <CheckCircle className="h-8 w-8" />, text: "99% Success Rate" }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="bg-white rounded-2xl shadow-2xl p-12 relative">
            {/* Top-right “×” button */}
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
              Assessment Request Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in our FREE Cyber Security Risk Assessment.
              Our senior security consultant will contact you within 24 hours to schedule your evaluation.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
              <ul className="text-blue-800 space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                  Initial consultation call (15 minutes)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                  Schedule your 2-hour assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                  Receive comprehensive security report
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
     

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <Back className = "mt-5"/>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-flex items-center bg-orange-500/20 text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Limited Time Offer - R2 System Solution Ltd Clients Only
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  FREE Cloud Infrastructure
                  <span className="text-yellow-400"> Assessment</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Discover Cloud Migration Opportunities & Unlock Cost Savings - No Obligation
                </p>
              </div>

              {/* Value Proposition */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Exclusive, Limited-Time Offer: Complimentary Cloud Infrastructure Assessment
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  <span className="text-yellow-400 font-semibold">Worth &pound;4,000 - Yours Free</span> As An R2 System Solution Ltd Client
                </p>
                <div className="bg-blue-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What You'll Get (Total Time Investment: Just 4 Hours):
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {assessmentFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-yellow-400 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{feature.title}</h4>
                          <p className="text-sm text-blue-200">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What You'll Discover */}
              <div className="bg-white rounded-2xl p-8 mb-12 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Comprehensive Assessment Will Reveal:
                </h2>
                <div className="space-y-4">
                  {[
                    "If cloud migration can reduce your IT costs by 20-40%",
                    "Whether your current infrastructure is ready for cloud transformation",
                    "Which cloud platform (AWS, Azure, Google Cloud) best fits your needs",
                    "How to maintain security and compliance during migration",
                    "Your potential ROI timeline and cost-benefit analysis"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
                      Claim Your Free Cloud Infrastructure Assessment
                    </h3>
                    <p className="text-gray-600">Complete the form below to get started</p>
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your business email"
                        />
                      </div>
                    </div>
                     
                    <div>
                      <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                        Assessment needed*
                      </label>
                      <div className="relative">
                        <Cloud className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="serviceCategory"
                          name="serviceCategory"
                          value= "Cloud Infrastructure"
                          readOnly
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Cloud Infrastructure"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        "Get My Free Assessment"
                      )}
                    </button>
                  </form>

                  {/* Professional Bio */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/akorede.jpg"
                        alt="Cloud Expert"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ridwan Akorede, AWS SA</h4>
                        <p className="text-sm text-gray-600">Senior Cloud Architect</p>
                        <button
                          onClick={() => setShowBio(true)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                          Who Is Ridwan Akorede? →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="text-white font-semibold mb-4 text-center">Certified Cloud Partners</h4>
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
            Don't Miss Out on Cloud Cost Savings
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Companies typically save 20-40% on IT costs after cloud migration. Discover your potential savings today.
          </p>
          <button
            onClick={() => document.getElementById('fullName')?.focus()}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
          >
            Schedule My Free Assessment Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Cloud className="h-8 w-8" />
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
                <h3 className="text-2xl font-bold text-gray-900">About Ridwan Akorede, AWS SA</h3>
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Senior Cloud Architect</h4>
                  <p className="text-gray-600 mb-4">
                    10+ years of cloud infrastructure design and migration experience
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-blue-600" />
                      AWS Solutions Architect Professional
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Cloud className="h-4 w-4 mr-2 text-blue-600" />
                      Microsoft Azure Solutions Architect Expert
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Server className="h-4 w-4 mr-2 text-blue-600" />
                      Google Cloud Professional Cloud Architect
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Ridwan Akorede is a highly experienced cloud architect with over 10 years of expertise 
                  in designing and implementing cloud infrastructure solutions. As an AWS Solutions Architect 
                  Professional and Microsoft Azure Solutions Architect Expert, he brings comprehensive 
                  knowledge of multi-cloud environments and migration strategies.
                </p>
                <p>
                  Throughout his career, Ridwan has led cloud migration projects for over 200 organizations, 
                  helping them reduce costs, improve scalability, and enhance operational efficiency. His 
                  expertise spans cloud architecture design, cost optimization, security implementation, 
                  and DevOps automation.
                </p>
                <p>
                  Ridwan's methodology focuses on understanding business requirements first, then designing 
                  cloud solutions that align with organizational goals while maximizing cost savings and 
                  operational benefits.
                </p>
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h5 className="font-semibold text-blue-900 mb-2">Recent Achievements:</h5>
                <ul className="text-blue-800 space-y-1">
                  <li>• Reduced cloud costs by 45% for e-commerce client through optimization</li>
                  <li>• Successfully migrated 200+ companies to cloud infrastructure</li>
                  <li>• Improved application performance by 70% through cloud architecture</li>
                  <li>• Featured speaker at AWS re:Invent and Microsoft Ignite conferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudInfrastructureLanding;