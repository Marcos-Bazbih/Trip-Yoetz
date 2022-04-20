import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts/data-context";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledNavbar } from "../styles/layout/StyledNavbar";

const Navbar = () => {
    const { city } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);

    return (
        <StyledNavbar mode={mode}>
            <ul className="navbar-list">
                <li><Link className="navbar-link" to={"/cities"}>{city.name}</Link></li>
                <li><Link className="navbar-link" to={"/hotels"}>hotels</Link></li>
                <li><Link className="navbar-link" to={"/restaurants"}>restaurants</Link></li>
                <li><Link className="navbar-link" to={"/activities"}>activities</Link></li>
            </ul>
        </StyledNavbar>
    );
};

export default Navbar;