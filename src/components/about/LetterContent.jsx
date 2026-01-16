// Ensure you have these images in src/assets/images/about/
import samarthletter from "../../assets/images/about/DSC_9304 14.png";

const LetterContent = () => {
  return (
    <>
      <div
        style={{ color: "black" }}
        className="relative min-w-none sm:w-[40vw] sm:min-w-[550px] max-w-[700px] h-contain min-h-740px bg-white mq400:px-4 px-8 py-10 text-xs leading-5 text-[#3245A9] font-montserrat ml-[min(-300px,40vw)] md:mx-auto"
      >
        <p style={{ color: "black" }}>Dear Delegates,</p>
        <br />
        <div className="body">
          <p style={{ color: "black" }}>
            'Be yourself; everyone else is already taken', a timeless quote by
            Oscar Wilde, is something I have lived by and have truly experienced
            firsthand during my time at IITGMUN. Just as being authentic is the
            most vital part of self-growth, we at IITGMUN have always emphasized
            the importance of staying true to our core beliefs and values, while
            also showing tolerance and respect for opinions that differ from our
            own.
            <br />
            <br />
            IITGMUN is an experience that extends beyond simulating a UN
            conference; it is a melting pot of ideas, diplomatic alliances, and
            discussions on geopolitics and foreign policies, all driven by the
            passion and belief in making the world a better place.
            <br />
            <br />
            As the Secretary-General, it is my absolute honour to welcome each
            of you to this journey. I wish for nothing more than three glorious
            days of hearty debates and meaningful discourse, and above all, the
            weaving of indelible memories and ever-lasting friendships.
            <br />
            <br />I invite you to immerse yourselves wholeheartedly in this
            experience: think critically, listen deeply, and act with
            compassion. Together, let us make this conference not just about
            solutions, but also about connections, growth and the shared dream
            of a brighter tomorrow.
          </p>
        </div>
        <br />
        <div className="flex h-contain justify-between items-end">
          <div>
            Yoshita Banerjee <br />
            Secretary General <br />
            IITGMUN Ed XVII
          </div>
          <div className="absolute hidden md:block bottom-0 -right-[400px] z-1 w-[40vw]">
            <img
              className="w-[40vw] max-w-[400px]"
              src={samarthletter}
              alt="Secretary General"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LetterContent;
