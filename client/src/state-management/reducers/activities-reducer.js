import { getAvgRating } from "../../utils/getAvgRating";
import categoriesTypes from "../types/categories-types";

const activitiesReducer = (state = [], action) => {
    const { type, payload, city } = action;

    switch (type) {
        case categoriesTypes.GET_DATA:
            return payload;

        case categoriesTypes.GET_DATA_BY_NAME:
            return payload.filter(item => item.city === city.name);

        case categoriesTypes.SORT_BY_RATING_HIGH_TO_LOW:
            const ratingHighToLow = payload.filter(item => item.city === city.name).sort((a, b) => {
                return Number(getAvgRating(b.rating)) - Number(getAvgRating(a.rating));
            })
            return ratingHighToLow;

        case categoriesTypes.SORT_BY_RATING_LOW_TO_HIGH:
            const ratingToLowHigh = payload.filter(item => item.city === city.name).sort((a, b) => {
                return Number(getAvgRating(a.rating)) - Number(getAvgRating(b.rating));
            })
            return ratingToLowHigh;

        case categoriesTypes.SORT_BY_NAME_A_Z:
            const ratingA_Z = payload.filter(item => item.city === city.name).sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            return ratingA_Z;

        case categoriesTypes.SORT_BY_NAME_Z_A:
            const ratingZ_A = payload.filter(item => item.city === city.name).sort((a, b) => {
                if (a.name > b.name) { return -1; }
                if (a.name < b.name) { return 1; }
                return 0;
            })
            return ratingZ_A;

        case categoriesTypes.SORT_BY_PRICE_HIGH_TO_LOW:
            const priceHighToLow = payload.filter(item => item.city === city.name).sort((a, b) => {
                return Number((b.price[0] + b.price[1]) / 2) - Number((a.price[0] + a.price[1]) / 2);
            })
            return priceHighToLow;

        case categoriesTypes.SORT_BY_PRICE_LOW_TO_HIGH:
            const priceLowToHigh = payload.filter(item => item.city === city.name).sort((a, b) => {
                return Number((a.price[0] + a.price[1]) / 2) - Number((b.price[0] + b.price[1]) / 2);
            })
            return priceLowToHigh;

        default:
            return state
    }
}

export default activitiesReducer;