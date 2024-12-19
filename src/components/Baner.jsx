import React from 'react';
import dubai2 from '../assets/img/dubai2.jpg'

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${dubai2})` }}>
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black bg-opacity-40 z-0"></div>

      <div className="w-full max-w-5xl mx-auto relative px-4 z-10">
        {/* Banner Content */}
      <div className=" py-48 h-full flex flex-col justify-center items-start text-left text-white ">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Sayohat qilishni xohlaysizmi?</h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl">
        Sayohat orzularingizni haqiqatga aylantiring: rejalashtiring, kashf qiling va unutilmas xotiralar yarating.
        </p>

        {/* Call to Action Button */}
        <a href='#bron' className="btn-yel">
          Ko'proq bilish
        </a>
      </div>

      {/* Form Section */}
      <div className=" bg-white py-4 px-6 md:px-12  border-b-4 border-b-yellow-500">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4  ">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Ismingiz..."
            className="border-b border-b-gray-300  px-4 py-2 focus:outline-none focus:border-none"
          />

          {/* Destination Input */}
          <input
            type="text"
            placeholder="Manzilingiz..."
            className="border-b border-b-gray-300  px-4 py-2 focus:outline-none focus:border-none"
          />

          {/* Date Input */}
          <input
            type="date"
            className="border-b border-b-gray-300  px-4 py-2 focus:outline-none focus:border-none"
            value={"2024-07-17"}
           onInput={(e)=>console.log(e.target.value)
           }
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
    </div>
  );
};

export default Banner;
