
import { Phone, Mail, MapPin } from "lucide-react";

import {  useRef, useState } from "react";
import emailjs from '@emailjs/browser';




export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  setError(false);
  setSuccess(false);

  emailjs
    .sendForm(
      'service_r5hgx6a',    // Your EmailJS service ID
      'template_xhz2mqp',   // Your EmailJS template ID
      form.current,         // Your form reference
      'usjHoNFTTChknODfx'   // Your EmailJS public key
    )
    .then(
      () => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();
      },
      (error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      }
    );
};

  

  
  return (
    
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
         className="relative text-center py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 z--100"
         style={{
         backgroundImage: "url('/harley-min.png')",
         backgroundSize: "cover",
         position: 'relative',
        backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
        }}
    >
        <div className="absolute inset-0 bg-white/10 "></div>   

      <div className="relative z-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
          Need Help With IT? Let’s Chat.
        </h1>
        <p className="text-lg text-gray-900 max-w-2xl mx-auto">
          Get a free 30-minute consultation — no pressure, just solutions.
        </p>
      </div>
</section>


      {/* Contact Form & Info */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
          <label className="block mb-1 font-medium text-gray-700">
           Name <span className="text-red-500">*</span>
          </label>
          <input className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all" name = "user_name" placeholder="Full Name" required />
          <label className="block mb-1 font-medium text-gray-700">
          Email<span className="text-red-500">*</span>
          </label>
          <input className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all " name = "user_email" placeholder="Email" type="email" required />
          <label className="block mb-1 font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
          </label>
          <input className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all" name = "user_phone" required placeholder="Phone Number" type="tel" />
          <label className="block mb-1 font-medium text-gray-700">
          Subject <span className="text-red-500">*</span>
          </label>
          <input className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all" name = "subject" placeholder="Subject" required />
          <label className="block mb-1 font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
          </label>
          <textarea className="w-full border border-gray-300 p-3 rounded-md h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none transition-all "  name = "message" placeholder="Your Message" required />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md transition ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && <p className="text-green-600 text-center">Message sent successfully!</p>}
          {error && <p className="text-red-600 text-center">Failed to send message. Please try again.</p>}
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>01452 905204</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>support@r2systemsolution.co.uk</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>Harley House, 29 Cambray Place, Cheltenham, GL50 1JN</span>
            </div>
            <div className="mt-4">
              <iframe
                className="w-full h-40 rounded-md"
                src="https://www.google.com/maps/embed?..."
                allowFullScreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Business Hours</h3>
            <div className="space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: By Appointment</p>
              <p className="text-blue-600 font-semibold mt-2">24/7 Emergency Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-blue-700 mb-2">How quickly can you respond?</h4>
            <p>We respond within 1 hour for critical issues, and within 4 hours for standard requests during business hours.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-blue-700 mb-2">Do you offer support outside business hours?</h4>
            <p>Yes, 24/7 emergency support is available for critical issues through our dedicated emergency line.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-blue-700 mb-2">What areas do you service?</h4>
            <p>We provide IT support throughout the UK, with both remote and on-site options available.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-blue-700 mb-2">How are support contracts structured?</h4>
            <p>Flexible options from pay-as-you-go to fully managed services. Contact us for a custom plan.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-50 py-12 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Ready to elevate your IT infrastructure?</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          From strategic planning to daily support, we’re here to help your business thrive. Get in touch today.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition">
          Get Support Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>01452 905204</p>
            <p>support@r2systemsolution.co.uk</p>
            <p>Harley House, 29 Cambray Place, Cheltenham</p>
          </div>
          <div>
            <h4 className="flex font-semibold mb-2">Follow Us</h4>
            <a className=" mr-4" href = "https://www.instagram.com/r2systemsolution/">Instagram</a>
            <a className=" mr-4" href = "https://www.instagram.com/r2systemsolution/">Facebook</a>
            <a className=" mr-4" href = "https://www.instagram.com/r2systemsolution/">Linkedin</a>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <p>Supporting small businesses across Gloucestershire with smooth operations and peace of mind.</p>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          <p>Privacy Notice | Cookie Policy</p>
          <p>© 2024 R2 System Solution Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
