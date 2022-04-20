import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../contexts/data-context';
import { ThemeContext } from '../../contexts/theme-context';
import { GetActivities } from "../../services/activity-service.js"
import {
    GetDataByName, SortByRatingHighToLow, SortByRatingLowToHigh,
    SortByNameA_Z, SortByNameZ_A, SortByPriceHighToLow, SortByPriceLowToHigh
} from "../../state-management/actions/categories-actions";
import Navbar from '../layout/Navbar';
import ItemCard from '../parts/ItemCard';
import Loader from '../parts/Loader';
import { StyledCategoryPage } from '../styles/pages/StyledCategoryPage';
import { StyledItemsContainer } from '../styles/parts/StyledItemsContainer';


const Activities = () => {
    const { loader, setLoader, activities, activitiesDispatch, city } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const [select, setSelect] = useState("");

    useEffect(() => {
        setLoader(true);
        GetActivities()
            .then(res => {
                activitiesDispatch(
                    GetDataByName(res.data, city)
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
                            SortByRatingHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByRatingLowToHigh":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            SortByRatingLowToHigh(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameA_Z":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            SortByNameA_Z(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByNameZ_A":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            SortByNameZ_A(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceHighToLow":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            SortByPriceHighToLow(res.data, city)
                        )
                    }).finally(() => {
                        setLoader(false)
                    });
                break;
            case "sortByPriceLowToHigh":
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
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