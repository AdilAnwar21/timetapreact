import { useState } from 'react';
import { Heart, Star } from 'lucide-react';

type SimilarServicesCardProps = {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    rating: number;
};

const SimilarServicesCard = ({ title, price, description, imageUrl, rating }: SimilarServicesCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  
  return (
    <div className="rounded-lg bg-white shadow-sm overflow-hidden w-full max-w-xs flex-shrink-0">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-40 object-cover"
        />
        <button 
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
        <div className="absolute bottom-2 right-2 flex items-center bg-white rounded-md px-1.5 py-0.5">
          <Star className="h-3 w-3 text-red-500 fill-red-500" />
          <span className="ml-0.5 text-xs font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-1">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <span className="font-medium text-gray-900">${price}</span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

const SimilarServices = () => {
    const services = [
        {
          id: 1,
          title: "Hair spa",
          price: 675,
          rating: 4.5,
          imageUrl: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=250&h=180",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        },
        {
          id: 2,
          title: "Manicure",
          price: 675,
          rating: 4.5,
          imageUrl: "https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=250&h=180",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        },
        {
          id: 3,
          title: "Haircut",
          price: 675,
          rating: 4.5,
          imageUrl: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=250&h=180",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        },
        {
          id: 4,
          title: "Facial",
          price: 675,
          rating: 4.5,
          imageUrl: "https://images.pexels.com/photos/3981817/pexels-photo-3981817.jpeg?auto=compress&cs=tinysrgb&w=250&h=180",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
        }
      ];

  return (
    <div className="py-6 bg-white">
      <div className="lg:max-w-4xl lg:mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-4">Similar Services</h2>
        
        {/* Horizontal scroll layout for all breakpoints */}
        <div className="flex overflow-x-auto gap-4 pb-4">
          {services.map(service => (
            <SimilarServicesCard 
              key={service.id}
              title={service.title}
              price={service.price}
              rating={service.rating}
              imageUrl={service.imageUrl}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarServices;