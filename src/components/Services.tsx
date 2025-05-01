// import React from "react";
// import {
//     FaCut,
//     FaUserMd,
//     FaDumbbell,
//     FaCar,
//     FaSpa,
//     FaChalkboardTeacher,
//     FaTools,
//     FaPrayingHands,
//     FaUtensils,
//     FaPlane,
//     FaGraduationCap,
//     FaHome,
// } from "react-icons/fa";

// const services = [
//     { icon: <FaCut />, label: "Beauty & Personality" },
//     { icon: <FaUserMd />, label: "Doctors Appointment" },
//     { icon: <FaDumbbell />, label: "Gym & Health" },
//     { icon: <FaCar />, label: "Garage Care" },
//     { icon: <FaUtensils />, label: "Restaurant" },
//     { icon: <FaPlane />, label: "Travel" },
//     { icon: <FaGraduationCap />, label: "Education" },
//     { icon: <FaHome />, label: "Home Service" },
//     { icon: <FaSpa />, label: "Spa & Wellness" },
//     { icon: <FaPrayingHands />, label: "Yoga & Relaxation" },
//     { icon: <FaChalkboardTeacher />, label: "Tutoring" },
//     { icon: <FaTools />, label: "Repair Services" },
// ];

// const ServiceCarousel: React.FC = () => {
//     return (
//         <div className="lg:mx-10">
//             <div className="w-full bg-gray-50 py-8">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold px-4 mb-4">
//                     Services
//                 </h2>

//                 <div className="overflow-x-auto px-4 scrollbar-hide">
//                     <div
//                         className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-4"
//                         style={{ minWidth: "max-content" }}
//                     >
//                         {services.map((service, idx) => (
//                             <div
//                                 key={idx}
//                                 className="flex-shrink-0 flex flex-col items-center justify-center 
//                             bg-red-100 rounded-full 
//                             w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
//                             text-center transition hover:scale-105"
//                             >
//                                 <div className="text-red-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
//                                     {service.icon}
//                                 </div>
//                                 <span className="text-[10px] sm:text-xs md:text-sm text-center font-semibold px-2 leading-tight">
//                                     {service.label}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServiceCarousel;

import React from "react";
import {
    FaCut,
    FaUserMd,
    FaDumbbell,
    FaCar,
    FaSpa,
    FaChalkboardTeacher,
    FaTools,
    FaPrayingHands,
    FaUtensils,
    FaPlane,
    FaGraduationCap,
    FaHome,
} from "react-icons/fa";

const services = [
    { icon: <FaCut />, label: "Beauty & Personality" },
    { icon: <FaUserMd />, label: "Doctors Appointment" },
    { icon: <FaDumbbell />, label: "Gym & Health" },
    { icon: <FaCar />, label: "Garage Care" },
    { icon: <FaUtensils />, label: "Restaurant" },
    { icon: <FaPlane />, label: "Travel" },
    { icon: <FaGraduationCap />, label: "Education" },
    { icon: <FaHome />, label: "Home Service" },
    { icon: <FaSpa />, label: "Spa & Wellness" },
    { icon: <FaPrayingHands />, label: "Yoga & Relaxation" },
    { icon: <FaChalkboardTeacher />, label: "Tutoring" },
    { icon: <FaTools />, label: "Repair Services" },
];

const ServiceCarousel: React.FC = () => {
    return (
        <div className="lg:mx-10">
            <div className="w-full bg-gray-50 py-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold px-4 mb-4">
                    Services
                </h2>

                <div className="overflow-x-auto px-4 scrollbar-hide">
                    <div
                        className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-4"
                        style={{ minWidth: "max-content" }}
                    >
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 flex flex-col items-center justify-center 
                            bg-red-100 rounded-none 
                            w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 
                            text-center transition hover:scale-105"
                            >
                                <div className="text-red-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
                                    {service.icon}
                                </div>
                                <span className="text-[10px] sm:text-xs md:text-sm text-center font-semibold px-2 leading-tight">
                                    {service.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCarousel;
