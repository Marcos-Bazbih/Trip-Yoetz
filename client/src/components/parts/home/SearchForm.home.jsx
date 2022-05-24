import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../../contexts/data-context";
import { submitSearchForm, handleOnChange } from "../../../utils/searchFormFunc";
import { getCityByName } from "../../../services/city-service"
import SearchIcon from '@mui/icons-material/Search';
import GreetUser from "./GreetUser.home";

const SearchForm = () => {
    const { setLoader, setCity, user } = useContext(MainContext);
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoader(true);
        submitSearchForm(setLoader, search, getCityByName, setCity, navigate, setSearchError)
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            {user.isLogin && <GreetUser user={user} />}
            <h2 className="error-msg">{searchError}</h2>
            <input className="search-input" type="text"
                onChange={(e) => { handleOnChange(e, setSearch) }}
                placeholder="where do you want to travel?"
            />
            <SearchIcon className="search-icon" />
        </form>
    );
};

export default SearchForm;