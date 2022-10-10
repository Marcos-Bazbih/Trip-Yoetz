export const getAllData = (value) => {
    return {
        type: "GET_ALL_DATA",
        payload: value
    }
};
export const deleteItemFromData = (value, removedItem) => {
    return {
        type: "DELETE_ITEM_FROM_DATA",
        payload: value,
        removedItem
    }
};
export const addItemToData = (value, addedItem) => {
    return {
        type: "ADD_ITEM_TO_DATA",
        payload: value,
        addedItem
    }
};
export const getDataByCity = (value) => {
    return {
        type: "GET_DATA_BY_CITY",
        payload: value
    }
};
export const sortByRatingHighToLow = (value) => {
    return {
        type: "SORT_BY_RATING_HIGH_TO_LOW",
        payload: value,
    }
};
export const sortByRatingLowToHigh = (value) => {
    return {
        type: "SORT_BY_RATING_LOW_TO_HIGH",
        payload: value
    }
};
export const sortByNameA_Z = (value) => {
    return {
        type: "SORT_BY_NAME_A_Z",
        payload: value
    }
};
export const sortByNameZ_A = (value) => {
    return {
        type: "SORT_BY_NAME_Z_A",
        payload: value
    }
};
export const sortByPriceHighToLow = (value) => {
    return {
        type: "SORT_BY_PRICE_HIGH_TO_LOW",
        payload: value
    }
};
export const sortByPriceLowToHigh = (value) => {
    return {
        type: "SORT_BY_PRICE_LOW_TO_HIGH",
        payload: value
    }
};