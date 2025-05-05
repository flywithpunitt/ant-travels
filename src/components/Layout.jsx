import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaGift, FaRoute, FaQuestion, FaHeadset, FaWallet, FaGlobe, FaBars, FaTimes, FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileTopMenuOpen, setIsMobileTopMenuOpen] = useState(false);
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
    setIsMobileTopMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Char Dham', path: '/chardham' },
    { name: 'Do Dham', path: '/dodham' },
    { name: 'Badrinath', path: '/badrinath' },
    { name: 'Kedarnath', path: '/kedarnath' },
    { name: 'Book Now', path: '/booking' },
    { name: 'Manage Booking', path: '/manage-booking' },
  ];

  const topNavLinks = [
    { name: 'Offers', path: '/offers', icon: <FaGift />, badge: 10 },
    { name: 'Live Tracking', path: '/tracking', icon: <FaRoute /> },
    { name: 'FAQ', path: '/faq', icon: <FaQuestion /> },
    { name: 'Support', path: '/support', icon: <FaHeadset /> },
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
                {/* Mobile: Collapsed contact info with toggle */}
                <div className="w-full flex justify-between items-center sm:hidden">
                  <div className="flex items-center text-gray-600 truncate mr-2">
                    <FaMapMarkerAlt className="flex-shrink-0 mr-1 text-amber-500" />
                    <span className="truncate text-xs">Noida, 201301</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center text-gray-600 mr-2">
                      <FaPhone className="flex-shrink-0 mr-1 text-amber-500" />
                      <span className="text-xs">1800 1027 408</span>
                    </div>
                    <button 
                      onClick={() => setIsMobileTopMenuOpen(!isMobileTopMenuOpen)}
                      className="text-gray-600 p-1"
                    >
                      {isMobileTopMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                  </div>
                </div>
                
                {/* Desktop: Full contact info */}
                <div className="hidden sm:flex items-center space-x-6">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-amber-500" />
                    <span>B-128 Transport Nagar, Sector-69, Noida, 201301</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="mr-2 text-amber-500" />
                    <span>Toll Free 24x7 - 1800 1027 408</span>
                  </div>
                </div>
                
                {/* Desktop: Quick links */}
                <div className="hidden sm:flex items-center space-x-6">
                  {topNavLinks.map((link) => (
                    <Link 
                      key={link.path}
                      to={link.path} 
                      className="flex items-center text-gray-600 hover:text-amber-500 transition-colors"
                    >
                      <span className="mr-1">{link.icon}</span>
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="ml-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  ))}
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
            
            {/* Mobile: Expandable top nav links */}
            <AnimatePresence>
              {isMobileTopMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="sm:hidden bg-gray-100 border-t border-gray-200 mt-2"
                >
                  <div className="px-4 py-2 grid grid-cols-2 gap-3">
                    {topNavLinks.map((link) => (
                      <Link 
                        key={link.path}
                        to={link.path} 
                        className="flex items-center text-gray-600 hover:text-amber-500 transition-colors py-2"
                        onClick={() => setIsMobileTopMenuOpen(false)}
                      >
                        <span className="mr-1">{link.icon}</span>
                        <span className="text-sm">{link.name}</span>
                        {link.badge && (
                          <span className="ml-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                    <div className="flex items-center text-gray-600 py-2">
                      <FaGlobe className="mr-1" />
                      <select className="bg-transparent border-none text-sm text-gray-600 focus:outline-none">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
                    className="h-12 sm:h-16 w-auto object-contain"
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
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-6 h-6" />
                  ) : (
                    <FaBars className="w-6 h-6" />
                  )}
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
              className="lg:hidden fixed top-[56px] left-0 right-0 bg-white shadow-lg overflow-hidden z-50"
              style={{ maxHeight: 'calc(100vh - 56px)' }}
            >
              <div className="px-4 py-4 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 px-4 rounded-lg text-base font-medium ${
                          location.pathname === link.path
                            ? 'text-white bg-amber-500'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-amber-500'
                        } transition-colors`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-amber-500 flex-shrink-0" />
                      <span className="text-sm">B-128 Transport Nagar, Sector-69, Noida, 201301</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaPhone className="mr-2 text-amber-500 flex-shrink-0" />
                      <span className="text-sm">Toll Free 24x7 - 1800 1027 408</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-amber-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-amber-600 transition-colors"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/offers"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors"
                    >
                      View Offers
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content with proper spacing for fixed navbar */}
      <main className={`flex-grow ${isScrolled ? 'pt-[56px] sm:pt-24' : 'pt-0'}`}>
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-[#1e326f] to-[#16213e] text-white border-t-4 border-amber-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 items-start">
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start gap-3 mb-8 md:mb-0 text-center md:text-left">
            <Link to="/">
              <img src="/anttourlogo.png" alt="ANT Travels" className="h-14 w-auto object-contain bg-white p-1 rounded-lg shadow-md mx-auto md:mx-0" />
            </Link>
            <span className="text-white/80 text-sm max-w-xs">We make travel joyful.<br />One of the oldest transport service providers in Delhi/NCR since 2003.</span>
            <div className="flex gap-3 mt-2 justify-center md:justify-start">
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-600 transition"><FaFacebookF className="text-white" size={18} /></a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-600 transition"><FaInstagram className="text-white" size={18} /></a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10 w-full mb-8 md:mb-0 text-center md:text-left">
            <div>
              <h4 className="text-base font-semibold mb-2 text-amber-400 tracking-wide">Our Service</h4>
              <ul className="space-y-1 text-sm">
                <li><Link to="/" className="hover:text-amber-400 transition">Home</Link></li>
                <li><Link to="/chardham" className="hover:text-amber-400 transition">Char Dham</Link></li>
                <li><Link to="/dodham" className="hover:text-amber-400 transition">Do Dham</Link></li>
                <li><Link to="/badrinath" className="hover:text-amber-400 transition">Badrinath</Link></li>
                <li><Link to="/kedarnath" className="hover:text-amber-400 transition">Kedarnath</Link></li>
                <li><Link to="/booking" className="hover:text-amber-400 transition">Book Now</Link></li>
                <li><Link to="/manage-booking" className="hover:text-amber-400 transition">Manage Booking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-2 text-amber-400 tracking-wide">Company</h4>
              <ul className="space-y-1 text-sm">
                <li><Link to="/about" className="hover:text-amber-400 transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-amber-400 transition">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-amber-400 transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <h4 className="text-base font-semibold mb-2 text-amber-400 tracking-wide">Contact</h4>
            <div className="flex items-center gap-2 md:gap-3 text-sm justify-center md:justify-start">
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-500"><FaMapMarkerAlt className="text-white text-base md:text-xl" /></span>
              <span className="text-white/90 text-left">B-128, Transport Nagar, Sector-69, Noida, 201301</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-sm justify-center md:justify-start">
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-500"><FaEnvelope className="text-white text-base md:text-xl" /></span>
              <span className="text-white/90 text-left">info@anttravels.com</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-sm justify-center md:justify-start">
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-500"><FaPhone className="text-white text-base md:text-xl" /></span>
              <span className="text-white/90 text-left">1800 1027 408</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-3 bg-amber-500 text-white text-xs mt-2 rounded-t-lg space-y-2 md:space-y-0">
          <span className="text-center">&copy; {new Date().getFullYear()} ANT Travels. All Rights Reserved.</span>
          <div className="flex items-center gap-2 justify-center">
            <span>We Accept</span>
            <img src="/cards.png" alt="Payment Methods" className="h-8 w-auto rounded shadow bg-white p-1" />
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            footer .grid-cols-1.md\:grid-cols-3 {
              grid-template-columns: 1fr !important;
            }
            footer .flex-row.justify-center.gap-10 {
              flex-direction: column;
              gap: 2rem;
              align-items: center;
            }
            footer .items-center.md\:items-start {
              align-items: center !important;
            }
            footer .w-10.h-10.md\:w-10.md\:h-10 {
              width: 2.5rem !important;
              height: 2.5rem !important;
            }
            footer .text-lg.md\:text-xl {
              font-size: 1.125rem !important;
            }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Layout; 