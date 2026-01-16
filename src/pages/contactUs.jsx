import { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Mnavbar from '../components/common/MobileNav';
import Footerm from "../components/common/Footer";
import PageHeader from "../components/common/PageHeader";
import ContactDetails from "../components/contact/ContactDetails";
import Map from "../components/contact/Map";

const ContactUs = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 600);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Mnavbar />
            {!isMobileView && <Navbar />}
            <div>
                <PageHeader title={"For more queries"} color={'#FFE3BC'} subtitle={"We'd love to hear from you"}/>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start w-full px-2 mx-auto my-16">
                <div className="md:w-1/3 flex flex-col justify-start">
                    <ContactDetails />
                </div>
                <div className="md:w-2/3 flex justify-center">
                    <Map />
                </div>
            </div>
            <Footerm />
        </>
    );
}

export default ContactUs;