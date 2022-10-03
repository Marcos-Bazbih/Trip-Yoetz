import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../contexts/data-context';
import { AddRating, UpdateRating } from '../../../services/rating-service';

const RatingStars = ({ rating, category, itemId }) => {
    const { user } = useContext(DataContext);
    const [rateToDisplay, setRateToDisplay] = useState(0);
    const [existedRate, setExistedRate] = useState(null);

    useEffect(() => {
        if (rating && rating.length >= 1) {
            for (const rate of rating) {
                if (rate.user_id === user._id) {
                    setRateToDisplay(rate.rating);
                    setExistedRate(rate);
                }
            };
        };
    }, [rating, user._id, setRateToDisplay]);

    const checkIfUserRated = () => {
        if (!user.isLogin) return true;
        if (user.isAdmin) return true;
        return false;
        // if (rating && rating.length >= 1) {
        //     for (const rate of rating) {
        //         if (rate.user_id === user._id) return true
        //     };
        //     return false;
        // };
    };

    const sendRate = (e) => {
        const addRatingParams = {
            category,
            rating: e.target.value,
            user_id: user._id
        };

        if (existedRate) {
            UpdateRating(addRatingParams, existedRate._id)
                .then((res) => {
                    console.log(res)
                })
                .then(() => { setRateToDisplay(Number(addRatingParams.rating)) })
                .catch(err => console.log(err))
        }
        else {
            AddRating(addRatingParams, itemId)
                .then((res) => {
                    console.log(res)
                })
                .then(() => { setRateToDisplay(Number(addRatingParams.rating)) })
                .catch(err => console.log(err))
        }
    };

    return (
        <Stack spacing={1} className="rating-stars">
            <Rating readOnly={checkIfUserRated()}
                className="rating-stars-select" name="half-rating" precision={0.5}
                value={rateToDisplay} onChange={sendRate}
            />
        </Stack>
    );
};

export default RatingStars;