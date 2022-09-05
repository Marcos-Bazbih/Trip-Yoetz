import { useContext, useState } from 'react';
import { DataContext } from '../../contexts/data-context';
import {
    sortByRatingHighToLow, sortByRatingLowToHigh,
    sortByNameA_Z, sortByNameZ_A, sortByPriceHighToLow, sortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import useCityData from '../../hooks/useCityData';
import { selectOptions } from "../parts/category-page/selectedOptions"
import CategoryPage from '../parts/category-page';

const Hotels = () => {
    const { hotelsDispatch } = useContext(DataContext);
    const { hotels } = useCityData();
    const [selected, setSelected] = useState(selectOptions[0].value);

    const selectOnChange = (e) => {
        setSelected(e.target.value);
        handleSelect(e.target.value);
    }
    const handleSelect = (selectOption) => {
        switch (selectOption) {
            case "sortByRatingHighToLow":
                hotelsDispatch(sortByRatingHighToLow(hotels))
                break;
            case "sortByRatingLowToHigh":
                hotelsDispatch(sortByRatingLowToHigh(hotels))
                break;
            case "sortByNameA_Z":
                hotelsDispatch(sortByNameA_Z(hotels))
                break;
            case "sortByNameZ_A":
                hotelsDispatch(sortByNameZ_A(hotels))
                break;
            case "sortByPriceHighToLow":
                hotelsDispatch(sortByPriceHighToLow(hotels))
                break;
            case "sortByPriceLowToHigh":
                hotelsDispatch(sortByPriceLowToHigh(hotels))
                break;
            default:
                break;
        };
    };
    const categoryInfo = {
        categoryName: "Hotels",
        categoryArray: hotels,
        selected,
        selectOnChange
    }

    return (
        <CategoryPage {...categoryInfo} />
    );
};

export default Hotels;