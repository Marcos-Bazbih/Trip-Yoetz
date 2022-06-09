import { useEffect, useContext } from 'react';
import { DataContext } from '../contexts/data-context';
import { fetchDataByCity } from '../services/data-service';
import { getDataByCity } from "../state-management/actions/categories-actions"

const useCityData = () => {
    const { setLoader, city, hotels,
        activities, restaurants, hotelsDispatch,
        activitiesDispatch, restaurantsDispatch } = useContext(DataContext);

    useEffect(() => {
        setLoader(true);
        fetchDataByCity(city.name)
            .then((res) => {
                hotelsDispatch(getDataByCity(res.hotels));
                activitiesDispatch(getDataByCity(res.activities));
                restaurantsDispatch(getDataByCity(res.restaurants));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoader(false);
            });
    }, [hotelsDispatch, activitiesDispatch, restaurantsDispatch, city.name, setLoader]);

    return { city, hotels, activities, restaurants };
};

export default useCityData;