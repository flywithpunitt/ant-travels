import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaUserCheck, FaPhoneAlt, FaRupeeSign, FaRoute, FaTemperatureHigh, FaQuestion, FaPercent, FaTag, FaGift, FaRegCalendarAlt, FaUsers, FaMapMarkedAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';

const CharDhamYatra = () => {
  const navigate = useNavigate();

  // Helper function to map service title to vehicle type
  const getVehicleType = (title) => {
    if (title.toLowerCase().includes('suv')) return 'cars';
    if (title.toLowerCase().includes('traveller')) return 'vans';
    if (title.toLowerCase().includes('bus')) return 'buses';
    return 'buses'; // default
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Image Background - Home Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Image Background with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/public/yamunotri.jpg" 
            alt="Char Dham Yatra"
            className="w-full h-full object-cover"
          />
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          {/* Animated Overlay Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full bg-[#ff5722]/10 mix-blend-overlay"></div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-[#ff5722]/15 to-transparent"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 87, 34, 0.1) 0%, transparent 40%)',
              }}
            />
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 md:space-y-6"
          >
            
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#ff5722] text-base md:text-lg font-medium tracking-wide uppercase"
              >
                CHAR DHAM YATRA 2024
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              >
                Begin Your Sacred Char Dham Journey
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block text-[#ff5722] mt-1 md:mt-2 relative"
                >
                  Transportation & Pilgrimage Services
                  
                </motion.span>
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4 leading-relaxed"
            >
              Safe, reliable, and comfortable transportation for your Char Dham Yatra to Badrinath, Kedarnath, Gangotri, and Yamunotri.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-4 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ff7043' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-[#ff5722] text-white text-base font-medium rounded-full shadow-lg hover:shadow-[#ff5722]/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                onClick={() => navigate('/booking')}
              >
                <span className="relative z-10">Book Your Vehicle</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7043] to-[#ff5722] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-10 bg-white/10 blur-xl transform rotate-45 translate-x-20 translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-transparent text-white text-base font-medium rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                onClick={() => navigate('/chardham')}
              >
                View Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Special Offers Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-orange-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#1e40af] rounded-full blur-2xl"></div>
          <div className="absolute top-32 -right-32 w-96 h-96 bg-[#ff5722] rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block mb-2">
              <div className="flex items-center justify-center space-x-2 bg-[#1e40af] text-white px-4 py-1 rounded-full shadow">
                <span className="font-bold text-sm uppercase tracking-wider">Limited Time Offers</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4 drop-shadow">Special Deals for Char Dham Yatra 2024</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Book your sacred journey today and take advantage of our exclusive promotional offers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Bird Discount",
                subtitle: "20% OFF on bookings made 2 months in advance",
                description: "Plan ahead and save on your transportation costs for Char Dham Yatra. Valid for all vehicle types.",
                cta: "Book Now",
                expiry: "Expires in 7 days",
                color: "orange"
              },
              {
                title: "Group Pilgrimage Special",
                subtitle: "15% OFF for groups of 15+ pilgrims",
                description: "The more devotees join, the more you save. Perfect for temple groups and spiritual communities.",
                cta: "Group Booking",
                expiry: "Limited availability",
                color: "orange"
              },
              {
                title: "Complete Package Deal",
                subtitle: "Free hotel stays in Rishikesh",
                description: "Book complete Char Dham transportation package and get 2 nights' accommodation in Rishikesh free.",
                cta: "Book Now",
                expiry: "Premium hotels only",
                color: "orange"
              }
            ].map((offer, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-xl border-t-8 border-[#1e40af] flex flex-col p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Ribbon */}
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff5722] to-[#1e40af] text-white text-xs font-bold py-1 px-4 rounded-bl-2xl shadow-lg z-10">
                  SPECIAL OFFER
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold text-[#1e40af] mb-2">{offer.title}</h3>
                <p className="font-semibold text-[#ff5722] mb-4">{offer.subtitle}</p>
                <p className="text-gray-600 mb-8">{offer.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <button className="px-5 py-2 bg-[#ff5722] hover:bg-[#e64a19] text-white rounded-lg font-semibold shadow transition-colors duration-300 flex items-center space-x-1" onClick={() => navigate('/booking')}>
                    <span>{offer.cta}</span>
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-sm text-gray-400 font-medium">{offer.expiry}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/offers" className="inline-flex items-center text-[#1e40af] hover:text-[#ff5722] font-semibold group transition-colors duration-300">
              View All Special Offers
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Our Services Section - Enhanced */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-6">
              Transportation Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For Char Dham and Do Dham Yatra, we provide a range of well-maintained vans, buses, and cars to suit every group size and comfort level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Premium SUVs",
                description: "Our cars are ideal for Char Dham and Do Dham Yatra, offering comfort and flexibility for small groups and families.",
                icon: <FaCar className="w-12 h-12" />,
                color: "amber",
                images: [
                  "/cars/carsswift.jpg",
                  "/cars/fortuner.jpg",
                  "/cars/ttttttttttttttttttt1.jpg"
                ],
                features: [
                  "Swift Dzire",
                  "Ertiga",
                  "Innova Crysta",
                  "Fortuner",
                  "Tata Nexon"
                ],
                price: "Starting from ₹15,000 per day"
              },
              {
                title: "Tempo Travellers",
                description: "Perfect for Char Dham and Do Dham Yatra, our vans provide ample space and comfort for medium-sized groups.",
                icon: <FaShuttleVan className="w-12 h-12" />,
                color: "blue",
                images: [
                  "/vans/tttt7.jpg",
                  "/vans/tttttt5.jpg"
                ],
                features: ["Force Tempo Traveller 12+1", "Force Tempo Traveller 14+1", "Force Tempo Traveller 17+1", "Tempo Traveller Maharaja", "Tempo Traveller Deluxe"],
                price: "Starting from ₹20,000 per day"
              },
              {
                title: "Luxury Buses",
                description: "For large groups on Char Dham and Do Dham Yatra, our luxury buses ensure a safe and comfortable pilgrimage.",
                icon: <FaBus className="w-12 h-12" />,
                color: "indigo",
                images: [
                  "/buses/tant_bus_-2.jpg",
                  "/buses/tt3.jpg",
                  "/buses/tttttt6.jpg",
                  "/buses/ttttttttttt4.jpg",
                  "/buses/ttttttttttttttttt1.jpg"
                ],
                features: [
                  "AC Deluxe Bus 21 Seater (2+1)",
                  "AC Deluxe Bus 27 Seater (2+2)",
                  "AC Deluxe Bus 32 Seater (2+2)",
                  "AC Deluxe Bus 40 Seater (2+2)"
                ],
                price: "Starting from ₹30,000 per day"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                {/* Vehicle Image Slider */}
                <div className="relative h-48 overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop
                    className="h-48"
                  >
                    {service.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={img}
                          alt={service.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* Title overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-[#ff5722] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <button
                          className="text-sm text-blue-700 underline hover:text-blue-900 focus:outline-none bg-transparent border-none cursor-pointer"
                          onClick={() => window.location.href = `/booking?vehicle=${encodeURIComponent(feature)}`}
                          type="button"
                        >
                          {feature}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <div className="font-bold text-lg text-[#1e40af] mb-6">
                      {service.price}
                    </div>
                    <Link
                      to={`/vehicles/${getVehicleType(service.title)}`}
                      className="w-full py-3 px-4 bg-[#ff5722] text-white rounded-xl font-medium hover:bg-[#e64a19] transition duration-300 flex items-center justify-center group"
                    >
                      <span>View More</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Char Dham Temples Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Sacred Char Dham</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Char Dham Yatra comprises pilgrimages to the four sacred temples in Uttarakhand,
              each dedicated to a different deity and offering unique spiritual experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Badrinath */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/public/badrinath.jpg" 
                  alt="Badrinath Temple" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Badrinath</h3>
                <p className="text-gray-600 mb-4">Dedicated to Lord Vishnu, Badrinath is one of the holiest temples in India situated at an altitude of 3,133 meters.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>Chamoli District, Uttarakhand</span>
                  </p>
                  <p className="flex items-center">
                    <FaCalendarAlt className="text-blue-500 mr-2" />
                    <span>Best Time: May to October</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Kedarnath */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/public/kedarnath.jpg" 
                  alt="Kedarnath Temple" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kedarnath</h3>
                <p className="text-gray-600 mb-4">Home to one of the 12 Jyotirlingas, Kedarnath is dedicated to Lord Shiva and sits at an elevation of 3,583 meters.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>Rudraprayag District, Uttarakhand</span>
                  </p>
                  <p className="flex items-center">
                    <FaCalendarAlt className="text-blue-500 mr-2" />
                    <span>Best Time: May to June and September to October</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Gangotri */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/public/gangatri.jpg" 
                  alt="Gangotri Temple" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Gangotri</h3>
                <p className="text-gray-600 mb-4">The origin of the holy River Ganges, Gangotri is dedicated to Goddess Ganga and is located at 3,100 meters above sea level.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>Uttarkashi District, Uttarakhand</span>
                  </p>
                  <p className="flex items-center">
                    <FaCalendarAlt className="text-blue-500 mr-2" />
                    <span>Best Time: May to June and September to October</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Yamunotri */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                  alt="Yamunotri Temple" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Yamunotri</h3>
                <p className="text-gray-600 mb-4">The source of the River Yamuna, Yamunotri is dedicated to Goddess Yamuna and sits at an altitude of 3,293 meters.</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>Uttarkashi District, Uttarakhand</span>
                  </p>
                  <p className="flex items-center">
                    <FaCalendarAlt className="text-blue-500 mr-2" />
                    <span>Best Time: May to June and September to October</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about our Char Dham transportation services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">When is the best time to undertake the Char Dham Yatra?</h3>
              <p className="text-gray-600">The Char Dham Yatra season typically runs from May to October. The temples open around May (after winter closure) and close by early November. The best months are May-June and September-October to avoid monsoon-related issues.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">How many days are required for the complete Char Dham Yatra?</h3>
              <p className="text-gray-600">A complete Char Dham Yatra covering all four temples typically requires 10-12 days for a comfortable journey. However, we also offer customized packages for those with time constraints.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Are your vehicles equipped to handle mountain roads?</h3>
              <p className="text-gray-600">Yes, all our vehicles are specially selected for mountain travel with appropriate power, ground clearance, and safety features. Our drivers are experienced with mountain terrain and have extensive knowledge of the Char Dham routes.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you provide assistance with accommodation bookings?</h3>
              <p className="text-gray-600">Yes, upon request, we can assist with booking accommodations along the Yatra route. We have partnerships with hotels and guesthouses at various stops and can arrange stays based on your comfort level and budget.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">What happens in case of road closures due to weather?</h3>
              <p className="text-gray-600">Mountain roads can occasionally face closures due to landslides or weather conditions. Our team constantly monitors road conditions, and in case of closures, we provide alternative routes where possible or adjust the itinerary, always prioritizing safety.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Sacred Journey?</h2>
            <p className="text-xl mb-8">
              The Char Dham Yatra season is now open! Book your transportation with ANT Travels
              for a comfortable and memorable pilgrimage experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/booking" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
                Book Now
              </a>
              <a href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharDhamYatra; 