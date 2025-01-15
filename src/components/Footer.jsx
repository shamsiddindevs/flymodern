import {FaInstagram} from "react-icons/fa";
import logo from "../assets/img/logo.png";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className=" py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Description */}
        <div>
          <div className="text-center md:text-left">
            <a to="#">
              <img
                src={logo}
                alt="Fly Modern Logo"
                className="mx-auto md:mx-0  h-16 mb-4"
              />
            </a>
            <h2 className="text-lg font-bold">FLY MODERN</h2>
            <p className="text-sm font-semibold">AVIAKASSA VISA TOURISM</p>
          </div>
          <p className="text-gray-500 mt-4 text-center md:text-left">
            {t("footer.description")}
          </p>
          <a
            href="https://www.instagram.com/"
            className="flex justify-center md:justify-start mt-4">
            <FaInstagram className="text-gray-500 text-2xl hover:text-yellow-500 transition" />
          </a>
        </div>

        {/* Useful Links */}
        <div className="md:ml-20">
          <h3 className="text-lg font-semibold text-gray-800 mb-8">
            {t("footer.useful_links.title")}
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-yellow-500">
                {t("footer.useful_links.blog")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-yellow-500">
                {t("footer.useful_links.contact_us")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-yellow-500">
                {t("footer.useful_links.about_us")}
              </a>
            </li>
            <li>
              <a
               href="#video"
                className="text-gray-600 hover:text-yellow-500">
                {t("footer.useful_links.privacy_policy")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-8">
            {t("footer.contact_info.title")}
          </h3>
          <p className="text-gray-600 mb-2">
           {t("footer.contact_info.description")}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">{t("footer.contact_info.phone")}</span>{"    "}
            <a
              href="tel:+998951270090"
              className="text-yellow-500">
              +998-95-127-00-90
            </a>
          </p>
          <p className="text-gray-500">
            <span className="font-semibold"> 
              {t("footer.contact_info.email")}
              </span>{"     "}
            <a
              href="mailto:flymoderntravel@mail.ru"
              className="text-yellow-500">
              flymoderntravel@mail.ru
            </a>
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">
             {t("footer.contact_info.address")}
              </span>
              <span  className="text-yellow-500">{t("footer.contact_info.address_details")}</span> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
