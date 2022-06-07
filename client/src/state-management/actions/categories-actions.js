export const getAllData = (value) => {
    return {
        type: "GET_ALL_DATA",
        payload: value
    }
};
export const getDataByCity = (value) => {
    return {
        type: "GET_DATA_BY_CITY",
        payload: value
    }
};
export const sortByRatingHighToLow = (value, city) => {
    return {
        type: "SORT_BY_RATING_HIGH_TO_LOW",
        payload: value,
        city: city
    }
};
export const sortByRatingLowToHigh = (value, city) => {
    return {
        type: "SORT_BY_RATING_LOW_TO_HIGH",
        payload: value,
        city: city
    }
};
export const sortByNameA_Z = (value, city) => {
    return {
        type: "SORT_BY_NAME_A_Z",
        payload: value,
        city: city
    }
};
export const sortByNameZ_A = (value, city) => {
    return {
        type: "SORT_BY_NAME_Z_A",
        payload: value,
        city: city
    }
};
export const sortByPriceHighToLow = (value, city) => {
    return {
        type: "SORT_BY_PRICE_HIGH_TO_LOW",
        payload: value,
        city: city
    }
};
export const sortByPriceLowToHigh = (value, city) => {
    return {
        type: "SORT_BY_PRICE_LOW_TO_HIGH",
        payload: value,
        city: city
    }
};