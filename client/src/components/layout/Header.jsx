import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { MainContext } from "../../contexts/data-context.jsx";
import { light_blue, black_gold, black_purple, wheat_black } from "../../state-management/actions/theme-actions";
import { GetCityByName } from "../../services/city-service";
import { StyledHeader } from "../styles/layout/StyledHeader";
import ProfileImg from "../parts/ProfileImg";
import { Logout } from "../../utils/logout";
import { HandleOnChange, SendSearchForm } from "../../utils/SearchForm-functions";
import LogoutIcon from '@mui/icons-material/Logout';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SearchIcon from '@mui/icons-material/Search';
import Loader from "../parts/Loader";

const Header = () => {
  const { loader, setLoader, user, setUser, setCity } = useContext(MainContext);
  const { mode, modeDispatch } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const toggleRef = useRef();
  const searchRef = useRef();
  const errorRef = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    errorRef.current.innerHTML = "";
    searchRef.current.value = "";
  }, [pathname]);

  const handleThemeMode = () => {
    toggleRef.current.classList.toggle('active');
  };
  const selectThemeAndSave = (action) => {
    modeDispatch(action());
    handleThemeMode();
  };
  const handleSubmit = (event) => {
    setLoader(true);
    SendSearchForm(setLoader, event, search, GetCityByName, setCity, navigate, errorRef)
  };

  return (
    <StyledHeader mode={mode}>
      {loader && <Loader />}
      <div className="profile-actions">
        {
          user.isLogin ?
            <>
              <button className="logout-btn" onClick={() => Logout(setUser, navigate)}>
                <LogoutIcon className="logout-icon" />
              </button>
              <ProfileImg user={user} />
            </>
            : <>
              <Link to={"/login"} className="login-register-btn">Login</Link>
              <Link to={"/register"} className="login-register-btn">Register</Link>
            </>
        }
      </div>

      <div className="theme-mode-wrapper">
        <button className="toggle-mode-btn" onClick={handleThemeMode}>
          <ColorLensIcon className="toggle-icon" />
        </button>
        <div ref={toggleRef} className="theme-palette">
          <button className="theme-option" onClick={() => { selectThemeAndSave(wheat_black) }}></button>
          <button className="theme-option" onClick={() => { selectThemeAndSave(black_gold) }}></button>
          <button className="theme-option" onClick={() => { selectThemeAndSave(light_blue) }}></button>
          <button className="theme-option" onClick={() => { selectThemeAndSave(black_purple) }}></button>
        </div>
      </div>

      <div className="about-us-wrapper">
        <Link className="about-us-link" to={"/about"}>About us</Link>
      </div>

      <form className="header-search-form" onSubmit={handleSubmit}>
        <input ref={searchRef} className="header-search-input"
          type="text" onChange={(e) => HandleOnChange(e, setSearch)} />
        <SearchIcon className="header-search-icon" />
        <h2 ref={errorRef} className="error-msg">{''}</h2>
      </form>

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