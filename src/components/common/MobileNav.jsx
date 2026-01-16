import { useState } from "react";
import { Link } from "react-router-dom";
import ham_logo from "../../assets/images/home/Vector 11.png";
import cross_logo from "../../assets/images/home/Vector 10.png";
import home_logo from "../../assets/images/home/Frame 72.png";

// Simple styles for mobile menu if not using Tailwind for this specific part
const menuStyle =
  "fixed top-0 left-0 w-full h-full bg-blue-600 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white p-4 flex justify-between items-center shadow-md">
        <img src={home_logo} className="h-8" alt="Logo" />
        <div onClick={toggleMenu} className="cursor-pointer">
          <img
            src={isOpen ? cross_logo : ham_logo}
            className="h-6 w-6"
            alt="Menu"
          />
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`${menuStyle} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 text-white text-xl font-bold text-center">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/AboutUs" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/PreviousEditions" onClick={toggleMenu}>
            Previous Editions
          </Link>
          <Link to="/ContactUs" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
