import PropTypes from "prop-types";
import Details from "./Details";

const TeamCard = ({ name, position, socialMedia, img }) => {
  return (
    // Mobile: Simple flex column, minimal margin.
    // Desktop (lg): Keep original margins and hover effects.
    // Unified layout: Flex column, centered content on all devices.
    <div className="flex flex-col items-center mt-4 mb-4 lg:mt-16 lg:mb-[-50px] group w-full">
      {/* Image Container */}
      <div className="w-full flex flex-col justify-center items-center lg:[&>*:nth-child(odd)]:origin-bottom lg:[&>*:nth-child(odd)]:transition-all lg:[&>*:nth-child(odd)]:ease-in-out lg:[&>*:nth-child(odd)]:delay-150 lg:[&>*:nth-child(odd)]:duration-300 lg:[&>*:nth-child(odd)]:group-hover:scale-[110%]">
        {/* Circle Container: Clips image, handles B/W -> Color, Pink Background */}
        <div className="relative group/image flex justify-center items-end bg-[#F06285] rounded-full overflow-hidden aspect-square w-[160px] sm:w-[200px] lg:w-[220px] lg:grayscale transition-all duration-300 lg:group-hover:grayscale-0">
          <img
            className="h-[115%] w-auto object-contain object-bottom transition-all duration-300"
            src={img}
            alt={name}
          />
        </div>
      </div>

      {/* Details Container */}
      {/* Anchor Text to Circle with consistent spacing */}
      <div className="w-full text-center mt-6 lg:mt-24 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:duration-300 lg:delay-150">
        <Details name={name} position={position} socialMedia={socialMedia} />
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  socialMedia: PropTypes.object,
  img: PropTypes.string.isRequired,
};

export default TeamCard;
