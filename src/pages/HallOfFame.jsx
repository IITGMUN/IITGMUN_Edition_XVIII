import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Mnavbar from "../components/common/MobileNav";
import Footer from "../components/common/Footer";
import hofHero from "../assets/images/hallOfFame/image.png";
import lok from "../assets/images/hallOfFame/loksabha.svg";
import PropTypes from "prop-types";

// --- Data Configuration ---
const committees = [
  {
    id: "lok-sabha",
    name: "Lok Sabha",
    winners: [
      {
        rank: 1,
        title: "Best Parliamentarian",
        name: "Niaz Tanweer Islam",
        representation: "Asaduddin Owaisi",
        email: "niaztanweer999@gmail.com",
      },
      {
        rank: 2,
        title: "High Commendation",
        name: "Aaditya Raj",
        representation: "Arvind Dharmapuri",
        email: "aadityaraj2488@gmail.com",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Leom Lahkar",
        representation: "Kalyan Banarjee",
        email: "leomlahkar10@gmail.com",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Safdar Hafiz",
        representation: "Mahua Moitra",
        email: "safdarhafiz127@gmail.com",
      },
    ],
    honourableMentions: [
      { name: "Manabjit Ray", representation: "Rahul Gandhi" },
      { name: "Tang Sawmsung", representation: "Nitin Gadkari" },
      { name: "Aman Kumar", representation: "Narendra Modi" },
    ],
    verbalMentions: [
      { name: "Utsab Kumar Bar", representation: "Saumitra Khan" },
      { name: "Rajeswar Nag", representation: "Damodar Agarwal" },
      { name: "Jenifar Azmi", representation: "Shashi Tharoor" },
    ],
  },
  {
    id: "disec",
    name: "DISEC",
    winners: [
      {
        rank: 1,
        title: "Best Delegate",
        name: "Anurag Rajeshkumar Singh",
        representation: "UK",
        email: "anuragsingh25.02.04@gmail.com",
      },
      {
        rank: 2,
        title: "High Commendation",
        name: "Atharav Sharma",
        representation: "Iran",
        email: "atharavsharma2020@gmail.com",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Shivam Thakur",
        representation: "Russian Fed",
        email: "cybershivam348@gmail.com",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Anik Chakraborty",
        representation: "India",
        email: "anik.newme@gmail.com",
      },
    ],
    honourableMentions: [
      { name: "Pranjal Diwakar", representation: "Australia" },
      { name: "Kritya Raj Singh", representation: "Kenya" },
      { name: "Sreejan Das", representation: "Somalia" },
      { name: "Manya Agarwal", representation: "Pakistan" },
      { name: "Aarav Borpujari", representation: "France" },
    ],
    verbalMentions: [],
  },
  {
    id: "ecofin",
    name: "ECOFIN",
    winners: [
      {
        rank: 1,
        title: "Best Delegate",
        name: "Rutajeet Karmakar",
        representation: "Togo",
        email: "hriktrick@gmail.com",
      },
      {
        rank: 2,
        title: "High Commendation",
        name: "Vedansh Pareek",
        representation: "Pakistan",
        email: "vedanshpareek.09@gmail.com",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Shruthika Tiwari",
        representation: "Indonesia",
        email: "tiwaritanuja2@gmail.com",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Yash",
        representation: "S. Africa",
        email: "yashdahiya1281@gmail.com",
      },
    ],
    honourableMentions: [
      { name: "Shanit Tiwari", representation: "Finland" },
      { name: "Jyotika Deviah", representation: "France" },
      { name: "Akshay kumar jha", representation: "Nigeria" },
    ],
    verbalMentions: [
      { name: "Amogh Singh Rathore", representation: "UAE" },
      { name: "Himanshu Patidar", representation: "DPRK" },
      { name: "Sawroop Bastia", representation: "Switzerland" },
    ],
  },
  {
    id: "ip",
    name: "International Press",
    winners: [
      {
        rank: 1,
        title: "Best Journalist",
        name: "Aditya Bhattacharjee",
        representation: "Journalist",
        email: "adityabhattacharjee36@gmail.com",
      },
      {
        rank: 2,
        title: "Best Photojournalist",
        name: "Ryan Roy",
        representation: "Photojournalist",
        email: "ryanroyprime@gmail.com",
      },
    ],
    honourableMentions: [],
    verbalMentions: [],
  },
];

// --- Components ---

