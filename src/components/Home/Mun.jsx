import React, { useState } from "react";
// You can comment these out if they conflict, but I've overridden most styles with Tailwind classes
// import "./mun.css";
// import "./position.css";
// import "./mobile_ver.css";

import { Carousel } from "@heathmont/moon-core-tw";
import { Link } from "react-router-dom";
import Navbar from "../general/Navbar";
import Footer from "../general/Footerm";

// Assets (Keep your existing imports)
import heroImg from "./resources/hero_illustration.png";
import heroText from "./resources/hero_text.png";
import ecofin_pic from "./Mask group.png";
import disec_pic from "./Group 34579.png";
import ls1 from "./Group 34580.png";
import male_profile from "./resources/Male profile.png";
import ham_logo from "./resources/Vector 11.png";
import cross_logo from "./resources/Vector 10.png";
import home_logo from "./resources/Frame 72.png";
import committees_bg from "./Frame 34733.png";
import sponsor1 from "./new_resources/news18 assam north east combined 1.png";
import sponsor2 from "./new_resources/sp wall.png";
import sponsor3 from "./new_resources/spns33new.png";
import sponsor4 from "./new_resources/tesmaco.png";
import sponsor11 from "./new_resources/dev remake 1.png";
import sponsor12 from "./new_resources/axis.png";
import sponsor13 from "./new_resources/Group.png";

// --- DATA: REVIEWS ---
const ReviewData = [
  {
    profileImage: male_profile,
    title: "Vishwaprasanna Hariharan",
    role: "Delegate",
    comment:
      "It's a really amazing platform to learn not only about the affairs of the world but also about how to articulate your thoughts and put them into words.",
  },
  {
    profileImage: male_profile,
    title: "Aditya Gupta",
    role: "Delegate",
    comment:
      "Had a great time at the conference. It was a great learning experience and I got to meet a lot of new people. Looking forward to the next edition.",
  },
  {
    profileImage: male_profile,
    title: "Sanya Sarhma",
    role: "IP",
    comment:
      "Clicked some of my best pictures here. Had a great time capturing the moments and writing about them. The Secretariat was very supportive and helpful.",
  },
  {
    profileImage: male_profile,
    title: "Parth Shrivatsava",
    role: "Delegate",
    comment:
      "The conference really had me on my toes all the time. Not one single dull moment. The debates were intense and the discussions were very engaging.",
  },
];

// --- DATA: COMMITTEES (Updated from your Image) ---
const committees = [
  {
    id: "unsc",
    logo: ecofin_pic, // Placeholder: Use specific UNSC logo if you have it
    title: "UNSC : BEYOND DETERRENCE",
    heading:
      "Re-imagining security in an Age of Nuclear Shadows and Intelligent Machines",
    subHeading: "",
    description:
      "The UNSC addresses the world’s most urgent security threats, focusing on rising nuclear risks and the rapid militarization of artificial intelligence. The committee aims to prevent escalation, strengthen global non-proliferation norms, and regulate autonomous military technologies to ensure responsible state behavior and long-term international stability.",
    modalAccent: "#E6395E", // Pink
  },
  {
    id: "unhrc",
    logo: disec_pic, // Placeholder
    title: "UNHRC : Addressing Human Trafficking & Digital Exploitation",
    heading: "",
    subHeading: "",
    description:
      "The committee focuses on preventing human trafficking and technology-enabled exploitation through rights-based legal frameworks and stronger state accountability, while addressing digital threats such as online grooming, sextortion, deepfake abuse, and dark-web trafficking networks. Priorities include regulating recruitment channels and online platforms, strengthening cross-border cooperation, and balancing privacy with lawful surveillance to disrupt trafficking operations. Key issues include ensuring survivor protection and rehabilitation, safeguarding the rights of migrants and refugees, enhancing international monitoring mechanisms, and reinforcing global accountability to combat evolving forms of exploitation.",
    modalAccent: "#E6395E",
  },
  {
    id: "cla",
    logo: ls1, // Placeholder
    title:
      "CENTRAL LEGISLATIVE ASSEMBLY 1945 : DECISIONS THAT DEFINED A NATION",
    heading: "Partition of India and integration of princely states",
    subHeading: "",
    description:
      "The Committee of the Indian Assembly 1945 discusses the very important debates before the independence of India and takes up the question of Partition and the integration of the princely states. This covers the widest possible range of political and social groups, including leaders of the Indian National Congress, the All-India Muslim League, representatives of the British administration, rulers and delegates of the Princely States, and voices raised on behalf of religious and regional interests. Delegates will debate constitutional frameworks, communal and territorial issues, and decide upon procedures for unity, division, and accession. The committee, through historic diplomacy and consensus, shall mold the political framework of a post-colonial Indian state.",
    modalAccent: "#E6395E",
  },
];

