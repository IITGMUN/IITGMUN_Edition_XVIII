import timelineSvg from "../../assets/images/prevEditions/timeline.svg";

const Timeline = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src={timelineSvg}
        alt="Timeline of Previous Editions"
        className="w-full h-auto object-cover md:object-contain min-h-screen"
      />
    </div>
  );
};

export default Timeline;
