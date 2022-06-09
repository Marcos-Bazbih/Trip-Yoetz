import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import hotelsReducer from "../state-management/reducers/hotels-reducer";
import activitiesReducer from "../state-management/reducers/activities-reducer";
import restaurantsReducer from "../state-management/reducers/restaurants-reducer";
import { getUserFromLocalStorage } from "../utils/getUserFromLocalStorage";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
    const [hotels, hotelsDispatch] = useReducer(hotelsReducer, []);
    const [activities, activitiesDispatch] = useReducer(activitiesReducer, []);
    const [restaurants, restaurantsDispatch] = useReducer(restaurantsReducer, []);
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