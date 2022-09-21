import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { DataContext } from "../../contexts/data-context";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledContainer } from "../styles/layout/Container.styled";
import Loader from "../parts/Loader";

const Container = ({ children }) => {
  const { mode } = useContext(ThemeContext);
  const { loader } = useContext(DataContext);
  const scrollToTopRef = useRef();
  const scrollToTopIcon = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTopRef.current.scrollTop = 0;
  }, [pathname])

  const isPathnameCategory = () => {
    if (pathname.endsWith("hotels")) return true;
    if (pathname.endsWith("restaurants")) return true;
    if (pathname.endsWith("activities")) return true;
    return false;
  };
  const onScrollShowIcon = () => {
    if (isPathnameCategory() && scrollToTopRef.current.scrollTop > 200) {
      scrollToTopIcon.current.classList.add("active")
    } else {
      scrollToTopIcon.current.classList.remove("active")
    }
  };
  const goBackToTop = () => {
    scrollToTopRef.current.scrollTop = 0;
  };

  return (
    <StyledContainer onScroll={onScrollShowIcon} ref={scrollToTopRef} mode={mode}>
      {loader && <Loader />}
      {children}
      <ArrowUpwardIcon onClick={goBackToTop} ref={scrollToTopIcon} className="back-to-top-arrow" />
    </StyledContainer>
  );
};

export default Container;