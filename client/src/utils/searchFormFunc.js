export const submitSearchForm = (setLoader, search, getCityByName, setCity, navigate, setSearchError) => {
    getCityByName(search.toLowerCase()).then(res => {
        if (res.success) {
            localStorage.setItem('city', JSON.stringify(res.data));
            setCity(res.data);
            navigate("/cities");
        }
        else {
            setLoader(false);
            setSearchError(res.message);
        }
    })
};
export const handleOnChange = (event, setSearch) => {
    setSearch(event.target.value);
};