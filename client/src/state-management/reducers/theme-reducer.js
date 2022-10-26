import themeTypes from "../types/theme-types";

export const themes = {
    white_black: {
        color: "#000000",
        background: "#FFFACF"
    },
    black_grey: {
        color: "#D3D3DD",
        background: "#242423"
    },
    light_dark_blue: {
        color: "#14213d",
        background: "#98c1d9"
    },
    black_purple: {
        color: "#000000",
        background: "#9896f1"
    }
};

export const themeReducer = (state = {}, action) => {
    const { type } = action;

    switch (type) {
        case themeTypes.WHITE_BLACK:
            return themes.white_black;
        case themeTypes.BLACK_GREY:
            return themes.black_grey;
        case themeTypes.LIGHT_DARK_BLUE:
            return themes.light_dark_blue;
        case themeTypes.BLACK_PURPLE:
            return themes.black_purple;
        default:
            return state
    };
};