const WinnerCard = ({ rank, title, name, representation, email, index }) => {
  // --- Layout Ordering Logic (3 - 1 - 2 - 3) ---
  let orderClass = "lg:order-4";

  if (rank === 1) {
    orderClass = "lg:order-2";
  } else if (rank === 2) {
    orderClass = "lg:order-3";
  } else if (index === 2) {
    orderClass = "lg:order-1";
  }

  // --- Elevation Logic ---
  const isTopRank = rank === 1 || rank === 2;

  const elevationClass = isTopRank
    ? "lg:-mt-16 lg:z-20 shadow-2xl border-2 border-[#f594ac]"
    : "lg:mt-0 lg:z-10 shadow-md";

  const borderClass = rank === 1 ? "border-yellow-400/60" : "border-[#f594ac]";

  return (
    <article
      className={`relative bg-[#f594ac] rounded-xl overflow-hidden flex flex-col w-full lg:flex-1 min-w-[200px] transition-all duration-300 ${orderClass} ${elevationClass} ${isTopRank ? borderClass : ""}`}
    >
      {/* Rank Number Watermark */}
      <div className="absolute -left-2 -top-2 text-white text-[80px] lg:text-[100px] font-extrabold leading-none opacity-50 select-none z-0">
        {rank}
      </div>

      {/* Image Placeholder */}
      <div className="h-28 lg:h-36 w-full bg-black/10 relative z-10"></div>

      {/* Content - Reduced height and padding */}
      <div className="bg-[#1a2872] text-white px-4 py-3 flex flex-col gap-0.5 mt-auto z-10 flex-grow min-h-0">
        <p className="text-[10px] lg:text-xs font-bold text-[#f594ac] uppercase tracking-wider mb-1 line-clamp-1">
          {title}
        </p>
        <h5 className="text-sm lg:text-base font-bold text-white leading-tight">
          {name}
        </h5>
        <p className="text-xs text-[#cfcfcf] font-medium">{representation}</p>
        <p className="text-[10px] text-white/60 break-all mt-1">{email}</p>
      </div>
    </article>
  );
};

WinnerCard.propTypes = {
  rank: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  representation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  index: PropTypes.number,
};

const MentionsList = ({ title, items, alignRight = false }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex-1 w-full">
      <h4
        className={`text-xl text-[#eb3360] font-bold mb-4 text-center ${alignRight ? "lg:text-right" : "lg:text-left"}`}
      >
        {title}
      </h4>
      <div
        className={`flex flex-col gap-3 w-full ${alignRight ? "items-end" : "items-start"}`}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            // CHANGED: w-full ensures the box spans the entire width of the column
            className="bg-white border border-pink-200 rounded-lg py-2 px-4 w-full text-[#1a2872] shadow-sm hover:shadow-md transition-all"
          >
            <div
              className={`font-bold text-sm ${alignRight ? "text-right" : "text-left"}`}
            >
              {item.name}
            </div>
            <div
              className={`text-xs text-slate-500 uppercase tracking-wide ${alignRight ? "text-right" : "text-left"}`}
            >
              {item.representation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MentionsList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  alignRight: PropTypes.bool,
};

const CommitteeBlock = ({
  name,
  winners,
  honourableMentions,
  verbalMentions,
}) => {
  return (
    <section className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-slate-100">
      {/* Top Section: Logo + Winners */}
      <div className="flex flex-col xl:flex-row gap-12 items-start">
        {/* Left Column: Logo & Name */}
        <div className="flex flex-col items-center text-center xl:w-[250px] flex-shrink-0 xl:sticky xl:top-32 h-fit mx-auto xl:mx-0">
          <div className="w-40 h-40 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-inner p-6">
            <img
              src={lok}
              alt={`${name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-black text-[#1a2872] uppercase tracking-tight">
            {name}
          </h3>
          <div className="h-1 w-12 bg-[#eb3360] mt-4 rounded-full"></div>
        </div>

        {/* Right Column: Winners */}
        <div className="flex-1 w-full">
          <h4 className="text-3xl font-bold text-[#283eb4] mb-12 text-center lg:text-left">
            Winners
          </h4>

          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6 lg:gap-4 pt-20 lg:pt-24">
            {winners.map((winner, index) => (
              <WinnerCard
                key={`${winner.name}-${index}`}
                index={index}
                {...winner}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Mentions (Full Width) */}
      {(honourableMentions?.length > 0 || verbalMentions?.length > 0) && (
        <div className="mt-16 bg-[#fde6ec] border border-[#f594ac] rounded-2xl p-6 lg:p-8 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
            {/* Left: Honourable */}
            <MentionsList
              title="Honourable Mentions"
              items={honourableMentions}
            />

            {/* Divider for Desktop */}
            {honourableMentions?.length > 0 && verbalMentions?.length > 0 && (
              <div className="hidden lg:block w-[1px] bg-[#f594ac]/50 self-stretch my-2"></div>
            )}

            {/* Right: Verbal */}
            <MentionsList
              title="Verbal Mentions"
              items={verbalMentions}
              alignRight={true}
            />
          </div>
        </div>
      )}
    </section>
  );
};

CommitteeBlock.propTypes = {
  name: PropTypes.string.isRequired,
  winners: PropTypes.arrayOf(PropTypes.object).isRequired,
  honourableMentions: PropTypes.arrayOf(PropTypes.object),
  verbalMentions: PropTypes.arrayOf(PropTypes.object),
};

export default function HallOfFame() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#f8faff] min-h-screen font-sans text-slate-900 overflow-x-hidden">
      <Mnavbar />
      {!isMobileView && <Navbar />}

      <main className="pt-28 md:pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden mb-16">
          <img
            src={hofHero}
            alt="Hall of Fame banner"
            className="w-full h-auto block min-h-[150px] object-cover"
          />
        </section>

        <div className="flex flex-col items-center mb-16 -mt-8">
          <div className="flex items-center gap-4 lg:gap-8 mb-8 w-full max-w-4xl px-4">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-[#3958FD]"></div>
            <h2 className="text-3xl md:text-5xl font-black text-[#3958FD] font-raleway text-center whitespace-nowrap flex-shrink-0">
              COMMITTEES
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-[#3958FD]"></div>
          </div>
        </div>

        {/* Committees Loop */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 space-y-24">
          {committees.map((committee) => (
            <CommitteeBlock key={committee.id} {...committee} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
