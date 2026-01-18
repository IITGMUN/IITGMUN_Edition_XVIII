import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Mnavbar from "../components/common/MobileNav"; // Imported Mobile Nav
import Footer from "../components/common/Footer";
import hofHero from "../assets/images/hallOfFame/image.png";
import lok from "../assets/images/hallOfFame/loksabha.svg";
import winnerPortrait from "../assets/images/hallOfFame/delegate.png";

const committees = [
  {
    id: "lok-1",
    name: "Lok Sabha",
    winners: [
      {
        rank: 2,
        title: "Best Delegate",
        name: "Lorem Ipsum",
        blurb:
          "Lorem ipsum lorem ipsum orem ipsum lorem ipsum orem ipsum lorem.",
      },
      {
        rank: 1,
        title: "High Commendation",
        name: "Lorem Ipsum",
        blurb:
          "Experience: A delegation so accomplished and competitive surely pushes one's wit and speech to surpass itself. And for me, this storm of sharp speeches and charismatic chairs, supported by an ever-so efficient organizing committee, left me more capable than before.",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Lorem Ipsum",
        blurb:
          "Lorem ipsum lorem ipsum orem ipsum lorem ipsum orem ipsum lorem.",
      },
    ],
    honourableMentions: ["Delegate 1", "Delegate 2", "Delegate 3"],
  },
  {
    id: "lok-2",
    name: "Lok Sabha",
    winners: [
      {
        rank: 2,
        title: "Best Delegate",
        name: "Lorem Ipsum",
        blurb:
          "Lorem ipsum lorem ipsum orem ipsum lorem ipsum orem ipsum lorem.",
      },
      {
        rank: 1,
        title: "High Commendation",
        name: "Lorem Ipsum",
        blurb:
          "Experience: A delegation so accomplished and competitive surely pushes one's wit and speech to surpass itself. And for me, this storm of sharp speeches and charismatic chairs, supported by an ever-so efficient organizing committee, left me more capable than before.",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Lorem Ipsum",
        blurb:
          "Lorem ipsum lorem ipsum orem ipsum lorem ipsum orem ipsum lorem.",
      },
    ],
    honourableMentions: ["Delegate 4", "Delegate 5", "Delegate 6"],
  },
  {
    id: "lok-3",
    name: "Lok Sabha",
    winners: [
      {
        rank: 2,
        title: "Best Delegate",
        name: "Lorem Ipsum",
        blurb:
          "Lorem ipsum lorem ipsum orem ipsum lorem ipsum orem ipsum lorem.",
      },
      {
        rank: 1,
        title: "High Commendation",
        name: "Lorem Ipsum",
        blurb:
          "Experience: A delegation so accomplished and competitive surely pushes one's wit and speech to surpass itself. And for me, this storm of sharp speeches and charismatic chairs, supported by an ever-so efficient organizing committee, left me more capable than before.",
      },
      {
        rank: 3,
        title: "Special Mention",
        name: "Lorem Ipsum",
        blurb:
          "Lorem ipsum lorem ipsum orem ipsum lorem ipsum orem ipsum lorem.",
      },
    ],
    honourableMentions: ["Delegate 7", "Delegate 8", "Delegate 9"],
  },
];

const WinnerCard = ({ rank, title, name, blurb }) => {
  const cardHeight = rank === 1 ? "min-h-[200px]" : "min-h-[220px]";
  return (
    <article
      // Added lg: prefix to -mt-32 and self-start so they only apply on desktop
      className={`relative bg-[#f594ac] rounded-xl overflow-hidden shadow-md ${cardHeight} flex flex-col max-w-[240px] mx-auto ${
        rank === 1 ? "lg:-mt-32 lg:self-start mt-6 lg:mt-0" : ""
      }`}
    >
      <div className="absolute -left-3 -top-4 text-white text-[120px] font-extrabold leading-none opacity-70 select-none">
        {rank}
      </div>
      <div className="min-h-48 w-full overflow-hidden relative">
        <img
          src={winnerPortrait}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="bg-[#1a2872] text-white px-4 py-4 flex flex-col gap-2 mt-auto">
        <p className="text-base text-[#cfcfcf] leading-tight">{title}</p>
        <p className="text-xl font-semibold text-[#e4e2e2] leading-none">
          {name}
        </p>
        <p className="text-xs leading-relaxed text-white/90 overflow-hidden max-h-20">
          {blurb}
        </p>
      </div>
    </article>
  );
};

const HonourableMentions = ({ mentions }) => {
  return (
    <div className="space-y-3">
      <p className="text-2xl text-[#eb3360] font-semibold text-center md:text-left">
        Honourable mentions
      </p>
      {/* Changed to grid-cols-1 for mobile, md:grid-cols-2, and kept original 3 for desktop */}
      <div className="bg-[#fde6ec] border border-[#f594ac] rounded-2xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentions.map((mention) => (
          <div
            key={mention}
            className="bg-[#c0c0c0] rounded-xl h-24 lg:h-72 flex items-center justify-center text-sm font-semibold text-white"
          >
            {mention}
          </div>
        ))}
      </div>
    </div>
  );
};

const CommitteeBlock = ({ name, winners, honourableMentions }) => {
  return (
    <section className="space-y-8">
      <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src={lok}
            alt={`${name} logo`}
            // Added lg: prefixes to preserve desktop margins, reset for mobile
            className="w-48 h-48 lg:w-64 lg:h-64 object-contain mt-10 lg:mt-64 mr-0 lg:mr-32"
          />
          <h3 className="text-3xl font-black text-[#1a2872] tracking-tight mr-0 lg:mr-36">
            {name}
          </h3>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-center">
            {/* Added lg: prefixes to mb-48 to reduce gap on mobile */}
            <h4 className="text-4xl lg:text-5xl font-black text-[#283eb4] tracking-wide mb-12 lg:mb-48">
              Winners
            </h4>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {winners.map((winner) => (
              <WinnerCard key={winner.rank} {...winner} />
            ))}
          </div>
        </div>
      </div>

      <HonourableMentions mentions={honourableMentions} />
    </section>
  );
};

export default function HallOfFame() {
  // Added Mobile View Logic
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
    <div className="bg-[#f1f8f3] min-h-screen text-slate-900 overflow-x-hidden">
      <Mnavbar />
      {!isMobileView && <Navbar />}

      <main className="pt-28 md:pt-32">
        <section className="relative w-full overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-6 space-y-16 pb-20">
          {committees.map((committee) => (
            <CommitteeBlock key={committee.id} {...committee} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
