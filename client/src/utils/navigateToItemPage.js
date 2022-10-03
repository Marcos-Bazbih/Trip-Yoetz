import { GetHotelById } from "../services/hotel-services";
import { GetActivityById } from "../services/activity-services";
import { GetRestaurantById } from "../services/restaurant-services";

export const navigateToItemPage = (navigate, cityName, product, setItem, setLoader) => {
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