
import {useTranslation} from "react-i18next";
const CaruselCard = ({destination}) => {
  const {t} = useTranslation();
    
    
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full">
      {/* Background Image */}
      <img
        src={destination?.image}
        alt={destination?.title}
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-semibold">{destination?.title}</h3>
        <p className="text-sm">{destination?.bookings} {t("popular_destinations.booked")} </p>
      </div>
    </div>
  );
};

export default CaruselCard;
