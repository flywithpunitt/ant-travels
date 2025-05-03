import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaGift, FaRoute, FaQuestion, FaHeadset, FaWallet, FaGlobe } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Char Dham', path: '/chardham' },
    { name: 'Do Dham', path: '/dodham' },
    { name: 'Badrinath', path: '/badrinath' },
    { name: 'Kedarnath', path: '/kedarnath' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar with two sections */}
      <nav className={`w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-0 bg-white shadow-lg' 
          : 'bg-white'
      }`}>
        {/* Top Section - Contact Info */}
        {!isScrolled && (
          <div className="bg-gray-100 py-2 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between text-sm">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-amber-500" />
                    <span>B-128 Transport Nagar, Sector-69, Noida, 201301</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-amber-500" />
                    <span>Toll Free 24x7 - 1800 1027 408</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mt-2 sm:mt-0">
                  <Link to="/offers" className="flex items-center text-gray-600 hover:text-amber-500 transition-colors">
                    <FaGift className="mr-1" />
                    <span>Offers</span>
                    <span className="ml-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">10</span>
                  </Link>
                  <Link to="/tracking" className="flex items-center text-gray-600 hover:text-amber-500 transition-colors">
                    <FaRoute className="mr-1" />
                    <span>Live Tracking</span>
                  </Link>
                  <Link to="/faq" className="flex items-center text-gray-600 hover:text-amber-500 transition-colors">
                    <FaQuestion className="mr-1" />
                    <span>FAQ</span>
                  </Link>
                  <Link to="/support" className="flex items-center text-gray-600 hover:text-amber-500 transition-colors">
                    <FaHeadset className="mr-1" />
                    <span>Support</span>
                  </Link>
                  <Link to="/wallet" className="flex items-center text-gray-600 hover:text-amber-500 transition-colors">
                    <FaWallet className="mr-1" />
                    <span>Wallet</span>
                  </Link>
                  <div className="flex items-center text-gray-600">
                    <FaGlobe className="mr-1" />
                    <select className="bg-transparent border-none text-gray-600 focus:outline-none">
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <div className="bg-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo with animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/" className="flex items-center group">
                  <motion.img 
                    src="/anttourlogo.png" 
                    alt="ANT Travels" 
                    className="h-16 w-auto object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-base font-medium ${
                        location.pathname === link.path
                          ? 'text-amber-600 border-b-2 border-amber-500'
                          : 'text-gray-700 hover:text-amber-500'
                      } transition-colors px-3 py-2`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu with animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg overflow-hidden z-50"
            >
              <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
                <div className="border-t border-gray-100 pt-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 text-base font-medium ${
                          location.pathname === link.path
                            ? 'text-amber-500'
                            : 'text-gray-700 hover:text-amber-500'
                        } transition-colors border-b border-gray-100`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content with proper spacing for fixed navbar */}
      <main className={`flex-grow ${isScrolled ? 'pt-24' : 'pt-0'}`}>
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-b from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link to="/">
                <img 
                  src="/anttourlogo.png" 
                  alt="ANT Travels" 
                  className="h-16 w-auto object-contain mb-4 bg-white p-2 rounded-lg"
                />
              </Link>
              <p className="text-white/80">
                Your trusted partner for sacred Char Dham Yatra journeys since 2008.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={`M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/80">B-128 Transport Nagar, Sector-69, Noida, 201301</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/80">info@anttravels.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white/80">1800 1027 408</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
              <p className="text-white/80 mb-4">
                Subscribe to our newsletter for the latest Char Dham Yatra updates.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-white text-white placeholder-white/60"
                />
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-amber-600 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} ANT Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 