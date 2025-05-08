import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaTemperatureHigh, FaBook, FaHotel, FaUtensils, FaPhoneAlt, FaRoute, FaQuestion, FaRupeeSign, FaUsers, FaSuitcase, FaPercent, FaRegCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Badrinath = () => {
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
            src="/badrinath.jpg" 
            alt="Badrinath Temple"
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
              Badrinath Yatra
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
              Experience the divine at Badrinath, one of the holiest shrines dedicated to Lord Vishnu. Book your yatra, transport, and stay with us for a seamless pilgrimage.
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
      
      {/* Transportation Options Section for Badrinath Yatra */}
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
                  src="/gangatri.jpg" 
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