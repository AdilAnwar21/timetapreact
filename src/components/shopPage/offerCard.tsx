// src/components/OfferCard.tsx
import React from 'react';

interface OfferCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className="min-w-[200px] p-2 m-2 bg-white rounded-xl shadow-md flex flex-col justify-between">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-xl h-[120px] object-cover"
      />
      <div className="pt-2">
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-sm text-gray-500">2 Hours</p>
        <p className="text-lg font-bold mt-1">₹{price}</p>
        <div className="text-xs text-gray-500 flex gap-2 flex-wrap mt-1">
          <span className="bg-gray-100 px-2 py-0.5 rounded">Onsite</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded">Home Service</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded">Virtual</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;