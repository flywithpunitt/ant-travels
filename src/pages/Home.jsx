import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Travel Enthusiast',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      quote: 'ANT Travels made our honeymoon unforgettable. Every detail was perfect!'
    },
    {
      name: 'Michael Chen',
      role: 'Adventure Seeker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      quote: 'The best travel agency I\'ve ever worked with. Their expertise is unmatched.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Family Traveler',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      quote: 'They planned the perfect family vacation that everyone enjoyed.'
    }
  ];

  const featuredDestinations = [
    {
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 'From $1,299',
      duration: '7 Days'
    },
    {
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 'From $1,599',
      duration: '5 Days'
    },
    {
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      price: 'From $1,899',
      duration: '8 Days'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Image Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Background with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1502726299822-6f583f972e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Tropical Paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          
          {/* Animated Overlay Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full bg-[#ff5722]/10 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Discover Your Next
              <span className="block text-[#ff5722]">
                Adventure
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore breathtaking destinations and create unforgettable memories with our expertly curated travel experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#ff5722] text-white font-bold rounded-full shadow-lg hover:bg-[#ff5722]/90 transition duration-300"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/20 hover:bg-white/20 transition duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Destinations" },
              { number: "10k+", label: "Happy Travelers" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition duration-300"
              >
                <h3 className="text-3xl font-bold text-white">{stat.number}</h3>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Travel Inspiration Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff5722]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e40af]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#ff5722] font-semibold text-lg tracking-wider mb-4 block">
              GET INSPIRED
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e40af] mb-6">
              Travel Inspiration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover breathtaking destinations and unique experiences through our curated collection of travel moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunset in Santorini",
                location: "Greece",
                views: "128K",
                thumbnail: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80",
                category: "Luxury Travel"
              },
              {
                title: "Adventure in Machu Picchu",
                location: "Peru",
                views: "95K",
                thumbnail: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1519&q=80",
                category: "Adventure"
              },
              {
                title: "Cherry Blossoms in Tokyo",
                location: "Japan",
                views: "156K",
                thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                category: "Cultural"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center text-white/80 text-sm mb-2">
                      <span className="bg-[#ff5722] px-3 py-1 rounded-full text-white">{video.category}</span>
                      <span className="ml-3 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {video.views}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
                    <div className="flex items-center text-white/80">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {video.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/inspiration"
              className="inline-flex items-center bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              View More Inspirations
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Travel Experiences & Packages */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Booking Information */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] mb-4 md:mb-6">Current Travel Deals</h3>
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      title: "Early Bird Summer Special",
                      discount: "25% OFF",
                      validity: "Book by May 31st",
                      description: "Get exclusive discounts on summer packages when you book early",
                      code: "SUMMER25"
                    },
                    {
                      title: "Family Package Deal",
                      discount: "Kids Stay Free",
                      validity: "Valid for July-August",
                      description: "Children under 12 stay free with two paying adults",
                      code: "FAMILY2024"
                    },
                    {
                      title: "Luxury Escape Package",
                      discount: "Complimentary Upgrades",
                      validity: "Limited Time Offer",
                      description: "Free room upgrades and spa credits at select resorts",
                      code: "LUXURY24"
                    }
                  ].map((deal, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-start p-4 md:p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl border border-gray-100">
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 mb-2">
                          <h4 className="text-base md:text-lg font-semibold text-gray-900">{deal.title}</h4>
                          <span className="inline-block md:ml-3 px-3 py-1 bg-[#ff5722] text-white text-sm font-medium rounded-full">
                            {deal.discount}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 mb-2">{deal.description}</p>
                        <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500 gap-2 md:gap-0">
                          <span className="md:mr-4">{deal.validity}</span>
                          <div className="flex items-center">
                            <span className="font-medium text-[#1e40af]">Code: {deal.code}</span>
                          </div>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 md:ml-4 w-full md:w-auto px-4 py-2 bg-[#1e40af] text-white rounded-full text-sm font-medium hover:bg-[#1e3a8a] transition duration-300">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] mb-4 md:mb-6">Upcoming Group Tours</h3>
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      destination: "European Heritage Tour",
                      date: "June 15-30, 2024",
                      spots: "4 spots left",
                      price: "$2,999",
                      highlights: ["10 cities", "Guided tours", "Luxury hotels"]
                    },
                    {
                      destination: "Asian Cultural Experience",
                      date: "July 10-25, 2024",
                      spots: "6 spots left",
                      price: "$3,499",
                      highlights: ["5 countries", "Local cuisine", "Traditional shows"]
                    },
                    {
                      destination: "African Safari Adventure",
                      date: "August 5-20, 2024",
                      spots: "Last 2 spots",
                      price: "$4,299",
                      highlights: ["Wildlife tours", "Luxury camps", "Local guides"]
                    }
                  ].map((tour, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-center p-4 md:p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl md:rounded-2xl border border-gray-100">
                      <div className="flex-1">
                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{tour.destination}</h4>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 text-sm text-gray-500 mb-3">
                          <span className="md:mr-4">{tour.date}</span>
                          <span className="text-[#ff5722] font-medium">{tour.spots}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {tour.highlights.map((highlight, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-center md:text-right">
                        <div className="text-xl md:text-2xl font-bold text-[#1e40af] mb-2">{tour.price}</div>
                        <button className="w-full md:w-auto px-4 py-2 bg-[#ff5722] text-white rounded-full text-sm font-medium hover:bg-[#e64a19] transition duration-300">
                          Reserve Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="mt-6 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 lg:sticky lg:top-24"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1e40af] mb-4 md:mb-6">Quick Booking</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent text-base">
                      <option>Select Destination</option>
                      <option>Bali, Indonesia</option>
                      <option>Santorini, Greece</option>
                      <option>Maldives</option>
                      <option>Swiss Alps</option>
                      <option>Tokyo, Japan</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                      <input type="date" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                      <input type="date" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Adults</label>
                        <input type="number" min="1" defaultValue="2" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Children</label>
                        <input type="number" min="0" defaultValue="0" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Package Type</label>
                    <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
                      <option>Select Package</option>
                      <option>Luxury Escape</option>
                      <option>Adventure Package</option>
                      <option>Cultural Experience</option>
                      <option>Family Holiday</option>
                      <option>Honeymoon Special</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation</label>
                    <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
                      <option>Select Accommodation</option>
                      <option>5-Star Hotel</option>
                      <option>Luxury Resort</option>
                      <option>Boutique Hotel</option>
                      <option>Private Villa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent">
                      <option>Select Budget</option>
                      <option>$1,000 - $2,000</option>
                      <option>$2,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>

                  <button className="w-full py-3 bg-[#ff5722] text-white rounded-xl font-medium hover:bg-[#e64a19] transition duration-300">
                    Check Availability
                  </button>

                  <div className="mt-6 p-4 bg-[#1e40af]/5 rounded-xl">
                    <h4 className="font-medium text-[#1e40af] mb-2">Special Request?</h4>
                    <textarea 
                      placeholder="Any special requirements..."
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                      rows="3"
                    ></textarea>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-[#1e40af] mb-4">Need Help?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#ff5722] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-600">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#ff5722] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">support@anttravel.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#ff5722] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">24/7 Support Available</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-[#ff5722]/5 rounded-xl">
                    <h4 className="font-medium text-[#ff5722] mb-2">Travel Insurance</h4>
                    <p className="text-sm text-gray-600 mb-3">Protect your journey with our comprehensive travel insurance</p>
                    <label className="flex items-center space-x-2 text-sm text-gray-600">
                      <input type="checkbox" className="rounded text-[#ff5722] focus:ring-[#ff5722]" />
                      <span>Add travel insurance to my booking</span>
                    </label>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-[#1e40af] mb-3">Payment Methods</h4>
                    <div className="flex flex-wrap gap-4">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-8" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png" alt="PayPal" className="h-8" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations with Enhanced Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f4f4f4] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#ff5722] font-semibold text-lg tracking-wider mb-4 block">
              EXPLORE THE WORLD
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e40af] mb-6">
              Featured Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular travel packages and start planning your next adventure
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bali Paradise',
                price: '$1,299',
                duration: '7 Days',
                rating: '4.9',
                reviews: '128',
                image: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
              },
              {
                title: 'Santorini Escape',
                price: '$1,599',
                duration: '5 Days',
                rating: '4.8',
                reviews: '96',
                image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80',
              },
              {
                title: 'Maldives Luxury',
                price: '$2,499',
                duration: '10 Days',
                rating: '5.0',
                reviews: '156',
                image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80',
              },
            ].map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 flex items-center">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white ml-1 font-semibold">{destination.rating}</span>
                  <span className="text-white/70 ml-1 text-sm">({destination.reviews})</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-3xl font-bold text-white mb-4">{destination.title}</h3>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white">
                      <span className="text-2xl font-bold text-[#ff5722]">{destination.price}</span>
                      <span className="text-white/70 ml-2">/ {destination.duration}</span>
                    </div>
                    <Link
                      to="/destinations"
                      className="group bg-white hover:bg-[#ff5722] text-[#ff5722] hover:text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center"
                    >
                      View Details
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4 text-white/80">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Luxury Hotel
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Travel Collections Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#1e40af] via-[#0f2d6e] to-[#1e40af] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ff5722]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e40af]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-lg tracking-wider text-[#ff5722] mb-4">
              PREMIUM COLLECTIONS
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              Curated Travel Experiences
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover our handpicked selection of extraordinary journeys designed for the discerning traveler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Island Escapes',
                description: 'Experience paradise in our most exclusive island destinations',
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                price: 'From $3,999',
                duration: '7-14 Days',
                features: ['Private Villas', 'Gourmet Dining', 'Spa Retreats']
              },
              {
                title: 'Cultural Heritage Tours',
                description: 'Immerse yourself in ancient traditions and historical wonders',
                image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                price: 'From $2,999',
                duration: '10-15 Days',
                features: ['Expert Guides', 'Exclusive Access', 'Cultural Workshops']
              },
              {
                title: 'Adventure Expeditions',
                description: 'Challenge yourself with thrilling adventures in breathtaking landscapes',
                image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
                price: 'From $4,499',
                duration: '12-18 Days',
                features: ['Professional Guides', 'Premium Equipment', 'Safety First']
              }
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#ff5722] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {collection.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                  <p className="text-white/80 mb-4">{collection.description}</p>
                  <div className="flex items-center text-white/60 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{collection.duration}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {collection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-white/80">
                        <svg className="w-5 h-5 mr-2 text-[#ff5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/destinations"
                    className="inline-flex items-center text-[#ff5722] font-semibold group-hover:text-white transition duration-300"
                  >
                    Explore Collection
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/destinations"
              className="inline-flex items-center bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              View All Collections
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Why Choose ANT Travels
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium travel services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Travel Planning',
                description: 'Our experienced team creates personalized itineraries tailored to your preferences.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              },
              {
                title: 'Global Destinations',
                description: 'Access to exclusive locations and unique experiences around the world.',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: 'Best Value Guaranteed',
                description: 'Competitive prices with premium services and exclusive deals.',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#1e40af]/5 to-[#ff5722]/5 hover:from-[#1e40af]/10 hover:to-[#ff5722]/10 transition duration-300 group"
              >
                <div className="w-16 h-16 bg-[#ff5722] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition duration-300">
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
      <section className="py-20 bg-gradient-to-b from-[#f4f4f4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experiences
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Travel Enthusiast',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                quote: 'The best travel experience I\'ve ever had! Everything was perfectly organized.',
              },
              {
                name: 'Michael Chen',
                role: 'Adventure Seeker',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                quote: 'Incredible destinations and outstanding service. Will definitely travel with ANT again!',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Luxury Traveler',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                quote: 'Attention to detail and personalized service made our trip unforgettable.',
              },
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

      {/* Special Offers Section */}
      <section className="py-20 bg-[#1e40af] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Summer Vacation Deals
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book your summer getaway now and enjoy exclusive discounts on our most popular destinations.
              </p>
              <Link
                to="/destinations"
                className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 inline-block"
              >
                View Offers
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5722]/20 to-[#1e40af]/20 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Summer Vacation"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest travel deals and updates
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-6 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff5722] text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-[#ff5722] hover:bg-[#e64a19] text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Travel Blog Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Latest Travel Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover inspiring travel experiences and expert tips from our blog
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hidden Gems of Southeast Asia',
                excerpt: 'Explore the lesser-known destinations that will take your breath away.',
                image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                date: 'May 15, 2024',
                author: 'Travel Expert',
              },
              {
                title: 'Luxury Travel on a Budget',
                excerpt: 'Learn how to experience luxury travel without breaking the bank.',
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
                date: 'May 10, 2024',
                author: 'Budget Traveler',
              },
              {
                title: 'Sustainable Travel Guide',
                excerpt: 'Discover how to travel responsibly and make a positive impact.',
                image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
                date: 'May 5, 2024',
                author: 'Eco Traveler',
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e40af] mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="text-[#ff5722] font-semibold hover:text-[#e64a19] transition duration-300 inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Popular Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the most exciting activities at our destinations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Scuba Diving',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                description: 'Explore vibrant coral reefs and marine life',
              },
              {
                title: 'Hiking',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
                description: 'Discover breathtaking mountain trails',
              },
              {
                title: 'Cultural Tours',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
                description: 'Immerse in local traditions and heritage',
              },
              {
                title: 'Wildlife Safari',
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                description: 'Witness amazing wildlife in their natural habitat',
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#1e40af]/5 to-[#ff5722]/5 hover:from-[#1e40af]/10 hover:to-[#ff5722]/10 transition duration-300 group"
              >
                <div className="w-16 h-16 bg-[#ff5722] rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition duration-300">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activity.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e40af] mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-20 bg-gradient-to-b from-[#f4f4f4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e40af] mb-4">
              Expert Travel Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential advice to make your journey smooth and enjoyable
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Packing Smart',
                tips: [
                  'Roll clothes to save space',
                  'Use packing cubes for organization',
                  'Pack versatile clothing items',
                  'Don\'t forget essential documents',
                ],
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              },
              {
                title: 'Travel Safety',
                tips: [
                  'Keep copies of important documents',
                  'Stay aware of your surroundings',
                  'Use secure transportation',
                  'Keep emergency contacts handy',
                ],
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#ff5722] rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e40af]">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-[#ff5722] mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 