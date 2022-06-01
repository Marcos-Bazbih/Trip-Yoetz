import { useEffect, useContext } from 'react';
import { MainContext } from '../contexts/data-context';
import { getAllDataByCity } from '../services/data-service';
import { GetDataByName } from "../state-management/actions/categories-actions"

const useCity = () => {
    const { setLoader, city, hotels,
        activities, restaurants, hotelsDispatch,
        activitiesDispatch, restaurantsDispatch } = useContext(MainContext);

    useEffect(() => {
        setLoader(true);
        getAllDataByCity(city.name)
            .then((res) => {
                hotelsDispatch(GetDataByName(res.hotels));
                activitiesDispatch(GetDataByName(res.activities));
                restaurantsDispatch(GetDataByName(res.restaurants));
            })
            .catch((err) => {
                setLoader(false);
                console.log(err);
            })
            .finally(() => {
                setLoader(false);
            });
    }, []);

    return { city, hotels, activities, restaurants };
};

export default useCity;