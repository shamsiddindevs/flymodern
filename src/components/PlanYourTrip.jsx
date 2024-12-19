import React, {useState} from "react";

const services = [
  {
    title: "Tajribalı gidlar xizmati",
    description:
      "Siz uchun mukammal marshrutni yaratishga ishtiyoqi sayohat bo‘yicha mutaxassislarimizdan ko‘rsatmalar oling. Manzil takliflaridan tortib sayohat maslahatlarigacha sayohatingizni ajoyib qilish uchun shu yerdamiz.",
    active: true,
  },
  {
    title: "Moslashuvchan xizmatlar",
    description:
      "Sayohatlaringizni rejalashtirish uchun moslashuvchan xizmatlarimizdan foydalaning, bu sayohatingizni stressdan holi qiladi.",
    active: false,
  },
  {
    title: "24/7 Qo'llab quvvatlash",
    description:
      "Har qanday muammolar uchun bizning 24/7 qo‘llab quvvatlash xizmatimiz yordam berishga tayyor.",
    active: false,
  },
];

const PlanYourTrip = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="bron" className=" py-20">
      <div className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Left Section */}
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-xl md:text-2xl  text-black mb-4">
            Orzuingizdagi sayohatni rejalashtiring
          </h2>
          <p className="text-gray-600 mb-6">
            O'zingizning orzuingizdagi sayohatga chiqayotganganingizda, har bir
            tafsilotga e'tibor qaratamiz. Bu madaniy qochish, sarguzashtli
            ekspeditsiya yoki sohilga dam olish bo'ladimi, biz muammosiz va
            unutilmas sayohat tajribasini ta'minlaymiz.
          </p>
          <a href="#bron" className="btn-yel">Bog'lanish</a>
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
