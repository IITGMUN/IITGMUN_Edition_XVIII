import { useState } from "react";
import { Link } from "react-router-dom";
import ham_logo from "../../assets/images/home/Vector 11.png";
import cross_logo from "../../assets/images/home/Vector 10.png";
import home_logo from "../../assets/images/home/Frame 72.png";

export default function MobileNav() {
  // Logic: isOpen = true means menu is visible (cross icon shown)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:hidden">
      {/* Top Bar - Matches Home Page Exactly */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 p-2 flex justify-between items-center shadow-md h-16">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="-ml-8 flex items-center"
        >
          <img src={home_logo} className="h-32" alt="Logo" />
        </Link>
        <div onClick={toggleMenu} className="cursor-pointer p-2">
          <img
            src={isOpen ? cross_logo : ham_logo}
            className="h-8 w-8 -mt-1"
            alt="Menu"
          />
        </div>
      </div>

      {/* Menu Overlay - Matches Home Page Dropdown Style */}
      <div
        className={`fixed top-16 left-0 right-0 bg-blue-600 z-40 p-6 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-white text-center font-bold">
          <Link
            to="/"
            className="text-lg hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/AboutUs"
            className="text-lg hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/PreviousEditions"
            className="text-lg hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            Previous Editions
          </Link>
          <Link
            to="/HallOfFame"
            className="text-lg hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            Hall of Fame
          </Link>
          <Link
            to="/ContactUs"
            className="text-lg hover:text-blue-200"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
