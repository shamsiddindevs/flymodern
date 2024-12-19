import React from 'react';
import dubai2 from '../assets/img/dubai2.jpg'


const destinations = [
  {
    title: 'Dubayda hashamatni his eting',
    subtitle: 'Shahar va sahro uyg‘unligi',
    description:
      'Dubayning osmono‘par binolari, hashamatli xaridlari va cho‘l sarguzashtlarini boyligidan zavqlaning. Hashamatni va innovatsion tajribalarni taklif qiluvchi ajoyib shaharda dam oling.',
    image: dubai2,
  },
  {
    title: 'Turkiya madaniyatini kashf eting',
    subtitle: 'Tarixiy mo‘jizalar va hayratlanarli manzaralar',
    description:
      'Turkiyaning qadimiy xarobalardan tortib jonli bozorlarigacha bo‘lgan jarayonida tarixga sho‘ng‘ing. Go‘zal manzaralar va mehmondo‘stlikni rohatlaning.',
    image: dubai2,
  },
  {
    title: 'Sharm El-Sheykhda dam oling',
    subtitle: 'Quyosh, dengiz va osoyishtalik',
    description:
      'Sharm al-Shayxning ajoyib plyajlari va marjon riflariga boring. Tropik jannatda eng yaxshi dam olish tajribasidan bahramand bo‘ling.',
    image: dubai2,
  },
];

const ExploreDestinations = () => {
  return (
    <div id='about' className="bg-gray-100 py-20">
      {/* Title Section */}
      <div className="text-center  text-yellow-500 mb-10 ">
          <h2 className="mb-3 text-lg">
          Bizning manzillarimizni kashf eting
          </h2>
          <p className="text-gray-900 text-lg md:text-2xl font-semibold">
          Dubay, Turkiya, Sharm El Sheyhni biz bilan kashf eting
          </p>
        </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
              <h4 className="text-gray-500 mb-4">{destination.subtitle}</h4>
              <p className="text-gray-700 mb-6">{destination.description}</p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2 justify-between">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
                  Ko'proq bilish
                </button>
                <a href='#bron2' className="bg-gray-200 text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">
                  Band qilish
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
