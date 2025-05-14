// import React from 'react';
import { Star } from 'lucide-react';

// Types for our components
interface ReviewImage {
  src: string;
  alt: string;
}

interface ReviewProps {
  reviewerName: string;
  rating: number;
  date: string;
  comment: string;
  images: ReviewImage[];
  isHelpful?: boolean;
}

const CommentCard = ({ reviewerName, rating, date, comment, images, isHelpful = false }: ReviewProps) => {
  return (
    <div className="min-w-[300px] max-w-[350px] p-4 rounded-lg bg-white shadow-sm flex-shrink-0 border border-gray-100 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"></div>
          <h3 className="font-medium text-gray-800">{reviewerName}</h3>
        </div>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={18}
            fill={i < rating ? "#FFB800" : "transparent"}
            color={i < rating ? "#FFB800" : "#D1D5DB"}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4 flex-grow">{comment}</p>
      
      {images.length > 0 && (
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <div key={index} className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-auto flex justify-end">
        <button className={`flex items-center gap-1 text-sm ${isHelpful ? 'text-gray-600' : 'text-gray-400'}`}>
          Helpful
          <svg className="w-4 h-4" fill={isHelpful ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Comments Component with horizontal scroll
export default function CommentsSection() {
    const reviews = [
        {
          reviewerName: "Matilda Brown",
          rating: 4,
          date: "August 14, 2019",
          comment: "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. I am 5'3 about 155lbs and I carry all my weight in my upper body. When I put it on I felt like it thinned me put and I got so many compliments.",
          images: [
            { src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", alt: "Customer wearing dress with sunflower" },
            { src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", alt: "Customer in dress at sunset" },
            { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", alt: "Customer in dress outdoors" }
          ],
          isHelpful: true
        },
        {
          reviewerName: "Jessica Smith",
          rating: 5,
          date: "July 22, 2019",
          comment: "Perfect fit and very comfortable! The material is high quality and doesn't wrinkle easily. Will definitely order more colors.",
          images: [
            { src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", alt: "Product review image" }
          ],
          isHelpful: false
        },
        {
          reviewerName: "Amanda Lee",
          rating: 4,
          date: "June 5, 2019",
          comment: "Great dress for summer events. The fabric is lightweight and breathable. Fits true to size and is very flattering.",
          images: [
            { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", alt: "Product in use" },
            { src: "https://images.unsplash.com/photo-1515372035997-6c417c458e34?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80", alt: "Product detail" }
          ],
          isHelpful: true
        },
        {
          reviewerName: "Sophie Wilson",
          rating: 3,
          date: "May 18, 2019",
          comment: "Nice dress but runs a bit small. I recommend sizing up if you're unsure. The color is beautiful though!",
          images: [],
          isHelpful: false
        }
    ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 px-4">Customer Reviews</h2>
      <div className="relative">
        <div className="flex overflow-x-auto gap-4 pb-4 px-4 scrollbar-hide">
          {reviews.map((review, index) => (
            <CommentCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}