import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contexts/data-context';
import { ThemeContext } from '../../contexts/theme-context';
import { GetHotels } from "../../services/hotel-services"
import {
    getDataByCity, sortByRatingHighToLow, sortByRatingLowToHigh,
    sortByNameA_Z, sortByNameZ_A, sortByPriceHighToLow, sortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import Navbar from '../layout/navbar';
import ItemCard from '../parts/ItemCard';
import Loader from '../parts/Loader';
import { StyledCategoryPage } from '../styles/pages/StyledCategoryPage';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';
import useCityData from "../../hooks/useCityData";

const Hotels = () => {
    const { mode } = useContext(ThemeContext);
    const [select, setSelect] = useState("");
    const { city, hotels } = useCityData();

    const selectOnChange = (e) => {
        setSelect(e.target.value)
    }

    // const handleSelect = () => {
    //     setLoader(true);
    //     switch (select) {
    //         case "sortByRatingHighToLow":
    //             GetHotels()
    //                 .then(res => {
    //                     hotelsDispatch(
    //                         sortByRatingHighToLow(res.data, city)
    //                     )
    //                 }).finally(() => {
    //                     setLoader(false)
    //                 });
    //             break;
    //         case "sortByRatingLowToHigh":
    //             GetHotels()
    //                 .then(res => {
    //                     hotelsDispatch(
    //                         sortByRatingLowToHigh(res.data, city)
    //                     )
    //                 }).finally(() => {
    //                     setLoader(false)
    //                 });
    //             break;
    //         case "sortByNameA_Z":
    //             GetHotels()
    //                 .then(res => {
    //                     hotelsDispatch(
    //                         sortByNameA_Z(res.data, city)
    //                     )
    //                 }).finally(() => {
    //                     setLoader(false)
    //                 });
    //             break;
    //         case "sortByNameZ_A":
    //             GetHotels()
    //                 .then(res => {
    //                     hotelsDispatch(
    //                         sortByNameZ_A(res.data, city)
    //                     )
    //                 }).finally(() => {
    //                     setLoader(false)
    //                 });
    //             break;
    //         case "sortByPriceHighToLow":
    //             GetHotels()
    //                 .then(res => {
    //                     hotelsDispatch(
    //                         sortByPriceHighToLow(res.data, city)
    //                     )
    //                 }).finally(() => {
    //                     setLoader(false)
    //                 });
    //             break;
    //         case "sortByPriceLowToHigh":
    //             GetHotels()
    //                 .then(res => {
    //                     hotelsDispatch(
    //                         sortByPriceLowToHigh(res.data, city)
    //                     )
    //                 }).finally(() => {
    //                     setLoader(false)
    //                 });
    //             break;
    //         default:
    //             break;
    //     };
    // };

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
                    <button className='sort-btn'>Sort</button>
                    {/* <button className='sort-btn' onClick={handleSelect}>Sort</button> */}
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