import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt, FaRupeeSign, FaUsers, FaSuitcase } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DoDham = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1591777331097-fcf03fb7078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Kedarnath and Badrinath" 
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Do Dham Yatra</h1>
            <p className="text-xl md:text-2xl mb-8">Sacred journey to Kedarnath and Badrinath, two of Hinduism's most revered pilgrimage sites</p>
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
              Book Your Journey Now
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">The Sacred Do Dham Pilgrimage</h2>
            <p className="text-lg text-gray-600 mb-8">
              Do Dham Yatra refers to the pilgrimage to the two most important temples in the Char Dham circuit - 
              Kedarnath dedicated to Lord Shiva and Badrinath dedicated to Lord Vishnu. These sacred shrines 
              nestled in the majestic Himalayas offer spiritual solace and breathtaking natural beauty.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Spiritual Significance</h3>
                <p className="text-gray-600">
                  The Do Dham pilgrimage is believed to cleanse pilgrims of all sins and help them attain salvation (Moksha). 
                  Visiting these sacred temples is considered highly auspicious in Hindu tradition.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Pilgrimage Season</h3>
                <p className="text-gray-600">
                  The temples remain open for approximately six months a year, from April/May to October/November, 
                  as they become inaccessible during winter due to heavy snowfall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Temple Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">The Sacred Temples</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the divine abodes of Lord Shiva and Lord Vishnu, nestled in the magnificent Himalayas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Kedarnath */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-80">
                <img 
                  src="https://images.unsplash.com/photo-1591777331097-fcf03fb7078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Kedarnath Temple" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-2xl font-bold">Kedarnath Temple</h3>
                  <p className="text-white/90">Abode of Lord Shiva</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Altitude: 3,583 meters
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Trek: 16 km from Gaurikund
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Kedarnath houses one of the 12 Jyotirlingas of Lord Shiva and is located in a breathtaking setting near the Mandakini river. 
                  The temple's stone structure has withstood many natural calamities over the centuries, symbolizing resilience and divine protection.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Rudraprayag District, Uttarakhand</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCalendarAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Best Time to Visit</h4>
                      <p className="text-gray-600">May to June and September to October</p>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/kedarnath" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300"
                >
                  Explore Kedarnath
                </Link>
              </div>
            </div>
            
            {/* Badrinath */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-80">
                <img 
                  src="https://images.unsplash.com/photo-1623849778517-968ead2c787c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Badrinath Temple" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <h3 className="text-2xl font-bold">Badrinath Temple</h3>
                  <p className="text-white/90">Abode of Lord Vishnu</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Altitude: 3,133 meters
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Accessible by Road
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Badrinath is one of the holiest Hindu shrines dedicated to Lord Vishnu. The temple is located along the banks of the Alaknanda River
                  and is surrounded by breathtaking mountain scenery including the magnificent Neelkanth Peak.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">Chamoli District, Uttarakhand</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCalendarAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Best Time to Visit</h4>
                      <p className="text-gray-600">May to October (Summer and Autumn)</p>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/badrinath" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300"
                >
                  Explore Badrinath
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transportation Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Transportation Fleet</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain a diverse fleet of well-maintained vehicles specifically designed for the challenging Himalayan terrain
            </p>
          </div>

          {/* Buses Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <FaBus className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Luxury Buses</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              A fleet of 20 modern buses perfect for large pilgrim groups with experienced mountain drivers
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
                      <p>Premium bus with reclining seats and enhanced comfort for long journeys</p>
                      <p className="mt-2 text-amber-400 font-bold">₹16,000 per day for Do Dham Yatra</p>
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
                      <p>Spacious interiors with large windows for scenic mountain views</p>
                      <p className="mt-2 text-amber-400 font-bold">₹14,000 per day for Do Dham Yatra</p>
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
                      <p>Comfortable seating with modern amenities for pilgrim groups</p>
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
                    <span>Entertainment system</span>
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
                    <span>Do Dham Yatra: ₹14,000-16,000 per day</span>
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Tempo Travellers</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              A fleet of 10 spacious vans perfect for medium-sized groups of pilgrims
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
                      <p>Spacious interiors with high roof for comfortable mountain journeys</p>
                      <p className="mt-2 text-amber-400 font-bold">₹10,000 per day for Do Dham Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹8,500 per day for Do Dham Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹7,500 per day for Do Dham Yatra</p>
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
                    <span>Do Dham Yatra: ₹7,500-10,000 per day</span>
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
          <div className="mb-10">
            <div className="flex items-center justify-center mb-8">
              <FaCar className="text-4xl text-red-600 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Our Premium Cars</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              A fleet of 12 luxury cars perfect for families and small groups of pilgrims
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
                      <p className="mt-2 text-amber-400 font-bold">₹6,500 per day for Do Dham Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹5,500 per day for Do Dham Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹7,500 per day for Do Dham Yatra</p>
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
                    <span>Bottle water and basic amenities</span>
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
                    <span>Do Dham Yatra: ₹5,500-7,500 per day</span>
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
      
      {/* Package Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Do Dham Package Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted packages for an unforgettable spiritual journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-blue-600 text-white py-2 text-center font-bold">
                MOST POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">6-Day Standard Package</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Complete Do Dham pilgrimage with comfortable transportation and accommodations
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹18,999</span>
                    <span className="text-gray-500 mt-2 ml-1">/ person</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">All inclusive</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Visit to Kedarnath and Badrinath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>5 nights accommodation</span>
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
                <h3 className="text-xl font-bold text-center mb-4">8-Day Deluxe Package</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Extended Do Dham journey with premium accommodations and helicopter options
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹28,999</span>
                    <span className="text-gray-500 mt-2 ml-1">/ person</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">All inclusive</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Visit to Kedarnath and Badrinath</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>7 nights premium accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All meals included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Helicopter option for Kedarnath</span>
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
                <h3 className="text-xl font-bold text-center mb-4">Custom Do Dham Journey</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Design your own pilgrimage with our flexible transportation and accommodation options
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹15,999</span>
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
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Sacred Journey?</h2>
            <p className="text-xl mb-8">
              The Do Dham Yatra season is now open! Book your transportation with ANT Travels
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

export default DoDham; 