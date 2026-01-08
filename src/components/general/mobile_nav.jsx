
import{useState} from 'react'
import ham_logo from "../Home/resources/Vector 11.png";
import cross_logo from "../Home/resources/Vector 10.png";
import home_logo from "../Home/resources/Frame 72.png";
import '../Home/mun.css'
import '../Home/mobile_ver.css'
import { Link } from 'react-router-dom';
export default function Mnavbar(){
    var [state2, setState2] = useState(true);

    function handleClick() {
        setState2(!state2);
    }

    return (
    
    <div className="blue_block mobile_line_2 z-50">
<div className="ham_box_senior">
    <img src={home_logo} className="home_logo_img" />
    <img src={ham_logo} onClick={handleClick} className={state2 ? "ham_logo" : "no_logo"} />
    <img src={cross_logo} onClick={handleClick} className={state2 ? "no_logo" : "cross_logo"} />
</div>
<div className={state2 ? "no_logo" : "hamburger_menu"}>
    <img src={ham_logo} onClick={handleClick} className={state2 ? "ham_logo fix_position" : "no_logo"} />
    <img src={cross_logo} onClick={handleClick} className={state2 ? "no_logo" : "cross_logo fix_position"} />
    <div className="ham_box">
                        <div className="link_box"><Link to="/" className="link_txt">Home</Link></div>
                        <div className="link_box"><Link to="/AboutUs" className="link_txt">About Us</Link></div>
                        <div className="link_box"><Link to="/PreviousEditions" className="link_txt">Previous Editions</Link></div>
                        <div className="link_box"><Link to="/ContactUs" className="link_txt">Contact Us</Link></div>
                    </div>
</div>
</div>)
 }