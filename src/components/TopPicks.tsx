// import { useState } from 'react';

const topPicksData = [
    {
      title: "Luxury Hair Spa",
      location: "Palazhi, Calicut",
      address: "Palazhi Road, Near City Center",
      distance: "7.5 km",
      duration: "30 mins",
      price: 675,
      rating: 4.5,
      time: "2 Hr",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80",
      services: ["Onsite", "Home Service", "Virtual"]
    },
    {
      title: "Elite Styling Studio",
      location: "Mavoor, Calicut",
      address: "Mavoor Road, Downtown",
      distance: "5.2 km",
      duration: "25 mins",
      price: 850,
      rating: 4.8,
      time: "1.5 Hr",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80",
      services: ["Onsite", "Home Service"]
    },
    {
      title: "Tranquil Beauty Center",
      location: "Beach Road, Calicut",
      address: "Beach Road, Sea View",
      distance: "10.1 km",
      duration: "40 mins",
      price: 550,
      rating: 4.3,
      time: "3 Hr",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80",
      services: ["Onsite", "Virtual"]
    },
    {
      title: "Stylish Cuts & Spa",
      location: "Thondayad, Calicut",
      address: "Thondayad Junction",
      distance: "3.8 km",
      duration: "20 mins",
      price: 725,
      rating: 4.6,
      time: "2.5 Hr",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80",
      services: ["Onsite", "Home Service", "Virtual"]
    },
    {
      title: "Modern Hair Lounge",
      location: "Nadakkavu, Calicut",
      address: "Nadakkavu Main Road",
      distance: "6.3 km",
      duration: "35 mins",
      price: 600,
      rating: 4.4,
      time: "1 Hr",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80",
      services: ["Onsite", "Home Service"]
    },
    {
      title: "Premium Salon & Spa",
      location: "Mankavu, Calicut",
      address: "Mankavu Junction",
      distance: "4.9 km",
      duration: "28 mins",
      price: 900,
      rating: 4.9,
      time: "2 Hr",
      image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80",
      services: ["Onsite", "Virtual"]
    }
  ];

const TopPicks = () => {
  return (
    <div className="lg:mx-10">
      <div className="p-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">Top Picks for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topPicksData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Left side - Image */}
                <div className="sm:w-1/3 h-48 sm:h-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Middle and Right Content - Stack on mobile, side by side on tablet+ */}
                <div className="flex flex-1 flex-col sm:flex-row">
                  {/* Middle - Content */}
                  <div className="flex-1 p-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.location}</p>
                      <p className="text-gray-500">{item.address}</p>
                      
                      <div className="flex items-center text-gray-500 mt-2">
                        <span>📍 {item.distance}</span>
                        <span className="mx-2">•</span>
                        <span>⏱ {item.duration}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.services.map((service, i) => (
                          <span key={i} className="bg-red-100 text-red-500 px-3 py-1 rounded text-sm">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="text-yellow-400 flex">
                          {"★★★★☆".split("").map((star, i) => (
                            <span key={i}>{star}</span>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-700">{item.rating}</span>
                      </div>
                      <div className="text-gray-600">⏰ {item.time}</div>
                    </div>
                  </div>
                  
                  {/* Right side - Price */}
                  <div className="p-4 flex sm:block items-center justify-between">
                    <div className="sm:text-right text-xl text-black-200">${item.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPicks;