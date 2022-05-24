import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../../contexts/data-context.jsx";
import { handleOnChange, submitSearchForm } from "../../../utils/searchFormFunc";
import { getCityByName } from "../../../services/city-service";
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {
    const { setLoader, setCity } = useContext(MainContext);
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState("");
    const searchRef = useRef();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        setSearchError("");
        searchRef.current.value = "";
    }, [pathname]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoader(true);
        submitSearchForm(setLoader, search, getCityByName, setCity, navigate, setSearchError)
    };

    return (
        <form className="header-search-form" onSubmit={handleSubmit}>
            <input ref={searchRef} className="header-search-input"
                type="text" onChange={(e) => handleOnChange(e, setSearch)} />
            <SearchIcon className="header-search-icon" />
            <h2 className="error-msg">{searchError}</h2>
        </form>
    );
};

export default SearchForm;