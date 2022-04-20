import { createContext, useEffect, useReducer } from "react";
import themeReducer from "../state-management/reducers/theme-reducer";

export const ThemeContext = createContext();

export const themes = {
    wheat_black: {
        color: "black",
        background: "wheat"
    },
    black_gold: {
        color: "#f5cb5c",
        background: "#242423"
    },
    light_blue: {
        color: "#14213d",
        background: "#98c1d9"
    },
    black_purple: {
        color: "black",
        background: "#9896f1"
    }
};

const ThemeContextProvider = ({ children }) => {
    const [mode, modeDispatch] = useReducer(themeReducer, JSON.parse(localStorage.getItem("theme")) || themes.wheat_black);
 
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(mode));
    }, [mode]);
    
    return (
        <ThemeContext.Provider value={{ mode, modeDispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;