import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaTemperatureHigh, FaBook, FaHotel, FaUtensils, FaPhoneAlt, FaRoute, FaQuestion, FaRupeeSign, FaUsers, FaSuitcase, FaPercent, FaRegCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Badrinath = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1623849778517-968ead2c787c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Badrinath Temple" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Badrinath</h1>
            <p className="text-xl md:text-2xl mb-8">Sacred abode of Lord Vishnu nestled in the magnificent Himalayas</p>
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
              Plan Your Visit
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">About Badrinath Temple</h2>
            <p className="text-lg text-gray-600 mb-8">
              Badrinath Temple, dedicated to Lord Vishnu, is one of the most sacred Hindu shrines in India. 
              Located in the town of Badrinath in Uttarakhand, it is one of the four Char Dham pilgrimage sites 
              and one of the 108 Divya Desams (sacred places of Vishnu). The temple is situated along the banks of 
              the Alaknanda River, surrounded by the breathtaking Nar-Narayan mountain ranges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Temple Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Chamoli District, Uttarakhand, India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCalendarAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Opening Hours</h4>
                      <p className="text-gray-600">4:30 AM to 9:00 PM (during pilgrimage season)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaTemperatureHigh className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Weather</h4>
                      <p className="text-gray-600">Summer: 7°C to 18°C / Winter: Below freezing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaBook className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Religious Significance</h4>
                      <p className="text-gray-600">One of the 108 Divya Desams dedicated to Lord Vishnu</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Badrinath Temple Close-up" 
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
            
            <div className="bg-blue-50 p-8 rounded-xl shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">The Divine Origin</h3>
              <p className="text-lg text-gray-600 mb-4">
                According to Hindu mythology, Lord Vishnu meditated for thousands of years in Badrinath under the Badri tree (berries). 
                When Goddess Lakshmi provided him shade from the harsh weather in the form of a Badri tree, the place came to be known as Badrinath.
              </p>
              <p className="text-lg text-gray-600">
                The temple itself was established by Adi Shankaracharya in the 8th century CE. It is believed that he discovered 
                the idol of Lord Badrinarayan (a form of Lord Vishnu) in the Alaknanda River and enshrined it in a cave near the Tapt Kund hot springs.
                Later, a temple was built around the idol which has been renovated several times over the centuries.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Temple Architecture</h3>
                <p className="text-gray-600">
                  The temple features a colorful facade with a small cupola and a gold gilt roof. The shrine is approximately 50 feet tall 
                  with a small cupola on top, covered with a gold gilt roof. The temple has three sections: the Garbha Griha (sanctum), 
                  the Darshan Mandap (worship hall), and the Sabha Mandap (conference hall).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Sacred Hot Springs</h3>
                <p className="text-gray-600">
                  Tapt Kund, a hot sulphur spring just below the temple, is considered sacred and is believed to have medicinal properties. 
                  Pilgrims traditionally bathe in these springs before visiting the temple, as it is believed to cleanse their sins.
                </p>
              </div>
            </div>
          </div>
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
              Special Deals for Badrinath Yatra 2024
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
                description: "Plan ahead and save on your transportation costs for Badrinath Yatra. Valid for all vehicle types.",
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
                description: "Book complete Badrinath transportation package and get 2 nights' accommodation in Rishikesh free.",
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
      
      {/* Transportation Options Section for Badrinath Yatra */}
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
              For Badrinath Yatra, we provide a range of well-maintained vans, buses, and cars to suit every group size and comfort level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Badrinath Cars",
                description: "Our cars are ideal for Badrinath Yatra, offering comfort and flexibility for small groups and families.",
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
                title: "Badrinath Vans",
                description: "Perfect for Badrinath Yatra, our vans provide ample space and comfort for medium-sized groups.",
                color: "blue",
                images: [
                  "/vans/tttt7.jpg",
                  "/vans/tttttt5.jpg"
                ],
                features: ["Force Tempo Traveller 12+1", "Force Tempo Traveller 14+1", "Force Tempo Traveller 17+1", "Tempo Traveller Maharaja", "Tempo Traveller Deluxe"],
                price: "Starting from ₹20,000 per day"
              },
              {
                title: "Badrinath Buses",
                description: "For large groups on Badrinath Yatra, our luxury buses ensure a safe and comfortable pilgrimage.",
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
      
      {/* Accommodation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Accommodation in Badrinath</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We can arrange comfortable stay options in Badrinath to make your pilgrimage hassle-free
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Accommodation Type 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Budget Accommodation" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Budget Accommodation</h3>
                <p className="text-gray-600 mb-4">
                  Clean and comfortable pilgrim guesthouses and dharamshalas located near the temple.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center">
                    <FaRupeeSign className="text-green-600 mr-2" />
                    <span>Starting from ₹800 per night</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>0.5-1 km from temple</span>
                  </p>
                </div>
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 rounded-lg transition duration-300">
                  View Options
                </button>
              </div>
            </div>
            
            {/* Accommodation Type 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Standard Hotels" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Standard Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Comfortable hotels with modern amenities and room service for a pleasant stay.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center">
                    <FaRupeeSign className="text-green-600 mr-2" />
                    <span>Starting from ₹2,000 per night</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>1-2 km from temple</span>
                  </p>
                </div>
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 rounded-lg transition duration-300">
                  View Options
                </button>
              </div>
            </div>
            
            {/* Accommodation Type 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Premium Hotels" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Best hotels in Badrinath with excellent service, dining options, and premium amenities.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center">
                    <FaRupeeSign className="text-green-600 mr-2" />
                    <span>Starting from ₹3,500 per night</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>Prime locations with temple views</span>
                  </p>
                </div>
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-2 rounded-lg transition duration-300">
                  View Options
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Accommodation in Badrinath gets fully booked during peak season. We recommend booking 2-3 months in advance for the best options.
            </p>
            <Link to="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg transition duration-300">
              Inquire About Accommodation
            </Link>
          </div>
        </div>
      </section>
      
      {/* Travel Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Essential Travel Tips</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important information to ensure a smooth and enjoyable pilgrimage to Badrinath
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
                The temple is open for pilgrims from late April/May to early November. The best months to visit 
                are May-June and September-October to avoid monsoon rains and heavy crowds.
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
                Badrinath has a cool climate year-round. Pack warm clothes even in summer as temperatures can drop significantly 
                at night. Rainwear is essential during monsoon (July-August).
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
                The road to Badrinath passes through scenic but challenging mountain terrain. The usual route is via 
                Rishikesh, Devprayag, Joshimath, and finally Badrinath (approx. 480 km from Delhi).
              </p>
            </div>
            
            {/* Tip 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <FaHotel className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-bold text-lg">Accommodation</h3>
              </div>
              <p className="text-gray-600">
                Pre-book your accommodation, especially during peak season (May-June). Options range from dharamshalas 
                to luxury hotels. Most accommodations are within 1-2 km of the temple.
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
                Simple vegetarian food is widely available. Carry water bottles and some ready-to-eat snacks. 
                Try the local prasad and Badri Van Lal (local kidney beans) for an authentic experience.
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
                Network connectivity can be limited in some areas. BSNL offers the best coverage in the region. 
                Inform family members about your itinerary before starting the journey.
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
              Common questions about visiting Badrinath and our services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">What is the best way to reach Badrinath?</h3>
              <p className="text-gray-600">The most convenient way is to take a flight to Dehradun and then travel by road to Badrinath (approximately 315 km). Another option is to take a train to Haridwar/Rishikesh and continue by road. We offer transportation services from all major cities and transit points in Uttarakhand.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long should I plan to stay in Badrinath?</h3>
              <p className="text-gray-600">We recommend at least 1-2 days in Badrinath to visit the temple, nearby attractions like Mana Village (last Indian village), Tapt Kund, and Vasudhara Falls. If you're planning to visit other Char Dham destinations, a complete itinerary usually takes 10-12 days.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Are there any health considerations for visiting Badrinath?</h3>
              <p className="text-gray-600">Badrinath is located at a high altitude (around 3,133 meters), so visitors may experience altitude sickness. We recommend acclimatizing gradually, staying hydrated, and consulting a doctor before travel if you have any respiratory or heart conditions. Carrying basic medicines is advisable.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do I need special permits to visit Badrinath?</h3>
              <p className="text-gray-600">No special permits are required for Indian nationals to visit Badrinath. Foreign nationals should carry valid passports and visas. However, during peak season, the temple administration may implement a token system to manage crowds, which we can help arrange.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Can you customize a package for only Badrinath instead of the full Char Dham Yatra?</h3>
              <p className="text-gray-600">Yes, we offer customized packages for Badrinath alone or in combination with any other destinations you wish to visit. Our services include transportation, accommodation, and guide services tailored to your specific requirements and budget.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Package Options */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Badrinath Tour Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted packages for an unforgettable journey to Badrinath
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-blue-600 text-white py-2 text-center font-bold">
                MOST POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">4-Day Badrinath Package</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Complete Badrinath pilgrimage with comfortable transportation and accommodations
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹14,999</span>
                    <span className="text-gray-500 mt-2 ml-1">/ person</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">All inclusive</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Visit to Badrinath Temple and nearby attractions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>3 nights accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Breakfast and dinner included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Transportation throughout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Experienced guide</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300">
                  Book Package
                </button>
              </div>
            </div>
            
            {/* Package 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-purple-600 text-white py-2 text-center font-bold">
                PREMIUM
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">6-Day Badrinath Deluxe Package</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Extended journey with luxury accommodations and additional sightseeing
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹22,999</span>
                    <span className="text-gray-500 mt-2 ml-1">/ person</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">All inclusive</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Badrinath Temple and extended sightseeing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>5 nights premium accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All meals included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Premium vehicle with experienced driver</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Personal guide and assistance</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-300">
                  Book Package
                </button>
              </div>
            </div>
            
            {/* Package 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-teal-600 text-white py-2 text-center font-bold">
                CUSTOM
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">Custom Badrinath Journey</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Design your own pilgrimage with our flexible transportation and accommodation options
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹12,999</span>
                    <span className="text-gray-500 mt-2 ml-1">/ person</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">Base price, customizable</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Flexible itinerary options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Choice of transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Accommodation per preference</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Meal plan options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>24/7 support team</span>
                  </li>
                </ul>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg transition duration-300">
                  Contact for Custom Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Sacred Journey to Badrinath?</h2>
            <p className="text-xl mb-8">
              The Badrinath Temple is now open for pilgrims! Book your transportation and accommodation with ANT Travels
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

export default Badrinath; 