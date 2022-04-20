export const GetData = (value) => {
    return {
        type: "GET_DATA",
        payload: value
    }
};
export const SortByRatingHighToLow = (value, city) => {
    return {
        type: "SORT_BY_RATING_HIGH_TO_LOW",
        payload: value,
        city: city
    }
};
export const SortByRatingLowToHigh = (value, city) => {
    return {
        type: "SORT_BY_RATING_LOW_TO_HIGH",
        payload: value,
        city: city
    }
};
export const SortByNameA_Z = (value, city) => {
    return {
        type: "SORT_BY_NAME_A_Z",
        payload: value,
        city: city
    }
};
export const SortByNameZ_A = (value, city) => {
    return {
        type: "SORT_BY_NAME_Z_A",
        payload: value,
        city: city
    }
};
export const GetDataByName = (value, city) => {
    return {
        type: "GET_DATA_BY_NAME",
        payload: value,
        city: city
    }
};
export const SortByPriceHighToLow = (value, city) => {
    return {
        type: "SORT_BY_PRICE_HIGH_TO_LOW",
        payload: value,
        city: city
    }
};
export const SortByPriceLowToHigh = (value, city) => {
    return {
        type: "SORT_BY_PRICE_LOW_TO_HIGH",
        payload: value,
        city: city
    }
};