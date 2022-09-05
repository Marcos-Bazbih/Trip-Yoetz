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

const selectOptions = [
    { value: '', text: '-- Sort by --' },
    { value: 'sortByRatingHighToLow', text: 'rating high to low' },
    { value: 'sortByRatingLowToHigh', text: 'rating low to high' },
    { value: 'sortByPriceHighToLow', text: 'price high to low' },
    { value: 'sortByPriceLowToHigh', text: 'price low to high' },
    { value: 'sortByNameA_Z', text: 'Name A-Z' },
    { value: 'sortByNameZ_A', text: 'Name Z-A' }
];

const Hotels = () => {
    const { mode } = useContext(ThemeContext);
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

    return (
        <StyledCategoryPage mode={mode}>
            <Navbar />
            <h1 className='category-name-h1'>Hotels</h1>
            <div className='sort-wrapper'>
                <div className='sort-fixed'>
                    <select className='sort-select' value={selected} onChange={selectOnChange}>
                        {selectOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
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