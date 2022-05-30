import { useContext, useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../../contexts/theme-context";
import { StyledFooter } from "../../styles/layout/footer/Footer.styled.js";
import DevelopersSection from "./DevelopersSection";
import FooterDescription from "./FooterDescription";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Footer = () => {
  const { mode } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(true);
  const arrowRef = useRef();
  const scrollToTopRef = useRef();
  const { pathname } = useLocation();
  useEffect(() => {
    if (arrowRef.current.classList.contains("flip-arrow")) {
      toggleFooter();
    }
  }, [pathname]);

  const toggleFooter = () => {
    setToggle(!toggle);
    arrowRef.current.classList.toggle("flip-arrow");
    scrollToTopRef.current.classList.toggle("overflow-scroll");
    scrollToTopRef.current.scrollTop = 0;
  };

  return (
    <StyledFooter toggle={toggle} mode={mode}>
      <button onClick={toggleFooter} className="open-footer-btn">
        <ArrowCircleUpIcon ref={arrowRef} className="open-footer-icon" />
        Who are we?
      </button>
      <div className="overflow-box" ref={scrollToTopRef}>
        <DevelopersSection />
        <FooterDescription />
      </div>
    </StyledFooter>
  );
};

export default Footer;