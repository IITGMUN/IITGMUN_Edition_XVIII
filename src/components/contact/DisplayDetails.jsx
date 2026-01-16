const DisplayDetails = ({ imgLink, title, type, detailsArr }) => {
  const links = ["tel", "mailto"];
  return (
    <div className="flex flex-col justify-center items-center text-center mx-2 my-2">
      <img className="w-24" src={imgLink} alt={title} />
      <p className="text-[#8B0000] uppercase font-montserrat font-semibold text-xl mt-2 mb-2">
        {title}
      </p>
      {detailsArr.map((item) =>
        links.includes(type) ? (
          <a
            href={`${type}:${item}`}
            key={item}
            className="text-[#00008B] text-base no-underline mb-1 block"
          >
            {item}
          </a>
        ) : (
          <p key={item} className="text-[#00008B] text-base mb-1">
            {item}
          </p>
        )
      )}
    </div>
  );
};

export default DisplayDetails;
