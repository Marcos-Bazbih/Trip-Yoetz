import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MainContext } from '../contexts/data-context';
import { getAllCities } from '../services/city-service';
import { getCityByName } from '../services/city-service';

const useSearch = () => {
    const { setLoader, setCity } = useContext(MainContext);
    const [search, setSearch] = useState('');
    const [cities, setCities] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        getAllCities()
            .then((res) => {
                if (res.success) {
                    setCities(res.data);
                }
            })
        return () => {
            setCities([]);
        }
    }, []);
    useEffect(() => {
        setIsDisabled(true);
    }, [pathname]);
    useEffect(() => {
        if (search.length === 0) setIsDisabled(true);
    }, [search]);

    const handleOnChange = (event, value, reason) => {
        switch (reason) {
            case "clear":
                setSearch("");
                setIsDisabled(true);
                break;
            case "selectOption":
            case "reset":
                setSearch(value);
                setIsDisabled(false);
                break;
            default:
                break;
        }
    };
    const handleOnSubmit = () => {
        setLoader(true);
        getCityByName(search.name)
            .then(res => {
                if (res.success) {
                    localStorage.setItem('city', JSON.stringify(res.data));
                    setCity(res.data);
                    navigate(`/${res.data.name}`);
                    setIsDisabled(true);
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoader(false);
            });
    };
    const handleOnClose = (event, reason) => {
        if (reason === "blur" && !search) {
            setIsDisabled(true);
        }
    };

    return {
        cities,
        isDisabled,
        handleOnChange,
        handleOnSubmit,
        handleOnClose
    };
};

export default useSearch;