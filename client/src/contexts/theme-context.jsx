import { createContext, useEffect, useReducer } from "react";
import { themeReducer, themes } from "../state-management/reducers/theme-reducer";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [mode, modeDispatch] = useReducer(themeReducer, JSON.parse(localStorage.getItem("tripYoetz_theme")) || themes.white_black);
    
    useEffect(() => {
        localStorage.setItem('tripYoetz_theme', JSON.stringify(mode));
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, modeDispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;