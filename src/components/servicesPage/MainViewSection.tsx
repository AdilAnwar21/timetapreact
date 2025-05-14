import { useState } from 'react';
import { Clock, Star, ChevronLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };


  const serviceData = {
    title: "Menicure & Pedicure",
    salonName: "SKYLINE SALON",
    duration: "2 Hr",
    imageUrl: "https://pikwizard.com/pw/medium/d1d0e6a7bc0dc748f40fa014d940c5b1.jpg",
    rating: 4.5,
    fixedPrice: 820,
    hourlyRate: 100,
    includes: [
      "Easy booking and rescheduling.",
      "Service details with pricing.",
      "Stylist profiles and reviews.",
      "Secure payment options.",
    ],
    excludes: [
      "Complex registration.",
      "Unnecessary features.",
      "Cluttered design.",
      "Non-secure payments.",
      "Delayed confirmations.",
    ],
    steps: [
      {
        title: "First step name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
      {
        title: "Second step name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
      {
        title: "Third step name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
      {
        title: "Fourth step name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
      },
      
    ],
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen bg-white">
      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-sm">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <ChevronLeft onClick={handleGoBack} className="h-6 w-6" />
            <h1 className="text-xl font-semibold ml-24">Services</h1>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-6 px-4 md:px-8 lg:max-w-4xl lg:mx-auto">
        {/* Service image */}
        <div className="relative rounded-lg overflow-hidden mb-4">
          <img
            src={serviceData.imageUrl}
            alt={serviceData.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 right-3 flex items-center bg-white rounded-lg px-2 py-1">
            <Star className="h-4 w-4 text-red-500 fill-red-500" />
            <span className="ml-1 font-medium">{serviceData.rating}</span>
          </div>
        </div>

        {/* Title and duration */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{serviceData.title}</h2>
          <div className="flex items-center bg-red-100 text-red-500 px-3 py-1 rounded-lg">
            <Clock className="h-4 w-4 mr-1" />
            <span>{serviceData.duration}</span>
          </div>
        </div>

        {/* Salon name */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-medium uppercase">{serviceData.salonName}</h3>
        </div>

        {/* Pricing */}
        <div className="bg-gray-100 rounded-lg mb-6">
          <div className="flex divide-x divide-gray-300">
            <div className="w-1/2 p-4 text-center">
              <div className="text-gray-600 mb-1">Fixed Price</div>
              <div className="text-red-500 text-2xl font-bold">$ {serviceData.fixedPrice}</div>
            </div>
            <div className="w-1/2 p-4 text-center">
              <div className="text-gray-600 mb-1">Hourly Rate</div>
              <div className="text-red-500 text-2xl font-bold">$ {serviceData.hourlyRate}</div>
            </div>
          </div>
        </div>

        {/* Include/Exclude */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-medium text-gray-600 mb-4">INCLUDE</h3>
            <ul className="space-y-3">
              {serviceData.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-700 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-600 mb-4">EXCLUDE</h3>
            <ul className="space-y-3">
              {serviceData.excludes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-700 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-center mb-6">Services Step</h3>
          <div className="relative">
            <div className="absolute left-3 top-4 bottom-0 w-0.5 bg-red-200"></div>
            <div className="space-y-10">
              {serviceData.steps.map((step, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <h4 className="font-medium text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <button
        
        className={`
            flex justify-center items-center py-4 px-6 rounded-md 
            bg-red-500 hover:bg-red-600 active:bg-red-700 
            text-white font-medium transition-colors 
            duration-200 focus:outline-none focus:ring-2 focus:ring-red-400
            w-auto
        `}
        >
        Book Appointment
        </button> */}

        {/* Like button */}
        <div className="fixed bottom-6 right-6 md:right-12">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-red-50"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`h-6 w-6 ${isLiked ? 'text-red-500 fill-red-500' : 'text-red-500'}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
