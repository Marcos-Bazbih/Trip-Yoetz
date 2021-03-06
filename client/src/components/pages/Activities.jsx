import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../contexts/data-context';
import { ThemeContext } from '../../contexts/theme-context';
import { GetActivities } from "../../services/activity-service.js"
import {
    getDataByCity, sortByRatingHighToLow, sortByRatingLowToHigh,
    sortByNameA_Z, sortByNameZ_A, sortByPriceHighToLow, sortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import Navbar from '../layout/navbar';
import ItemCard from '../parts/ItemCard';
import Loader from '../parts/Loader';
import { StyledCategoryPage } from '../styles/pages/StyledCategoryPage';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';


const Activities = () => {
    const { loader, setLoader, activities, activitiesDispatch, city } = useContext(DataContext);
    const { mode } = useContext(ThemeContext);
    const [select, setSelect] = useState("");

    useEffect(() => {
        setLoader(true);
        GetActivities()
            .then(res => {
                activitiesDispatch(
                    getDataByCity(res.data, city)
                )
            })
            .finally(() => {
                setLoader(false)
            })
    }, [activitiesDispatch, city, setLoader]);

    const selectOnChange = (e) => {
        setSelect(e.target.value)
    }

    const handleSelect = () => {
        setLoader(true);
        switch (select) {
            case "sortByRatingHighToLow":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            sortByRatingHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByRatingLowToHigh":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            sortByRatingLowToHigh(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameA_Z":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            sortByNameA_Z(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameZ_A":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            sortByNameZ_A(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceHighToLow":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            sortByPriceHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceLowToHigh":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
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
            <h1 className='category-name-h1'>Activities</h1>
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
                {activities.length >= 1 ?
                    activities.map(product =>
                        <ItemCard product={product} key={product._id} />
                    )
                    :
                    <h1>No activities found</h1>
                }
            </StyledItemsContainer>
        </StyledCategoryPage>
    );
};

export default Activities;