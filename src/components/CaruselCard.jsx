import React from "react";
import dubai2 from "../assets/img/dubai2.jpg";

const CaruselCard = ({destination}) => {
    
    
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
      {/* Background Image */}
      <img
        src={destination?.image}
        alt={destination?.title}
        className="w-full h-40 object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-semibold">{destination?.title}</h3>
        <p className="text-sm">{destination?.bookings} band qilingan</p>
      </div>
    </div>
  );
};

export default CaruselCard;
