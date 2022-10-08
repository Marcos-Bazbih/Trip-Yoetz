import { useContext, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { DataContext } from '../../../contexts/data-context';
import { AddRating, UpdateRating } from '../../../services/rating-service';
import useItemData from '../../../hooks/useItemData';
import { verifyUserAccess } from "../../../utils/verifyUserAccess";

const RatingStars = () => {
    const { user } = useContext(DataContext);
    const { item, updateRatingLocalStorage } = useItemData();
    const [rateToDisplay, setRateToDisplay] = useState(0);
    const [existedRate, setExistedRate] = useState(null);

    useEffect(() => {
        if (item.rating && item.rating.length >= 1) {
            for (const rate of item.rating) {
                if (rate.user_id === user._id) {
                    setRateToDisplay(rate.rating);
                    setExistedRate(rate);
                }
            };
        };
    }, [item.rating, user._id]);

    const sendRate = (e) => {
        const addRatingParams = {
            category: item.category,
            rating: e.target.value,
            user_id: user._id
        };

        if (existedRate) {
            UpdateRating(addRatingParams, existedRate._id)
                .then((res) => {
                    updateRatingLocalStorage(res.rating.itemRef)
                    console.log(res)
                })
                .then(() => { setRateToDisplay(Number(addRatingParams.rating)) })
                .catch(err => console.log(err))
        }
        else {
            AddRating(addRatingParams, item._id)
                .then((res) => {
                    updateRatingLocalStorage(res.rating.itemRef)
                    console.log(res)
                })
                .then(() => { setRateToDisplay(Number(addRatingParams.rating)) })
                .catch(err => console.log(err))
        }
    };

    return (
        <Stack spacing={1} className="rating-stars-wrapper">
            <Rating readOnly={verifyUserAccess(user)}
                className="rating-stars-select" name="half-rating" precision={0.5}
                value={rateToDisplay} onChange={sendRate}
            />
        </Stack>
    );
};

export default RatingStars;