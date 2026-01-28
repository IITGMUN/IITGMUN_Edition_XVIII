import TeamCard from "./TeamCard";

// Image Imports
import profile1 from "../../assets/images/about/profile 1.png";
import profile2 from "../../assets/images/about/profile 2.png";
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
      "Aditya Dhaniyaal",
      "Chief of Staff",
      { linkedin: "#", instagram: "#" },
      samarth,
    ],
    [
      "Sumant Kumar",
      "Director of IP",
      { linkedin: "#", instagram: "#" },
      pratham,
    ],
    [
      "Kavya Kumar Agarwal",
      "Director WebOps",
      { linkedin: "#", instagram: "#" },
      vedika,
    ],
    [
      "Kamali",
      "Director of Public Relations & Outreach",
      { linkedin: "#", instagram: "#" },
      kausth,
    ],
    [
      "Dev Shukla",
      "Director Administration",
      { linkedin: "#", instagram: "#" },
      Rishith,
    ],
    [
      "Sunke Pranavasree",
      "Director Delegate Affairs",
      { linkedin: "#", instagram: "#" },
      Rishith2,
    ],
    [
      "Vedant Sinha",
      "Director Marketing",
      { linkedin: "#", instagram: "#" },
      Rishith3,
    ],
    [
      "Rabi Sonowal",
      "Director of Creative Content",
      { linkedin: "#", instagram: "#" },
      advait,
    ],
    [
      "Pria",
      "Director Logistics",
      { linkedin: "#", instagram: "#" },
      basith,
    ],
    [
      "Bhuwan Varma",
      "Director of Design",
      { linkedin: "#", instagram: "#" },
      profile1,
    ],
    [
      "Arsh Chand",
      "Director of EB Affairs",
      { linkedin: "#", instagram: "#" },
      profile2,
    ],
  ];

  const team2 = [
    [
      "Vaishnav",
      "Secretary General",
      { linkedin: "#", instagram: "#" },
      adityan,
    ],
    [
      "Ashwitha Manne",
      "Director General",
      { linkedin: "#", instagram: "#" },
      ketan,
    ],
  ];

  return (
    <div className="px-4 py-10 w-full relative bg-[#F3F8F9] mt-20">
      {/* Header Section */}
      {/* Fix: Reduced mb-36 to mb-12 on mobile, kept mb-36 on md/lg */}
      <div className="w-full flex justify-center mb-12 md:mb-36 mt-8">
        <div className="inline-flex justify-start items-center gap-3 md:gap-6">
          <div className="w-16 md:w-44 h-[3px] bg-gradient-to-r from-transparent to-blue-800 rounded-l-full"></div>
          <div className="justify-center text-blue-800 text-3xl md:text-5xl font-europa leading-6 text-center font-extrabold whitespace-nowrap">
            Meet the Team
          </div>
          <div className="w-16 md:w-44 h-[3px] bg-gradient-to-r from-blue-800 to-transparent rounded-r-full"></div>
        </div>
      </div>

      {/* High Council Grid */}
      {/* Fix: Reduced gap-10 to gap-y-12 gap-x-6 on mobile */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-10 max-w-4xl mx-auto mb-12 md:mb-16">
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
      <div className="w-full flex flex-wrap justify-center gap-y-12 md:gap-10 max-w-6xl mx-auto">
        {team.map(([name, position, socialMedia, img]) => (
          <div key={name} className="w-full md:w-[30%] flex justify-center">
            <TeamCard
              name={name}
              position={position}
              socialMedia={socialMedia}
              img={img}
              variant="pink"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
