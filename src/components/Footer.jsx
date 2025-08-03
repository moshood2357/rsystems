
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <img src={`${process.env.PUBLIC_URL}/CompanyLogo.jpeg`} alt="logo" style={{ height: "30px" }} />
              </div>
              <span className="font-bold text-lg">R2 System Solution Ltd</span>
            </div>
            <p className="text-gray-400 mb-4">
              Proudly supporting small businesses across Cheltenham, Gloucestershire, Tewkesbury, and the Cotswolds, ensuring smooth operations and peace of mind.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/support" className="hover:text-white transition-colors">Managed IT support</Link></li>
              <li><Link to="/cybersecurity" className="hover:text-white transition-colors">Cybersecurity services</Link></li>
              <li><Link to="/cloud" className="hover:text-white transition-colors">Cloud & Infrastructure Management</Link></li>
              <li><Link to="/consultancy" className="hover:text-white transition-colors">IT consultancy</Link></li>
              <li><Link to="/compliance" className="hover:text-white transition-colors">Compliance and governance</Link></li>
              <li><Link to="/protection" className="hover:text-white transition-colors">Device and endpoint management</Link></li>
              <li><Link to="/network" className="hover:text-white transition-colors">Network Management</Link></li>
              <li><Link to="/vendor" className="hover:text-white transition-colors">Vendor Management</Link></li>
              <li><Link to="/backup" className="hover:text-white transition-colors">Backup and Data recovery</Link></li>
              <li><Link to="/webdesign&developmement" className="hover:text-white transition-colors">Website design & Development</Link></li>
              <li><Link to="/VoIP" className="hover:text-white transition-colors">VoIP & unified communication</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mr-1">
            <h3 className="font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] mb-6">
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>01452905204</p>
              <p>support@r2systemsolution.co.uk</p>
              <p>Harley House, 29 Cambray Place, Cheltenham, GL50 1JN</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 R2 System Solution Ltd. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
