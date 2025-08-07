import React, { useState } from 'react';
import {
  Monitor, Palette, Code2, Smartphone, Globe2, Users, Phone, Mail, Building, User, CheckCircle, AlertTriangle, X, Award, Shield, Server, Cloud
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import Back from './Back';

const WebsiteDesignLanding: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    serviceCategory: 'Website Design & Development',
  });

  const [showBio, setShowBio] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_98wbl6a',
        'template_iykrcrf',
        formData,
        'usjHoNFTTChknODfx'
      );
      setSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        businessEmail: '',
        phoneNumber: '',
        serviceCategory: 'Website Design & Development',
      });
    } catch (error) {
      alert('Failed to send form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { icon: <Palette className="h-6 w-6" />, title: 'UI/UX Design', description: 'Visually appealing and user-centric designs for your brand.' },
    { icon: <Code2 className="h-6 w-6" />, title: 'Frontend Development', description: 'Responsive, interactive, and accessible interfaces.' },
    { icon: <Monitor className="h-6 w-6" />, title: 'Backend Development', description: 'Robust server-side solutions and database integration.' },
    { icon: <Smartphone className="h-6 w-6" />, title: 'Mobile Optimization', description: 'Perfect performance across all screen sizes.' },
    { icon: <Globe2 className="h-6 w-6" />, title: 'SEO & Performance', description: 'Optimized websites for search visibility and fast loading.' },
    { icon: <Users className="h-6 w-6" />, title: 'Ongoing Support', description: 'Continued maintenance and enhancements post-launch.' },
  ];

  const benefits = [
    'Custom-built websites tailored to your brand',
    'SEO best practices for discoverability',
    'Mobile-first design approach',
    'Fast, secure, and scalable builds',
    'User-centric and conversion-focused design',
    'Post-launch support and analytics integration'
  ];

  const trustIndicators = [
    { icon: <Award className="h-8 w-8" />, text: 'Award-Winning Designers' },
    { icon: <Monitor className="h-8 w-8" />, text: '100+ Successful Launches' },
    { icon: <Users className="h-8 w-8" />, text: 'Trusted by Agencies' },
    { icon: <CheckCircle className="h-8 w-8" />, text: 'Client Satisfaction 98%' }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
        <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-xl">
          <button onClick={() => setSubmitted(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
          <div className="bg-green-100 rounded-full p-4 mx-auto w-20 h-20 flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h1>
          <p className="text-lg text-gray-600 mb-4">Thanks for contacting us about your website project. We'll reach out soon!</p>
          <p className="text-sm text-gray-500">Have urgent needs? Call us at 01452905204</p>
        </div>
      </div>
    );
  }

  const inputFields = [
    { name: "fullName", placeholder: "Your Full Name", icon: User },
    { name: "companyName", placeholder: "Company Name", icon: Building },
    { name: "businessEmail", placeholder: "Business Email", icon: Mail },
    { name: "phoneNumber", placeholder: "Phone Number", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <Back className="mt-5" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="inline-flex items-center bg-pink-500/20 text-pink-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Creative & Conversion-Driven Web Experiences
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Website Design & <span className="text-yellow-400">Development</span></h1>
              <p className="text-xl text-indigo-100 mb-8">We craft high-performance websites that elevate your brand and convert visitors into customers.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm mb-12 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Our Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="text-yellow-400 mt-1">{service.icon}</div>
                    <div>
                      <h4 className="text-white font-medium">{service.title}</h4>
                      <p className="text-sm text-indigo-200">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 h-6 w-6 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-yellow-400">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Request a Website Quote</h3>
                  <p className="text-gray-600">Let us help you bring your digital vision to life.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {inputFields.map(({ name, placeholder, icon: Icon }, i) => (
                    <div key={i}>
                      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                        {placeholder} *
                      </label>
                      <div className="relative">
                        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type={name.includes('Email') ? 'email' : name.includes('phone') ? 'tel' : 'text'}
                          id={name}
                          name={name}
                          value={(formData as any)[name]}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          placeholder={placeholder}
                        />
                      </div>
                    </div>
                  ))}

                  <div>
                    <label htmlFor="serviceCategory" className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        id="serviceCategory"
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        readOnly
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                      />
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50">
                    {isSubmitting ? 'Submitting...' : 'Get My Website Quote'}
                  </button>
                </form>
                   {/* Professional Bio */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/akorede.jpg"
                        alt="Communications Expert"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">Ridwan Akorede, CCNA</h4>
                        <p className="text-sm text-gray-600">Senior IT Infrastructure Consultant</p>
                        <button
                          onClick={() => setShowBio(true)}
                          className="text-green-600 hover:text-green-800 text-sm font-medium"
                        >
                          Who Is Ridwan Akorede? →
                        </button>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-semibold mb-4 text-center">Trusted by Brands</h4>
                <div className="grid grid-cols-2 gap-4">
                  {trustIndicators.map((indicator, i) => (
                    <div key={i} className="text-center">
                      <div className="text-yellow-400 flex justify-center mb-2">{indicator.icon}</div>
                      <p className="text-white text-sm">{indicator.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Let’s Build Your Next Website</h2>
          <p className="text-xl text-gray-600 mb-8">Engage, convert, and grow with a website that works as hard as you do.</p>
          <button onClick={() => document.getElementById('fullName')?.focus()} className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold py-4 px-8 rounded-lg hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg">
            Start My Project
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">Your information is safe and secure with us.</span>
          </div>
        </div>
      </footer>

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

export default WebsiteDesignLanding;
