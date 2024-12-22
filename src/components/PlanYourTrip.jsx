import React, {useState} from "react";
import {useTranslation} from "react-i18next";



const PlanYourTrip = () => {
 const {t} = useTranslation();


  const services = [
    {
      title: t("exclusive_offers.guides_service.title"),
      description:
        t("exclusive_offers.guides_service.description"),
      active: true,
    },
    {
      title: t("exclusive_offers.flexible_services.title"),
      description:
        t("exclusive_offers.flexible_services.description"),
      active: false,
    },
    {
      title: t("exclusive_offers.support.title"),
      description:
        t("exclusive_offers.support.description"),
      active: false,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="bron" className=" py-20">
      <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Left Section */}
        <div className="flex flex-col justify-start items-start ">
          <h2 className="text-xl md:text-2xl  text-black mb-4">
          {t("our_services.plan_trip.title")}
          </h2>
          <p className="text-gray-600 mb-6">
           {t("exclusive_offers.guides_service.description")}
          </p>
          <a href="#bron" className="btn-yel">{t("our_services.plan_trip.button_start")}</a>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg shadow-md">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border-b p-4 cursor-pointer transition duration-300 ${
                activeIndex === index ? "bg-gray-100" : ""
              }`}
              onClick={() => setActiveIndex(index)}>
              {/* Title */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <div
                  className={`w-4 h-4 rounded-full transition duration-300 ${
                    activeIndex === index ? "bg-yellow-500" : "bg-gray-300"
                  }`}></div>
              </div>

              {/* Description */}
              {activeIndex === index && (
                <p className="text-gray-600 mt-2 transition duration-300">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;
