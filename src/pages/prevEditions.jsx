import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Mnavbar from "../components/common/MobileNav";
import Footerm from "../components/common/Footer";
import Timeline from "../components/PrevEditions/timeline";

const PrevEditions = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Using 768px (md) to match Tailwind's breakdown used in MobileNav
      setIsMobileView(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden font-montserrat relative">
      <Mnavbar />
      {!isMobileView && <Navbar />}

      <Timeline />
      <Footerm />
    </div>
  );
};

export default PrevEditions;
