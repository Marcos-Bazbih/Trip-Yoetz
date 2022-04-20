import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledFooter } from "../styles/layout/StyledFooter.js";
import ContactFooter from "../parts/ContactFooter.jsx";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Link } from "react-router-dom";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Footer = () => {
  const { mode } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);
  const arrowRef = useRef();

  const toggleFooter = () => {
    setToggle(!toggle);
    arrowRef.current.classList.toggle("flip-arrow");
  }

  return (
    <StyledFooter toggle={toggle} mode={mode}>
      <ContactFooter name="Marcos Bazbih" info="24 years old, Ashdod" email="marcosbazbih@gmail.com" linkedin="https://www.linkedin.com/in/marcos-bazbih/" github="https://github.com/Marcos-Bazbih" img="/marcos_pic.jpg" />
      <ContactFooter name="Tikva Yosef" info="26 years old, Natanya" email="tikvayosef13@gmail.com" linkedin="https://www.linkedin.com/in/tikva-yosef-406bba223/" github="https://github.com/TikvaYosef" img="/PicTikva.jpeg" />
      <ContactFooter name="Avi Admaso" info="26 years old, Ashdod" email="aviadmaso@gmail.com" linkedin="https://www.linkedin.com/in/avi-admaso-a47b13218/" github="https://github.com/avi-admaso" img="/avi_pic.jpeg" />
      <button onClick={toggleFooter} className="open-footer-btn">
        <ArrowCircleUpIcon ref={arrowRef} className="open-footer-icon" />
        Who are we?
      </button>
      <div className="logo">
        <Link to={"/"} className="TripYoetz-logo">
          <TravelExploreIcon className="logo-icon" />
          TripYoetz
        </Link>
        <Link className="about-us-link" to={"/about"}>Learn more</Link>
        <h2 className="copyright">copyright © | 2022 TripYoetz | all right reserved.</h2>
      </div>
    </StyledFooter>
  );
};

export default Footer;



