import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../../contexts/data-context";
import { ThemeContext } from "../../../contexts/theme-context";
import { StyledNavbar } from "../../styles/layout/StyledNavbar";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BigNavbar from "./BigNavbar";
import MiniNavbar from "./MiniNavbar";


const Navbar = () => {
    const { city } = useContext(DataContext);
    const { mode } = useContext(ThemeContext);
    const { pathname } = useLocation();
    const { width } = useWindowDimensions();

    const highlightCurrentRoute = (route) => {
        return pathname === route ? " highlight-current-route" : "";
    };
    const navbarProps = { city, highlightCurrentRoute };
    
    return (
        <StyledNavbar mode={mode}>
            {
                width > 768
                    ?
                    <BigNavbar {...navbarProps} />
                    :
                    <MiniNavbar {...navbarProps} />
            }
        </StyledNavbar>
    );
};

export default Navbar;