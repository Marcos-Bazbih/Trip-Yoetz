import { getAvgRating } from "../../utils/getAvgRating";
import categoriesTypes from "../types/categories-types";

const categoriesReducer = (state = [], action) => {
    const { type, payload, removedItem, addedItem } = action;

    switch (type) {
        case categoriesTypes.GET_ALL_DATA:
            return payload;
        case categoriesTypes.GET_DATA_BY_CITY:
            return payload;
        case categoriesTypes.DELETE_ITEM_FROM_DATA:
            return payload.filter((item) => item._id !== removedItem._id);
        case categoriesTypes.ADD_ITEM_TO_DATA:
            return [...payload, addedItem];
        case categoriesTypes.SORT_BY_RATING_HIGH_TO_LOW:
            const ratingHighToLow = payload.sort((a, b) => {
                return Number(getAvgRating(b.rating)) - Number(getAvgRating(a.rating));
            })
            return ratingHighToLow;
        case categoriesTypes.SORT_BY_RATING_LOW_TO_HIGH:
            const ratingToLowHigh = payload.sort((a, b) => {
                return Number(getAvgRating(a.rating)) - Number(getAvgRating(b.rating));
            })
            return ratingToLowHigh;
        case categoriesTypes.SORT_BY_NAME_A_Z:
            const ratingA_Z = payload.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
            return ratingA_Z;
        case categoriesTypes.SORT_BY_NAME_Z_A:
            const ratingZ_A = payload.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            })
            return ratingZ_A;
        case categoriesTypes.SORT_BY_PRICE_HIGH_TO_LOW:
            const priceHighToLow = payload.sort((a, b) => {
                return Number((b.price[0] + b.price[1]) / 2) - Number((a.price[0] + a.price[1]) / 2);
            })
            return priceHighToLow;
        case categoriesTypes.SORT_BY_PRICE_LOW_TO_HIGH:
            const priceLowToHigh = payload.sort((a, b) => {
                return Number((a.price[0] + a.price[1]) / 2) - Number((b.price[0] + b.price[1]) / 2);
            })
            return priceLowToHigh;
        default:
            return state
    }
}

export default categoriesReducer;