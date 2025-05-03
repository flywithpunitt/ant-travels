import { motion } from 'framer-motion';
import { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      ),
      content: 'At ANT Travels, we are committed to protecting your privacy and ensuring the security of your personal information during your sacred Char Dham Yatra journey. This Privacy Policy explains how we collect, use, and safeguard your data when you book our transportation services, accommodations, and pilgrimage packages.'
    },
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      content: [
        'Personal identification information (name, email, phone number, address)',
        'Government ID details (for booking permits and accommodations)',
        'Health information (for high-altitude travel safety)',
        'Pilgrimage preferences (temples to visit, services required, dietary needs)',
        'Travel dates and group size details',
        'Payment information for booking services',
        'Device and usage information when using our website',
        'Location data to provide route information (with your consent)'
      ]
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: [
        'Process and manage your Char Dham Yatra transportation bookings',
        'Arrange temple visits, accommodations, and meals during your pilgrimage',
        'Obtain necessary permits for restricted areas in Uttarakhand',
        'Coordinate with our local drivers and guides for your journey',
        'Provide 24/7 emergency support during your pilgrimage',
        'Send important updates about weather conditions, road closures, or temple schedules',
        'Improve our Char Dham Yatra services based on feedback',
        'Personalize your pilgrimage experience based on preferences',
        'Comply with legal obligations related to transportation and tourism services'
      ]
    },
    {
      id: 'yatra-specific',
      title: 'Pilgrimage-Specific Information',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
      content: 'For sacred Char Dham Yatra pilgrimages, we may collect additional information such as temple visit preferences, special religious ceremony requests, dietary restrictions for religious purposes, and health conditions relevant to high-altitude travel. This information is handled with the utmost sensitivity and used solely to enhance your spiritual journey and ensure your safety in the mountainous terrain of Uttarakhand.'
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      content: 'We implement appropriate security measures to protect your personal information while traveling through remote mountainous regions of Uttarakhand. This includes encryption of digital data, secure physical storage of documents, limited access to personal information by our staff, and regular security training for our drivers and guides who accompany you on your pilgrimage.'
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
      ),
      content: [
        'Local accommodation providers at Char Dham destinations',
        'Temple authorities for special darshan arrangements',
        'Helicopter service operators for Kedarnath flights',
        'Local government offices for permits and registrations',
        'Payment processors for booking transactions',
        'Emergency medical services if needed during pilgrimage',
        'Insurance providers if you purchase coverage for your journey'
      ]
    },
    {
      id: 'cookies',
      title: 'Website Cookies',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      content: 'Our website uses cookies to enhance your browsing experience and provide personalized Char Dham Yatra planning services. These cookies help us remember your preferences, understand how you use our website, and improve our offerings. You can manage your cookie preferences through your browser settings.'
    },
    {
      id: 'rights',
      title: 'Your Privacy Rights',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      content: [
        'Access your personal data stored with us',
        'Correct any inaccurate information before your pilgrimage',
        'Request deletion of your data after your journey is complete',
        'Opt-out of marketing communications while retaining essential travel updates',
        'Request a copy of your personal data in a portable format'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1591018533800-dea2ed9a060d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="Privacy Policy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Safeguarding your personal information throughout your sacred journey
          </motion.p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-amber-500/10 hover:shadow'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 last:mb-0"
              onViewportEnter={() => setActiveSection(section.id)}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                  <div className="text-amber-500">{section.icon}</div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
              
              {Array.isArray(section.content) ? (
                <ul className="space-y-4 text-gray-600">
                  {section.content.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              )}
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 bg-gray-50 rounded-2xl p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Have Questions About Your Data?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our Privacy Policy or how we handle your information during your Char Dham Yatra, please contact our dedicated privacy team:
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-gray-600">privacy@anttravels.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-gray-600">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-gray-600">123 Ganga Road, Near Railway Station, Haridwar, Uttarakhand</span>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-sm text-gray-500 text-center">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-2">ANT Travels is committed to protecting your privacy during your spiritual journey to the Char Dham.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 