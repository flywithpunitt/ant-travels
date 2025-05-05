import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { FaCar, FaBus, FaShuttleVan, FaUsers, FaSnowflake, FaWifi, FaTv, FaChair, FaTemperatureHigh, FaSuitcase } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Vehicles = () => {
  const { type } = useParams();

  const vehicleData = {
    cars: {
      title: "Premium SUVs",
      description: "Our premium SUVs are perfect for small groups and families undertaking the Char Dham Yatra. These vehicles offer comfort, safety, and excellent performance on mountain roads.",
      vehicles: [
        {
          name: "Toyota Fortuner",
          images: ["/cars/fortuner.jpg"],
          features: [
            "7 Seater",
            "Powerful Engine",
            "High Ground Clearance",
            "Comfortable Seating",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹15,000 per day",
          description: "The Toyota Fortuner is a premium SUV perfect for mountain travel with its powerful engine and high ground clearance."
        },
        {
          name: "Mahindra Scorpio",
          images: ["/cars/scorpio.jpg"],
          features: [
            "7 Seater",
            "Powerful Engine",
            "High Ground Clearance",
            "Comfortable Seating",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹12,000 per day",
          description: "The Mahindra Scorpio offers excellent value with its robust build and comfortable interior."
        },
        {
          name: "Toyota Innova Crysta",
          images: ["/cars/innova.jpg"],
          features: [
            "7 Seater",
            "Powerful Engine",
            "High Ground Clearance",
            "Comfortable Seating",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹14,000 per day",
          description: "The Toyota Innova Crysta is known for its premium comfort and reliability."
        },
        {
          name: "Tata Safari",
          images: ["/cars/tatasafari.jpg"],
          features: [
            "7 Seater",
            "Diesel Engine",
            "Spacious Interior",
            "Modern Safety Features",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹13,000 per day",
          description: "Tata Safari is a robust SUV with a spacious interior, ideal for family trips in the mountains."
        },
        {
          name: "MG Gloster",
          images: ["/cars/mg-gloster.jpg"],
          features: [
            "7 Seater",
            "Luxury Interior",
            "Advanced Safety",
            "Powerful Turbo Engine",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Leather Seats",
            "Luggage Carrier"
          ],
          price: "₹16,000 per day",
          description: "MG Gloster offers a luxury ride with advanced features and comfort for long journeys."
        },
        {
          name: "Swift Dzire",
          images: ["/cars/carsswift.jpg"],
          features: [
            "4 Seater",
            "Compact Sedan",
            "Fuel Efficient",
            "Comfortable Ride",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹8,000 per day",
          description: "A compact and fuel-efficient sedan, perfect for couples or small families."
        },
        {
          name: "Tata Sumo",
          images: ["/cars/ttttttttttttttttttt1.jpg"],
          features: [
            "7 Seater",
            "Rugged Build",
            "High Ground Clearance",
            "Spacious Interior",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹10,000 per day",
          description: "A rugged and reliable SUV, ideal for hilly terrain and group travel."
        },
        {
          name: "Maruti Ertiga",
          images: ["/cars/carsswift.jpg"],
          features: [
            "7 Seater",
            "MPV",
            "Fuel Efficient",
            "Comfortable Ride",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹11,000 per day",
          description: "A popular MPV for families and small groups, known for comfort and efficiency."
        },
        {
          name: "Toyota Etios",
          images: ["/cars/carsswift.jpg"],
          features: [
            "4 Seater",
            "Sedan",
            "Spacious Boot",
            "Smooth Ride",
            "Fuel Efficient"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹9,000 per day",
          description: "A reliable sedan, perfect for couples or small families on pilgrimage."
        },
        {
          name: "Mahindra Bolero",
          images: ["/cars/ttttttttttttttttttt1.jpg"],
          features: [
            "7 Seater",
            "Rugged Build",
            "High Ground Clearance",
            "Spacious Interior",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹10,500 per day",
          description: "A tough and reliable SUV, ideal for hilly terrain and group travel."
        }
      ]
    },
    vans: {
      title: "Tempo Travellers",
      description: "Our Tempo Travellers are ideal for medium-sized groups, offering comfort and ample space for both passengers and luggage.",
      vehicles: [
        {
          name: "Force Tempo Traveller 12+1",
          images: ["/vans/tttt7.jpg"],
          features: [
            "13 Seater",
            "Spacious Interior",
            "Luggage Space",
            "Comfortable Seating",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹20,000 per day",
          description: "Perfect for small groups with comfortable seating and ample luggage space."
        },
        {
          name: "Force Tempo Traveller 14+1",
          images: ["/vans/tttttt5.jpg"],
          features: [
            "15 Seater",
            "Spacious Interior",
            "Luggage Space",
            "Comfortable Seating",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹22,000 per day",
          description: "Ideal for medium-sized groups with extra seating capacity."
        },
        {
          name: "Tempo Traveller Maharaja",
          images: ["/vans/maharaja.jpg"],
          features: [
            "12 Seater",
            "Luxury Pushback Seats",
            "LED TV",
            "Spacious Interior",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "LED TV",
            "Luggage Carrier"
          ],
          price: "₹24,000 per day",
          description: "Maharaja variant offers luxury seating and entertainment for a premium group experience."
        },
        {
          name: "Tempo Traveller Deluxe 17+1",
          images: ["/vans/deluxe17.jpg"],
          features: [
            "18 Seater",
            "Deluxe Interior",
            "Reclining Seats",
            "Luggage Space",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹26,000 per day",
          description: "Deluxe 17+1 is perfect for larger groups seeking comfort and space."
        },
        {
          name: "Tempo Traveller 9+1",
          images: ["/vans/tttt7.jpg"],
          features: [
            "10 Seater",
            "Compact Size",
            "Comfortable Ride",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹18,000 per day",
          description: "A compact tempo traveller, perfect for small groups and families."
        },
        {
          name: "Tempo Traveller 15+1",
          images: ["/vans/tttttt5.jpg"],
          features: [
            "16 Seater",
            "Spacious Interior",
            "Reclining Seats",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹23,000 per day",
          description: "A larger tempo traveller for bigger groups, with extra comfort and space."
        },
        {
          name: "Force Urbania",
          images: ["/vans/tttt7.jpg"],
          features: [
            "17 Seater",
            "Modern Design",
            "Spacious Interior",
            "Comfortable Ride",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹27,000 per day",
          description: "A new-age van for large groups, offering comfort and style."
        },
        {
          name: "Traveller Executive 12+1",
          images: ["/vans/tttt7.jpg"],
          features: [
            "13 Seater",
            "Executive Interior",
            "Reclining Seats",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹21,000 per day",
          description: "Executive variant for business or premium group travel."
        },
        {
          name: "Traveller Deluxe 17+1",
          images: ["/vans/tttttt5.jpg"],
          features: [
            "18 Seater",
            "Deluxe Interior",
            "Reclining Seats",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats"
          ],
          price: "₹26,500 per day",
          description: "A deluxe van for larger groups seeking extra comfort and space."
        }
      ]
    },
    buses: {
      title: "Luxury Buses",
      description: "Our luxury buses are perfect for large groups, offering premium comfort and amenities for a memorable journey.",
      vehicles: [
        {
          name: "AC Deluxe Bus 21 Seater",
          images: ["/buses/tant_bus_-2.jpg"],
          features: [
            "21 Seater (2+1)",
            "Spacious Interior",
            "Luggage Space",
            "Comfortable Seating",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier",
            "Reading Lights"
          ],
          price: "₹30,000 per day",
          description: "Premium comfort with 2+1 seating arrangement for maximum space."
        },
        {
          name: "AC Deluxe Bus 35 Seater",
          images: ["/buses/tt3.jpg"],
          features: [
            "35 Seater (2+2)",
            "Spacious Interior",
            "Luggage Space",
            "Comfortable Seating",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier",
            "Reading Lights"
          ],
          price: "₹35,000 per day",
          description: "Perfect for large groups with comfortable 2+2 seating arrangement."
        },
        {
          name: "AC Deluxe Bus 27 Seater",
          images: ["/buses/tttttt6.jpg"],
          features: [
            "27 Seater (2+2)",
            "Spacious Interior",
            "Luggage Space",
            "Comfortable Seating",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier",
            "Reading Lights"
          ],
          price: "₹32,000 per day",
          description: "A great option for mid-sized groups, balancing comfort and capacity."
        },
        {
          name: "AC Deluxe Bus 41 Seater",
          images: ["/buses/ttttttttttt4.jpg"],
          features: [
            "41 Seater (2+2)",
            "Spacious Interior",
            "Luggage Space",
            "Comfortable Seating",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier",
            "Reading Lights"
          ],
          price: "₹42,000 per day",
          description: "Ideal for very large groups, this bus offers maximum capacity and comfort."
        },
        {
          name: "AC Seater Sleeper Bus (2+2)",
          images: ["/buses/ttttttttttttttttttt1.jpg"],
          features: [
            "Seater + Sleeper",
            "41 Seater (2+2)",
            "Reclining Seats",
            "Sleeper Berths",
            "Onboard Washroom"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier",
            "Reading Lights",
            "Onboard Washroom"
          ],
          price: "₹45,000 per day",
          description: "Seater-sleeper configuration for overnight journeys and extra comfort."
        },
        {
          name: "AC Luxury Bus 25 Seater (2+1)",
          images: ["/buses/luxury25.jpg"],
          features: [
            "25 Seater (2+1)",
            "Luxury Interior",
            "Reclining Seats",
            "Luggage Space",
            "Onboard Entertainment"
          ],
          amenities: [
            "AC",
            "Music System",
            "LED TV",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹34,000 per day",
          description: "A luxury option for mid-sized groups, with entertainment and comfort."
        },
        {
          name: "AC Luxury Bus 31 Seater (2+2)",
          images: ["/buses/luxury31.jpg"],
          features: [
            "31 Seater (2+2)",
            "Luxury Interior",
            "Reclining Seats",
            "Luggage Space",
            "Onboard Entertainment"
          ],
          amenities: [
            "AC",
            "Music System",
            "LED TV",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹36,000 per day",
          description: "A premium bus for larger groups, with luxury seating and entertainment."
        },
        {
          name: "Mini Bus 20 Seater",
          images: ["/buses/tt3.jpg"],
          features: [
            "20 Seater (2+2)",
            "Compact Size",
            "Ideal for Small Groups",
            "Comfortable Seating",
            "Luggage Space"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹28,000 per day",
          description: "A great option for small groups who want the comfort of a bus in a more compact size."
        },
        {
          name: "Standard Bus 30 Seater",
          images: ["/buses/ttttt6.jpg"],
          features: [
            "30 Seater (2+2)",
            "Spacious Interior",
            "Reclining Seats",
            "Luggage Space",
            "Good Visibility"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹31,000 per day",
          description: "A reliable and comfortable bus for mid-sized groups, perfect for long journeys."
        },
        {
          name: "Tourist Bus 35 Seater",
          images: ["/buses/tttttttttttttttt1.jpg"],
          features: [
            "35 Seater (2+2)",
            "Tourist Class",
            "Reclining Seats",
            "Luggage Space",
            "Onboard Entertainment"
          ],
          amenities: [
            "AC",
            "Music System",
            "LED TV",
            "Comfortable Seats",
            "Luggage Carrier"
          ],
          price: "₹37,000 per day",
          description: "Tourist class bus with entertainment and comfort for group travel."
        },
        {
          name: "Executive Bus 40 Seater",
          images: ["/buses/ttttttttttt4.jpg"],
          features: [
            "40 Seater (2+2)",
            "Executive Interior",
            "Reclining Seats",
            "Luggage Space",
            "Onboard Washroom"
          ],
          amenities: [
            "AC",
            "Music System",
            "Comfortable Seats",
            "Luggage Carrier",
            "Onboard Washroom"
          ],
          price: "₹43,000 per day",
          description: "Executive bus with premium amenities and onboard washroom for long journeys."
        }
      ]
    }
  };

  const currentType = vehicleData[type] || vehicleData.cars;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e40af] to-[#0f2d6e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentType.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {currentType.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {currentType.vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  {/* Image Slider */}
                  <div className="md:w-1/2">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      navigation
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 3500, disableOnInteraction: false }}
                      className="h-64 md:h-full"
                    >
                      {vehicle.images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img
                            src={img}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-[#1e40af] mb-4">{vehicle.name}</h2>
                    <p className="text-gray-600 mb-6">{vehicle.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {vehicle.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                      <div className="flex flex-wrap gap-4">
                        {vehicle.amenities.map((amenity, i) => (
                          <div key={i} className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 text-[#ff5722] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-[#1e40af]">{vehicle.price}</div>
                      <Link
                        to={`/booking?vehicle=${encodeURIComponent(vehicle.name)}`}
                        className="px-6 py-3 bg-[#ff5722] text-white font-bold rounded-full hover:bg-[#e64a19] transition duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1e40af] to-[#0f2d6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Vehicle?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us now to check availability and get the best rates for your Char Dham Yatra
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#ff5722] text-white font-bold rounded-full hover:bg-[#e64a19] transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/booking"
              className="px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/30 hover:border-white/70 hover:bg-white/10 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicles; 