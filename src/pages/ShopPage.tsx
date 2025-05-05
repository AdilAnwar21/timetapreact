import React from 'react';
import { Star, Heart, Phone, MessageCircle, MapPin, Clock, Calendar, User } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  duration: string;
  price: number;
  rating?: number;
  image: string;
  isFavorite?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  duration, 
  price, 
  rating, 
  image, 
  isFavorite = false 
}) => {
  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden shadow-md w-full max-w-xs mx-auto">
      <div className="relative h-40">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white bg-opacity-70">
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
        </button>
        {rating && (
          <div className="absolute bottom-2 right-2 flex items-center bg-white bg-opacity-70 px-2 py-1 rounded-md">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-medium ml-1">{rating}</span>
          </div>
        )}
      </div>
      <div className="p-3 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="font-semibold text-gray-800">${price}</p>
        </div>
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <Clock className="w-3 h-3 mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Online</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Home Service</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Walkin</span>
        </div>
        <button className="w-full py-2 bg-red-500 text-white rounded-md font-medium flex items-center justify-center">
          Book Now
        </button>
      </div>
    </div>
  );
};

const CategorySection: React.FC<{title: string; services: ServiceCardProps[]}> = ({ title, services }) => {
  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const SalonHeader: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="relative h-56 sm:h-72 bg-gray-100">
        <img 
          src="https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="Salon Interior" 
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 left-4 bg-white bg-opacity-70 p-2 rounded-full">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute top-4 right-4 bg-white bg-opacity-70 p-2 rounded-full">
          <Heart className="w-6 h-6" />
        </button>
        {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((dot, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-500' : 'bg-white'}`} 
              />
            ))}
          </div>
        </div> */}
      </div>
      
      <div className="bg-white p-4 shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SKYLINE SALON</h1>
            <div className="text-gray-500 mb-2">
              <p>Palazhi, Calicut</p>
              <p className="text-sm">Near bus stand, Palazhi Road</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-red-50 text-red-500 p-1 rounded">
              <Star className="w-4 h-4 fill-red-500" />
            </div>
            <span className="ml-1 font-semibold">4.5</span>
          </div>
        </div>
        
        <div className="flex justify-between mt-2">
          <div className="flex">
            <span className="flex items-center text-gray-500 mr-2">
              <MapPin className="w-4 h-4 mr-1" />
              7.5 km
            </span>
            <span className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              30 mins
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 bg-white shadow-sm">
        <button className="flex flex-col items-center justify-center p-4">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <Phone className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-xs text-gray-700">Call</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <MessageCircle className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-xs text-gray-700">Message</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <MapPin className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-xs text-gray-700">Direction</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4">
          <div className="bg-gray-100 rounded-full p-2 mb-1">
            <Star className="w-5 h-5 text-gray-700" />
          </div>
          <span className="text-xs text-gray-700">Rate Us</span>
        </button>
      </div>
    </div>
  );
};

const CategoryTabs: React.FC = () => {
  return (
    <div className="flex overflow-x-auto gap-2 p-2 bg-white">
      <button className="bg-red-500 text-white rounded-full px-6 py-2 whitespace-nowrap">
        All
      </button>
      <button className="bg-gray-100 text-gray-700 rounded-full px-6 py-2 whitespace-nowrap">
        Top Rated
      </button>
      <button className="bg-gray-100 text-gray-700 rounded-full px-6 py-2 whitespace-nowrap">
        Hospitals
      </button>
      <button className="bg-gray-100 text-gray-700 rounded-full px-6 py-2 whitespace-nowrap">
        Fee Filter
      </button>
    </div>
  );
};

export const SalonApp: React.FC = () => {
  const offerServices = [
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Woman getting hair treatment
      isFavorite: true
    },
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Hair wash at salon
      isFavorite: false
    },
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Hair spa massage
      isFavorite: false
    }
  ];
  
  const otherServices = [
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      image: 'https://images.pexels.com/photos/3993395/pexels-photo-3993395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Shampoo and care
      isFavorite: false
    },
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      image: 'https://images.pexels.com/photos/3065178/pexels-photo-3065178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Salon stylist
      isFavorite: true
    },
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      image: 'https://images.pexels.com/photos/8534271/pexels-photo-8534271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Hair care at salon
      isFavorite: false
    }
  ];
  
  

  return (
    <div className="bg-gray-50 min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col w-full">
        <SalonHeader />
        <CategoryTabs />
        
        <div className="px-4 py-6">
          <CategorySection title="Offers" services={offerServices} />
          <CategorySection title="Other Services" services={otherServices} />
        </div>
      </div>
    </div>
  );
};

export default SalonApp;