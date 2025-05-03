import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaTemperatureHigh, FaBook, FaHiking, FaHotel, FaUtensils, FaPhoneAlt, FaRoute, FaQuestion, FaRupeeSign, FaUsers, FaSuitcase, FaHelicopter } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Kedarnath = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1591777331097-fcf03fb7078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
            alt="Kedarnath Temple" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kedarnath</h1>
            <p className="text-xl md:text-2xl mb-8">Sacred abode of Lord Shiva nestled in the mighty Himalayas</p>
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
                  src="https://images.unsplash.com/photo-1591777331097-fcf03fb7078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
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
      
      {/* Transportation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Transportation to Kedarnath</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Travel comfortably to Gaurikund (the starting point of Kedarnath trek) with our specialized fleet
            </p>
          </div>

          {/* Buses Section */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-8">
              <FaBus className="text-4xl text-blue-600 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Luxury Buses for Kedarnath Yatra</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our fleet of luxury buses bring pilgrims safely and comfortably to Gaurikund, the starting point of the Kedarnath trek
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
                      <p>Premium bus with reclining seats and climate control for your journey to Gaurikund</p>
                      <p className="mt-2 text-amber-400 font-bold">₹16,000 per day for Kedarnath Yatra</p>
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
                      <p>Spacious interiors with large windows for scenic mountain views en route to Gaurikund</p>
                      <p className="mt-2 text-amber-400 font-bold">₹14,000 per day for Kedarnath Yatra</p>
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
                    <span>Kedarnath Yatra: ₹14,000-16,000 per day</span>
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Tempo Travellers for Kedarnath Yatra</h3>
            </div>
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Our mid-sized vehicles are perfect for small to medium groups traveling to Gaurikund
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
                      <p>Spacious interiors with high roof for comfortable mountain journeys to Gaurikund</p>
                      <p className="mt-2 text-amber-400 font-bold">₹10,000 per day for Kedarnath Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹8,500 per day for Kedarnath Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹7,500 per day for Kedarnath Yatra</p>
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
                    <span>Kedarnath Yatra: ₹7,500-10,000 per day</span>
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Premium Cars for Kedarnath Yatra</h3>
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
                      <p className="mt-2 text-amber-400 font-bold">₹6,500 per day for Kedarnath Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹5,500 per day for Kedarnath Yatra</p>
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
                      <p className="mt-2 text-amber-400 font-bold">₹7,500 per day for Kedarnath Yatra</p>
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
                    <span>Kedarnath Yatra: ₹5,500-7,500 per day</span>
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
      
      {/* Helicopter Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Helicopter Services to Kedarnath</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Skip the trek and reach Kedarnath Temple in minutes with our helicopter services
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl shadow-md mb-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Daily Helicopter Service</h3>
                  <p className="text-gray-600 mb-4">
                    Our helicopter services operate daily from Phata, Guptkashi and Sirsi helipads to Kedarnath, allowing pilgrims 
                    to avoid the challenging 16 km trek and reach the temple within 10 minutes.
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <FaHelicopter className="text-indigo-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Flight Time</h4>
                        <p className="text-gray-600">8-10 minutes (one way)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaRupeeSign className="text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Pricing</h4>
                        <p className="text-gray-600">₹8,000 - ₹12,000 per person (round trip)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FaSuitcase className="text-orange-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Luggage Allowance</h4>
                        <p className="text-gray-600">5 kg per passenger</p>
                      </div>
                    </li>
                  </ul>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-lg transition duration-300">
                    Book Helicopter Service
                  </button>
                </div>
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" 
                    alt="Helicopter Service to Kedarnath" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaHelicopter className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-lg">Multiple Helipads</h3>
                </div>
                <p className="text-gray-600">
                  Choose from Phata, Guptkashi, or Sirsi helipads for your convenience. 
                  We also offer luxury chartered services from Dehradun.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <FaCalendarAlt className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-lg">Advance Booking</h3>
                </div>
                <p className="text-gray-600">
                  We recommend booking at least 1-2 months in advance during peak season 
                  (May-June and September-October) to secure your seats.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <FaPhoneAlt className="text-amber-600 text-xl" />
                  </div>
                  <h3 className="font-bold text-lg">24/7 Support</h3>
                </div>
                <p className="text-gray-600">
                  Our team provides round-the-clock assistance for weather updates, 
                  rescheduling options, and any other support needed for your journey.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Important Note:</h3>
              <p className="text-gray-600">
                Helicopter services are weather-dependent and may be canceled or rescheduled due to adverse weather conditions.
                We prioritize passenger safety above all else and will provide alternative arrangements if flights are canceled.
              </p>
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
                  src="https://images.unsplash.com/photo-1626259231849-eda8a1377fae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" 
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
                      src="https://images.unsplash.com/photo-1604943493377-59b5674c9627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
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
                      src="https://images.unsplash.com/photo-1598085728569-0c13bc4c1988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
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
                      src="https://images.unsplash.com/photo-1507440705550-6d712dd9f37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
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
      
      {/* More sections to be added later */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">This page is under construction</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're currently enhancing this page with detailed information about Kedarnath Temple,
            transportation options, the trek route, helicopter services, accommodation details, and travel guides. 
            Please check back soon!
          </p>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Accommodation in Kedarnath</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We can arrange comfortable stay options in Kedarnath for your pilgrimage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Accommodation Type 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dharamshala Accommodation" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dharamshalas</h3>
                <p className="text-gray-600 mb-4">
                  Basic pilgrim accommodations run by charitable trusts, offering clean and functional rooms.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center">
                    <FaRupeeSign className="text-green-600 mr-2" />
                    <span>Starting from ₹500 per night</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>0.2-0.5 km from temple</span>
                  </p>
                </div>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg transition duration-300">
                  View Options
                </button>
              </div>
            </div>
            
            {/* Accommodation Type 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Standard Accommodations" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">GMVN Guest Houses</h3>
                <p className="text-gray-600 mb-4">
                  Government-operated guest houses with more amenities and reliable service.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center">
                    <FaRupeeSign className="text-green-600 mr-2" />
                    <span>Starting from ₹1,500 per night</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>0.5-1 km from temple</span>
                  </p>
                </div>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg transition duration-300">
                  View Options
                </button>
              </div>
            </div>
            
            {/* Accommodation Type 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Premium Accommodations" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Private Hotels</h3>
                <p className="text-gray-600 mb-4">
                  Limited private hotels offering better amenities and comfort for pilgrims.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center">
                    <FaRupeeSign className="text-green-600 mr-2" />
                    <span>Starting from ₹3,000 per night</span>
                  </p>
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>Best locations with temple views</span>
                  </p>
                </div>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg transition duration-300">
                  View Options
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-xl shadow-md mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Important Accommodation Notes</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-amber-500 text-xl mr-3">⚠</span>
                <p className="text-gray-600">Accommodations in Kedarnath are basic due to the remote location and challenging terrain. Expect functional rather than luxurious facilities.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 text-xl mr-3">⚠</span>
                <p className="text-gray-600">Pre-booking is essential during peak season (May-June and September-October) as accommodations fill up quickly.</p>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 text-xl mr-3">⚠</span>
                <p className="text-gray-600">Many pilgrims also choose to stay in Gaurikund (the trek starting point) or Sonprayag, where more accommodation options are available.</p>
              </li>
            </ul>
          </div>
          
          <div className="text-center mt-12">
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
      
      {/* Package Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Kedarnath Tour Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted packages for an unforgettable journey to Kedarnath
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-slate-600 text-white py-2 text-center font-bold">
                TREKKING PACKAGE
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">3-Day Kedarnath Trek Package</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Complete Kedarnath pilgrimage with guided trek and comfortable accommodations
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹12,999</span>
                    <span className="text-gray-500 mt-2 ml-1">/ person</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">All inclusive</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Transportation from Haridwar to Gaurikund and back</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>2 nights accommodation (1 in Kedarnath, 1 in Gaurikund)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Breakfast and dinner included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Experienced guide for the trek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Medical and safety equipment</span>
                  </li>
                </ul>
                <button className="w-full bg-slate-600 hover:bg-slate-700 text-white py-3 rounded-lg transition duration-300">
                  Book Package
                </button>
              </div>
            </div>
            
            {/* Package 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="bg-indigo-600 text-white py-2 text-center font-bold">
                HELICOPTER PACKAGE
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">2-Day Kedarnath Helicopter Package</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Luxury helicopter service with premium accommodations and guided temple visit
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹19,999</span>
                    <span className="text-gray-500 mt-2 ml-1">/ person</span>
                  </div>
                  <p className="text-center text-sm text-gray-500">All inclusive</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Transportation from Dehradun to helipad and back</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Helicopter ride to Kedarnath (both ways)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>1 night premium accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All meals included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>VIP darshan arrangement</span>
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition duration-300">
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
                <h3 className="text-xl font-bold text-center mb-4">Custom Kedarnath Journey</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Design your own pilgrimage with flexible transportation and accommodation options
                </p>
                <div className="mb-6">
                  <div className="flex justify-center">
                    <span className="text-3xl font-bold">₹9,999</span>
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
                    <span>Choice of transportation (road, trek, helicopter)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Accommodation per your preference</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Optional guide and porter services</span>
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