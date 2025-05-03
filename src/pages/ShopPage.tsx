// SalonPage.tsx
// import React from "react";
import ServiceCard from "../components/shopPage/Services";
// import ServiceCard from "./ServiceCard";

const SalonPage = () => {
    const services = [
        {
          title: "Hair Spa",
          price: 675,
          imageUrl: "https://via.placeholder.com/200x120?text=Hair+Spa",
        },
        {
          title: "Facial Cleanse",
          price: 599,
          imageUrl: "https://via.placeholder.com/200x120?text=Facial+Cleanse",
        },
      ];
      
      const otherServices = [
        {
          title: "Hair Spa",
          price: 675,
          imageUrl: "https://via.placeholder.com/200x120?text=Hair+Spa",
        },
        {
          title: "Nail Art",
          price: 450,
          imageUrl: "https://via.placeholder.com/200x120?text=Nail+Art",
        },
      ];

  return (
    <div className="bg-white min-h-screen text-sm font-sans">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516972810927-80185027ca84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=150&q=80"
          alt="Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 text-white">←</div>
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full">❤️</div>
        <div className="absolute bottom-2 flex justify-center w-full gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-pink-500' : 'bg-gray-300'}`}></div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold text-base">SKYLINE SALON</h2>
        <p className="text-[10px] text-gray-500 font-semibold uppercase">Location</p>
        <p className="text-sm font-semibold leading-tight">Palazhi, Calicut</p>
        <p className="text-xs text-gray-500 leading-tight">Near bus stand, Palazhi Road</p>
        <div className="flex items-center text-xs gap-2 mt-1">
          <span className="text-pink-500">📍</span>
          <span>7.5 km</span>
          <span>• 30 mins</span>
        </div>

        <div className="flex justify-between mt-4">
          {[
            { label: "Call", icon: "📞" },
            { label: "Message", icon: "📝" },
            { label: "Direction", icon: "📍" },
            { label: "Rate Us", icon: "⭐" }
          ].map(({ label, icon }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-pink-100 text-pink-500 rounded-full">
                {icon}
              </div>
              <span className="text-xs mt-1 text-center">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-base mb-2">Offers</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {services.map((o, i) => (
              <ServiceCard key={i} {...o} />
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto">
          {["All", "Top Rated", "Hospitals", "Fee Filter"].map((tab, i) => (
            <button
              key={i}
              className={`text-xs px-4 py-1 rounded-full ${tab === "All" ? "bg-red-500 text-white" : "bg-red-100 text-red-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="font-bold text-base mb-2">Other Services</h3>
          <div className="flex gap-3 flex-wrap">
            {otherServices.map((s, i) => (
              <ServiceCard key={i} {...s}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonPage;