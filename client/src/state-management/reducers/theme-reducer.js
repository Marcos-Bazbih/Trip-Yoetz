import themeTypes from "../types/theme-types";

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

export const themeReducer = (state = {}, action) => {
    const { type } = action;

    switch (type) {
        case themeTypes.WHEAT_BLACK:
            return themes.wheat_black;
        case themeTypes.BLACK_GOLD:
            return themes.black_gold;
        case themeTypes.LIGHT_BLUE:
            return themes.light_blue;
        case themeTypes.BLACK_PURPLE:
            return themes.black_purple;
        default:
            return state
    };
};