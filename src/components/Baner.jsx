import React, { useState } from "react";
import dubai2 from "../assets/img/dubai2.jpg";

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    date: "",
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
      - **Destination:** ${formData.destination}
      - **Date:** ${formData.date}
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
        setFormData({name: "", destination: "", date: ""});
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
      className="relative bg-cover bg-center"
      style={{backgroundImage: `url(${dubai2})`}}>
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black bg-opacity-40 z-0"></div>

      <div className="w-full max-w-5xl mx-auto relative px-4 z-10">
        {/* Banner Content */}
        <div className=" py-48 h-full flex flex-col justify-center items-start text-left text-white ">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Sayohat qilishni xohlaysizmi?
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl">
            Sayohat orzularingizni haqiqatga aylantiring: rejalashtiring, kashf
            qiling va unutilmas xotiralar yarating.
          </p>

          {/* Call to Action Button */}
          <a
            href="#bron"
            className="btn-yel">
            Ko'proq bilish
          </a>
        </div>

        {/* Form Section */}
        <div className=" bg-white py-4 px-6 md:px-12  border-b-4 border-b-yellow-500">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4  ">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ismingiz..."
              className="border-b border-b-gray-300  px-4 py-2 focus:outline-none focus:border-none"
            />

            {/* Destination Input */}
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Manzilingiz..."
              className="border-b border-b-gray-300  px-4 py-2 focus:outline-none focus:border-none"
            />

            {/* Date Input */}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border-b border-b-gray-300  px-4 py-2 focus:outline-none focus:border-none"
              
              onInput={(e) => console.log(e.target.value)}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-yel">
              Joy Band Qilish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;