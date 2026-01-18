import React from "react";
import linkedinLogo from "../../assets/images/about/linkedinLogo.svg";
import instaLogo from "../../assets/images/about/instaLogo.svg";

const Details = ({ name = "", position = "", socialMedia }) => {
  const linkedinUrl = socialMedia?.linkedin;
  const instagramUrl = socialMedia?.instagram;

  return (
    // Mobile: static positioning, full width.
    // Desktop (lg): relative -top-24 (pulls text up over image area for the effect), fixed width.
    <div className="text-center mx-auto mt-2 lg:mt-4 lg:overflow-hidden w-full px-2 lg:px-0 lg:w-[261px] lg:relative lg:-top-24">
      {/* Name: Smaller on mobile to fit one line if possible */}
      <h3 className="text-lg font-extrabold font-raleway m-0 text-[#051c46] leading-tight lg:text-3xl">
        {name}
      </h3>

      {/* Position */}
      <p className="text-sm font-light tracking-wide m-0 text-[#051c46] mt-1 lg:text-xl lg:mt-0">
        {position}
      </p>

      {/* Social Icons */}
      {(linkedinUrl || instagramUrl) && (
        <div className="mt-2 lg:mt-1 flex items-center justify-center gap-3">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img className="w-6 lg:w-8" src={linkedinLogo} alt="linkedin" />
            </a>
          )}
          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img className="w-6 lg:w-8" src={instaLogo} alt="instagram" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
