import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Mnavbar from "../components/common/MobileNav";
import Footerm from "../components/common/Footer";
import Letter from "../components/about/Letter";
import MeetTheTeam from "../components/about/MeetTheTeam";

// Image Imports
import topLogo from "../assets/images/about/toplogo.svg";
import munLogo from "../assets/images/about/munlogo.svg";

const AboutUs = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 950); // Increased breakpoint for better transition
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full font-montserrat overflow-x-hidden relative">
      <Mnavbar />
      {!isMobileView && <Navbar />}

      {/* 1. TOP WHITE SECTION */}
      <div className="w-full bg-[#F3F8F9] py-16 md:py-32 flex flex-col justify-center items-center gap-6">
        <div className="w-32 md:w-56 h-auto">
          <img
            src={topLogo}
            alt="UN Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* 2. BLUE SECTION */}
      <div className="w-full bg-gradient-to-b from-[#4b56d2] to-[#4b56d2] text-white py-12 md:py-20 flex justify-center">
        <p className="max-w-6xl w-full text-sm md:text-base lg:text-lg leading-loose font-light text-justify px-6 md:px-12">
          The MUN, or the Model United Nations, is a simulation of the actual
          UN. The participants pretend to represent a nation, and come to
          together to discuss the very same issues being debated upon in the UN.
          This gives a normal person the opportunity to know what’s its like to
          stand for something more than himself/herself, and to experience the
          complicated the verbal dance and that politicians and delegates take
          part in everyday. The MUN is a conclave for ideation by the fresh
          minds of our nation, to brainstorm solutions to problems plaguing our
          world.
        </p>
      </div>

      {/* 3. RED SECTION */}
      <div className="w-full bg-[#EE3C66] text-white py-12 md:py-20 px-3 md:px-20 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="w-full md:w-3/5">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            About IITGMUN Edition XVIII
          </h2>
          <p className="text-sm md:text-base lg:text-lg leading-loose font-light text-justify">
            The MUN is a conclave for ideation by the fresh minds of our nation,
            to brainstorm solutions to problems plaguing our world. Participants
            work through the tenuous relationships between nations as they
            deliberate towards a resolution - and they get to look nice in a
            suit and tie while they do it!
          </p>
        </div>

        {/* Logo Section */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-80 md:h-80 flex items-center justify-center bg-[#EE3C66] rounded-full p-4 backdrop-blur-sm">
            <img
              src={munLogo}
              alt="IITGMUN Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      <Letter />
      <MeetTheTeam />
      <Footerm />
    </div>
  );
};

export default AboutUs;
