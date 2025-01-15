import  {useState} from "react";
import logo from "../assets/img/logo.png";
import uzb from "../assets/img/uzb.png";
import eng from "../assets/img/eng.png";
import russian from "../assets/img/russian.png";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const { i18n, t } = useTranslation();
  const lang = localStorage.getItem('language') || 'uz'; // Get language from local storage

  
  


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Save language to local storage
     // Close dropdown after selection
    document.getElementById("language").classList.toggle("hidden"); // Close dropdown after selection
   
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const [isRotate, setIsRotate] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };

  const toggleLang = () => {
    setIsRotate(!isRotate);
  };
  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-6 flex justify-between items-center py-3">
        {/* Logo */}
        <a
          href="#"
          className="flex flex-col items-center space-x-2">
          <img
            src={logo}
            alt="Fly Modern Logo"
            className="h-16"
          />
          <div className="flex flex-col text-sm font-bold items-center">
            <h1 className="font-bold text-black">FLY MODERN</h1>
            <p className="text-gray-600">AVIAKASSA VISA TOURISM</p>
          </div>
        </a>

        <div className="flex items-center gap-16 ">
          {/* Navigation Links */}
          <ul className="hidden lg:flex space-x-16 font-semibold text-lg">
            <li>
              <a
                href="#"
                className="hover:text-yellow-500 text-black">
               {t('nav.home')}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-500 text-black">
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a
                href="#tours"
                className="hover:text-yellow-500 text-black">
                {t('nav.tours')}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-500 text-black">
                {t('nav.contact')}
              </a>
            </li>
          </ul>
          {/* Language Selector */}
          <div className="relative hidden lg:block">
            <button
              className="flex items-center  space-x-2 text-black focus:outline-none"
              onClick={() =>
              {document.getElementById("language").classList.toggle("hidden");
                toggleLang()
              }
              }>
              <img
                src={lang=="uz" ? uzb : lang=="ru" ? russian : eng}
                alt="Language"
                className="h-6"
              />
              {isRotate ? (
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
                  ) : (
                    <svg
                      className="h-4 w-4 rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
            </button>
            <ul
              id="language"
              className="absolute right-0 mt-2 w-14 bg-white shadow-lg rounded-md hidden ">
              <li  onClick={() => changeLanguage('uz')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={uzb}
                  alt="Language"
                  className="h-6"
                />
              </li>
              <li  onClick={() => changeLanguage('ru')}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={russian}
                  alt="Language"
                  className="h-6"
                />
              </li>
              <li  onClick={() => changeLanguage('en')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={eng}
                  alt="Language"
                  className="h-6"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Responsive Navigation */}
        <div className="block lg:hidden">
          <button
            className="text-black  text-2xl w-14 h-14 rounded-full  bg-yellow-500 flex justify-center items-center"
            onClick={() => {
              toggleMenu();
              document.getElementById("mobileMenu").classList.toggle("hidden");
            }}>
            {isOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          <ul
            id="mobileMenu"
            className="hidden bg-white shadow-md absolute top-32 left-0  w-full text-center">
            <li className=" border-t border-t-gray-400">
              <a
                onClick={() => {
                  toggleMenu();
                  document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden");
                }}
                href="#"
                className="hover:text-yellow-500 font-bold leading-[100px] text-black">
                {t('nav.home')}
              </a>
            </li>
            <li className="border-t border-t-gray-400">
              <a
                onClick={() => {
                  toggleMenu();
                  document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden");
                }}
                href="#about"
                className="hover:text-yellow-500 text-black leading-[100px] font-bold">
               {t('nav.about')}
              </a>
            </li>
            <li className="border-t border-t-gray-400">
              <a
                onClick={() => {
                  toggleMenu();
                  document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden");
                }}
                href="#tours"
                className="hover:text-yellow-500 text-black leading-[100px] font-bold">
               {t('nav.tours')}
              </a>
            </li>
            <li className="border-t border-t-gray-400">
              <a
                onClick={() => {
                  toggleMenu();
                  document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden");
                }}
                href="#contact"
                className="hover:text-yellow-500 text-black leading-[100px] font-bold">
                {t('nav.contact')}
              </a>
            </li>
            <li className="border-t border-t-gray-400">
              <div className="relative inline-block">
                <button
                  className="flex items-center  space-x-2 text-black focus:outline-none text-center mx-auto h-[100px] "
                  onClick={() => {
                    document
                      .getElementById("language2")
                      .classList.toggle("hidden");
                    toggleLang();
                  }}>
                  <img
                    src={lang=="uz" ? uzb : lang=="ru" ? russian : eng} 
                    alt="Language"
                    className="h-10"
                  />
                  {isRotate ? (
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <ul
                  id="language2"
                  className="absolute right-0 mt-2 w-20  bg-white shadow-lg rounded-md hidden" >
                  <li onClick={()=>{changeLanguage("uz");
                    toggleMenu();
                    document
                    .getElementById("language2")
                    .classList.toggle("hidden");
                    document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden")
                  }}  className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <img

                      src={uzb}
                      alt="Language"
                      className="h-10 mx-auto"
                    />
                  </li>
                  <li  onClick={()=>{changeLanguage("ru"); toggleMenu();
                   document
                   .getElementById("language2")
                   .classList.toggle("hidden");
                    document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden")}}
                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <img
                      src={russian}
                      alt="Language"
                      className="h-10 mx-auto"
                    />
                  </li>
                  <li onClick={()=>{changeLanguage("en");toggleMenu();
                   document
                   .getElementById("language2")
                   .classList.toggle("hidden");
                    document
                    .getElementById("mobileMenu")
                    .classList.toggle("hidden")}}
                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <img
                      src={eng}
                      alt="Language"
                      className="h-10 mx-auto"
                    />
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
