import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import dubai2 from "../assets/img/dubai2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carusel.css";

// import required modules
import {Pagination} from "swiper/modules";

import CaruselCard from "./CaruselCard";

const destinations = [
  {
    title: "Istanbul",
    image: dubai2,
    bookings: 76,
  },
  {
    title: "Sharm El-Sheikh",
    image: dubai2,
    bookings: 98,
  },
  {
    title: "Tailand",
    image: dubai2,
    bookings: 55,
  },
  {
    title: "Argentina",
    image: dubai2,
    bookings: 66,
  },
  {
    title: "Dubai",
    image: dubai2,
    bookings: 76,
  },
  {
    title: "Saudiya Arabistoni",
    image: dubai2,
    bookings: 76,
  },
];

export default function Carusel() {
  return (
    <>
      <div className="bg-white py-20">
        {/* Title Section */}
        <div className="text-center  text-yellow-500 mb-10">
          <h2 className="text-lg  mb-2">
            Bizning mashhur manzillarimiz
          </h2>
          <p className="text-gray-900 text-xl md:text-2xl">
            Ushbu yo'nalishlar bilan haqiqatan ham o'ziga xos qiladigan
            go'zallik, madaniyat va tajribalarni kashf eting.
          </p>
        </div>

        {/* Destination Cards */}
        {
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper">
            {destinations.map((destination, index) => (
              <SwiperSlide key={index} className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <CaruselCard
                  key={index}
                  destination={destination}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </>
  );
}