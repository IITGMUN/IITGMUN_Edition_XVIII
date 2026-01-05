import "./footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// MAKE SURE THESE PATHS ARE CORRECT
import munLogo from "./mun.png";
import alcherLogo from "./alcher.png";

export default function Footer() {
  return (
    <footer className="bg-[#662532] text-white w-full py-12 px-8 font-['Neue_Montreal']">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* COLUMN 1: Contact & Credits */}
        <div className="flex flex-col space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
            <div className="self-stretch text-white text-base font-extralight font-['Neue_Montreal'] leading-6">
              +91 8089205831
              <br />
              +91 9381843556
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Mail Us</h3>
            <a
              href="mailto:iitgmun@alcheringa.in"
              className="block self-stretch text-white text-base font-extralight font-['Neue_Montreal'] leading-6 hover:underline"
            >
              iitgmun@alcheringa.in
            </a>
          </div>

          {/* UPDATED CREDITS FROM YOUR TEXT */}
          <div className="pt-2 space-y-1">
            <p className="text-base font-extralight opacity-80">
              Designed by XYZ
            </p>
            <p className="text-base font-extralight opacity-80">
              Developed by Shreyansh Kumar
            </p>
          </div>
        </div>

        {/* COLUMN 2: Address & Socials */}
        <div className="flex flex-col space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-bold mb-4">Address</h3>
            {/* UPDATED ADDRESS FROM YOUR TEXT */}
            <div className="self-stretch text-white text-base font-extralight font-['Neue_Montreal'] leading-6">
              Conference Hall, IIT Guwahati
              <br />
              Guwahati, Assam-781039
            </div>
          </div>

          {/* UPDATED SOCIAL LINKS FROM YOUR TEXT */}
          <div className="flex gap-6 items-center pt-2">
            <a
              href="https://www.instagram.com/iitg_mun/"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <i className="bi bi-instagram text-2xl text-white"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/iitgmun/"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <i className="bi bi-linkedin text-2xl text-white"></i>
            </a>
            <a
              href="https://www.facebook.com/iitgmun"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <i className="bi bi-facebook text-2xl text-white"></i>
            </a>
            <a
              href="https://twitter.com/iitg_mun"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              <i className="bi bi-twitter-x text-2xl text-white"></i>
            </a>
          </div>
        </div>

        {/* COLUMN 3: Alcher Logo (Left Aligned) */}
        <div className="flex items-center justify-start relative">
          <img
            src={alcherLogo}
            alt="Alcher Logo"
            className="w-full h-48 object-contain object-left"
          />
        </div>

        {/* COLUMN 4: MUN Logo (Left Aligned) */}
        <div className="flex items-center justify-start">
          <img
            src={munLogo}
            alt="MUN Logo"
            className="w-64 h-auto object-contain object-left"
          />
        </div>
      </div>
    </footer>
  );
}
