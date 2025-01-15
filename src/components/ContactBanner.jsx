import {useState} from "react";
import {useTranslation} from "react-i18next";
import Modal from "./Modal";

const ContactBanner = () => {
  const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="bron2"
      className=" py-20 flex items-center justify-center">
      <div className="text-center">
        {/* Subtitle */}
        <h2 className="text-yellow-500 text-xl  mb-2">
          {t("reservation.title")}
        </h2>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          {t("reservation.subtitle")}
        </h1>

        {/* Director Information */}
        <p className="text-gray-600 text-lg mb-2">
          {" "}
          {t("reservation.director")}
        </p>

        {/* Contact Number */}
        <a
          href="+998951270090"
          className="block hover:underline text-yellow-500 text-2xl font-bold mb-6">
          +998951270090
        </a>

        {/* Call-to-Action Button */}
        <button
          className="btn-yel"
          onClick={() => setIsOpen(true)}>
          {t("reservation.button_reservation")}
        </button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ContactBanner;
