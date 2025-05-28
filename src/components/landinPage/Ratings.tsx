// import React, { useState } from "react";

// const ratings = [
//     "All",
//     "Top Rated",
//     "hospitals",
//     "Doctors",
// ];

// const RatingsCarousel: React.FC = () => {
//     const [selected, setSelected] = useState<number | null>(0); // Set "All" as initially selected

//     const handleSelect = (index: number) => {
//         setSelected(index);
//     };
    
//     return (
//         <div className="lg:mx-10">
//             <div className="w-full bg-gray-50 py-4">
//                 <div className="overflow-x-auto px-4 scrollbar-hide">
//                     <div
//                         className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-4"
//                         style={{ minWidth: "max-content" }}
//                     >
//                         {ratings.map((rating, idx) => (
//                             <div
//                                 key={idx}
//                                 onClick={() => handleSelect(idx)} // Handle item click
//                                 className={`flex-shrink-0 flex flex-col items-center justify-center 
//                                     bg-red-100 rounded-md 
//                                     w-32 sm:w-36 md:w-40 lg:w-48 
//                                     h-14 sm:h-16 md:h-18 lg:h-10
//                                     text-center transition hover:scale-105 
//                                     ${selected === idx ? 'bg-red-500 text-white' : 'bg-red-100 text-red-500'}`}
//                             >
//                                 <span className="text-sm sm:text-base md:text-lg lg:text-xl mb-1">
//                                     {/* No icon here */}
//                                 </span>
//                                 <span className="text-[10px] sm:text-xs md:text-sm text-center font-semibold px-2 leading-tight">
//                                     {rating}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RatingsCarousel;


import React, { useState, useEffect } from "react";
import { getTravelType } from "../../services/apiService"; // Adjust the path based on your project structure

const ratings = ["All", "Top Rated", "Hospitals", "Doctors"];

const RatingsCarousel: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(0); // Set "All" as initially selected
  const [data, setData] = useState<any>(null); // State to store API data (adjust type as needed)
  const [error, setError] = useState<string | null>(null); // State to handle errors

  // Fetch data when selected rating changes
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getTravelType();
        setData(result);
        setError(null);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    if (selected !== null) {
      loadData();
    }
  }, [selected]); // Run effect when selected changes

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="lg:mx-10">
      <div className="w-full bg-gray-50 py-4">
        <div className="overflow-x-auto px-4 scrollbar-hide">
          <div
            className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-4"
            style={{ minWidth: "max-content" }}
          >
            {ratings.map((rating, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(idx)} // Handle item click
                className={`flex-shrink-0 flex flex-col items-center justify-center 
                  bg-red-100 rounded-md 
                  w-32 sm:w-36 md:w-40 lg:w-48 
                  h-14 sm:h-16 md:h-18 lg:h-10
                  text-center transition hover:scale-105 
                  ${
                    selected === idx
                      ? "bg-red-500 text-white"
                      : "bg-red-100 text-red-500"
                  }`}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl mb-1">
                  {/* No icon here */}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-center font-semibold px-2 leading-tight">
                  {rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Optional: Display data or error */}
      {error && <div className="text-red-500">{error}</div>}
      {data && (
        <div className="mt-4">
          {/* Render your data here, e.g., JSON.stringify(data) */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RatingsCarousel;