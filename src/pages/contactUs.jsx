import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Mnavbar from "../components/common/MobileNav";
import Footerm from "../components/common/Footer";
import ContactDetails from "../components/contact/ContactDetails";
import Map from "../components/contact/Map";

const ContactUs = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-stone-100 min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Mnavbar />
      {!isMobileView && <Navbar />}

      <div className="flex-grow w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-12 pb-20">
        <div className="mt-24 mb-16">
          {/* Added font-extrabold here for maximum boldness */}
          <h1 className="text-blue-800 text-6xl md:text-7xl font-extrabold font-europa leading-tight -mb-4">
            For more queries
          </h1>
          <p className="text-rose-500 text-2xl md:text-3xl font-medium font-montreal">
            We’d love to hear from you
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-0">
          <div className="w-full lg:w-5/12 flex flex-col justify-start pt-4">
            <ContactDetails />
          </div>
          <div className="w-full lg:w-7/12 h-[400px] md:h-[500px] pr-16">
            <Map />
          </div>
        </div>
      </div>

      <Footerm />
    </div>
  );
};

export default ContactUs;
