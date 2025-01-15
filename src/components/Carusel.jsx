// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import dubai2 from "../assets/img/dubai2.jpg";
import istanbul from "../assets/img/istanbul.jpg";
import sharm2 from "../assets/img/sharm2.jpg";
import best from "../assets/img/best-02.jpg";
import arg from "../assets/img/best-03.jpg";
import saudi from "../assets/img/saudi.jpg";

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
      image: istanbul,
      bookings: 76,
    },
    {
      title: t("popular_destinations.locations.sharm_el_sheikh"),
      image: sharm2,
      bookings: 98,
    },
    {
      title: t("popular_destinations.locations.thailand"),
      image: best,
      bookings: 55,
    },
    {
      title: t("popular_destinations.locations.argentina"),
      image: arg,
      bookings: 66,
    },
    {
      title: t("popular_destinations.locations.dubai"),
      image: dubai2,
      bookings: 76,
    },
    {
      title: t("popular_destinations.locations.saudi"),
      image: saudi,
      bookings: 76,
    },
  ];
  return (
    <div className="bg-white py-20 px-5">
      <div className="text-center  text-yellow-500 mb-10">
        <h2 className="text-lg  mb-2">{t("popular_destinations.title")} </h2>
        <p className="text-gray-900 text-xl md:text-2xl">
          {t("popular_destinations.subtitle")}
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.custom',
        }}
        loop={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <CaruselCard
              key={index}
              destination={destination}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom mt-10 flex justify-center gap-2"></div>
    </div>
  );
}

