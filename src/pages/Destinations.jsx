import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania'];

  const destinations = [
    {
      name: 'Bali, Indonesia',
      region: 'Asia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Discover the enchanting island of Bali with its stunning beaches, vibrant culture, and lush landscapes.',
      highlights: ['Ancient Temples', 'Rice Terraces', 'Sunset Beach Clubs', 'Traditional Markets'],
      activities: ['Surfing', 'Temple Tours', 'Cooking Classes', 'Spa Treatments'],
      bestTime: 'April to October',
      price: 'From $1,299',
      rating: 4.8,
      reviews: 328
    },
    {
      name: 'Santorini, Greece',
      region: 'Europe',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80',
      description: 'Experience the magic of Santorini with its iconic white buildings, stunning sunsets, and crystal-clear waters.',
      highlights: ['Caldera Views', 'Blue Domed Churches', 'Volcanic Beaches', 'Wine Vineyards'],
      activities: ['Sunset Cruises', 'Wine Tasting', 'Photography Tours', 'Island Hopping'],
      bestTime: 'June to September',
      price: 'From $1,899',
      rating: 4.9,
      reviews: 456
    },
    {
      name: 'Kyoto, Japan',
      region: 'Asia',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Step back in time in Kyoto, where ancient traditions meet modern Japanese culture.',
      highlights: ['Historic Temples', 'Bamboo Forest', 'Geisha District', 'Imperial Palace'],
      activities: ['Tea Ceremonies', 'Temple Tours', 'Kimono Experience', 'Garden Visits'],
      bestTime: 'March to May and October to November',
      price: 'From $2,199',
      rating: 4.7,
      reviews: 289
    },
    {
      name: 'Machu Picchu, Peru',
      region: 'Americas',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1519&q=80',
      description: 'Explore the mystical ruins of the ancient Incan civilization set high in the Andes Mountains.',
      highlights: ['Inca Trail', 'Ancient Ruins', 'Mountain Views', 'Local Culture'],
      activities: ['Hiking', 'Archaeological Tours', 'Train Journey', 'Cultural Experiences'],
      bestTime: 'May to October',
      price: 'From $2,499',
      rating: 4.9,
      reviews: 512
    },
    {
      name: 'Safari, Tanzania',
      region: 'Africa',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Witness the incredible wildlife and natural beauty of Tanzania\'s national parks.',
      highlights: ['Serengeti', 'Ngorongoro Crater', 'Wildlife Viewing', 'Maasai Culture'],
      activities: ['Game Drives', 'Hot Air Balloon Safaris', 'Cultural Visits', 'Photography'],
      bestTime: 'June to October',
      price: 'From $3,999',
      rating: 4.8,
      reviews: 234
    },
    {
      name: 'Great Barrier Reef, Australia',
      region: 'Oceania',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Dive into the world\'s largest coral reef system and discover incredible marine life.',
      highlights: ['Coral Gardens', 'Marine Life', 'Island Resorts', 'Sailing'],
      activities: ['Snorkeling', 'Scuba Diving', 'Island Tours', 'Scenic Flights'],
      bestTime: 'June to October',
      price: 'From $2,799',
      rating: 4.7,
      reviews: 378
    }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesRegion = selectedRegion === 'All' || destination.region === selectedRegion;
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Discover Your Next Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Explore our handpicked collection of extraordinary destinations around the world
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
              />
              <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  selectedRegion === region
                    ? 'bg-[#ff5722] text-white'
                    : 'bg-white text-gray-600 hover:bg-[#ff5722] hover:text-white'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-white font-medium">{destination.rating}</span>
                    <span className="text-white/70 text-sm ml-1">({destination.reviews})</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                    <span className="text-[#ff5722] font-semibold">{destination.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-[#ff5722] mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best Time: {destination.bestTime}
                    </div>
                    <span className="text-[#1e40af]">{destination.region}</span>
                  </div>
                  
                  <button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-semibold py-3 px-6 rounded-xl transition duration-300 flex items-center justify-center group">
                    Explore More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e40af] mb-4">Travel Tips & Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to know to make your journey memorable</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Best Time to Visit',
                description: 'Learn about the perfect seasons to visit each destination',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Local Customs',
                description: 'Understand and respect local traditions and customs',
                icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
              },
              {
                title: 'Travel Documents',
                description: 'Essential documents and visas you need for your trip',
                icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition duration-300"
              >
                <div className="w-12 h-12 bg-[#ff5722] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tip.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1e40af] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#1e40af] mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e40af] to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us help you plan the perfect trip tailored to your preferences
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white hover:bg-[#ff5722] text-[#1e40af] hover:text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Contact Us Now
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations; 