import React from "react";

const MapBanner = () => {
  return (
    <div id="contact" className="w-full  flex items-center justify-center bg-gray-100">
      
        {/* <!-- How to change your own map point
                           1. Go to Google Maps
                           2. Click on your location point
                           3. Click "Share" and choose "Embed map" tab
                           4. Copy only URL and paste it within the src="" field below
                    --> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47927.13767881944!2d69.18605544863277!3d41.34265639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0a3eff6793%3A0x374f8cd599c1c8fa!2sYagona%20Darcha%20Shaykhontokhur%20tumani!5e0!3m2!1sen!2s!4v1723608225085!5m2!1sen!2s"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          style={{border: 0}}
          ></iframe>
      
    </div>
  );
};

export default MapBanner;
