import React from "react";
import { useTranslation } from "react-i18next";



const PricingPlans = () => {
    const { t } = useTranslation();
  const plans = [
    {
      title: t("exclusive_offers.plans.essential_explorer.title"),
      description: t("exclusive_offers.plans.essential_explorer.contact"),
      subDescription: "/individual",
      features: t("exclusive_offers.plans.essential_explorer.features", { returnObjects: true }),
    },
    {
      title: t("exclusive_offers.plans.premium_voyager.title"),
      description: t("exclusive_offers.plans.premium_voyager.contact"),
      subDescription: "/individual",
      features: t("exclusive_offers.plans.premium_voyager.features", { returnObjects: true }),
    },
    {
      title: t("exclusive_offers.plans.ultimate_wanderer.title"),
      description: t("exclusive_offers.plans.ultimate_wanderer.contact"),
      subDescription: "/individual",
      features: t("exclusive_offers.plans.ultimate_wanderer.features", { returnObjects: true }),
    },
  ];
  return (
    <div className=" py-20 ">
      {/* Title Section */}

      <div className="text-center  text-yellow-500 mb-10 ">
        <h2 className="mb-3 text-lg"> {t("exclusive_offers.title")} </h2>
        <p className="text-gray-900 text-lg md:text-2xl font-semibold">
          {t("exclusive_offers.subtitle")}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10  justify-center items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-100 text-center rounded-lg shadow-md hover:shadow-lg transition duration-300 grid grid-rows-subgrid row-span-2 gap-5">
            {/* Header */}
            <div className="bg-yellow-500 text-white text-center py-6 rounded-t-lg">
              <h3 className="text-xl ">{plan.title}</h3>
              <h4 className="text-2xl md:text-3xl mt-2 font-bold mb-3 max-w-[200px] mx-auto ">{plan.description}</h4>
              <p className="text-sm">{plan.subDescription}</p>
            </div>

            {/* Features */}
            <div className="p-6 bg-gray-100 flex flex-col justify-between items-center">
              <ul className="text-gray-600 space-y-2 mb-6 list-none">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className=" items-center text-center pb-3 font-semibold">
                    
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className=" btn-yel transition">
                {t("exclusive_offers.plans.ultimate_wanderer.button_quote")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
