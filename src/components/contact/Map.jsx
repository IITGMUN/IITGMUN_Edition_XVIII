import React from "react";

const Map = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg relative z-0">
      <iframe
        title="IIT Guwahati Map"
        className="w-full h-full"
        // Using a working embed link for IIT Guwahati as a placeholder
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.347295347067!2d91.6926243150296!3d26.189184983444345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a5c62666667%3A0x6666666666666667!2sIndian%20Institute%20of%20Technology%20Guwahati!5e0!3m2!1sen!2sin!4v1653984848484!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Map;
