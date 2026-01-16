import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Mnavbar from "../components/common/MobileNav";
import Footerm from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import Timeline from "../components/PrevEditions/Timeline";

const PrevEditions = () => {
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
    <div className="overflow-x-hidden">
      <Mnavbar />
      {!isMobileView && <Navbar />}
      <PageHeader title={"Our Previous Editions"} color={"#FFE3BC"} />
      <Timeline />
      <Footerm />
    </div>
  );
};

export default PrevEditions;
