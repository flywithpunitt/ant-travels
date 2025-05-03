import React from 'react';
import { motion } from 'framer-motion';
import { FaBus, FaCar, FaShuttleVan, FaMapMarkerAlt, FaCalendarAlt, FaUserCheck, FaPhoneAlt, FaRupeeSign, FaRoute, FaTemperatureHigh, FaQuestion } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CharDhamYatra = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1585202382723-4ce5ba170fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
            alt="Char Dham Temples" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Char Dham Yatra Transportation</h1>
            <p className="text-xl md:text-2xl mb-8">Safe and comfortable journeys to the sacred temples of Badrinath, Kedarnath, Gangotri, and Yamunotri</p>
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
              Book Your Journey Now
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Bus Transportation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaBus className="text-5xl text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Luxury Buses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Travel in comfort with our spacious luxury buses designed for group pilgrimages.
              Perfect for 25-40 passengers with ample luggage space.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="rounded-xl overflow-hidden shadow-xl"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Luxury Bus Exterior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Premium Volvo Bus</h3>
                    <p>Experience luxury travel with reclining seats and panoramic windows</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Luxury Bus Interior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Spacious Interiors</h3>
                    <p>Comfortable seating with ample legroom for a relaxing journey</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Mountain Road Journey" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Safe Mountain Travel</h3>
                    <p>Experienced drivers navigating mountain roads with precision</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Bus Features & Amenities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>25-40 comfortable reclining seats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Air conditioning with temperature control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Large panoramic windows for scenic views</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Entertainment system with devotional content</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ample luggage space for pilgrim belongings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Onboard restroom facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Experienced mountain drivers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>First aid kit and emergency equipment</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold mb-4">Starting at ₹2,500 per person/day</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition duration-300">
                  Inquire About Bus Charter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Car Transportation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaCar className="text-5xl text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Cars</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience personalized comfort with our premium car services.
              Ideal for families or small groups of 4-5 passengers seeking privacy and flexibility.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="rounded-xl overflow-hidden shadow-xl"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="SUV Exterior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Luxury SUVs</h3>
                    <p>Perfect for mountain terrain with spacious interiors and comfort</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Car Interior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Premium Interiors</h3>
                    <p>Plush seating with all modern amenities for a comfortable journey</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1626025222741-335e944559dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                    alt="Mountain Car Journey" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Personalized Experience</h3>
                    <p>Stop at scenic spots and customize your pilgrimage journey</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-red-50 rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-800">Car Features & Amenities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Comfortable seating for 4-5 passengers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Climate control air conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Premium audio system with Bluetooth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>USB charging ports for devices</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Sufficient luggage space in trunk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Bottled water and amenities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Experienced drivers familiar with mountain routes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>24/7 roadside assistance</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold mb-4">Starting at ₹4,500 per day</p>
                <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition duration-300">
                  Book Premium Car
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Van/Tempo Traveller Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaShuttleVan className="text-5xl text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tempo Travellers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The perfect middle ground for medium-sized groups of pilgrims.
              Our tempo travellers comfortably seat 9-14 passengers with ample space.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="rounded-xl overflow-hidden shadow-xl"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1605793375565-06ee6a611c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Tempo Traveller Exterior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Modern Tempo Travellers</h3>
                    <p>Spacious vehicles ideal for small-to-medium pilgrim groups</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                    alt="Tempo Traveller Interior" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Comfortable Interiors</h3>
                    <p>Well-designed seating with push-back functionality for comfort</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-[400px] md:h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Mountain Journey" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Group Travel Made Easy</h3>
                    <p>Stay together with your family or pilgrimage group throughout the journey</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-lg p-6 md:p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Tempo Traveller Features & Amenities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Spacious seating for 9-14 passengers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Push-back seats with excellent comfort</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Efficient air conditioning system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Audio system with devotional music</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Ample luggage storage capacity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Large windows for panoramic views</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Experienced mountain drivers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Complimentary bottled water</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold mb-4">Starting at ₹3,500 per day</p>
                <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg transition duration-300">
                  Book Tempo Traveller
                </button>
              </div>
            </div>
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