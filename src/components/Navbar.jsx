import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/img/logo.png";
import uzb from "../assets/img/uzb.png";
import eng from "../assets/img/eng.png";
import russian from "../assets/img/russian.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex flex-col items-center space-x-2">
          <img
            src={logo}
            alt="Fly Modern Logo"
            className="h-16"
          />
          <div className="flex flex-col text-sm font-bold items-center">
            <h1 className="font-bold text-black">FLY MODERN</h1>
            <p className="text-gray-600">AVIAKASSA VISA TOURISM</p>
          </div>
        </div>

        <div className="flex items-center gap-12 ">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-12 font-bold text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-500 text-black">
                Asosiy sahifa
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-500 text-black">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                className="hover:text-yellow-500 text-black">
                Turlar
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-500 text-black">
                Kontaktlar
              </Link>
            </li>
          </ul>
          {/* Language Selector */}
          <div className="relative" >
            <button
              className="flex items-center  space-x-2 text-black focus:outline-none"
              onClick={() =>
                document.getElementById("language").classList.toggle("hidden")
              }>
              <img
                src={uzb}
                alt="Language"
                className="h-5"
              />
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul
              id="language"
              className="absolute right-0 mt-2 w-14 bg-white shadow-lg rounded-md hidden ">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={uzb}
                  alt="Language"
                  className="h-5"
                />
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={russian}
                  alt="Language"
                  className="h-5"
                />
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={eng}
                  alt="Language"
                  className="h-5"
                />
              </li>
            </ul>
          </div>
          
        </div>
      

      {/* Responsive Navigation */}
      <div className="block md:hidden">
        <button
          className="text-black px-4 py-2"
          onClick={() =>
            document.getElementById("mobileMenu").classList.toggle("hidden")
          }>
          ☰
        </button>
        <ul
          id="mobileMenu"
          className="hidden bg-white shadow-md absolute top-32 left-0  w-full text-center">
          <li className="px-4 py-2">
            <Link
              to="/"
              className="hover:text-yellow-500 text-black">
              Asosiy sahifa
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              to="/about"
              className="hover:text-yellow-500 text-black">
              Biz haqimizda
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              to="/tours"
              className="hover:text-yellow-500 text-black">
              Turlar
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link
              to="/contacts"
              className="hover:text-yellow-500 text-black">
              Kontaktlar
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
