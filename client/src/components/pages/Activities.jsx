import { useContext, useState } from 'react';
import { DataContext } from '../../contexts/data-context';
import {
    sortByRatingHighToLow, sortByRatingLowToHigh,
    sortByNameA_Z, sortByNameZ_A, sortByPriceHighToLow, sortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import useCityData from '../../hooks/useCityData';
import { selectOptions } from "../parts/category-page/selectedOptions"
import CategoryPage from '../parts/category-page';

const Activities = () => {
    const { activitiesDispatch } = useContext(DataContext);
    const { activities } = useCityData();
    const [selected, setSelected] = useState(selectOptions[0].value);

    const selectOnChange = (e) => {
        setSelected(e.target.value);
        handleSelect(e.target.value);
    };
    const handleSelect = (selectOption) => {
        switch (selectOption) {
            case "sortByRatingHighToLow":
                activitiesDispatch(sortByRatingHighToLow(activities))
                break;
            case "sortByRatingLowToHigh":
                activitiesDispatch(sortByRatingLowToHigh(activities))
                break;
            case "sortByNameA_Z":
                activitiesDispatch(sortByNameA_Z(activities))
                break;
            case "sortByNameZ_A":
                activitiesDispatch(sortByNameZ_A(activities))
                break;
            case "sortByPriceHighToLow":
                activitiesDispatch(sortByPriceHighToLow(activities))
                break;
            case "sortByPriceLowToHigh":
                activitiesDispatch(sortByPriceLowToHigh(activities))
                break;
            default:
                break;
        };
    };
    const categoryInfo = {
        categoryName: "Activities",
        categoryArray: activities,
        selected,
        selectOnChange
    };

    return (
        <CategoryPage {...categoryInfo} />
    );
};

export default Activities;