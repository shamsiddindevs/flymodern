import React from "react";
import {FaInstagram} from "react-icons/fa";
import logo from "../assets/img/logo.png";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Description */}
        <div>
          <div className="text-center md:text-left">
            <Link to="/">
              <img
                src={logo}
                alt="Fly Modern Logo"
                className="mx-auto md:mx-0  h-16 mb-4"
              />
            </Link>
            <h2 className="text-lg font-bold">FLY MODERN</h2>
            <p className="text-sm font-semibold">AVIAKASSA VISA TOURISM</p>
          </div>
          <p className="text-gray-500 mt-4 text-center md:text-left">
            Biz bilan dunyoni zabt eting. Sayohat tashkil qilishda eng yaxshi
            hamkoringiz.
          </p>
          <a
            href="#"
            className="flex justify-center md:justify-start mt-4">
            <FaInstagram className="text-gray-500 text-2xl hover:text-yellow-500 transition" />
          </a>
        </div>

        {/* Useful Links */}
        <div className="md:ml-20">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Foydali Havolalar
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-yellow-500">
                Blog
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-yellow-500">
                Biz bilan Aloqa
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-yellow-500">
                Biz Haqimizda
              </a>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-yellow-500">
                Maxfiylik Siyosati
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Aloqa Ma'lumoti
          </h3>
          <p className="text-gray-600 mb-2">
            Keyingi sayohatingizga tayyor bo‘lib, shaxsiy sayohat yordam va
            so‘rovnoma uchun biz bilan bog‘laning.
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Telefon:</span>{" "}
            <a
              href="tel:+998951270090"
              className="text-yellow-500">
              +998-95-127-00-90
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:flymoderntravel@mail.ru"
              className="text-yellow-500">
              flymoderntravel@mail.ru
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Manzil:</span> Shayxontohur tumani,
            Jangoh mavzesi, 1-etaj 37-xonadon, Toshkent shahri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;