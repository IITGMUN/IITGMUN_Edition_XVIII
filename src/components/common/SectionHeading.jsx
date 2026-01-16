const SectionHeading = ({ title, color }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-8">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-black font-raleway text-center"
        style={{ color: color }}
      >
        {title}
      </h2>
    </div>
  );
};
export default SectionHeading;
