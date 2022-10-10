import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../contexts/data-context";
import { getRestaurants } from "../services/restaurant-services";
import { getHotels } from "../services/hotel-services";
import { getActivities } from "../services/activity-services";
import { getAllData } from "../state-management/actions/categories-actions";

const useAdminData = () => {
    const { hotels, activities, restaurants,
        hotelsDispatch, activitiesDispatch, restaurantsDispatch,
        setLoader } = useContext(DataContext);
    const lastPathname = useLocation().pathname.split("/").pop();

    useEffect(() => {
        switch (lastPathname) {
            case "AdminRestaurants":
                if (restaurants.length === 0) {
                    setLoader(true)
                    getRestaurants()
                        .then(res => {
                            restaurantsDispatch(getAllData(res.data))
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        .finally(() => setLoader(false))
                }
                break;
            case "AdminHotels":
                if (hotels.length === 0) {
                    setLoader(true)
                    getHotels()
                        .then(res => {
                            hotelsDispatch(getAllData(res.data))
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        .finally(() => setLoader(false))
                }
                break;
            case "AdminActivities":
                if (activities.length === 0) {
                    setLoader(true)
                    getActivities()
                        .then(res => {
                            activitiesDispatch(getAllData(res.data))
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        .finally(() => setLoader(false))
                }
                break;

            default:
                setLoader(false)
                break;
        }
    }, [activities.length, hotels.length, restaurants.length,
        activitiesDispatch, hotelsDispatch, restaurantsDispatch,
        lastPathname, setLoader])

    return { hotels, activities, restaurants };
};

export default useAdminData;