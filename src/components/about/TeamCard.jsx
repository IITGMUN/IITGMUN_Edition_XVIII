import React from "react";
import Details from "./Details";

const TeamCard = ({ name, position, socialMedia, img }) => {
  return (
    // Mobile: Simple flex column, minimal margin.
    // Desktop (lg): Keep original margins and hover effects.
    <div className="flex flex-col items-center mt-4 mb-4 lg:mt-16 lg:mb-[-50px] lg:block group">
      {/* Image Container */}
      {/* Mobile: Standard image. Desktop: Grayscale + Scale effect on hover */}
      <div className="w-full flex flex-col justify-center items-center lg:w-[80%] lg:items-end lg:[&>*:nth-child(odd)]:grayscale lg:[&>*:nth-child(odd)]:origin-bottom lg:[&>*:nth-child(odd)]:transition-all lg:[&>*:nth-child(odd)]:ease-in-out lg:[&>*:nth-child(odd)]:delay-150 lg:[&>*:nth-child(odd)]:duration-300 lg:[&>*:nth-child(odd)]:hover:scale-[120%] lg:[&>*:nth-child(odd)]:hover:grayscale-0">
        <div className="w-full flex flex-col items-center justify-end h-auto lg:h-[250px] lg:w-[80%] lg:m-auto">
          {/* Increased mobile image width slightly for better visibility */}
          <img
            className="w-[160px] sm:w-[200px] lg:w-[261px] object-contain"
            src={img}
            alt={name}
          />
        </div>
      </div>

      {/* Details Container */}
      {/* Mobile: Visible by default. Desktop: Opacity 0 -> 1 on hover */}
      <div className="w-full text-center mt-2 lg:mt-0 lg:w-[80%] lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:duration-300 lg:delay-150">
        <Details name={name} position={position} socialMedia={socialMedia} />
      </div>
    </div>
  );
};

export default TeamCard;
