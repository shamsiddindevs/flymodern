import React from 'react';
import dubai2 from '../assets/img/dubai2.jpg'

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${dubai2})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>

      {/* Banner Content */}
      <div className="container max-w-[1024px] mx-auto px-4 h-full flex flex-col justify-center items-start text-left text-white relative z-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Sayohat qilishni xohlaysizmi?</h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl">
        Sayohat orzularingizni haqiqatga aylantiring: rejalashtiring, kashf qiling va unutilmas xotiralar yarating.
        </p>

        {/* Call to Action Button */}
        <button className="btn-yel">
          Ko'proq bilish
        </button>
      </div>

      {/* Form Section */}
      <div className=" z-10 absolute bottom-0 left-0 right-0 bg-white py-4 px-6 md:px-12  border-b-8 border-b-yellow-500 mx-4 md:mx-auto max-w-5xl">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Ismingiz..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Destination Input */}
          <input
            type="text"
            placeholder="Manzilingiz..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Date Input */}
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-yel"
          >
            Joy Band Qilish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
