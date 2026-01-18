import PropTypes from "prop-types";

const PageHeader = ({ title, subtitle, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full py-32 md:py-48 flex flex-col justify-center px-12 relative overflow-hidden"
    >
      <h2 className="text-4xl sm:text-6xl md:text-8xl font-raleway font-extrabold text-[#EC1824] mb-4 z-10">
        {title}
      </h2>
      {subtitle && (
        <h4 className="text-xl md:text-4xl font-bold text-black z-10">
          {subtitle}
        </h4>
      )}
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default PageHeader;
