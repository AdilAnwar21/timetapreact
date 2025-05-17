import React from 'react';
import { Star, Heart, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// Add global styles for removing scrollbar but keeping functionality
const styles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

interface ServiceCardProps {
  title: string;
  duration: string;
  price: number;
  image: string;
  isFavorite?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  duration, 
  price, 
  image, 
  isFavorite = false 
}) => {
  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden shadow-sm bg-white w-full">
      <div className="relative h-32">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white bg-opacity-90">
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
        <div className="absolute bottom-2 left-2 flex items-center bg-black bg-opacity-50 px-1 py-0.5 rounded">
          <span className="text-xs font-medium text-white">4.5</span>
        </div>
      </div>
      <div className="p-2 bg-white">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-sm text-gray-800">{title}</h3>
          <p className="font-medium text-sm text-gray-800">$ {price}</p>
        </div>
        <div className="flex items-center text-gray-500 text-xs mb-2">
          <Clock className="w-3 h-3 mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">Online</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">Home Service</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">Walkin</span>
        </div>
        <button className="w-full py-1.5 bg-red-500 text-white rounded text-sm font-medium flex items-center justify-center">
          Book Now
        </button>
      </div>
    </div>
  );
};

// const CategorySection: React.FC<{title: string; services: ServiceCardProps[]}> = ({ title, services }) => {
//   return (
//     <div className="w-full py-3">
//       <h2 className="text-lg font-bold text-gray-800 mb-3">{title}</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-x-auto">
//         {services.map((service, index) => (
//           <ServiceCard key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

const SalonHeader: React.FC = () => {

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="relative w-full">
      <div className="relative h-56 bg-black">
        <img 
          src="https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
          alt="Salon Interior" 
          className="w-full h-full object-cover opacity-90"
        />
        <button onClick={handleGoBack} className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute top-4 right-4 bg-transparent">
          <Heart className="w-6 h-6 text-white" />
        </button>
        {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((dot, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-red-500' : 'bg-white bg-opacity-60'}`} 
              />
            ))}
          </div>
        </div> */}
      </div>
      
      <div className="bg-white p-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-lg font-bold text-gray-900">SKYLINE SALON</h1>
            <p className="text-xs text-gray-500 mt-1">LOCATION</p>
            <div className="text-gray-600 text-sm">
              <p>Palazhi, Calicut</p>
              <p className="text-xs">Near bus stand, Palazhi Road</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-white text-red-500 flex items-center">
              <Star className="w-4 h-4 fill-red-500 text-red-500" />
              <span className="ml-1 font-medium">4.5</span>
            </div>
          </div>
        </div>
        
        <div className="flex mt-1">
          <div className="flex items-center text-gray-500 text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            <span>7.5 km</span>
            <span className="mx-1">•</span>
            <Clock className="w-3 h-3 mr-1" />
            <span>30 mins</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 bg-white border-t border-gray-100">
      <button className="flex flex-col items-center justify-center py-2 mt-5">
        <div className="bg-red-100 rounded-full p-2 mb-1">
          <Phone className="w-4 h-4 text-red-500" />
        </div>
        <span className="text-xs text-gray-600">Call</span>
      </button>
      <button className="flex flex-col items-center justify-center py-2 mt-5">
        <div className="bg-red-100 rounded-full p-2 mb-1">
          <MessageCircle className="w-4 h-4 text-red-500" />
        </div>
        <span className="text-xs text-gray-600">Message</span>
      </button>
      <button className="flex flex-col items-center justify-center py-2 mt-5">
        <div className="bg-red-100 rounded-full p-2 mb-1">
          <MapPin className="w-4 h-4 text-red-500" />
        </div>
        <span className="text-xs text-gray-600">Direction</span>
      </button>
      <button className="flex flex-col items-center justify-center py-2 mt-5">
        <div className="bg-red-100 rounded-full p-2 mb-1">
          <Star className="w-4 h-4 text-red-500" />
        </div>
        <span className="text-xs text-gray-600">Rate Us</span>
      </button>
    </div>
    </div>
  );
};

const CategoryTabs: React.FC = () => {
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-2 p-3 bg-white border-t border-b border-gray-100">
      <button className="bg-red-500 text-white rounded-full px-4 py-1.5 text-xs whitespace-nowrap">
        All
      </button>
      <button className="bg-gray-100 text-gray-700 rounded-full px-4 py-1.5 text-xs whitespace-nowrap">
        Top Rated
      </button>
      <button className="bg-gray-100 text-gray-700 rounded-full px-4 py-1.5 text-xs whitespace-nowrap">
        Hospitals
      </button>
      <button className="bg-gray-100 text-gray-700 rounded-full px-4 py-1.5 text-xs whitespace-nowrap">
        Fee Filter
      </button>
    </div>
  );
};

export const SalonApp: React.FC = () => {
  // Add style tag to document
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    console.log(id,'this is the id')
    navigate(`/service/${id}`); // Navigate to shops/:id
  };
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
    },
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Hair spa massage
      isFavorite: false
    },
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Hair spa massage
      isFavorite: false
    },
    {
      title: 'Hair spa',
      duration: '2 Hours',
      price: 675,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', // Hair spa massage
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
    <div className="bg-white min-h-screen w-full max-w-lg mx-auto md:max-w-6xl">
      <div className="flex flex-col w-full">
        <SalonHeader />
        <div className="mt-1">
          <p className="pl-4 pt-2 text-base font-medium">Offers</p>
          <div className="overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-4 px-4 py-2 min-w-max">
              {offerServices.map((service, index) => (
                <div key={index} className="w-56" onClick={() => handleClick(index)}>
                  <ServiceCard {...service}  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <CategoryTabs />
        
        <div className="mt-1">
          <p className="pl-4 pt-2 text-base font-medium">Other Services</p>
          <div className="px-4 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {otherServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonApp;