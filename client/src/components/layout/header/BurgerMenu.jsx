import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../../contexts/data-context";
import ThemeMode from "./ThemeMode";
import { StyledBurgerMenu } from "../../../components/styles/layout/header/BurgerMenu.styled";
import { ThemeContext } from "../../../contexts/theme-context";
import CloseIcon from '@mui/icons-material/Close';
import useAuth from "../../../hooks/useAuth";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
    const { user } = useContext(DataContext);
    const { mode } = useContext(ThemeContext);
    const { logoutAndClearLocalStorage } = useAuth();
    const { pathname } = useLocation();

    useEffect(() => {
        setIsOpen(false)
    }, [pathname, setIsOpen]);

    return (
        <StyledBurgerMenu mode={mode} left={isOpen ? 0 : -100}>
            <div className="menu-popup">
                <button className="menu-close-btn"
                    onClick={() => { setIsOpen(false) }}>
                    <CloseIcon className="menu-close-icon" />
                </button>
                {
                    user.isLogin ?
                        <>
                            <Link to={"/profile"} className="menu-link">My Profile</Link>
                            <button className="menu-link logout"
                                onClick={logoutAndClearLocalStorage}>
                                Logout
                            </button>
                        </>
                        : <>
                            <Link to={"/login"} className="menu-link">Login</Link>
                            <Link to={"/register"} className="menu-link">Register</Link>
                        </>
                }
                <Link to={"/about"} className="menu-link">About us</Link>
                <ThemeMode />
            </div>
        </StyledBurgerMenu>
    );
};

export default BurgerMenu;