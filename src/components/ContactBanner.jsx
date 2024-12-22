import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const ContactBanner = () => {

  const {t} = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "7986038457:AAG-EENrQ4wIenJxrWnmnzbTXQYlKhJMpOQ"; // Replace with your bot token
    const chatId = "-1002474691071"; // Replace with your chat/channel ID

    const message = `
        📝 **New Booking Request**
        - **Name:** ${formData.name}
        - **Email:** ${formData.email}
        - **Tel:** ${formData.tel}
        - **Message:** ${formData.message}
      `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      if (response.ok) {
        alert("Form submitted successfully and sent to Telegram!");
        setFormData({name: "", email: "", tel: "", message: ""});
        toggleModal();
      } else {
        alert("Failed to send message to Telegram.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred.");
    }
  };
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
        <p className="text-gray-600 text-lg mb-2">  {t("reservation.director")}</p>
           

        {/* Contact Number */}
        <a
          href="+998951270090"
          className="block hover:underline text-yellow-500 text-2xl font-bold mb-6">
          +998951270090
        </a>

        {/* Call-to-Action Button */}
        <button
          className="btn-yel"
          onClick={toggleModal}>
          {t("reservation.button_reservation")}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start lg:items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 my-10 relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute  right-1/2 translate-x-1/2  -top-4 lg:right-4 text-gray-500 hover:text-yellow-500 bg-white p-2 rounded-full focus:outline-none">
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
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Section */}
              <div className="p-8">
                <h2 className="text-yellow-500 text-lg font-semibold mb-4">
                  Joy Band Qilish
                </h2>
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                  Keling, keyingi sayohatingizni rejalashtiramiz
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                    required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ismingiz"
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                    required
                    
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="Emailingiz"
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                  <input
                  required
                    type="tel"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    placeholder="Telefon raqam"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <textarea
                  required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Qo'shimcha ma'lumotlar"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    rows="4"></textarea>
                  <button
                    type="submit"
                   
                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    Joy band qilish
                  </button>
                </form>
              </div>

              {/* Right Section */}
              <div className="bg-yellow-500 text-white p-8 rounded-r-lg">
                <h2 className="text-lg font-bold mb-4">Biz bilan bog'laning</h2>
                <p className="mb-4">
                  Dam olish uchun sayohatni biz bilan rejalashtiring. Bizning
                  jamoa sizga yordam berishga tayyor.
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Telefon raqam:</span>{" "}
                  +998-77-153-41-41
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Email:</span>{" "}
                  flymoderntravel@mail.ru
                </p>
                <p>
                  <span className="font-semibold">Manzil:</span> Shayxontohur
                  tumani, Jangoh mavzesi, 1-etaj 37-xonadon, Toshkent shahri
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactBanner;
