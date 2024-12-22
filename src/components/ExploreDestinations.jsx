import React from "react";
import dubai2 from "../assets/img/dubai2.jpg";
import {useTranslation} from "react-i18next";



const ExploreDestinations = () => {
  const {t} = useTranslation();


  const destinations = [
    {
      title:t("explore_destinations.cards.dubai.title"),
      subtitle: t("explore_destinations.cards.dubai.subtitle"),
      description:
        t("explore_destinations.cards.dubai.description"),
      image: dubai2,
    },
    {
      title: t("explore_destinations.cards.turkey.title"),
      subtitle: t("explore_destinations.cards.turkey.subtitle"), 
      description:
        t("explore_destinations.cards.turkey.description"),
      image: dubai2,
    },
    {
      title: t("explore_destinations.cards.sharm_el_sheikh.title"),
      subtitle: t("explore_destinations.cards.sharm_el_sheikh.subtitle"),
      description:
        t("explore_destinations.cards.sharm_el_sheikh.description"),
      image: dubai2,
    },
  ];
  return (
    <div
      id="about"
      className="bg-gray-100 py-20">
      {/* Title Section */}
      <div className="text-center  text-yellow-500 mb-10 ">
        <h2 className="mb-3 text-lg">{t("explore_destinations.title")}</h2>
        <p className="text-gray-900 text-lg md:text-2xl font-semibold">
          {t("explore_destinations.subtitle")}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 grid grid-rows-subgrid row-span-2">
            {/* Image */}
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                <h4 className="text-gray-500 mb-4">{destination.subtitle}</h4>
                <p className="text-gray-700 mb-6">{destination.description}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-between">
                <button className="btn-yel">
                  {t("explore_destinations.cards.dubai.button_learn")}
                </button>
                <a
                  href="#bron2"
                  className="btn-yel text-gray-900 bg-slate-200 border-slate-200 hover:bg-slate-300 hover:border-slate-300 hover:text-gray-900">
                  {t("explore_destinations.cards.dubai.button_book")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreDestinations;
