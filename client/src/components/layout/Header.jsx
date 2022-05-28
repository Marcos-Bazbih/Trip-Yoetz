import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledHeader } from "../styles/layout/StyledHeader";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ProfileActions from "../parts/header/ProfileActions.header";
import ThemeMode from "../parts/header/ThemeMode.header";
import SearchForm from "../parts/search-form/SearchForm.header";

const Header = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <StyledHeader mode={mode}>
      <ProfileActions />
      <ThemeMode />
      <div className="about-us-wrapper">
        <Link className="about-us-link" to={"/about"}>About us</Link>
      </div>
      <SearchForm />
      <div className="logo-wrapper">
        <Link to={"/"} className="TripYoetz-logo">
          <TravelExploreIcon className="logo-icon" />
          TripYoetz
        </Link>
      </div>
    </StyledHeader >
  );
};

export default Header;