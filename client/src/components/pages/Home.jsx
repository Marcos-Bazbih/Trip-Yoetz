import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "../../contexts/data-context";
import { GetCityByName } from "../../services/city-service"
import { useNavigate } from "react-router-dom";
import { StyledHome } from "../styles/pages/StyledHome";
import { ThemeContext } from "../../contexts/theme-context";
import { SendSearchForm, HandleOnChange } from "../../utils/SearchForm-functions";
import SearchIcon from '@mui/icons-material/Search';
import Loader from "../parts/Loader";

const Home = () => {
    const { loader, setLoader, user, setCity } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const [greetUser, setGreetUser] = useState("");
    const [search, setSearch] = useState("");
    const errorRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        const hours = new Date().getHours();
        if (hours >= 6 && hours <= 11) setGreetUser(`Good morning`);
        else if (hours >= 12 && hours <= 17) setGreetUser(`Good afternoon`);
        else if (hours >= 18 && hours <= 21) setGreetUser(`Good evening`);
        else { setGreetUser(`Good night`); }
    }, [user])

    const handleSubmit = (event) => {
        setLoader(true);
        SendSearchForm(setLoader, event, search, GetCityByName, setCity, navigate, errorRef)
    };

    return (
        <StyledHome mode={mode}>
            {
                loader
                    ?
                    <Loader />
                    :
                    <>
                        <form className="search-form" onSubmit={handleSubmit}>
                            <h2 ref={errorRef} className="error-msg">{''}</h2>
                            {user.isLogin && greetUser
                                ?
                                <h1 className="greet-user">{greetUser} <span>{user.name} {user.lastName}</span></h1>
                                :
                                null
                            }
                            <input className="search-input" type="text"
                                onChange={(e) => { HandleOnChange(e, setSearch) }}
                                placeholder="where do you want to travel?"
                            />
                            <SearchIcon className="search-icon" />
                        </form>
                    </>
            }
        </StyledHome>
    )
}
export default Home;