import React from "react";

const plans = [
  {
    title: "Asosiy Sayohatchi",
    description: "Biz bilan bog‘laning",
    subDescription: "/individual",
    features: [
      "Moslashtirilgan Sayohat Rejasi",
      "Shakllantirilgan Manzil Qo‘llanmalar",
      "Mutaxassis Bilan Sayohat Muhokamasi",
      "24/7 Xizmat Ko'rsatish",
      "Moslashuvchan Narxlar",
    ],
  },
  {
    title: "Premium Sayohatchi",
    description: "Biz bilan bog‘laning",
    subDescription: "/individual",
    features: [
      "Luks Mehmonxona Joylashuvi",
      "Maxsus Tajribalar",
      "Maxsus Yo‘lboshlovchi",
      "Moslashtirilgan Sayohat Paketlari",
      "Moslashuvchan Narxlar",
    ],
  },
  {
    title: "Maksimal Sayohatchi",
    description: "Biz bilan  bog‘laning",
    subDescription: "/individual",
    features: [
      "VIP Sayohat Dasturi",
      "Maxsus Lyuks Tajribalar",
      "Moslashuvchan va Muzokaralar uchun Narxlar",
      "Ajoyib Taassurotlar",
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className=" py-20 ">
      {/* Title Section */}

      <div className="text-center  text-yellow-500 mb-10 ">
        <h2 className="mb-3 text-lg">Maxsus Takliflar</h2>
        <p className="text-gray-900 text-lg md:text-2xl font-semibold">
          O‘zingiz orzu qilgan ta’tilni tanlang
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
                Bog‘lanish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
