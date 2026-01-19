// Ensure these are in src/assets/images/contact/
import callImg from "../../assets/images/contact/Call.svg";
import mailImg from "../../assets/images/contact/Mail.svg";
import locationImg from "../../assets/images/contact/Location.svg";
import DisplayDetails from "./DisplayDetails";

const ContactDetails = () => {
  const details = [
    [callImg, "Call us", "tel", ["8089205831", "9381843556"]],
    [mailImg, "Mail us", "mailto", ["iitgmun@alcheringa.co.in"]],
    [
      locationImg,
      "Our location",
      "location",
      [
        "Conference Hall, IIT Guwahati, North \nGuwahati, Guwahati, Assam 781039",
      ],
    ],
  ];

  return (
    <div className="flex flex-col justify-between h-full gap-8">
      {details.map(([imgLink, title, type, detailsArr]) => (
        <DisplayDetails
          key={title}
          imgLink={imgLink}
          type={type}
          title={title}
          detailsArr={detailsArr}
        />
      ))}
    </div>
  );
};

export default ContactDetails;
