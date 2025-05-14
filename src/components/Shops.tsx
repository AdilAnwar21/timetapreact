import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopCards: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/shop/${id}`); // Navigate to shops/:id
  };

  
  const shops = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80',
      discount: '20% off',
      rating: 4.5,
      name: 'SHOP NAME',
      services: 'Hair Cutting, Hair Spa, Facial, Hair Coloring.....',
      location: 'PALAZHI, Calicut',
      distance: '1.75 km',
      time: '30 mins',
      status: 'Open',
      parking: 'Parking Available',
      id:1
    },
    {
      image: 'https://images.unsplash.com/photo-1516972810927-80185027ca84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80',
      discount: '20% off',
      rating: 4.5,
      name: 'SHOP NAME',
      services: 'Hair Cutting, Hair Spa, Facial, Hair Coloring.....',
      location: 'PALAZHI, Calicut',
      distance: '1.75 km',
      time: '30 mins',
      status: 'Closed',
      parking: 'Parking Available',
      id:2
    },
    {
        image: 'https://images.unsplash.com/photo-1516972810927-80185027ca84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80',
        discount: '20% off',
        rating: 4.5,
        name: 'SHOP NAME',
        services: 'Hair Cutting, Hair Spa, Facial, Hair Coloring.....',
        location: 'PALAZHI, Calicut',
        distance: '1.75 km',
        time: '30 mins',
        status: 'Closed',
        parking: 'Parking Available',
        id:3
      },
      {
        image: 'https://images.unsplash.com/photo-1516972810927-80185027ca84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80',
        discount: '20% off',
        rating: 4.5,
        name: 'SHOP NAME',
        services: 'Hair Cutting, Hair Spa, Facial, Hair Coloring.....',
        location: 'PALAZHI, Calicut',
        distance: '1.75 km',
        time: '30 mins',
        status: 'Closed',
        parking: 'Parking Available',
        id:4
      },
  ];

  return (
    <div className="lg:mx-10">
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">Shops</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
              onClick={() => handleClick(shop.id)} // Handle click and navigate
            >
              <div className="relative">
                <img
                  src={shop.image}
                  alt="Shop"
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs font-semibold tracking-wide">LIMITED TIME</span>
                  <p className="font-bold text-sm">{shop.discount}</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full flex items-center shadow-sm">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="ml-1 font-semibold">{shop.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="text-blue-600 mr-2">✔</span>
                  <span className="text-blue-600 text-sm font-medium">VERIFY SEAL</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-800 tracking-tight">{shop.name}</h2>
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      shop.status === 'Open'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {shop.status}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-3 italic">{shop.services}</p>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-600 text-sm font-medium">
                    {shop.location} <br />
                    <span className="text-gray-500">{shop.distance}</span> ⏰{' '}
                    <span className="text-gray-500">{shop.time}</span>
                  </p>
                </div>
                <div className="flex items-center text-red-500 text-sm font-medium">
                  <span className="mr-2 text-lg">🅿</span>
                  <span>{shop.parking}</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent hover:border-blue-200 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ShopCards;