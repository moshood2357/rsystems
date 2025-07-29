import React, { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, Users, Award, Lock, Eye, FileText, Server, Cloud, Phone, Mail, Building, User, X } from 'lucide-react';

import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
   serviceCategory: string;
}

const CyberSecurityLanding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    serviceCategory: 'Cybersecurity',
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
      serviceCategory: 'Cybersecurity',
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
      icon: <Eye className="h-6 w-6" />,
      title: "Dark Web Credential Investigation",
      description: "Discover if your company credentials are being sold on the dark web"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Network Security Evaluation",
      description: "Comprehensive analysis of your current security infrastructure"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Backup System Assessment",
      description: "Verify if your backup systems are truly ransomware-proof"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Phishing Vulnerability Testing",
      description: "Test your team's awareness and susceptibility to phishing attacks"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Compliance Verification",
      description: "Ensure adherence to HIPAA, GLBA, SOX, and other regulations"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Risk Analysis Report",
      description: "Detailed findings with actionable recommendations"
    }
  ];

  const benefits = [
    "Completely confidential investigation",
    "No disruption to current IT services",
    "Detailed Report of Findings",
    "Custom Action Plan if vulnerabilities found",
    "Zero obligation to proceed with recommendations",
    "Senior consultant-led assessment"
  ];

  const trustIndicators = [
    { icon: <Award className="h-8 w-8" />, text: "ISO 27001 Certified" },
    { icon: <Shield className="h-8 w-8" />, text: "CISSP Professionals" },
    { icon: <Users className="h-8 w-8" />, text: "500+ Assessments" },
    { icon: <CheckCircle className="h-8 w-8" />, text: "99% Client Satisfaction" }
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-flex items-center bg-red-500/20 text-red-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Limited Time Offer - R2 System Solution Ltd Clients Only
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  FREE Cyber Security
                  <span className="text-yellow-400"> Risk Assessment</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Discover Hidden Network Vulnerabilities & Get Actionable Security Solutions - No Obligation
                </p>
              </div>

              {/* Value Proposition */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Exclusive, Limited-Time Offer: Complimentary Cyber Security Risk Assessment
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  <span className="text-yellow-400 font-semibold">Worth &pound;2,500 - Yours Free</span> As An R2 System Solution Ltd Client
                </p>
                <div className="bg-blue-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What You'll Get (Total Time Investment: Just 2 Hours):
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
                    "If your credentials are being sold on the Dark Web",
                    "Whether your current IT security can withstand sophisticated cyber attacks",
                    "If your backup systems are truly ransomware-proof",
                    "How vulnerable your team is to phishing attempts",
                    "Your compliance status and potential risks"
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
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
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
                      Claim Your Free Cyber Security Risk Assessment
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
                                            <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                            <input
                                              type="text"
                                              id="serviceCategory"
                                              name="serviceCategory"
                                              value= "Cybersecurity"
                                              readOnly
                                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                              placeholder="Cybersecurity"
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
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                        alt="Security Expert"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ridwan Akorede, CEO</h4>
                        <p className="text-sm text-gray-600">Senior Security Consultant</p>
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
                  <h4 className="text-white font-semibold mb-4 text-center">Trusted By Industry Leaders</h4>
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
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Cyber attacks happen every 39 seconds. Protect your business with a comprehensive security assessment.
          </p>
          <button
            onClick={() => document.getElementById('fullName')?.focus()}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
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
                    <Shield className="h-8 w-8" />
                    <span className="text-xl font-bold">Your information is completely confidential and will never be shared with third parties.</span>
                  </div>
                  
                </div>
              </div>
            </footer>

      {/* Bio Modal */}
      {showBio && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">About Ridwan Akorede, CEO</h3>
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
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Ridwan Akorede – IT Infrastructure Consultant | Cloud & Virtualization Specialist
      </h4>
                        <p className="text-gray-600 mb-4">
                          12+ years of enterprise IT infrastructure optimization experience
                        </p>
                        
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Ridwan Akorede is a seasoned IT infrastructure consultant with over 12 years of experience designing and optimizing enterprise technology environments. Holding industry-recognized certifications, including Microsoft Certified Systems Engineer (MCSE) and VMware Certified Professional, Ridwan combines deep technical knowledge with a strategic business mindset.
                      </p>
                      <p>
                        He has successfully led infrastructure assessments and transformation projects for more than 300 organizations, delivering measurable results such as cost reduction, enhanced system performance, and improved scalability. His core competencies include:
      
                      </p>
                      <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2 text-indigo-600" />
                            Server virtualization and consolidation
      
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Server className="h-4 w-4 mr-2 text-indigo-600" />
                            Cloud migration strategies (Azure, VMware, hybrid environments)
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Cloud className="h-4 w-4 mr-2 text-indigo-600" />
                            Network performance optimization
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Cloud className="h-4 w-4 mr-2 text-indigo-600" />
                            Strategic IT planning aligned with business growth
                          </div>
                        </div>
                      <p>
                        
                          Ridwan’s approach begins with understanding the unique goals of each client. He then builds tailored, future-proof solutions that streamline operations, reduce overhead, and support long-term success.<br></br><br></br>
                          Whether advising C-level executives or guiding technical teams, Ridwan is known for bridging the gap between business and technology—ensuring IT investments drive real-world impact.
                      </p>
                    </div>
                    
                    <div className="mt-8 bg-indigo-50 rounded-lg p-6">
                      <h5 className="font-semibold text-indigo-900 mb-2">Recent Achievements:</h5>
                      <ul className="text-indigo-800 space-y-1">
                        <li>• Reduced IT operational costs by 40% for manufacturing client</li>
                        <li>• Successfully migrated 150+ companies to cloud infrastructure</li>
                        <li>• Improved system performance by 60% through optimization strategies</li>
                        <li>• Featured speaker at Microsoft Ignite and VMworld conferences</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
    </div>
  );
};

export default CyberSecurityLanding;