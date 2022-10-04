import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../contexts/data-context';
import { GetActivityById } from '../services/activity-services';
import { GetHotelById } from '../services/hotel-services';
import { GetRestaurantById } from '../services/restaurant-services';

const useItemData = () => {
    const { setLoader, item, setItem } = useContext(DataContext);
    const navigate = useNavigate();

    const updateItemLocalStorage = (product) => {
        setLoader(true);
        setItem(product);
        localStorage.setItem("item", JSON.stringify(product));
        setLoader(false);
    };
    const navigateToItemPage = (cityName, product) => {
        setLoader(true)
        switch (product.category) {
            case "Restaurant":
                GetRestaurantById(product._id)
                    .then((res) => {
                        localStorage.setItem("item", JSON.stringify(res.restaurant));
                        setItem(res.restaurant);
                    })
                    .then(() => { navigate(`/${cityName}/${product.name}`) })
                    .finally(() => { setLoader(false) })
                break;
            case "Hotel":
                GetHotelById(product._id)
                    .then((res) => {
                        localStorage.setItem("item", JSON.stringify(res.hotel));
                        setItem(res.hotel);
                    })
                    .then(() => { navigate(`/${cityName}/${product.name}`) })
                    .finally(() => { setLoader(false) })
                break;
            case "Activity":
                GetActivityById(product._id)
                    .then((res) => {
                        localStorage.setItem("item", JSON.stringify(res.activity));
                        setItem(res.activity)
                    })
                    .then(() => { navigate(`/${cityName}/${product.name}`) })
                    .finally(() => { setLoader(false) })
                break;
            default:
                break;
        };
    };

    return { item, setItem, updateItemLocalStorage, navigateToItemPage };
};

export default useItemData;