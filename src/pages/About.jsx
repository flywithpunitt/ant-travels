import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBusAlt, FaShuttleVan, FaCar, FaUserFriends, FaHandsHelping, FaPrayingHands } from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Pilgrims Served', value: '100K+' },
    { label: 'Vehicles in Fleet', value: '40+' },
    { label: 'Local Partners', value: '50+' }
  ];

  const values = [
    {
      title: 'Safe Pilgrimages',
      description: 'Your safety during the sacred journey is our top priority with experienced drivers and well-maintained vehicles.',
      icon: <FaUserFriends className="w-6 h-6 text-white" />
    },
    {
      title: 'Devotion & Respect',
      description: 'We honor the spiritual significance of Char Dham Yatra and ensure a respectful pilgrimage experience.',
      icon: <FaPrayingHands className="w-6 h-6 text-white" />
    },
    {
      title: 'Local Expertise',
      description: 'Our deep knowledge of Uttarakhand\'s terrain and culture enhances your divine journey.',
      icon: <FaHandsHelping className="w-6 h-6 text-white" />
    }
  ];

  const fleetHighlights = [
    {
      type: 'Luxury Buses',
      count: '20',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Modern air-conditioned buses with comfortable seating for group pilgrimages',
      icon: <FaBusAlt className="w-6 h-6 text-white" />
    },
    {
      type: 'Tempo Travellers',
      count: '10',
      image: 'https://images.unsplash.com/photo-1633114072501-389133a4f937?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Ideal for medium-sized groups with excellent maneuverability on mountain roads',
      icon: <FaShuttleVan className="w-6 h-6 text-white" />
    },
    {
      type: 'SUVs & Cars',
      count: '12',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      description: 'Comfortable vehicles for families and small groups seeking personalized journeys',
      icon: <FaCar className="w-6 h-6 text-white" />
    }
  ];

  const team = [
    {
      name: 'Amit Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      bio: '15 years of experience in Uttarakhand tourism and pilgrim services. Native to Haridwar with deep spiritual connections.'
    },
    {
      name: 'Neeraj Thakur',
      role: 'Fleet Operations Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      bio: 'Expert in mountain transport logistics with extensive knowledge of Char Dham routes and safety protocols.'
    },
    {
      name: 'Priya Negi',
      role: 'Pilgrimage Experience Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1461&q=80',
      bio: 'Passionate about creating meaningful spiritual journeys with attention to pilgrims\' comfort and needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1591018533800-dea2ed9a060d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="About ANT Travels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About ANT Travels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Your trusted partner for sacred Char Dham Yatra journeys since 2008
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                At ANT Travels, we believe that the sacred Char Dham Yatra is not just a pilgrimage but a transformative spiritual journey. Our mission is to provide safe, comfortable, and spiritually enriching transportation services that allow pilgrims to focus on their divine connection while we handle the logistics.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to preserving the sanctity of these holy sites while ensuring accessibility for all devotees, regardless of age or physical ability. Our comprehensive fleet of vehicles and knowledgeable team is dedicated to making your sacred journey memorable and hassle-free.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1591018547739-576586ca7a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Char Dham Journey"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              ANT Travels was founded in 2008 by Amit Sharma, a native of Haridwar with deep spiritual connections to the Char Dham temples. What began as a small fleet of three vehicles serving local pilgrims has grown into Uttarakhand's premier transportation service for the sacred Char Dham Yatra.
            </p>
            <p>
              Our journey started when Amit noticed many pilgrims struggling with unreliable transportation in the challenging mountain terrain. With a vision to provide safe and comfortable travel options, he invested in quality vehicles and hired experienced local drivers who knew the routes intimately.
            </p>
            <p>
              Over the years, we've expanded our fleet to include luxury buses, comfortable tempo travellers, and private cars, all specially equipped for mountain travel. As our reputation for reliability and service grew, so did our team of dedicated professionals who share our commitment to pilgrim safety and comfort.
            </p>
            <p>
              Today, ANT Travels is proud to have served over 100,000 pilgrims from across India and around the world, helping them complete their sacred journey to Badrinath, Kedarnath, Gangotri, and Yamunotri with peace of mind and spiritual fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our service to pilgrims
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, well-maintained vehicles for safe and comfortable pilgrimages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetHighlights.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{vehicle.type}</h3>
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                      {vehicle.icon}
                    </div>
                  </div>
                  <div className="text-amber-600 font-semibold mb-3">Fleet Size: {vehicle.count}</div>
                  <p className="text-gray-600">{vehicle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/chardham" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
              View our transportation packages
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to your sacred journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-amber-500 ring-offset-4"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-amber-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Pilgrims Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from those who've completed their Char Dham Yatra with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                from: "Delhi",
                quote: "The drivers' knowledge of the mountain roads made us feel safe throughout our Char Dham journey. Highly recommended!",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              },
              {
                name: "Sunita Patel",
                from: "Mumbai",
                quote: "Our family of 6 completed the Char Dham Yatra comfortably in their tempo traveller. The vehicle was perfect for the terrain.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"
              },
              {
                name: "Arjun Reddy",
                from: "Hyderabad",
                quote: "ANT Travels arranged our helicopter service to Kedarnath and ground transport for the rest. Seamless coordination!",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">from {testimonial.from}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Begin Your Sacred Journey?
            </h2>
            <p className="text-xl mb-8">
              Let us take care of your transportation while you focus on the spiritual experience
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-amber-600 font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Contact Our Team
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

export default About; 