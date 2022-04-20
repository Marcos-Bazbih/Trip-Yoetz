import { useLocation } from "react-router-dom";
import Navbar from "../layout/Navbar";
import CommentsSection from "../parts/Comments-section";
import { useContext, useEffect, useState } from "react";
import { GetRestaurantById, GetRestaurants, RateRestaurant } from "../../services/restaurant-services";
import { GetHotelById, GetHotels, RateHotel } from "../../services/hotel-services";
import { GetActivityById, GetActivities, RateActivity } from "../../services/activity-service";
import ItemInfo from "../parts/ItemInfo";
import QaSection from "../parts/Qa-Section";
import { StyledItemPage } from "../styles/pages/StyledItemPage";
import { MainContext } from "../../contexts/data-context";
import { ThemeContext } from "../../contexts/theme-context";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { GetDataByName } from "../../state-management/actions/categories-actions";
import { StyledCommentsQa } from "../styles/parts/StyledCommentsQa";
import Loader from "../parts/Loader";

const ItemPage = () => {
    const { loader, setLoader, restaurants, restaurantsDispatch, hotels, hotelsDispatch, activities, activitiesDispatch, user, city } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const [item, setItem] = useState({});
    const [toggle, setToggle] = useState(true);
    const [userRate, setUserRate] = useState({ rate: 0 });
    const product = useLocation().state;

    useEffect(() => {
        if (item.rating && item.rating.length >= 1) {
            for (const rate of item.rating) {
                if (rate.userId === user._id) {
                    setUserRate({ ...rate });
                }
            };
        };
    }, [item.rating, user._id])
    useEffect(() => {
        setLoader(true);
        switch (product.category) {
            case "restaurant":
                GetRestaurantById(product._id)
                    .then(res => setItem({ ...res.restaurant }))
                    .finally(() => setLoader(false));
                break;
            case "hotel":
                GetHotelById(product._id)
                    .then(res => setItem({ ...res.hotel }))
                    .finally(() => setLoader(false));
                break;
            case "activity":
                GetActivityById(product._id)
                    .then(res => setItem({ ...res.activity }))
                    .finally(() => setLoader(false));
                break;

            default:
                break;
        }
    }, [product, restaurants, hotels, activities, setLoader])
    const sendRateForm = (event) => {
        event.preventDefault();
        userRate.rate = Number(event.target.value);
        userRate.userId = user._id;
        setUserRate(userRate);

        switch (product.category) {
            case "restaurant":
                RateRestaurant(item._id, item, userRate)
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            GetDataByName(res.data, city)
                        )
                    });
                break;
            case "hotel":
                RateHotel(item._id, item, userRate)
                GetHotels()
                    .then(res => {
                        hotelsDispatch(
                            GetDataByName(res.data, city)
                        )
                    });
                break;
            case "activity":
                RateActivity(item._id, item, userRate)
                GetActivities()
                    .then(res => {
                        activitiesDispatch(
                            GetDataByName(res.data, city)
                        )
                    });
                break;
            default:
                break;
        }
    };
    const checkIfUserRate = () => {
        if (!user.isLogin) return true;
        if (user.isAdmin) return true;
        if (item.rating && item.rating.length >= 1) {
            for (const rate of item.rating) {
                if (rate.userId === user._id) return true
            };
            return false;
        };
    };

    return (
        <StyledItemPage mode={mode}>
            {loader && <Loader />}
            <Navbar />
            <ItemInfo item={item} />
            <div className="toggle-btns-wrapper">
                <button className={`toggle-btn ${toggle ? 'toggle-active' : ''}`} disabled={toggle} onClick={() => setToggle(true)}>Comments</button>
                <button className={`toggle-btn ${!toggle ? 'toggle-active' : ''}`} disabled={!toggle} onClick={() => setToggle(false)}>Q&A</button>
            </div>
            <Stack spacing={1} className="rating-stars">
                <Rating readOnly={checkIfUserRate()} className="rating-stars-select" name="half-rating" value={userRate.rate ? Number(userRate.rate) : 0} precision={0.5} onChange={sendRateForm} />
            </Stack>
            <StyledCommentsQa mode={mode} className="comments-qa">
                {toggle
                    ?
                    <CommentsSection currentCard={item} />
                    :
                    <QaSection currentCard={item} />
                }
            </StyledCommentsQa>
        </StyledItemPage>
    );
};

export default ItemPage;