import Navbar from "../components/common/Navbar";
import MobileNav from "../components/common/MobileNav";
import Footerm from "../components/common/Footer";
import ContactDetails from "../components/contact/ContactDetails";
import Map from "../components/contact/Map";

const ContactUs = () => {
  return (
    <div className="bg-stone-100 min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <MobileNav />

      <div className="flex-grow w-full mx-auto px-2 md:px-8 pt-12 pb-20">
        <div className="mt-24 mb-16">
          {/* Added font-extrabold here for maximum boldness */}
          <h1 className="text-blue-800 text-6xl md:text-7xl font-extrabold font-europa leading-tight -mb-4">
            For more queries
          </h1>
          <p className="text-rose-500 text-2xl md:text-3xl font-medium font-montreal">
            We’d love to hear from you
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-0">
          <div className="w-full lg:w-5/12 flex flex-col justify-start pt-4">
            <ContactDetails />
          </div>
          <div className="w-[90vw] lg:w-7/12 h-[550px] md:h-[500px] lg:mr-16 mt-6">
            <Map />
          </div>
        </div>
      </div>

      <Footerm />
    </div>
  );
};

export default ContactUs;
