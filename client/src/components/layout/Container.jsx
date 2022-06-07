import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MainContext } from "../../contexts/data-context";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledContainer } from "../styles/layout/Container.styled";
import Loader from "../parts/Loader";

const Container = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  const { loader } = useContext(MainContext);
  const scrollToTopRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTopRef.current.scrollTop = 0;
  }, [pathname])

  return (
    <StyledContainer ref={scrollToTopRef} mode={mode}>
      {loader && <Loader />}
      {children}
    </StyledContainer>
  );
};

export default Container;