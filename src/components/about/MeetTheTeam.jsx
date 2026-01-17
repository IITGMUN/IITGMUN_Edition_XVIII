import React from "react";
import TeamCard from "./TeamCard";

// Image Imports
import ketan from "../../assets/images/about/Profile 4.png";
import adityan from "../../assets/images/about/Profile 5.png";
import pratham from "../../assets/images/about/Profile 6.png";
import samarth from "../../assets/images/about/Profile 7.png";
import advait from "../../assets/images/about/Profile 8.png";
import basith from "../../assets/images/about/Profile 12.png";
import kausth from "../../assets/images/about/Profile 13.png";
import vedika from "../../assets/images/about/Profile 14.png";
import Rishith from "../../assets/images/about/Profile 15.png";
import Rishith2 from "../../assets/images/about/Profile 16.png";
import Rishith3 from "../../assets/images/about/Profile 17.png";

const MeetTheTeam = () => {
  const team = [
    [
      "Thanmai Sai Krishna",
      "Chief of Staff",
      { linkedin: "#", instagram: "#" },
      samarth,
    ],
    [
      "Ashutosh Balasubramaniam",
      "Director of IP",
      { linkedin: "#", instagram: "#" },
      pratham,
    ],
    [
      "Ansul Jain",
      "Director WebOps",
      { linkedin: "#", instagram: "#" },
      vedika,
    ],
    [
      "Ayush Kumar",
      "Director of Public Relations",
      { linkedin: "#", instagram: "#" },
      kausth,
    ],
    [
      "Dhyani Patel",
      "Director Administration",
      { linkedin: "#", instagram: "#" },
      Rishith,
    ],
    [
      "Aarohan Gupta",
      "Director Delegate Affairs",
      { linkedin: "#", instagram: "#" },
      Rishith2,
    ],
    [
      "Rayansh Khamesra",
      "Director Marketing",
      { linkedin: "#", instagram: "#" },
      Rishith3,
    ],
    [
      "Aman Gahukar",
      "Director of Creative Content",
      { linkedin: "#", instagram: "#" },
      advait,
    ],
    [
      "Harishankar Yadav",
      "Director Logistics",
      { linkedin: "#", instagram: "#" },
      basith,
    ],
  ];

  const team2 = [
    [
      "Yoshita Banerjee",
      "Secretary General",
      { linkedin: "#", instagram: "#" },
      adityan,
    ],
    [
      "Divya Mate",
      "Director General",
      { linkedin: "#", instagram: "#" },
      ketan,
    ],
  ];

  return (
    <div className="px-4 py-10 w-full relative bg-[#F3F8F9] mt-20">
      {/* Updated Header Section with Fading Lines */}
      <div className="w-full flex justify-center mb-36 mt-8">
        <div className="inline-flex justify-start items-center gap-3 md:gap-6">
          {/* Left Line: Fades from Transparent (left) to Blue (right) */}
          <div className="w-16 md:w-44 h-[3px] bg-gradient-to-r from-transparent to-blue-800 rounded-l-full"></div>

          {/* Text */}
          <div className="justify-center text-blue-800 text-4xl md:text-5xl font-europa leading-6 text-center font-extrabold">
            Meet the Team
          </div>

          {/* Right Line: Fades from Blue (left) to Transparent (right) */}
          <div className="w-16 md:w-44 h-[3px] bg-gradient-to-r from-blue-800 to-transparent rounded-r-full"></div>
        </div>
      </div>

      {/* High Council Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
        {team2.map(([name, position, socialMedia, img]) => (
          <TeamCard
            key={name}
            name={name}
            position={position}
            socialMedia={socialMedia}
            img={img}
            variant="pink"
          />
        ))}
      </div>

      {/* Secretariat Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map(([name, position, socialMedia, img]) => (
          <TeamCard
            key={name}
            name={name}
            position={position}
            socialMedia={socialMedia}
            img={img}
            variant="pink"
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
