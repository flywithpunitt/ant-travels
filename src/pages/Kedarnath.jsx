import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaTemperatureHigh, FaBook, FaHiking, FaHotel, FaUtensils, FaPhoneAlt, FaRoute, FaQuestion, FaRupeeSign, FaUsers, FaSuitcase, FaHelicopter, FaPercent, FaRegCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Kedarnath = () => {
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
            src="/public/kedarnath.jpg" 
            alt="Kedarnath Temple"
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#ff5722] text-base md:text-lg font-medium tracking-wide uppercase"
            >
              WELCOME TO ANT TRAVELS
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            >
              Kedarnath Yatra
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block text-[#ff5722] mt-1 md:mt-2 relative"
              >
                Temple & Pilgrimage Services
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4 leading-relaxed"
            >
              Embark on a sacred journey to Kedarnath, the revered abode of Lord Shiva. Book your yatra, transport, and stay with us for a safe and memorable pilgrimage.
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
                onClick={() => window.location.href = '/booking'}
              >
                <span className="relative z-10">Book Your Yatra</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7043] to-[#ff5722] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-10 bg-white/10 blur-xl transform rotate-45 translate-x-20 translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-transparent text-white text-base font-medium rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
                onClick={() => window.location.href = '/vehicles/buses'}
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



            {/* Introduction Section */}
            <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">About Kedarnath Temple</h2>
            <p className="text-lg text-gray-600 mb-8">
              Kedarnath Temple is one of the most sacred Hindu shrines dedicated to Lord Shiva. 
              Located in the Rudraprayag district of Uttarakhand, it is one of the twelve Jyotirlingas 
              (holy shrines of Lord Shiva) and is part of the Char Dham pilgrimage circuit. The ancient 
              temple is set against the backdrop of the magnificent Kedarnath range at an altitude of 3,583 meters.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Temple Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Rudraprayag District, Uttarakhand, India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCalendarAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Opening Hours</h4>
                      <p className="text-gray-600">4:00 AM to 9:00 PM (during pilgrimage season)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaTemperatureHigh className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Weather</h4>
                      <p className="text-gray-600">Summer: 3°C to 14°C / Winter: Below freezing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaHiking className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Trek Distance</h4>
                      <p className="text-gray-600">16 km trek from Gaurikund</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/public/kd2.jpg" 
                  alt="Kedarnath Temple Close-up" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* History & Legend Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">History & Legend</h2>
            
            <div className="bg-slate-50 p-8 rounded-xl shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">The Divine Origin</h3>
              <p className="text-lg text-gray-600 mb-4">
                According to Hindu mythology, the Pandavas, after the Mahabharata war, sought Lord Shiva to atone for their sins. 
                Lord Shiva, not wanting to forgive them easily, took the form of a bull and hid in the Himalayan terrain.
              </p>
              <p className="text-lg text-gray-600">
                When the Pandavas found him, Shiva tried to disappear by sinking himself into the ground. Bhima caught his hump, 
                which remained above the ground. This hump is worshipped as the Kedarnath Jyotirlinga. The other parts of Lord Shiva 
                appeared at four other locations - together forming the Panch Kedar.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Temple Architecture</h3>
                <p className="text-gray-600">
                  The current temple is believed to have been built by Adi Shankaracharya in the 8th century CE, although the original temple 
                  is believed to be much older. The temple is built of large, heavy, and evenly cut stone slabs. It has a conical 
                  Himalayan design with a small cupola, characteristic of temples in the region.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Remarkable Resilience</h3>
                <p className="text-gray-600">
                  The temple has withstood many natural calamities including the devastating 2013 Uttarakhand floods that destroyed 
                  much of the surrounding area. Remarkably, the temple structure remained largely intact, which many devotees 
                  consider a divine miracle, reinforcing their faith in Lord Shiva's protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Trekking Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Kedarnath Trek Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the scenic 16 km pilgrimage trek from Gaurikund to Kedarnath
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="/public/kdpath.jpg" 
                  alt="Kedarnath Trek Path" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Trek Overview</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaHiking className="text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Distance</h4>
                      <p className="text-gray-600">16 km from Gaurikund to Kedarnath Temple</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaRoute className="text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Route</h4>
                      <p className="text-gray-600">Well-paved path with multiple rest stops and amenities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCalendarAlt className="text-purple-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Duration</h4>
                      <p className="text-gray-600">6-8 hours ascending, 4-5 hours descending</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaTemperatureHigh className="text-orange-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold">Difficulty Level</h4>
                      <p className="text-gray-600">Moderate to difficult due to high altitude and steep sections</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Alternative Transport Options on Trek Route</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-center">Pony/Horse Ride</h4>
                  <div className="text-center mb-4">
                    <img 
                      src="/public/kdpath.jpg" 
                      alt="Horse Ride to Kedarnath" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>₹2,500-3,500 (one way)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Available throughout the route</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Safe and traditional option</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-center">Palki/Doli Service</h4>
                  <div className="text-center mb-4">
                    <img 
                      src="/public/kedarnath.jpg" 
                      alt="Palki/Doli Service" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>₹5,000-7,000 (one way)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Carried by 4 porters</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Most comfortable option</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-center">Porter/Pithu Service</h4>
                  <div className="text-center mb-4">
                    <img 
                      src="/public/yamunotri.jpg" 
                      alt="Porter Service" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>₹1,500-2,000 for luggage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Help for elderly persons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Local guides available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Trek Preparation Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Begin physical conditioning 1-2 months before your journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pack light and carry only essentials - warm clothes, rain protection, medicines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Stay hydrated and acclimatize properly to avoid altitude sickness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Wear comfortable trekking shoes with good grip</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Start early to reach before afternoon weather changes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Rest Stops on Trek</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Rambara (8 km):</strong> Major rest point with shops and refreshments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Lincholi (11 km):</strong> Rest area with medical facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Bhimbali (13 km):</strong> Last major stop before Kedarnath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Multiple smaller rest points with facilities every 1-2 km</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Medical outposts available throughout the route</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
                Book a Guided Trek Package
              </Link>
            </div>
          </div>
        </div>
      </section>
      


      
      {/* Travel Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Essential Travel Tips</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important information to ensure a smooth and enjoyable pilgrimage to Kedarnath
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Tip 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <FaCalendarAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg">Best Time to Visit</h3>
              </div>
              <p className="text-gray-600">
                The temple is open for pilgrims from late April/May to early November (Akshaya Tritiya to Diwali). 
                The best months to visit are May-June and September-October for better weather conditions.
              </p>
            </div>
            
            {/* Tip 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <FaTemperatureHigh className="text-green-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg">Weather & Clothing</h3>
              </div>
              <p className="text-gray-600">
                Weather is unpredictable in Kedarnath. Carry warm clothing even in summer as temperatures drop significantly at night. 
                Rain gear is essential as sudden showers are common. Layered clothing works best.
              </p>
            </div>
            
            {/* Tip 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <FaRoute className="text-red-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg">Route Information</h3>
              </div>
              <p className="text-gray-600">
                The journey involves traveling to Gaurikund by road and then a 16 km trek to Kedarnath. 
                The typical route is Delhi → Haridwar → Rishikesh → Rudraprayag → Sonprayag → Gaurikund → Kedarnath.
              </p>
            </div>
            
            {/* Tip 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <FaHiking className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg">Trek Preparation</h3>
              </div>
              <p className="text-gray-600">
                The trek is moderately difficult due to high altitude and steep paths. Prepare physically at least a month before. 
                Walking and stair-climbing exercises are recommended. Consider a medical check-up before the journey.
              </p>
            </div>
            
            {/* Tip 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                  <FaUtensils className="text-yellow-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg">Food & Water</h3>
              </div>
              <p className="text-gray-600">
                Carry water bottles and some ready-to-eat snacks for the trek. There are small food stalls along the trek route and in Kedarnath. 
                Simple vegetarian food is widely available. Avoid consuming very spicy or heavy food.
              </p>
            </div>
            
            {/* Tip 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <FaPhoneAlt className="text-orange-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg">Communication</h3>
              </div>
              <p className="text-gray-600">
                Network connectivity is limited on the trek route and in Kedarnath. BSNL provides the most reliable service in this region. 
                Inform family members about your itinerary and expected return before starting your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about visiting Kedarnath and our services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">How do I reach Kedarnath?</h3>
              <p className="text-gray-600">You can reach Kedarnath either by trekking 16 km from Gaurikund or by taking a helicopter from helipads at Phata, Guptkashi, or Sirsi. To reach Gaurikund, take a flight to Dehradun, followed by road travel via Rishikesh and Rudraprayag (approximately 220 km). We offer transportation services from all major cities and transit points in Uttarakhand.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">How difficult is the Kedarnath trek?</h3>
              <p className="text-gray-600">The Kedarnath trek is considered moderately difficult due to the high altitude (3,583 meters) and steep sections. The 16 km trek from Gaurikund typically takes 6-8 hours to complete. Even people with average fitness can complete it, but it's advisable to prepare physically beforehand. Alternative transport options like horses, palanquins (palkis), and porters are available for those who need assistance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Is the helicopter service to Kedarnath safe?</h3>
              <p className="text-gray-600">Yes, helicopter services to Kedarnath are operated by authorized aviation companies following strict safety protocols. However, services are weather-dependent and may be canceled or rescheduled during adverse conditions. We work with reputable helicopter operators with excellent safety records. All our helicopter packages include necessary permits and insurance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long should I plan to stay in Kedarnath?</h3>
              <p className="text-gray-600">Most pilgrims stay in Kedarnath for 1-2 days. If you're trekking, we recommend planning for a 3-day journey: one day to trek up, one day for temple darshan and local exploration, and one day to trek down. If you're traveling by helicopter, a single day may be sufficient, but staying overnight allows for more flexibility with temple visits and experiencing the divine atmosphere.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">What medical facilities are available on the Kedarnath route?</h3>
              <p className="text-gray-600">Basic medical facilities are available along the trek route with medical aid posts at regular intervals. There's a government hospital in Kedarnath during the pilgrimage season. However, we recommend carrying a basic first-aid kit, personal medications, and medicines for altitude sickness, cold, fever, and stomach issues. For those with pre-existing medical conditions, please consult your doctor before undertaking the journey.</p>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Sacred Journey to Kedarnath?</h2>
            <p className="text-xl mb-8">
              The Kedarnath Temple is now open for pilgrims! Book your transportation and accommodation with ANT Travels
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

export default Kedarnath; 