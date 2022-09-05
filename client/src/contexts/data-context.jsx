import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import categoriesReducer from "../state-management/reducers/categories-reducer";
import { getUserFromLocalStorage } from "../utils/getUserFromLocalStorage";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [hotels, hotelsDispatch] = useReducer(categoriesReducer, []);
    const [activities, activitiesDispatch] = useReducer(categoriesReducer, []);
    const [restaurants, restaurantsDispatch] = useReducer(categoriesReducer, []);
    const [user, setUser] = useState({});
    const [city, setCity] = useState({});
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getUserFromLocalStorage(setUser);
        if (localStorage.city) {
            setCity(JSON.parse(localStorage.getItem('city')));
        }
    }, []);

    const contextValue = useMemo(() => {
        return {
            hotels, hotelsDispatch, activities, activitiesDispatch,
            restaurants, restaurantsDispatch, user, setUser,
            city, setCity, loader, setLoader
        }
    }, [hotels, activities, restaurants, user, city, loader, setLoader]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;