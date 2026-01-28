import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../common/Navbar";
import Mnavbar from "../common/MobileNav"; // Imported shared Mobile Navbar
import Footer from "../common/Footer";
import LiveTimeline from "./LiveTimeline";

// --- ASSET IMPORTS ---
import heroImg from "../../assets/images/home/hero_illustration.svg";
import heroText from "../../assets/images/home/hero_text.svg";
import ecofin_pic from "../../assets/images/home/Mask group.png";
import disec_pic from "../../assets/images/home/Group 34579.png";
import ls1 from "../../assets/images/home/Group 34580.png";
import male_profile from "../../assets/images/home/Male profile.png";
import committees_bg from "../../assets/images/home/Frame 34733.svg";

// Sponsors
import sponsor2 from "../../assets/images/home/midweek.png";
import sponsor3 from "../../assets/images/home/easemytrip.png";
import sponsor4 from "../../assets/images/home/kgen.png";

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

// --- DATA: COMMITTEES ---
const committees = [
  {
    id: "unsc",
    logo: ecofin_pic,
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
    logo: disec_pic,
    title: "UNHRC : Addressing Human Trafficking & Digital Exploitation",
    heading: "",
    subHeading: "",
    description:
      "The committee focuses on preventing human trafficking and technology-enabled exploitation through rights-based legal frameworks and stronger state accountability, while addressing digital threats such as online grooming, sextortion, deepfake abuse, and dark-web trafficking networks. Priorities include regulating recruitment channels and online platforms, strengthening cross-border cooperation, and balancing privacy with lawful surveillance to disrupt trafficking operations. Key issues include ensuring survivor protection and rehabilitation, safeguarding the rights of migrants and refugees, enhancing international monitoring mechanisms, and reinforcing global accountability to combat evolving forms of exploitation.",
    modalAccent: "#E6395E",
  },
  {
    id: "cla",
    logo: ls1,
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
      className="group relative w-[80vw] md:w-full max-w-4xl -ml-3 md:mx-auto mb-6 bg-[#E6395E] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white overflow-hidden min-h-auto md:min-h-[220px]"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

      {/* Logo Section */}
      <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 bg-[#E6395E] rounded-full flex items-center justify-center p-4">
        <img
          src={data.logo}
          alt={data.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left z-10 w-full">
        <h3 className="text-base md:text-xl font-extrabold uppercase tracking-wide md:tracking-wider mb-1 font-raleway leading-tight break-words">
          {data.title}{" "}
          <span className="hidden md:inline font-montserrat font-medium opacity-90 text-sm normal-case ml-2">
            {data.heading && `- ${data.heading}`}
          </span>
        </h3>
        {data.subHeading && (
          <p className="text-xs md:text-sm font-medium opacity-90 mb-2 italic leading-snug break-words">
            {data.subHeading}
          </p>
        )}
        <p className="text-xs md:text-sm leading-snug opacity-95 font-montserrat font-normal line-clamp-4 md:line-clamp-none break-words">
          {data.description}
        </p>
      </div>
    </div>
  );
};

CommitteeCard.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const HomeContent = () => {
  const [activeModalData, setActiveModalData] = useState(null);
  const closeModal = () => setActiveModalData(null);

  return (
    <div className="w-full bg-[#F2F9F6] overflow-x-hidden overflow-y-auto font-montserrat text-slate-800">
      {/* --- MODAL POPUP --- */}
      {activeModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 p-4 animate-fadeIn">
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white p-6 md:p-10 shadow-2xl border-t-8 max-h-[90vh] overflow-y-auto"
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
                  <h2 className="text-xl md:text-3xl font-black text-[#051c46] font-raleway">
                    {activeModalData.heading}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
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

      {/* --- MOBILE NAVBAR (Shared Component) --- */}
      <Mnavbar />

      {/* --- HERO SECTION --- */}
      <div className="relative w-full min-h-screen flex flex-col justify-center mt-20 md:mt-0 -mb-40 md:mb-20 overflow-hidden">
        <div className="z-20 w-full lg:w-1/2 -mt-20 md:-mt-40 lg:-mt-40 flex flex-col items-center lg:items-start px-4 md:px-6">
          <img
            src={heroText}
            alt="IITG MUN 2026 Edition"
            className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] object-contain drop-shadow-md"
          />
        </div>

        <div className="relative lg:absolute bottom-0 right-0 z-10 w-full lg:w-[75%] flex justify-center lg:justify-end lg:-bottom-8 mt-4 lg:mt-0 px-4 lg:px-0">
          <img
            src={heroImg}
            alt="IITG MUN Building"
            className="w-full max-w-[850px] lg:max-w-[1000px] object-contain object-bottom pointer-events-none"
          />
        </div>

        {/* Date Ribbon (Desktop Only) */}
        <div className="absolute top-40 right-4 lg:right-10 z-30 hidden lg:flex items-stretch">
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
            <span className="text-4xl font-black">30-1</span>
            <span className="text-sm tracking-[0.1em] uppercase font-semibold">
              Jan-Feb
            </span>
            <div className="absolute top-full left-0 w-0 h-0 border-t-[16px] border-t-[#27408B] border-l-[16px] border-l-transparent"></div>
          </div>
        </div>
      </div>

      {/* --- QUOTE SECTION --- */}
      <div
        className="relative w-full py-12 md:py-16 overflow-hidden flex items-center justify-center font-['Neue_Montreal',_sans-serif] px-4"
        style={{
          background: [
            "radial-gradient(90% 70% at 50% 40%, rgba(241,248,243,0.18) 0%, rgba(241,248,243,0) 60%)",
            "linear-gradient(180deg, #3958FD 0%, #4b56d2 100%)",
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

        <div className="relative z-10 flex flex-col items-center gap-4 px-4 md:px-6 text-center max-w-5xl w-full">
          <p className="text-stone-100/70 text-lg md:text-3xl font-normal leading-relaxed font-['Neue_Montreal']">
            &quot;That the powerful play goes on, and you may contribute a
            verse.&quot;
          </p>
          <h2 className="text-stone-100 text-2xl md:text-5xl font-bold leading-tight md:leading-[60px] font-['Neue_Montreal']">
            &quot;What verse shall be yours?&quot;
          </h2>
          <p className="text-indigo-200 text-base md:text-3xl font-normal leading-7 md:leading-9 font-['Neue_Montreal']">
            O me! O life!, Walt Whitman
            <br />
            Dead Poets Society.
          </p>
        </div>
      </div>

      {/* --- COMMITTEES SECTION --- */}
      <div
        className="w-full bg-[#F2F9F6] pt-12 md:pt-16 pb-32 md:pb-64 px-6 md:px-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${committees_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="flex items-center gap-4 md:gap-8 mb-8 w-full max-w-4xl px-4">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-[#3958FD]"></div>
            <h2 className="text-2xl md:text-5xl font-black text-[#3958FD] font-raleway text-center whitespace-nowrap flex-shrink-0">
              Join Our Committees
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-[#3958FD]"></div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          {committees.map((comm) => (
            <CommitteeCard
              key={comm.id}
              data={comm}
              onClick={setActiveModalData}
            />
          ))}
        </div>
      </div>

      <LiveTimeline />

      {/* --- STATS SECTION --- */}
      <div className="w-full bg-gradient-to-b from-blue-600 to-blue-800 text-white py-12 md:py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black font-raleway text-center mb-8 md:mb-12">
            By The Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center p-6 hover:bg-white/5 rounded-2xl transition-colors">
              <span className="text-5xl md:text-7xl font-black font-raleway mb-4 text-blue-200">
                1200+
              </span>
              <span className="text-lg md:text-xl font-bold mb-1">
                Delegates
              </span>
              <span className="text-xs md:text-sm opacity-80 uppercase tracking-wider">
                From all over India
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center p-6 hover:bg-white/5 rounded-2xl transition-colors">
              <span className="text-5xl md:text-7xl font-black font-raleway mb-4 text-blue-200">
                100+
              </span>
              <span className="text-lg md:text-xl font-bold mb-1">
                International Press
              </span>
              <span className="text-xs md:text-sm opacity-80 uppercase tracking-wider">
                From Country and Beyond
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center p-6 hover:bg-white/5 rounded-2xl transition-colors">
              <span className="text-5xl md:text-7xl font-black font-raleway mb-4 text-blue-200">
                75+
              </span>
              <span className="text-lg md:text-xl font-bold mb-1">
                Executives
              </span>
              <span className="text-xs md:text-sm opacity-80 uppercase tracking-wider">
                Overall
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- REVIEWS SECTION --- */}
      <div className="w-full bg-[#F06285] py-12 md:py-20 px-4 md:px-6 overflow-hidden">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div className="flex items-center gap-4 md:gap-8 mb-8 w-full max-w-2xl px-4">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-white"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-raleway text-center whitespace-nowrap flex-shrink-0">
              Reviews
            </h2>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-white"></div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto">
          {/* Snap-x for smooth mobile scrolling */}
          <div className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden pb-8 no-scrollbar snap-x snap-mandatory px-4 md:px-0">
            {ReviewData.map((data, index) => (
              <div
                key={index}
                // Responsive card widths: 85vw on mobile, fixed 380px on desktop
                className={`snap-center shrink-0 w-[85vw] md:w-[380px] h-auto min-h-[320px] bg-stone-100 rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-lg`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <img
                    src={data.profileImage}
                    className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-gray-200 shadow-sm"
                    alt={data.title}
                  />
                  <h3 className="font-bold text-lg mb-1 text-gray-800">
                    {data.title}
                  </h3>
                  <p className="text-sm mb-3 uppercase tracking-wide text-gray-600">
                    {data.role}
                  </p>
                  <p className="text-sm leading-relaxed italic text-gray-700">
                    &ldquo;{data.comment}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SPONSORS SECTION --- */}
      <div className="w-full bg-white py-12 md:py-20 px-6">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div className="flex items-center gap-4 md:gap-8 mb-8 w-full max-w-4xl">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-rose-400"></div>
            <h2 className="text-2xl md:text-4xl font-black text-[#F06285] font-raleway text-center whitespace-nowrap flex-shrink-0">
              Our Partners
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-rose-400"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
            {[sponsor2, sponsor3, sponsor4].map((src, i) => (
              <div
                key={i}
                className="w-full max-w-[320px] h-40 md:h-56 flex items-center justify-center p-6 bg-gray-50/50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <img
                  src={src}
                  className={`${
                    i === 2 ? "w-[75%] h-[75%]" : "w-full h-full"
                  } object-contain hover:scale-105 transition-transform`}
                  alt="Partner"
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
          className="block bg-[#E6395E] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-[#c92a4b] hover:shadow-xl hover:-translate-y-1 transition-all animate-bounce text-sm md:text-base"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default HomeContent;
