import "bootstrap-icons/font/bootstrap-icons.css";
// Ensure these paths match your asset structure
import munLogo from "../../assets/images/common/mun.png";
import alcherLogo from "../../assets/images/common/alcher.png";

export default function Footer() {
  return (
    <footer className="bg-[#662532] text-white w-full py-8 px-8 font-['Neue_Montreal']">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* COLUMN 1: Contact & Credits */}
        <div className="flex flex-col space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="self-stretch text-white text-base font-extralight leading-6">
              +91 8089205831
              <br />
              +91 9381843556
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Mail Us</h3>
            <a
              href="mailto:iitgmun@alcheringa.in"
              className="block self-stretch text-white text-base font-extralight leading-6 hover:underline hover:text-gray-200 transition-colors"
            >
              iitgmun@alcheringa.in
            </a>
          </div>
          <div className="pt-2 space-y-1">
            <p className="text-base font-extralight opacity-80 text-white">
              Designed by Atharva Deshmukh
            </p>
            <p className="text-base font-extralight opacity-80 text-white">
              Developed by Shreyansh Kumar, Abhirup Paul
            </p>
          </div>
        </div>

        {/* COLUMN 2: Address & Socials */}
        <div className="flex flex-col space-y-8 text-left">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Address</h3>
            <div className="self-stretch text-white text-base font-extralight leading-6">
              Conference Hall, IIT Guwahati
              <br />
              Guwahati, Assam-781039
            </div>
          </div>

          <div className="flex gap-6 items-center pt-2">
            <a
              href="https://www.instagram.com/iitg_mun/"
              target="_blank"
              rel="noreferrer"
              className="no-underline text-white hover:text-gray-200 transition-colors"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/iitgmun/"
              target="_blank"
              rel="noreferrer"
              className="no-underline text-white hover:text-gray-200 transition-colors"
            >
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/iitgmun"
              target="_blank"
              rel="noreferrer"
              className="no-underline text-white hover:text-gray-200 transition-colors"
            >
              <i className="bi bi-facebook text-2xl"></i>
            </a>
            <a
              href="https://twitter.com/iitg_mun"
              target="_blank"
              rel="noreferrer"
              className="no-underline text-white hover:text-gray-200 transition-colors"
            >
              <i className="bi bi-twitter-x text-2xl"></i>
            </a>
          </div>
        </div>

        {/* COLUMN 3: Alcher Logo */}
        <div className="flex items-center justify-start relative">
          <img
            src={alcherLogo}
            alt="Alcher Logo"
            className="w-full h-48 object-contain object-left"
          />
        </div>

        {/* COLUMN 4: MUN Logo */}
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
