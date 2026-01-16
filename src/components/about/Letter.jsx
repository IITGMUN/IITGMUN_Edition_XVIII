import LetterContent from "./LetterContent";
import bgPattern from "../../assets/images/about/Group 34858.svg";

const Letter = () => {
  return (
    <div className="w-full relative py-8 bg-[#ffffff]">
      {/* Background Image 
          - changed object-cover to object-contain to stop clipping
          - added object-top to anchor it
      */}
      <div className="absolute inset-0 w-full z-0 pointer-events-none">
        <img
          src={bgPattern}
          alt=""
          className="w-full object-contain object-bottom opacity-100"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title 
            - Reduced size: text-2xl md:text-4xl
        */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#D00030] text-left">
          A Letter from our Secretary General
        </h2>

        {/* Content Component */}
        <LetterContent />
      </div>
    </div>
  );
};

export default Letter;
