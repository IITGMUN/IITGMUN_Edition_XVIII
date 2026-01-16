import React from "react";
// Make sure these logos are in src/assets/images/about/
import linkedinLogo from "../../assets/images/about/linkedinLogo.svg";
import instaLogo from "../../assets/images/about/instaLogo.svg";

const Details = ({ name = "", position = "", socialMedia }) => {
  const linkedinUrl = socialMedia?.linkedin;
  const instagramUrl = socialMedia?.instagram;

  return (
    <div className="text-left ml-2 mt-4 overflow-hidden w-full mr-10 relative -top-24">
      <p className="text-xl lg:text-3xl font-extrabold font-raleway m-0 text-[#051c46] hyphens-auto">
        {name}
      </p>
      <p className="text-lg lg:text-xl text-grey font-light tracking-wider m-0 text-[#051c46] hyphens-auto">
        {position}
      </p>
      {(linkedinUrl || instagramUrl) && (
        <p className="m-0 mt-1 flex items-center">
          {linkedinUrl && (
            <a
              className="mr-2"
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={linkedinLogo} alt="linkedinLogo" />
            </a>
          )}
          {instagramUrl && (
            <a
              className="mr-2"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-8" src={instaLogo} alt="instagramLogo" />
            </a>
          )}
        </p>
      )}
    </div>
  );
};

export default Details;
