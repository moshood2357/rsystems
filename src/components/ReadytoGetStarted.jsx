  
  import {
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    
  } from "lucide-react";
  
  
  
  
  import { Button } from "../ui/Button";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
  
  
  import AnchorLink from 'react-anchor-link-smooth-scroll';
  
  export default function ReadytoGetStarted() {
    return(
        <div>
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
                              <span className="text-lg">01452905204</span>
                            </div>
                            <div className="flex items-center text-white">
                              <Mail className="h-6 w-6 mr-4 text-blue-200" />
                              <span className="text-lg">info@r2systemsolution.co.uk</span>
                            </div>
                            <div className="flex items-center text-white">
                              <MapPin className="h-6 w-6 mr-4 text-blue-200" />
                              <span className="text-lg">Harley House, 29 Cambray Place, Cheltenham, GL50 1JN</span>
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
                                <option>Managed IT support</option>
                                <option>Cybersecurity services</option>
                                <option>Cloud & Infrastructure management</option>
                                <option>IT consultancy</option>
                                <option>Compliance & Governance</option>
                                <option>Network Management</option>
                                <option>Backup and Data Recovery</option>
                                <option>Vendor Management</option>
                                <option>VoIP and Unified Communication</option>
                                <option>Website design and development</option>
                                
                                <option>Device & Endpoint Protection</option>
                                
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
        </div>
    )
}