import React, { useState } from 'react';
import { HardDrive, CheckCircle, AlertTriangle, Users, Award, Database, Shield, Zap, Phone, Mail, Building, User, X, Cloud, Archive } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  serviceCategory: string;
}

const BackupRecoveryLanding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    serviceCategory: 'Backup and Recovery',
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
        serviceCategory: 'Backup and Recovery',
      });
    } catch (error: any) {
      console.error('EmailJS Error:', error?.status, error?.text, error);
      alert(`An error occurred while sending your request. ${error?.text ?? ''}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const assessmentFeatures = [
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Backup Strategy Review",
      description: "Comprehensive evaluation of current backup policies and procedures"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Recovery Time Assessment",
      description: "Analysis of RTO/RPO requirements and disaster recovery capabilities"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Protection Audit",
      description: "Review of data classification, retention policies, and protection levels"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Business Continuity Planning",
      description: "Evaluation of continuity plans and failover procedures"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Recovery Testing Analysis",
      description: "Assessment of backup testing frequency and recovery validation"
    },
    {
      icon: <Archive className="h-6 w-6" />,
      title: "Storage Optimization Review",
      description: "Analysis of backup storage efficiency and cost optimization"
    }
  ];

  const benefits = [
    "Complete data protection assessment",
    "Zero disruption to operations",
    "Comprehensive Recovery Report",
    "Disaster recovery roadmap",
    "No commitment to implement",
    "Senior backup specialist consultation"
  ];

  const trustIndicators = [
    { icon: <Award className="h-8 w-8" />, text: "Veeam Certified" },
    { icon: <HardDrive className="h-8 w-8" />, text: "Commvault Partners" },
    { icon: <Users className="h-8 w-8" />, text: "250+ Recovery Plans" },
    { icon: <CheckCircle className="h-8 w-8" />, text: "99.9% Recovery Success" }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="bg-white rounded-2xl shadow-2xl p-12 relative">
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
              Thank you for your interest in our FREE Backup & Recovery Assessment.
              Our senior data protection consultant will contact you within 24 hours to schedule your evaluation.
            </p>
            <div className="bg-orange-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-orange-900 mb-2">What happens next?</h3>
              <ul className="text-orange-800 space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-orange-600" />
                  Initial consultation call (15 minutes)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-orange-600" />
                  Schedule your 2-hour assessment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-orange-600" />
                  Receive comprehensive recovery report
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
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-orange-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <HardDrive className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">R2 System Solutions</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-white/90">
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-4567
              </span>
              <span className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                backup@r2systems.com
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
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
                  FREE Backup & Recovery
                  <span className="text-yellow-400"> Assessment</span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
                  Protect Your Critical Business Data & Ensure Rapid Recovery - No Obligation
                </p>
              </div>

              {/* Value Proposition */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Exclusive, Limited-Time Offer: Complimentary Backup & Recovery Assessment
                </h2>
                <p className="text-lg text-orange-100 mb-6">
                  <span className="text-yellow-400 font-semibold">Worth &pound;4,000 - Yours Free</span> As An R2 System Solution Ltd Client
                </p>
                <div className="bg-orange-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    What You'll Get (Total Time Investment: Just 3 Hours):
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {assessmentFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-yellow-400 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{feature.title}</h4>
                          <p className="text-sm text-orange-200">{feature.description}</p>
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
                    "If your current backup strategy can truly recover your business",
                    "Whether your recovery times meet actual business requirements",
                    "How vulnerable your organization is to data loss incidents",
                    "If your backup testing procedures validate real recoverability",
                    "Your readiness for ransomware attacks and data corruption"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
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
                      Claim Your Free Backup & Recovery Assessment
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your business email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 mb-2">
                        Assessment needed*
                      </label>
                      <div className="relative">
                        <HardDrive className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="serviceCategory"
                          name="serviceCategory"
                          value="Backup and Recovery"
                          readOnly
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Backup and Recovery"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg hover:from-orange-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                        alt="Backup Expert"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ridwan Akorede, CEO</h4>
                        <p className="text-sm text-gray-600">Senior Data Protection Consultant</p>
                        <button
                          onClick={() => setShowBio(true)}
                          className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                        >
                          Who Is Ridwan Akorede? →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h4 className="text-white font-semibold mb-4 text-center">Trusted Backup Partners</h4>
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
            Don't Risk Your Business Data
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            60% of businesses that lose data shut down permanently within 6 months. Ensure your backup strategy works today.
          </p>
          <button
            onClick={() => document.getElementById('fullName')?.focus()}
            className="bg-gradient-to-r from-orange-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-700 hover:to-red-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
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
              <HardDrive className="h-8 w-8" />
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
                <h3 className="text-2xl font-bold text-gray-900">About Ridwan Akorede, Data Protection Expert</h3>
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
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Senior Data Protection Consultant</h4>
                  <p className="text-gray-600 mb-4">
                    15+ years of backup and disaster recovery expertise
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 mr-2 text-orange-600" />
                      Veeam Certified Engineer (VMCE)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <HardDrive className="h-4 w-4 mr-2 text-orange-600" />
                      Commvault Certified Professional
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Cloud className="h-4 w-4 mr-2 text-orange-600" />
                      AWS Backup & Recovery Specialist
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Ridwan Akorede is a leading data protection consultant with over 15 years of specialized 
                  experience in backup and disaster recovery solutions. As a Veeam Certified Engineer and 
                  Commvault Certified Professional, he brings deep expertise in both traditional and 
                  cloud-based data protection strategies.
                </p>
                <p>
                  Throughout his career, Ridwan has designed and implemented backup solutions for over 250 
                  organizations, helping them achieve RPO/RTO targets while reducing storage costs and 
                  improving recovery reliability. His expertise spans enterprise backup platforms, 
                  disaster recovery planning, and business continuity consulting.
                </p>
                <p>
                  Ridwan's approach emphasizes understanding business-critical processes first, then 
                  designing data protection strategies that ensure rapid recovery while maintaining 
                  cost-effectiveness and operational simplicity.
                </p>
              </div>
              
              <div className="mt-8 bg-orange-50 rounded-lg p-6">
                <h5 className="font-semibold text-orange-900 mb-2">Recent Achievements:</h5>
                <ul className="text-orange-800 space-y-1">
                  <li>• Reduced backup storage costs by 50% for financial services client</li>
                  <li>• Achieved 99.9% recovery success rate across all client engagements</li>
                  <li>• Designed disaster recovery plans for 100+ mission-critical systems</li>
                  <li>• Speaker at Veeam and Commvault user conferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackupRecoveryLanding;
