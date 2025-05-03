import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    groupSize: '',
    travelDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Haridwar',
      address: '123 Ganga Road, Near Railway Station, Haridwar, Uttarakhand',
      phone: '+91 98765 43210',
      email: 'haridwar@anttravels.com',
      hours: '8:00 AM - 8:00 PM (All days)',
      image: 'https://images.unsplash.com/photo-1591018533800-dea2ed9a060d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      city: 'Rishikesh',
      address: '45 Laxman Jhula Road, Rishikesh, Uttarakhand',
      phone: '+91 98765 12345',
      email: 'rishikesh@anttravels.com',
      hours: '8:00 AM - 8:00 PM (All days)',
      image: 'https://images.unsplash.com/photo-1591018547739-576586ca7a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      city: 'Dehradun',
      address: '789 Rajpur Road, Near Clock Tower, Dehradun, Uttarakhand',
      phone: '+91 98765 67890',
      email: 'dehradun@anttravels.com',
      hours: '9:00 AM - 7:00 PM (All days)',
      image: 'https://images.unsplash.com/photo-1621831714170-dff74381f47b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const contactMethods = [
    {
      title: 'Call Us',
      description: 'Available 24/7 for pilgrimage inquiries',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      contact: '+91 98765 43210'
    },
    {
      title: 'WhatsApp',
      description: 'Chat with our Char Dham experts',
      icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
      contact: '+91 98765 43210'
    },
    {
      title: 'Email Us',
      description: 'Get detailed Yatra itineraries & quotes',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      contact: 'info@anttravels.com'
    }
  ];

  const destinations = [
    "Char Dham Complete Package",
    "Do Dham Package (Kedarnath & Badrinath)",
    "Kedarnath Only",
    "Badrinath Only",
    "Gangotri & Yamunotri",
    "Helicopter Services",
    "Custom Pilgrimage Package"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1591777331057-1d4b1a28a7df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Contact ANT Travels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Contact ANT Travels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Let us guide you on your sacred Char Dham Yatra journey
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="font-semibold text-amber-600">{method.contact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enquire About Your Pilgrimage</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our Char Dham Yatra specialists will get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Pilgrims</label>
                    <input
                      type="number"
                      name="groupSize"
                      min="1"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination Package</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a package</option>
                      {destinations.map((dest, index) => (
                        <option key={index} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please share any specific requirements, questions, or preferences for your journey."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Enquiry
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                {submitted && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-xl text-center">
                    Thank you for your enquiry! Our team will contact you soon to plan your sacred journey.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-2xl overflow-hidden h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111100.85700977936!2d78.28482754982042!3d30.136239582010516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39091b8a112f35f9%3A0xf32a5e0d5cc20582!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1686754321023!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our offices in Uttarakhand for personalized Char Dham Yatra planning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city} Office</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </li>
                    <li className="flex items-start">
                      <FaPhone className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.phone}</span>
                    </li>
                    <li className="flex items-start">
                      <FaEnvelope className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.email}</span>
                    </li>
                    <li className="flex items-start">
                      <FaClock className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.hours}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ and Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">What is the best time to visit Char Dham?</h3>
                  <p className="text-gray-600">The Char Dham Yatra season typically runs from late April/early May to October/November, with the best weather conditions occurring in May-June and September-October.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">How do I book a Char Dham package?</h3>
                  <p className="text-gray-600">You can book by filling out the enquiry form on this page, calling our 24/7 support line, or visiting any of our offices in Uttarakhand. We'll customize a package based on your requirements.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2">Do you offer helicopter services?</h3>
                  <p className="text-gray-600">Yes, we offer helicopter services to Kedarnath and for the complete Char Dham circuit. These can be booked separately or as part of a comprehensive package.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">24/7 Pilgrim Support</h2>
              <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">We're Here For You</h3>
                <p className="text-gray-700 mb-6">Our dedicated support team is available 24/7 during your pilgrimage to assist with any emergencies, changes, or special requirements.</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Emergency Helpline</p>
                    <p className="text-lg font-bold">+91 98765 88888</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp Support</p>
                    <p className="text-lg font-bold">+91 98765 99999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Sacred Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let ANT Travels guide you through the divine Char Dham Yatra with comfort, safety, and spiritual fulfillment
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919876543210" className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
              Call Now
            </a>
            <a href="#enquiry-form" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 