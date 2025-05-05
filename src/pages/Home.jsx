import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCar, FaBus, FaShuttleVan, FaPercent, FaRegCalendarAlt, FaMapMarkedAlt, FaUsers } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Pilgrim',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      quote: 'ANT Travels made our Char Dham journey comfortable and spiritually fulfilling. Their service was exceptional!'
    },
    {
      name: 'Sunita Sharma',
      role: 'Family Traveler',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      quote: 'The best travel agency for Char Dham Yatra. Their vehicles and staff were excellent throughout our pilgrimage.'
    },
    {
      name: 'Amit Patel',
      role: 'Group Organizer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      quote: 'Our group of 25 pilgrims had a seamless experience thanks to ANT Travels\' well-maintained buses and professional drivers.'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Image Background - Even Smaller Height */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Image Background with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/bg-image.jpg" 
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
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Decorative Line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isLoaded ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-1 bg-[#ff5722] mx-auto rounded-full"
            />

            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[#ff5722] text-base md:text-lg font-medium tracking-wide uppercase"
              >
                WELCOME TO ANT TRAVELS
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
              >
                Char Dham Yatra
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block text-[#ff5722] mt-1 md:mt-2 relative"
                >
                  Transportation Services
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: isLoaded ? "100%" : 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="absolute -bottom-1 left-0 h-1 bg-white/30 rounded-full"
                  />
                </motion.span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4 leading-relaxed"
            >
              Reliable and comfortable transportation for your sacred journey to 
              Badrinath, Kedarnath, Gangotri, and Yamunotri.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-4 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ff7043' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-[#ff5722] text-white text-base font-medium rounded-full shadow-lg hover:shadow-[#ff5722]/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Your Vehicle</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7043] to-[#ff5722] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-20 h-10 bg-white/10 blur-xl transform rotate-45 translate-x-20 translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-transparent text-white text-base font-medium rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                View Services
              </motion.button>
            </motion.div>
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
                features: ["Toyota Fortuner", "Mahindra Scorpio", "Tata Safari", "MG Gloster", "Toyota Innova Crysta"],
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
      
      {/* Char Dham Destinations Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#ff5722] font-semibold text-lg tracking-wider mb-4 block">
              SACRED DESTINATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-6">
              The Four Divine Abodes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the holy shrines of Char Dham, the most sacred pilgrimage circuit in the Himalayas
            </p>
          </motion.div>

          {/* Alternating cards for destinations */}
          <div className="space-y-16 md:space-y-32">
            {/* First destination - Badrinath */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                {/* Content - Left */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-3">Badrinath</h3>
                  <div className="h-1 w-16 bg-amber-500 mb-6 rounded-full"></div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Chamoli District, Uttarakhand</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Elevation: 3,300 meters</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Dedicated to Lord Vishnu, Badrinath is one of the holiest Hindu temples. Located in the Garhwal hills along the banks of the Alaknanda River, this sacred site is surrounded by breathtaking mountain scenery.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Temple open from May to October</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Famous for its hot springs</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ancient architecture</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Spectacular Himalayan views</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/badrinath"
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition duration-300 group"
                  >
                    Explore Badrinath
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Image - Right */}
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src="/badrinath.jpg" 
                      alt="Badrinath Temple"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-gradient-to-r from-amber-600 to-amber-500 text-white py-2 px-4 rounded-tr-lg z-10">
                    <span className="font-medium">Lord Vishnu</span>
                  </div>
                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Second destination - Kedarnath */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex flex-row-reverse">
                {/* Content - Right */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-3">Kedarnath</h3>
                  <div className="h-1 w-16 bg-amber-500 mb-6 rounded-full"></div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Rudraprayag District, Uttarakhand</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Elevation: 3,583 meters</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    One of the twelve Jyotirlingas of Lord Shiva, Kedarnath is nestled in the Garhwal Himalayan range. The temple is only accessible by a 16 km trek from Gaurikund and remains closed during winter due to heavy snowfall.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>6-month opening period</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Helicopter services available</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ancient stone temple</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Mandakini River origin</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/kedarnath"
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition duration-300 group"
                  >
                    Explore Kedarnath
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Image - Left */}
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src="/chardham/chardham-banner.jpg"
                      alt="Kedarnath Temple"
                      className="w-full h-96 object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">Char Dham 2024</h3>
                    <p className="text-white/90">Season started on May 1st</p>
                    <div className="flex items-center mt-4">
                      <svg className="w-5 h-5 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white font-medium">Book early for best availability</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Third destination - Gangotri */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                {/* Content - Left */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-3">Gangotri</h3>
                  <div className="h-1 w-16 bg-amber-500 mb-6 rounded-full"></div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Uttarkashi District, Uttarakhand</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Elevation: 3,100 meters</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Gangotri is the origin of the River Ganges and seat of the goddess Ganga. The actual source of the river is at Gaumukh, the snout of the Gangotri Glacier, about 19 km further uphill from Gangotri.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sacred river origin</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Beautiful temple architecture</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Surrounded by pine forests</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Panoramic mountain views</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/gangotri"
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition duration-300 group"
                  >
                    Explore Gangotri
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Image - Right */}
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src="/gangatri.jpg" 
                      alt="Gangotri Temple"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-gradient-to-r from-amber-600 to-amber-500 text-white py-2 px-4 rounded-tr-lg z-10">
                    <span className="font-medium">Goddess Ganga</span>
                  </div>
                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Fourth destination - Yamunotri */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex flex-row-reverse">
                {/* Content - Right */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1e40af] mb-3">Yamunotri</h3>
                  <div className="h-1 w-16 bg-amber-500 mb-6 rounded-full"></div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Uttarkashi District, Uttarakhand</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Elevation: 3,293 meters</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The source of the Yamuna River and the seat of the goddess Yamuna. The temple is situated close to the hot water springs and represents the starting point of the Char Dham Yatra.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Natural hot springs</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Surya Kund</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Divya Shila worship</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Challenging trek routes</span>
                    </div>
                  </div>
                  
                  <Link
                    to="/yamunotri"
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition duration-300 group"
                  >
                    Explore Yamunotri
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Image - Left */}
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src="/Yamunotri.jpg" 
                      alt="Yamunotri Temple"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-gradient-to-r from-amber-600 to-amber-500 text-white py-2 px-4 rounded-tr-lg z-10">
                    <span className="font-medium">Goddess Yamuna</span>
                  </div>
                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#ff5722] font-semibold text-lg tracking-wider mb-4 block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Travel Worry-Free with ANT Travels
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our specialized Char Dham transportation services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mountain-Experienced Drivers',
                description: 'Our drivers have years of experience navigating the challenging Himalayan terrain and are familiar with all routes to Char Dham.',
                icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
              },
              {
                title: 'Well-Maintained Vehicles',
                description: 'All our vehicles undergo rigorous safety checks and are specially equipped for mountain travel with proper maintenance.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
              {
                title: '24/7 Support Team',
                description: 'Our dedicated support team is available round-the-clock to assist with any issues during your pilgrimage journey.',
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
              },
              {
                title: 'Flexible Booking Options',
                description: 'Choose from various vehicle types and customize your itinerary based on your group size and preferences.',
                icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
              },
              {
                title: 'Local Knowledge',
                description: 'Benefit from our deep understanding of local conditions, best stop points, and accommodation options throughout the route.',
                icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
              },
              {
                title: 'Pilgrim-Focused Service',
                description: 'Our services are specially designed considering the needs and comfort of pilgrims undertaking this sacred journey.',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition duration-300 group"
              >
                <div className="w-16 h-16 bg-[#1e40af] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#ff5722] font-semibold text-lg tracking-wider mb-4 block">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              What Our Pilgrims Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from pilgrims who experienced our Char Dham Yatra transportation services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Family Group of 6',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                quote: 'The vehicle provided by ANT Travels for our Char Dham journey was exceptional. The driver was extremely skilled on mountain roads and very courteous. Will definitely recommend!'
              },
              {
                name: 'Sunita Sharma',
                role: 'Senior Pilgrim Group',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                quote: 'As senior citizens, we were concerned about the difficult journey, but ANT Travels\' comfortable tempo traveller and caring staff made our pilgrimage smooth and memorable.'
              },
              {
                name: 'Amit Patel',
                role: 'Corporate Group Organizer',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                quote: 'Organized a Char Dham trip for 40 employees. ANT Travels provided an excellent luxury bus with all amenities and their logistics management was flawless.'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-[#1e40af]">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#ff5722] font-semibold text-lg tracking-wider mb-4 block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Common Questions About Char Dham Travel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to the most frequently asked questions about our transportation services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                question: "What is the best time to undertake Char Dham Yatra?",
                answer: "The best time for Char Dham Yatra is from May to June and September to October. The shrines remain closed during winter (November to April) due to heavy snowfall. May 1st marks the traditional beginning of the Yatra season when the temples reopen."
              },
              {
                question: "Do you provide accommodation during the journey?",
                answer: "While our primary service is transportation, we can arrange accommodation packages at hotels, guesthouses, and dharamshalas at all major stops along the Char Dham route. Just let us know your preferences during booking."
              },
              {
                question: "What types of vehicles do you offer for Char Dham Yatra?",
                answer: "We offer a variety of vehicles including SUVs (Toyota Innova, Mahindra Scorpio), Tempo Travellers (9-14 seater), Mini Buses (20-30 seater), and Luxury Buses (35-45 seater) depending on your group size and comfort requirements."
              },
              {
                question: "Are your vehicles suitable for the mountain terrain?",
                answer: "Yes, all our vehicles are specially maintained for mountain travel with powerful engines, good ground clearance, and safety features. They undergo rigorous checks before each journey to ensure reliability on challenging mountain roads."
              },
              {
                question: "What is included in your transportation packages?",
                answer: "Our basic packages include the vehicle with an experienced driver, fuel costs, all taxes and permits, driver allowances, and 24/7 customer support. Premium packages may include additional amenities, refreshments, and onboard facilities."
              },
              {
                question: "How do I book a vehicle for Char Dham Yatra?",
                answer: "You can book through our website by filling the inquiry form, calling our customer service number, or visiting our office. We recommend booking at least 1-2 months in advance during peak season (May-June) to ensure availability."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Cancellations made 30+ days before departure receive a 90% refund, 15-29 days before receive a 70% refund, and 7-14 days before receive a 50% refund. Cancellations less than 7 days before departure are non-refundable."
              },
              {
                question: "Do you provide assistance if the vehicle breaks down?",
                answer: "Yes, we have a network of service points along the Char Dham route. In case of any breakdown, we provide immediate assistance and arrange for an alternative vehicle with minimal delay to ensure your journey continues smoothly."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold text-[#1e40af] mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Have more questions? Our team is here to assist you with any inquiries about Char Dham transportation.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Contact Our Support Team
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-[#1e40af] to-[#0f2d6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Begin Your Sacred Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                The Char Dham Yatra season has begun! Book your transportation now to secure the best vehicles and experienced drivers for your pilgrimage.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#ff5722] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#e64a19] transition duration-300"
                >
                  Book Transportation
                </motion.button>
                <Link
                  to="/contact-us"
                  className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/30 hover:border-white/70 hover:bg-white/10 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
              <img
                src="/chardham/chardham-banner.jpg"
                alt="Kedarnath Temple"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Char Dham 2024</h3>
                <p className="text-white/90">Season started on May 1st</p>
                <div className="flex items-center mt-4">
                  <svg className="w-5 h-5 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white font-medium">Book early for best availability</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 