import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../contexts/data-context';
import { ThemeContext } from '../../contexts/theme-context';
import { GetHotels } from "../../services/hotel-services"
import {
    GetDataByName, SortByRatingHighToLow, SortByRatingLowToHigh,
    SortByNameA_Z, SortByNameZ_A, SortByPriceHighToLow, SortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import Navbar from '../layout/Navbar';
import ItemCard from '../parts/ItemCard';
import Loader from '../parts/Loader';
import { StyledCategoryPage } from '../styles/pages/StyledCategoryPage';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';


const Hotels = () => {
    const { loader, setLoader, hotels, hotelsDispatch, city } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const [select, setSelect] = useState("");

    useEffect(() => {
        setLoader(true);
        GetHotels()
            .then(res => {
                hotelsDispatch(
                    GetDataByName(res.data, city)
                )
            })
            .finally(() => {
                setLoader(false)
            })
    }, [hotelsDispatch, city, setLoader]);

    const selectOnChange = (e) => {
        setSelect(e.target.value)
    }

    const handleSelect = () => {
        setLoader(true);
        switch (select) {
            case "sortByRatingHighToLow":
                GetHotels()
                    .then(res => {
                        hotelsDispatch(
                            SortByRatingHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByRatingLowToHigh":
                GetHotels()
                    .then(res => {
                        hotelsDispatch(
                            SortByRatingLowToHigh(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameA_Z":
                GetHotels()
                    .then(res => {
                        hotelsDispatch(
                            SortByNameA_Z(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameZ_A":
                GetHotels()
                    .then(res => {
                        hotelsDispatch(
                            SortByNameZ_A(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceHighToLow":
                GetHotels()
                    .then(res => {
                        hotelsDispatch(
                            SortByPriceHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceLowToHigh":
                GetHotels()
                    .then(res => {
                        hotelsDispatch(
                            SortByPriceLowToHigh(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            default:
                break;
        };
    };

    return (
        <StyledCategoryPage mode={mode}>
            {loader && <Loader />}
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