import { useContext } from "react";
import { StyledHome } from "../styles/pages/StyledHome";
import { ThemeContext } from "../../contexts/theme-context";
import SearchForm from "../parts/search-form/SearchForm.home";

const Home = () => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledHome mode={mode}>
            <SearchForm />
        </StyledHome>
    );
};

export default Home;