// --- SUB-COMPONENT: COMMITTEE CARD ---
const CommitteeCard = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data)}
      className="group relative w-full max-w-4xl mx-auto mb-6 bg-[#E6395E] rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center gap-6 text-white overflow-hidden min-h-[260px] md:min-h-[220px]"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

      {/* Logo Section */}
      <div className="w-36 h-36 md:w-44 md:h-44 shrink-0 bg-[#E6395E] rounded-full flex items-center justify-center p-4">
        {/* Using brightness/contrast to try and make logos fit the theme, or remove filter if logos are colored */}
        <img
          src={data.logo}
          alt={data.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left z-10">
        <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-wider mb-1 font-raleway leading-tight">
          {data.title}{" "}
          <span className="hidden md:inline font-montserrat font-medium opacity-90 text-sm normal-case ml-2">
            {data.heading && `- ${data.heading}`}
          </span>
        </h3>
        {data.subHeading && (
          <p className="text-sm font-medium opacity-90 mb-2 italic leading-snug">
            {data.subHeading}
          </p>
        )}
        <p className="text-xs md:text-sm leading-snug opacity-95 font-montserrat font-normal line-clamp-4 md:line-clamp-none">
          {data.description}
        </p>
      </div>
    </div>
  );
};

const Mun = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(true);
  const [activeModalData, setActiveModalData] = useState(null);

  const handleHamburgerClick = () => setHamburgerOpen((prev) => !prev);
  const closeModal = () => setActiveModalData(null);

  return (
    <div className="w-full bg-[#F2F9F6] overflow-x-hidden font-montserrat text-slate-800">
      {/* --- MODAL POPUP --- */}
      {activeModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 p-4 animate-fadeIn">
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white p-6 md:p-10 shadow-2xl border-t-8"
            style={{ borderColor: activeModalData.modalAccent }}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold"
            >
              ✕
            </button>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-gray-50 p-4 border border-gray-100 shadow-sm mx-auto md:mx-0">
                <img
                  src={activeModalData.logo}
                  alt={activeModalData.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                    {activeModalData.title}
                  </p>
                  <h2 className="text-2xl font-black md:text-3xl text-[#051c46] font-raleway">
                    {activeModalData.heading}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">
                  {activeModalData.description}
                </p>
                <div className="pt-4">
                  <button
                    onClick={closeModal}
                    className="rounded-full bg-[#3245A9] px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#263580] transition-colors"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- DESKTOP NAVBAR --- */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* --- MOBILE NAVBAR --- */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-blue-600 p-4 flex justify-between items-center shadow-md">
        <img src={home_logo} className="h-8" alt="Logo" />
        <div onClick={handleHamburgerClick} className="cursor-pointer p-2">
          <img
            src={hamburgerOpen ? ham_logo : cross_logo}
            className="h-6 w-6"
            alt="Menu"
          />
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed top-16 left-0 right-0 bg-blue-600 z-40 p-6 shadow-xl transition-all duration-300 ease-in-out md:hidden ${
          !hamburgerOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-white text-center font-bold">
          <Link to="/" className="text-lg hover:text-blue-200">
            Home
          </Link>
          <Link to="/AboutUs" className="text-lg hover:text-blue-200">
            About Us
          </Link>
          <Link to="/PreviousEditions" className="text-lg hover:text-blue-200">
            Previous Editions
          </Link>
          <Link to="/ContactUs" className="text-lg hover:text-blue-200">
            Contact Us
          </Link>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative w-full min-h-screen flex flex-col justify-center mt-20 md:mt-0 mb-20">
        <div className="z-20 w-full lg:w-1/2 -mt-40 lg:-mt-40 flex flex-col items-center lg:items-start px-6">
          <img
            src={heroText}
            alt="IITG MUN 2026 Edition"
            className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] object-contain drop-shadow-md"
          />
        </div>

        <div className="relative lg:absolute bottom-0 right-0 z-10 w-full lg:w-[75%] flex justify-end lg:-bottom-8">
          <img
            src={heroImg}
            alt="IITG MUN Building"
            className="w-full max-w-[600px] lg:max-w-[1000px] object-contain object-bottom pointer-events-none"
          />
        </div>

        {/* Date Ribbon */}
        <div className="absolute top-40 right-10 z-30 hidden lg:flex items-stretch">
          {/* Pink ribbon flag - behind and left */}
          <div className="relative flex items-center -mr-3 z-0">
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "40px solid #E6395E",
                borderBottom: "44px solid #E6395E",
                borderLeft: "30px solid transparent",
              }}
            ></div>
            <div className="h-full w-12 bg-[#E6395E]"></div>
          </div>

          <div className="bg-[#4169E1] text-white font-bold py-3 px-8 shadow-2xl flex flex-col items-center relative z-10">
            <span className="text-4xl font-black">8-10</span>
            <span className="text-sm tracking-[0.2em] uppercase font-semibold">
              March
            </span>
            {/* Triangle for ribbon effect */}
            <div className="absolute top-full left-0 w-0 h-0 border-t-[16px] border-t-[#27408B] border-l-[16px] border-l-transparent"></div>
          </div>
        </div>
      </div>

      {/* --- QUOTE SECTION --- */}
      <div
        className="relative w-full py-16 overflow-hidden flex items-center justify-center font-['Neue_Montreal',_sans-serif]"
        style={{
          background: [
            "radial-gradient(90% 70% at 50% 40%, rgba(241,248,243,0.18) 0%, rgba(241,248,243,0) 60%)",
            "linear-gradient(135deg, #3958FD 0%, #3958FD 52%, #223597 100%)",
            "radial-gradient(78% 68% at 0% 0%, rgba(34,53,151,0.55) 0%, rgba(34,53,151,0) 55%)",
            "radial-gradient(78% 68% at 100% 0%, rgba(34,53,151,0.55) 0%, rgba(34,53,151,0) 55%)",
          ].join(","),
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,53,151,0.35) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0) 76%, rgba(34,53,151,0.35) 100%)",
            mixBlendMode: "screen",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center max-w-5xl">
          <p className="text-stone-100/70 text-3xl font-normal leading-10 font-['Neue_Montreal']">
            “That the powerful play goes on, and you may contribute a verse.”
          </p>
          <h2 className="text-stone-100 text-5xl font-bold leading-[60px] font-['Neue_Montreal']">
            “What verse shall be yours?”
          </h2>
          <p className="text-indigo-200 text-3xl font-normal leading-9 font-['Neue_Montreal']">
            O me! O life!, Walt Whitman
            <br />
            Dead Poets Society.
          </p>
        </div>
      </div>

      {/* --- COMMITTEES SECTION (NEW DESIGN) --- */}
      <div
        className="w-full bg-[#F2F9F6] pt-16 pb-64 px-4 relative"
        style={{
          backgroundImage: `url(${committees_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-1 w-12 bg-[#3958FD]"></div>
            <h2 className="text-3xl md:text-5xl font-black text-[#3958FD] font-raleway text-center">
              Join Our Committees
            </h2>
            <div className="h-1 w-12 bg-[#3958FD]"></div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="container mx-auto px-2 md:px-6">
          {committees.map((comm) => (
            <CommitteeCard
              key={comm.id}
              data={comm}
              onClick={setActiveModalData}
            />
          ))}
        </div>
      </div>

      {/* --- STATS SECTION (BLUE FOOTER STYLE) --- */}
      <div className="w-full bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-raleway text-center mb-12">
            By The Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center p-6 hover:bg-white/5 rounded-2xl transition-colors">
              <span className="text-6xl md:text-7xl font-black font-raleway mb-4 text-blue-200">
                1200+
              </span>
              <span className="text-xl font-bold mb-1">Delegates</span>
              <span className="text-sm opacity-80 uppercase tracking-wider">
                From all over India
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center p-6 hover:bg-white/5 rounded-2xl transition-colors">
              <span className="text-6xl md:text-7xl font-black font-raleway mb-4 text-blue-200">
                100+
              </span>
              <span className="text-xl font-bold mb-1">
                International Press
              </span>
              <span className="text-sm opacity-80 uppercase tracking-wider">
                From Country and Beyond
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center p-6 hover:bg-white/5 rounded-2xl transition-colors">
              <span className="text-6xl md:text-7xl font-black font-raleway mb-4 text-blue-200">
                75+
              </span>
              <span className="text-xl font-bold mb-1">Executives</span>
              <span className="text-sm opacity-80 uppercase tracking-wider">
                Overall
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- REVIEWS SECTION --- */}
      <div className="w-full bg-[#F06285] py-20 px-6 overflow-hidden">
        <div className="flex flex-col items-center mb-12 relative">
          <div className="w-44 h-0.5 bg-white absolute left-1/2 -translate-x-[calc(50%+120px)] top-1/2"></div>
          <h2 className="text-4xl font-bold text-white font-raleway text-center relative z-10 bg-[#F06285] px-4">
            Reviews
          </h2>
          <div className="w-40 h-0.5 bg-white/70 absolute left-1/2 translate-x-[calc(-50%+120px)] top-1/2"></div>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-8 no-scrollbar">
            {ReviewData.map((data, index) => (
              <div
                key={index}
                className={`${
                  index === ReviewData.length - 1
                    ? "max-w-[380px] md:max-w-[380px] rounded-l-xl"
                    : "max-w-[380px] md:max-w-[380px] rounded-xl"
                } h-80 bg-stone-100 flex-shrink-0 p-8 flex flex-col justify-center`}
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={data.profileImage}
                    className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-gray-200"
                    alt={data.title}
                  />
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {data.title}
                  </h3>
                  <p className="text-sm mb-3 uppercase tracking-wide text-gray-600">
                    {data.role}
                  </p>
                  <p className="text-sm leading-relaxed italic text-gray-700">
                    "{data.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SPONSORS SECTION --- */}
      <div className="w-full bg-white py-20 px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#3245A9] font-raleway text-center mb-2">
            Our Previous Edition Sponsors
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Top Row (Larger) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {[sponsor11, sponsor12, sponsor13].map((src, i) => (
              <div
                key={i}
                className="w-full h-32 flex items-center justify-center p-4"
              >
                <img
                  src={src}
                  className="w-full h-full object-contain hover:scale-105 transition-transform"
                  alt="Sponsor"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row (Standard) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[sponsor1, sponsor2, sponsor3, sponsor4].map((src, i) => (
              <div
                key={i}
                className="w-full h-24 flex items-center justify-center p-4"
              >
                <img
                  src={src}
                  className="w-full h-full object-contain hover:scale-105 transition-transform"
                  alt="Sponsor"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* --- FLOATING APPLY BUTTON --- */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://tr.ee/LOl6SKumoN"
          target="_blank"
          rel="noreferrer"
          className="block bg-[#E6395E] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#c92a4b] hover:shadow-xl hover:-translate-y-1 transition-all animate-bounce"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Mun;
