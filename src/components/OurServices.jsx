import React from 'react';
import { FaUtensils, FaRoute, FaPowerOff } from 'react-icons/fa';

const services = [
  {
    icon: <FaUtensils className="text-blue-500 text-5xl mb-6 mx-auto p-3 border border-gray-500 box-content rounded-full" />,
    title: 'Sayohat tajribalari',
    description:
      'Sizning xohishingizga moslashtirilgan yuqori sifatli tajribalarni tanlab, puxta ishlab chiqilgan sayohat marshrutlarini kashf eting. Mutaxassislar tomonidan tayyorlangan paketlarimiz unutilmas sarguzashtlarni kafolatlaydi.',
  },
  {
    icon: <FaRoute className="text-blue-500 text-5xl mb-6 mx-auto p-3 border border-gray-500 box-content rounded-full" />,
    title: 'Eng yaxshi marshrutlar',
    description:
      'Sizning noyob qiziqishlaringiz va istaklaringizga mos keladigan to‘liq moslashtirilgan sayohat rejalardan rohatlaning. Biz sayohat intilishlaringizni aks ettiruvchi marshrutlar yaratishga ixtisoslashganmiz.',
  },
  {
    icon: <FaPowerOff className="text-blue-500 text-5xl mb-6 mx-auto p-3 border border-gray-500 box-content rounded-full" />,
    title: 'Tayyor sayohat yo‘nalishlari',
    description:
      'Bizning paketlarimiz qulaylik, sarguzasht va madaniy uyg‘unlikni ta’minlaydigan ajoyib sayohat tajribasini taklif etadi.',
  },
];

const OurServices = () => {
  return (
    <div id='tours' className=" py-20">
      {/* Title Section */}
      
      <div className="text-center  text-yellow-500 mb-10 ">
          <h2 className="mb-3 text-lg">
          Bizning xizmatlar
          </h2>
          <p className="text-gray-900 text-lg md:text-2xl font-semibold">
          Ishonch bilan kashf eting
          </p>
        </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md  text-center hover:shadow-lg transition duration-300 border border-gray-200 py-16 px-10"
          >
            {/* Icon */}
            {service.icon}

            {/* Title */}
            <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
