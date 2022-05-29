import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../contexts/theme-context";
import { StyledBigHeader } from "../../styles/parts/header/BigHeader.styled";
import ProfileActions from "./ProfileActions";
import ThemeMode from "./ThemeMode";
import SearchForm from "../search-form/SearchForm.header";
import Logo from './Logo';

const BigHeader = () => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledBigHeader mode={mode}>
            <ProfileActions />
            <ThemeMode />
            <div className="about-us-wrapper">
                <Link className="about-us-link" to={"/about"}>About us</Link>
            </div>
            <SearchForm />
            <Logo />
        </StyledBigHeader >
    );
};

export default BigHeader;