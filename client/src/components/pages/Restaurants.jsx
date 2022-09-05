import { useContext, useState } from 'react';
import { DataContext } from '../../contexts/data-context';
import {
    sortByRatingHighToLow, sortByRatingLowToHigh,
    sortByNameA_Z, sortByNameZ_A, sortByPriceHighToLow, sortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import useCityData from '../../hooks/useCityData';
import { selectOptions } from "../parts/category-page/selectedOptions"
import CategoryPage from '../parts/category-page';

const Restaurants = () => {
    const { restaurantsDispatch } = useContext(DataContext);
    const { restaurants } = useCityData();
    const [selected, setSelected] = useState(selectOptions[0].value);

    const selectOnChange = (e) => {
        setSelected(e.target.value);
        handleSelect(e.target.value);
    }
    const handleSelect = (selectOption) => {
        switch (selectOption) {
            case "sortByRatingHighToLow":
                restaurantsDispatch(sortByRatingHighToLow(restaurants))
                break;
            case "sortByRatingLowToHigh":
                restaurantsDispatch(sortByRatingLowToHigh(restaurants))
                break;
            case "sortByNameA_Z":
                restaurantsDispatch(sortByNameA_Z(restaurants))
                break;
            case "sortByNameZ_A":
                restaurantsDispatch(sortByNameZ_A(restaurants))
                break;
            case "sortByPriceHighToLow":
                restaurantsDispatch(sortByPriceHighToLow(restaurants))
                break;
            case "sortByPriceLowToHigh":
                restaurantsDispatch(sortByPriceLowToHigh(restaurants))
                break;
            default:
                break;
        };
    };
    const categoryInfo = {
        categoryName: "Restaurants",
        categoryArray: restaurants,
        selected,
        selectOnChange  
    }

    return (
        <CategoryPage {...categoryInfo} />
    );
};

export default Restaurants;