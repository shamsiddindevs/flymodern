import dubai2 from "../assets/img/dubai2.jpg";
import sharm2 from "../assets/img/sharm2.jpg";
import antalia from "../assets/img/antalia.jpg";
import afr from "../assets/img/afr.jpg";
import airplane from "../assets/img/airplane.jpg";
import {useTranslation} from "react-i18next";

const DestinationsBanner = () => {
  const {t} = useTranslation();

  const destinations = [
    {
      title: t("banner_destinations.destinations.cheap_tickets.title"),
      subtitle: t("banner_destinations.destinations.cheap_tickets.subtitle"),
      description: t(
        "banner_destinations.destinations.cheap_tickets.description"
      ),
      image: afr,
    },
    {
      title: t("banner_destinations.destinations.air_travel_deals.title"),
      subtitle: t("banner_destinations.destinations.air_travel_deals.subtitle"),
      description: t(
        "banner_destinations.destinations.air_travel_deals.description"
      ),
      image: airplane,
    },
    {
      title: t("banner_destinations.destinations.dubai.title"),
      subtitle: t("banner_destinations.destinations.dubai.subtitle"),
      description: t("banner_destinations.destinations.dubai.description"),
      image: dubai2,
    },
    {
      title: t("banner_destinations.destinations.antalya.title"),
      subtitle: t("banner_destinations.destinations.antalya.subtitle"),
      description: t("banner_destinations.destinations.antalya.description"),
      image: antalia,
    },
    {
      title: t("banner_destinations.destinations.sharm_el_sheikh.title"),
      subtitle: t("banner_destinations.destinations.sharm_el_sheikh.subtitle"),
      description: t(
        "banner_destinations.destinations.sharm_el_sheikh.description"
      ),
      image: sharm2,
    },
  ];
  return (
    <div className=" py-10">
      {/* Section Title */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-10">
        <h2 className="text-2xl md:text-3xl ">
          {t("banner_destinations.title")}
        </h2>
      </div>

      {/* Destination Items */}
      <div className="w-full max-w-5xl mx-auto px-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col gap-5 md:flex-row items-center bg-white   overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/3  text-center">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-[190px]  object-cover md:h-full rounded-xl"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 ">
              <h3 className="text-2xl  mb-2">{destination.title}</h3>
              <h4 className="text-gray-500  mb-4">{destination.subtitle}</h4>
              <p className="text-[#7a7a7a] max-w-2xl text-[13px] leading-[24px]">
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
