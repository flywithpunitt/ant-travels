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
          name: "Tourist Bus 32 Seater",
          images: ["/buses/tant_bus_-2.jpg"],
          features: [
            "32 Seater (2+2)",
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
          name: "AC Deluxe Bus 40 Seater",
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


    </div>
  );
};

export default Vehicles; 