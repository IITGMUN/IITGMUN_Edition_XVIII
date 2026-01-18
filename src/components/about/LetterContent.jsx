import React from "react";
// Ensure this path is correct for your project
import sgImage from "../../assets/images/about/DSC_9304 14.png";

const LetterContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-24 mx-2 md:ml-16">
      {/* Left Side: White Text Card */}
      <div className="w-full h-full lg:w-3/5 bg-white p-4 md:p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] rounded-sm text-[#1a1a1a] font-montserrat text-xs md:text-sm leading-5 md:leading-6 text-justify relative z-10">
        <p className="mb-3">
          <span className="font-bold">
            ‘Be yourself; everyone else is already taken’
          </span>
          , a timeless quote by Oscar Wilde, is something I have lived by and
          have truly experienced firsthand during my time at IITGMUN. Just as
          being authentic is the most vital part of self-growth, we at IITGMUN
          have always emphasized the importance of staying true to our core
          beliefs and values, while also showing tolerance and respect for
          opinions that differ from our own.
        </p>

        <p className="mb-3">
          IITGMUN is an experience that extends beyond simulating a UN
          conference; it is a melting pot of ideas, diplomatic alliances, and
          discussions on geopolitics and foreign policies, all driven by the
          passion and belief in making the world a better place.
        </p>

        <p className="mb-3">
          As the Secretary-General, it is my absolute honour to welcome each of
          you to this journey. I wish for nothing more than three glorious days
          of hearty debates and meaningful discourse, and above all, the weaving
          of indelible memories and ever-lasting friendships. This year, our
          committees shine a spotlight on issues of profound significance,
          spanning global income inequality, conflicts that have shaped our
          history and future, and the evolving question of secularism in India.
        </p>

        <p className="mb-6">
          I invite you to immerse yourselves wholeheartedly in this experience:
          think critically, listen deeply, and act with compassion. Together,
          let us make this conference not just about solutions, but also about
          connections, growth and the shared dream of a brighter tomorrow.
        </p>

        <div className="font-medium text-[#1a1a1a]">
          <p className="font-bold text-base">Yoshita Banerjee</p>
          <p>Secretary General</p>
          <p>IITGMUN Edition XVII</p>
        </div>
      </div>

      {/* Right Side: Image - HIDDEN ON MOBILE */}
      <div className="hidden lg:flex w-full lg:w-2/5 justify-center lg:justify-center relative z-20">
        {/* MAXIMUM SIZE: w-[1000px] on desktop with large negative margins */}
        <div className="w-[720px] md:w-[1300px] lg:w-[1500px] lg:-ml-28 lg:-mb-32">
          <img
            className="w-full h-auto object-contain drop-shadow-2xl"
            src={sgImage}
            alt="Yoshita Banerjee - Secretary General"
          />
        </div>
      </div>
    </div>
  );
};

export default LetterContent;
