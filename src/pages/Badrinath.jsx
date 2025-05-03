import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaTemperatureHigh, FaBook, FaHotel, FaUtensils, FaPhoneAlt, FaRoute, FaQuestion, FaRupeeSign, FaUsers, FaSuitcase } from 'react-icons/fa';
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
      
      {/* Transportation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Transportation to Badrinath</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Travel safely and comfortably to Badrinath with our specialized fleet designed for the challenging Himalayan terrain
            </p>
          </div>

          {/* Buses Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <FaBus className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Luxury Buses for Badrinath Yatra</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our fleet of luxury buses offer comfort and safety for large pilgrim groups traveling to Badrinath
            </p>

            <div className="mb-10">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                      alt="Volvo Bus" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Volvo 9400 (40-Seater)</h3>
                      <p>Premium bus with reclining seats and climate control for your journey to Badrinath</p>
                      <p className="mt-2 text-amber-400 font-bold">₹15,000 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="TATA Bus" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">TATA Luxury Bus (35-Seater)</h3>
                      <p>Spacious interiors with large windows for scenic mountain views en route to Badrinath</p>
                      <p className="mt-2 text-amber-400 font-bold">₹13,000 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Deluxe Bus Interior" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Deluxe Bus Interior</h3>
                      <p>Premium comfort with modern amenities for pilgrim groups</p>
                      <p className="mt-2 text-amber-400 font-bold">Onboard washroom facilities available</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-blue-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Capacity</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>25-40 passenger capacity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Perfect for large pilgrim groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All buses with mountain gear systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaSuitcase className="text-blue-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Amenities</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Air conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Reclining push-back seats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Entertainment system with devotional content</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaRupeeSign className="text-blue-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Special Pricing</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Badrinath Yatra: ₹13,000-15,000 per day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Group discounts available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fuel and driver included</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition duration-300">
                Book a Bus
              </button>
            </div>
          </div>

          {/* Tempo Travellers Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <FaShuttleVan className="text-4xl text-green-600 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Tempo Travellers for Badrinath Yatra</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our mid-sized vehicles are perfect for small to medium groups traveling to Badrinath
            </p>

            <div className="mb-10">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1605793375565-06ee6a611c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Force Tempo Traveller" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Force Tempo Traveller (14-Seater)</h3>
                      <p>Spacious interiors with high roof for comfortable mountain journeys to Badrinath</p>
                      <p className="mt-2 text-amber-400 font-bold">₹9,000 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Tempo Traveller Interior" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Premium Tempo Traveller Interior</h3>
                      <p>Comfortable push-back seats with ample legroom for all passengers</p>
                      <p className="mt-2 text-amber-400 font-bold">₹7,500 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                      alt="9-Seater Tempo Traveller" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Deluxe Tempo Traveller (9-Seater)</h3>
                      <p>Perfect for small family groups with extra luggage space</p>
                      <p className="mt-2 text-amber-400 font-bold">₹6,500 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-green-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Capacity</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>9-14 passenger capacity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ideal for medium-sized pilgrim groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Perfect balance of comfort and cost</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaSuitcase className="text-green-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Amenities</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Air conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Push-back seats with excellent support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ample luggage storage</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaRupeeSign className="text-green-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Special Pricing</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Badrinath Yatra: ₹6,500-9,000 per day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Multi-day discounts available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Experienced mountain drivers</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg transition duration-300">
                Book a Tempo Traveller
              </button>
            </div>
          </div>

          {/* Cars Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <FaCar className="text-4xl text-red-600 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Premium Cars for Badrinath Yatra</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our luxury cars provide a personalized and comfortable journey for families and small groups
            </p>

            <div className="mb-10">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Toyota Innova Crysta" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Toyota Innova Crysta</h3>
                      <p>Premium 7-seater SUV with excellent mountain performance</p>
                      <p className="mt-2 text-amber-400 font-bold">₹5,500 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Mahindra Scorpio" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Mahindra Scorpio</h3>
                      <p>Rugged and comfortable SUV designed for mountain roads</p>
                      <p className="mt-2 text-amber-400 font-bold">₹4,500 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-[400px] md:h-[500px]">
                    <img 
                      src="https://images.unsplash.com/photo-1626025222741-335e944559dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                      alt="Toyota Fortuner" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Toyota Fortuner</h3>
                      <p>Luxury SUV with superior comfort and performance</p>
                      <p className="mt-2 text-amber-400 font-bold">₹6,500 per day for Badrinath Yatra</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-red-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Capacity</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>4-7 passenger capacity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Perfect for families and small groups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Personalized journey experience</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaSuitcase className="text-red-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Amenities</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Plush interiors with climate control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced music system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Bottled water and basic amenities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaRupeeSign className="text-red-600 text-xl mr-3" />
                  <h4 className="font-bold text-lg">Special Pricing</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Badrinath Yatra: ₹4,500-6,500 per day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fuel and driver included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customizable itinerary</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition duration-300">
                Book a Car
              </button>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              All our vehicles come with experienced drivers familiar with mountain routes and 24/7 support throughout your journey
            </p>
            <Link to="/contact" className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
              Request Custom Quote
            </Link>
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