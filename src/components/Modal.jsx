import {useState} from "react";
import {useTranslation} from "react-i18next";

const Modal = ({setIsOpen}) => {
  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const toggleModal = () => {
    setIsOpen(false);
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
        setModalMessage(t("banner.modal.success"));
        setFormData({name: "", email: "", tel: "", message: ""});
        
      } else {
        setModalMessage(t("banner.modal.fail"));
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setModalMessage(t("banner.modal.error"));
    } finally{
        setShowModal(true);
        
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-start lg:items-center justify-center blur_overlay_dark overflow-y-auto">
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
                {t("modal.book")}
              </h2>
              <h1 className="text-2xl font-semibold text-gray-700 mb-6">
                {t("modal.plan")}
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("modal.name")}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("modal.email")}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <input
                  required
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder={t("modal.phone")}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("modal.your_plan")}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows="4"></textarea>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                  {t("modal.button_reservation")}
                </button>
              </form>
            </div>

            {/* Right Section */}
            <div className="bg-yellow-500 text-white p-8 rounded-r-lg">
              <h2 className="text-lg font-medium  mb-4">{t("modal.help.0")}</h2>
              <p className=" mb-5 text-2xl font-semibold">
                {t("modal.help.1")}
              </p>
              <p className="mb-10 ">{t("modal.help.2")}</p>
              <p className="mb-2">
                <span className="font-bold">{t("modal.contact.phone")}</span>{" "}
                {t("modal.contact.phone_details")}
              </p>
              <p className="mb-2">
                <span className="font-bold">{t("modal.contact.email")}</span>{" "}
                {t("modal.contact.email_details")}
              </p>
              <p>
                <span className="font-bold">
                  {t("modal.contact.address")}:{" "}
                </span>
                {t("modal.contact.address_details")}
              </p>
            </div>
          </div>
        </div>
        {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute w-full h-full blur_overlay"></div>
          <div className="bg-white p-6 rounded shadow-lg z-10">
            <p className="text-2xl text-gray-700 font-semibold my-5">{modalMessage}</p>
            <button
              onClick={() => {setShowModal(false);toggleModal()}}
              className="mt-4 btn-yel"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Modal;
