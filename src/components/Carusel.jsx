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
import {useTranslation} from "react-i18next";



export default function Carusel() {
  const {t} = useTranslation();
  const destinations = [
    {
      title: t("popular_destinations.locations.istanbul"),
      image: dubai2,
      bookings: 76,
    },
    {
      title: t("popular_destinations.locations.sharm_el_sheikh"),
      image: dubai2,
      bookings: 98,
    },
    {
      title: t("popular_destinations.locations.thailand"),
      image: dubai2,
      bookings: 55,
    },
    {
      title: t("popular_destinations.locations.argentina"),
      image: dubai2,
      bookings: 66,
    },
    {
      title: t("popular_destinations.locations.dubai"),
      image: dubai2,
      bookings: 76,
    },
    {
      title: t("popular_destinations.locations.saudi"),
      image: dubai2,
      bookings: 76,
    },
  ];
  return (
    <>
      <div className="bg-white py-20">
        {/* Title Section */}
        <div className="text-center  text-yellow-500 mb-10">
          <h2 className="text-lg  mb-2">
         {t("popular_destinations.title")}             </h2>
          <p className="text-gray-900 text-xl md:text-2xl">
            {t("popular_destinations.subtitle")}
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
