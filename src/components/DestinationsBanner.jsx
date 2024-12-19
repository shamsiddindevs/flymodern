import React from 'react';
import dubai2 from '../assets/img/dubai2.jpg'


const destinations = [
  {
    title: "Biz bilan arzon temir yo'l chiptalari",
    subtitle: 'Butun dunyo',
    description:
      "Temir yo'l sayohatingizni qulay va kashf qilishingiz uchun bizga qo'shiling. Biz global bo'limni landshaftlar, go'zal shaharlar yoki madaniy tarixiy bozorlar uchun taklif etamiz va yuqori sifatli xizmatlar bilan yo'lga chiqing.",
    image: dubai2,
  },
  {
    title: "Havo sayohatlari uchun qiziqarli takliflarni kashf eting",
    subtitle: 'Global manzillar',
    description:
      "Havo orqali sayohat qilib, orzu qilingan joylarga boring. Bizning to'plamimiz turli xildagi go'zal landshaftlar va dunyo bo'ylab diqqatga sazovor joylarni o'z ichiga oladi.",
    image: dubai2,
  },
  {
    title: 'Dubay',
    subtitle: 'Birlashgan Arab Amirliklari',
    description:
      "Dubay — Birlashgan Arab Amirliklari ajoyib shahri va mashhur Emirates zamonaviy arxitekturasi bilan sizni kutmoqda. Unutilmas dam olish uchun keling.",
    image: dubai2,
  },
  {
    title: 'Antalya',
    subtitle: 'Turkiya',
    description:
      "Antalya Turkiyaning eng ko'zga ko'ringan joylaridan biri bo'lib, dengizning ulkan go'zalligini kashf qilish uchun mukammal joydir.",
    image: dubai2,
  },
  {
    title: 'Sharm al-Shayx',
    subtitle: '',
    description:
      "Sharm al-Shayx sizga rang-barang suv osti dunyosini o'rganish imkonini beradi. Bu ajoyib joyni kashf qiling.",
    image: dubai2,
  },
];

const DestinationsBanner = () => {
  return (
    <div className=" py-10">
      {/* Section Title */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-2xl md:text-3xl">Maqsadlarni osongina o'rganing</h2>
      </div>

      {/* Destination Items */}
      <div className="w-full max-w-4xl mx-auto px-4">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-center bg-white   overflow-hidden"
          >
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
              <p className="text-gray-700 max-w-2xl">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsBanner;
