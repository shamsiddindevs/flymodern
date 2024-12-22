import React from "react";
import dubai2 from "../assets/img/dubai2.jpg";
import {useTranslation} from "react-i18next";

const DestinationsBanner = () => {
  const {t} = useTranslation();

  const destinations = [
    {
      title: t("banner_destinations.destinations.cheap_tickets.title"),
      subtitle: t("banner_destinations.destinations.cheap_tickets.subtitle"),
      description:
        t("banner_destinations.destinations.cheap_tickets.description"),
      image: dubai2,
    },
    {
      title: t("banner_destinations.destinations.air_travel_deals.title"),
      subtitle: t("banner_destinations.destinations.air_travel_deals.subtitle"),
      description:
          t("banner_destinations.destinations.air_travel_deals.description"),
      image: dubai2,
    },
    {
      title: t("banner_destinations.destinations.dubai.title"),
      subtitle: t("banner_destinations.destinations.dubai.subtitle"),
      description:
        t("banner_destinations.destinations.dubai.description"),
      image: dubai2,
    },
    {
      title: t("banner_destinations.destinations.antalya.title"),
      subtitle: t("banner_destinations.destinations.antalya.subtitle"),
      description:
        t("banner_destinations.destinations.antalya.description"),
      image: dubai2,
    },
    {
      title: t("banner_destinations.destinations.sharm_el_sheikh.title"),
      subtitle: t("banner_destinations.destinations.sharm_el_sheikh.subtitle"),
      description:
        t("banner_destinations.destinations.sharm_el_sheikh.description"),
      image: dubai2,
    },
  ];
  return (
    <div className=" py-10">
      {/* Section Title */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-2xl md:text-3xl">
          {t("banner_destinations.title")}
        </h2>
      </div>

      {/* Destination Items */}
      <div className="w-full max-w-4xl mx-auto px-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-center bg-white   overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/3 p-2 text-center">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-[190px]  object-cover md:h-full rounded-xl"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl  mb-2">{destination.title}</h3>
              <h4 className="text-gray-500  mb-4">{destination.subtitle}</h4>
              <p className="text-gray-700 max-w-2xl">
                {destination.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsBanner;
