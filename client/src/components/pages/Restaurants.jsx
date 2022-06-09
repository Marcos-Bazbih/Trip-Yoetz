import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contexts/data-context';
import { ThemeContext } from '../../contexts/theme-context';
import { GetRestaurants } from "../../services/restaurant-services"
import {
    getDataByCity, sortByRatingHighToLow, sortByRatingLowToHigh,
    sortByNameA_Z, sortByNameZ_A, sortByPriceHighToLow, sortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import Navbar from '../layout/navbar';
import ItemCard from '../parts/ItemCard';
import Loader from '../parts/Loader';
import { StyledCategoryPage } from '../styles/pages/StyledCategoryPage';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';


const Restaurants = () => {
    const { loader, setLoader, restaurants, restaurantsDispatch, city } = useContext(DataContext);
    const { mode } = useContext(ThemeContext);
    const [select, setSelect] = useState("");

    useEffect(() => {
        setLoader(true);
        GetRestaurants()
            .then(res => {
                restaurantsDispatch(
                    getDataByCity(res.data, city)
                )
            })
            .finally(() => {
                setLoader(false)
            })
    }, [restaurantsDispatch, city, setLoader]);

    const selectOnChange = (e) => {
        setSelect(e.target.value)
    }

    const handleSelect = () => {
        setLoader(true);
        switch (select) {
            case "sortByRatingHighToLow":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            sortByRatingHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByRatingLowToHigh":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            sortByRatingLowToHigh(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameA_Z":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            sortByNameA_Z(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameZ_A":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            sortByNameZ_A(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceHighToLow":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            sortByPriceHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceLowToHigh":
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            sortByPriceLowToHigh(res.data, city)
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
            <h1 className='category-name-h1'>Restaurants</h1>
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
                {restaurants.length >= 1 ?
                    restaurants.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No restaurants found</h1>
                }
            </StyledItemsContainer>
        </StyledCategoryPage>
    );
};

export default Restaurants;