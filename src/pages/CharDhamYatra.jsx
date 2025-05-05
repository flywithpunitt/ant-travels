import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaUserCheck, FaPhoneAlt, FaRupeeSign, FaRoute, FaTemperatureHigh, FaQuestion, FaPercent, FaTag, FaGift, FaRegCalendarAlt, FaUsers, FaMapMarkedAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const CharDhamYatra = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with Local Background Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/chardham/chardham-banner.jpg" 
            alt="Char Dham Temples" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Char Dham Yatra Transportation</h1>
            <p className="text-xl md:text-2xl mb-8">Safe and comfortable journeys to the sacred temples of Badrinath, Kedarnath, Gangotri, and Yamunotri</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
            >
              Book Your Journey Now
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Special Offers Section */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500 rounded-full"></div>
          <div className="absolute top-32 -right-32 w-96 h-96 bg-orange-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-2"
            >
              <div className="flex items-center justify-center space-x-2 bg-amber-500 text-white px-4 py-1 rounded-full">
                <FaPercent className="text-sm" />
                <span className="font-bold text-sm uppercase tracking-wider">Limited Time Offers</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Special Deals for Char Dham Yatra 2024
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Book your sacred journey today and take advantage of our exclusive promotional offers
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Early Bird Discount",
                subtitle: "20% OFF on bookings made 2 months in advance",
                description: "Plan ahead and save on your transportation costs for Char Dham Yatra. Valid for all vehicle types.",
                icon: <FaRegCalendarAlt className="w-6 h-6" />,
                color: "amber",
                cta: "Book Now",
                expiry: "Expires in 7 days"
              },
              {
                title: "Group Pilgrimage Special",
                subtitle: "15% OFF for groups of 15+ pilgrims",
                description: "The more devotees join, the more you save. Perfect for temple groups and spiritual communities.",
                icon: <FaUsers className="w-6 h-6" />,
                color: "orange",
                cta: "Group Booking",
                expiry: "Limited availability"
              },
              {
                title: "Complete Package Deal",
                subtitle: "Free hotel stays in Rishikesh",
                description: "Book complete Char Dham transportation package and get 2 nights' accommodation in Rishikesh free.",
                icon: <FaMapMarkedAlt className="w-6 h-6" />,
                color: "red",
                cta: "View Details",
                expiry: "Premium hotels only"
              }
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Top decorative element */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-${offer.color}-500`}></div>
                
                {/* Content */}
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-full bg-${offer.color}-100 flex items-center justify-center mb-6 text-${offer.color}-600 group-hover:bg-${offer.color}-500 group-hover:text-white transition-colors duration-300`}>
                    {offer.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{offer.title}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{offer.subtitle}</p>
                  <p className="text-gray-600 mb-8">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className={`px-5 py-2 bg-${offer.color}-500 hover:bg-${offer.color}-600 text-white rounded-lg font-medium transition-colors duration-300 flex items-center space-x-1`}>
                      <span>{offer.cta}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <span className="text-sm text-gray-500">{offer.expiry}</span>
                  </div>
                </div>
                
                {/* Ribbon */}
                <div className="absolute top-5 -right-12 w-40 transform rotate-45 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold py-1 text-center shadow-lg">
                  SPECIAL OFFER
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link 
              to="/offers"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group"
            >
              View All Special Offers
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Transportation Options Section for Char Dham Yatra */}
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
              For Char Dham Yatra, we provide a range of well-maintained vans, buses, and cars to suit every group size and comfort level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Char Dham Cars",
                description: "Our cars are ideal for Char Dham Yatra, offering comfort and flexibility for small groups and families.",
                icon: <FaCar className="w-12 h-12" />,
                color: "amber",
                images: [
                  "/cars/carsswift.jpg",
                  "/cars/fortuner.jpg",
                  "/cars/ttttttttttttttttttt1.jpg"
                ],
                features: ["Toyota Fortuner", "Mahindra Scorpio", "Tata Safari", "MG Gloster", "Toyota Innova Crysta"],
                price: "Starting from ₹15,000 per day"
              },
              {
                title: "Char Dham Vans",
                description: "Perfect for Char Dham Yatra, our vans provide ample space and comfort for medium-sized groups.",
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
                title: "Char Dham Buses",
                description: "For large groups on Char Dham Yatra, our luxury buses ensure a safe and comfortable pilgrimage.",
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
                  "AC Deluxe Bus 35 Seater (2+2)",
                  "AC Deluxe Bus 41 Seater (2+2)",
                  "AC Luxury Bus 25 Seater (2+1)",
                  "AC Luxury Bus 31 Seater (2+2)",
                  "AC Luxury Bus 41 Seater (2+2)",
                  "AC Seater Sleeper Bus (2+2)"
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
                    navigation
                    pagination={{ clickable: true }}
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
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center mb-6 group-hover:bg-${service.color}-600 group-hover:text-white transition-colors duration-300`}>
                    {service.icon}
                  </div>
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
                      to={`/vehicles/${service.title.toLowerCase().includes('cars') ? 'cars' : service.title.toLowerCase().includes('vans') ? 'vans' : 'buses'}`}
                      className={`w-full py-3 px-4 bg-${service.color}-600 text-white rounded-xl font-medium hover:bg-[#ff5722] transition duration-300 flex items-center justify-center group`}
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
                  src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
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
                  src="https://images.unsplash.com/photo-1591777331097-fcf03fb7078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
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
                  src="https://images.unsplash.com/photo-1609766856923-a1c9ac2bd13c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
      
      {/* Travel Planning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Char Dham Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're traveling in a large group or as a family, we provide customized transportation
              solutions to make your Char Dham pilgrimage comfortable and memorable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md border border-gray-100">
              <div className="mb-4">
                <span className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">10-Day Complete Tour</h3>
              <p className="text-gray-600 mb-6">Cover all four Dhams with comfortable transportation and accommodations.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Visit all four Char Dham temples</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Transportation throughout the journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Experienced driver and guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Assistance with permits and arrangements</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Starting from</p>
                  <p className="text-2xl font-bold">₹25,000 <span className="text-sm font-normal">per person</span></p>
                </div>
                <div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">10 Days</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300">
                Inquire Now
              </button>
            </div>
            
            {/* Package 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-md border border-gray-100">
              <div className="mb-4">
                <span className="inline-block py-1 px-3 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Family Special</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">7-Day Selected Dhams</h3>
              <p className="text-gray-600 mb-6">Visit Badrinath and Kedarnath with premium transportation services.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Focus on Badrinath and Kedarnath</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Premium vehicle with experienced driver</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Assistance with accommodations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Helicopter booking assistance (optional)</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Starting from</p>
                  <p className="text-2xl font-bold">₹18,000 <span className="text-sm font-normal">per person</span></p>
                </div>
                <div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">7 Days</span>
                </div>
              </div>
              
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition duration-300">
                Inquire Now
              </button>
            </div>
            
            {/* Package 3 */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-md border border-gray-100">
              <div className="mb-4">
                <span className="inline-block py-1 px-3 bg-green-100 text-green-800 rounded-full text-sm font-medium">Customizable</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Custom Transportation</h3>
              <p className="text-gray-600 mb-6">Vehicle rental for your self-planned Char Dham pilgrimage journey.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Choice of vehicle based on group size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Experienced mountain driver</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Flexible itinerary based on your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>24/7 support during the journey</span>
                </li>
              </ul>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-500 text-sm">Starting from</p>
                  <p className="text-2xl font-bold">₹3,500 <span className="text-sm font-normal">per day</span></p>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Flexible</span>
                </div>
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition duration-300">
                Inquire Now
              </button>
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