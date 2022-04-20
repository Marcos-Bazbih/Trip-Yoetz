import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledContainer } from "../styles/layout/StyledContainer";

const Container = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  const scrollToTopRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTopRef.current.scrollTop = 0;
  }, [pathname])

  return (
    <StyledContainer ref={scrollToTopRef} id="mainScroll" mode={mode}>
      {children}
    </StyledContainer>
  );
};

export default Container;