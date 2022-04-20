import themeTypes from "../types/theme-types";
import { themes } from "../../contexts/theme-context";

const themeReducer = (state = {}, action) => {
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

export default themeReducer;