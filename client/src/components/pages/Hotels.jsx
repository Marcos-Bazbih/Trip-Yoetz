import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import {
    sortByRatingHighToLow, sortByRatingLowToHigh,
    sortByNameA_Z, sortByNameZ_A, sortByPriceHighToLow, sortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import Navbar from '../layout/navbar';
import ItemCard from '../parts/ItemCard';
import { StyledCategoryPage } from '../styles/pages/StyledCategoryPage';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';
import { DataContext } from '../../contexts/data-context';
import useCityData from '../../hooks/useCityData';

const Hotels = () => {
    const { mode } = useContext(ThemeContext);
    const { hotelsDispatch } = useContext(DataContext);
    const { hotels } = useCityData();
    const [select, setSelect] = useState("");

    const selectOnChange = (e) => {
        setSelect(e.target.value)
    }

    const handleSelect = () => {
        switch (select) {
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

    return (
        <StyledCategoryPage mode={mode}>
            <Navbar />
            <h1 className='category-name-h1'>Hotels</h1>
            <div className='sort-wrapper'>
                <div className='sort-fixed'>
                    <select className='sort-select' value={select} onChange={selectOnChange}>
                        <option disabled value="" hidden>Sort By</option>
                        <option value={"sortByRatingHighToLow"}>rating high to low</option>
                        <option value={"sortByRatingLowToHigh"}>rating low to high</option>
                        <option value={"sortByPriceHighToLow"}>price high to low</option>
                        <option value={"sortByPriceLowToHigh"}>price low to high</option>
                        <option value={"sortByNameA_Z"}>Name A-Z</option>
                        <option value={"sortByNameZ_A"}>Name Z-A</option>
                    </select>
                    <button className='sort-btn' onClick={handleSelect}>Sort</button>
                </div>
            </div>
            <StyledItemsContainer>
                {hotels.length >= 1 ?
                    hotels.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No hotels found</h1>
                }
            </StyledItemsContainer>
        </StyledCategoryPage>
    );
};

export default Hotels;