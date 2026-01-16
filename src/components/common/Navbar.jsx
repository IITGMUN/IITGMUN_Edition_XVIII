import React from "react";
import { NavLink } from "react-router-dom";
import mun from "../../assets/images/common/Group 63.png";
import alcher from "../../assets/images/common/Mask group.png";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/AboutUs" },
    { name: "Previous Editions", path: "/PreviousEditions" },
    { name: "Contact us", path: "/ContactUs" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 box-border flex items-center justify-between px-6 py-4 lg:px-12 mt-2 pointer-events-none">
      <div className="pointer-events-auto flex-shrink-0">
        <NavLink to="/">
          <img
            src={mun}
            alt="IITG MUN Logo"
            className="h-14 w-auto md:h-16 object-contain drop-shadow-sm hover:scale-105 transition-transform"
          />
        </NavLink>
      </div>

      <div className="pointer-events-auto absolute left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm rounded-2xl p-1.5 hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => `
              px-6 py-2 text-sm font-bold font-montserrat whitespace-nowrap transition-all duration-300 no-underline
              rounded-xl 
              ${
                isActive
                  ? "bg-[#3B5BDB] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
              } 
            `}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="pointer-events-auto flex-shrink-0">
        <a href="https://alcheringa.in/home" target="_blank" rel="noreferrer">
          <img
            src={alcher}
            alt="Alcheringa Logo"
            className="h-14 w-auto md:h-14 object-contain drop-shadow-sm hover:scale-105 transition-transform"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
