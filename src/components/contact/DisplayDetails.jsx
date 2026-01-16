import React from "react";

const DisplayDetails = ({ imgLink, title, type, detailsArr }) => {
  const links = ["tel", "mailto"];

  return (
    <div className="flex flex-row items-center justify-start gap-8 mb-10 last:mb-0 w-full">
      {/* Icon Section */}
      <div className="flex pt-4">
        <img className="w-24 h-24 object-center" src={imgLink} alt={title} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-start font-montreal">
        <h3 className="text-[#D31C35] uppercase font-bold text-xl tracking-tight mb-1">
          {title}
        </h3>

        <div className="flex flex-col items-start gap-0.5">
          {detailsArr.map((item, index) =>
            links.includes(type) ? (
              <a
                href={`${type}:${item}`}
                key={index}
                className="text-gray-600 hover:text-[#D31C35] text-[15px] font-light leading-tight no-underline block transition-colors duration-300"
              >
                {item}
              </a>
            ) : (
              <p
                key={index}
                className="text-gray-600 text-[15px] font-light leading-tight max-w-[350px] whitespace-pre-line mt-2"
              >
                {item}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayDetails;
