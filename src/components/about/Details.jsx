import React from "react";
// Make sure these logos are in src/assets/images/about/
import linkedinLogo from "../../assets/images/about/linkedinLogo.svg";
import instaLogo from "../../assets/images/about/instaLogo.svg";

const Details = ({ name, position, socialMedia }) => {
  return (
    <div className="text-left ml-2 mt-4 overflow-hidden w-full mr-10 relative -top-24">
      <p className="text-xl lg:text-3xl font-extrabold font-raleway m-0 text-[#051c46] hyphens-auto">
        {name}
      </p>
      <p className="text-lg lg:text-xl text-grey font-light tracking-wider m-0 text-[#051c46] hyphens-auto">
        {position}
      </p>
      <p className="m-0 mt-1 flex items-center">
        <a
          className="mr-2"
          href={`${socialMedia.linkedin}`}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-8" src={linkedinLogo} alt="linkedinLogo" />
        </a>
        <a
          className="mr-2"
          href={`${socialMedia.instagram}`}
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-8" src={instaLogo} alt="instagramLogo" />
        </a>
      </p>
    </div>
  );
};

export default Details;
