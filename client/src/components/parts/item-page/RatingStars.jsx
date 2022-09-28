import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../contexts/data-context';
import { AddRating } from '../../../services/rating-service';

const RatingStars = ({ rating, category, itemId }) => {
    const { user } = useContext(DataContext);
    const [userRate, setUserRate] = useState({});

    useEffect(() => {
        if (rating && rating.length >= 1) {
            for (const rate of rating) {
                if (rate.user_id === user._id) {
                    setUserRate({ ...rate });
                }
            };
        };
    }, [rating, user._id, setUserRate]);

    const checkIfUserRated = () => {
        if (!user.isLogin) return true;
        if (user.isAdmin) return true;
        if (rating && rating.length >= 1) {
            for (const rate of rating) {
                if (rate.user_id === user._id) return true
            };
            return false;
        };
    };

    const sendRateForm = (e) => {
        e.preventDefault();
        const addRatingParams = {
            category,
            rating: e.target.value,
            user_id: user._id
        }
        // setUserRate({
        //     category,
        //     rating: e.target.value,
        //     user_id: user._id
        // });
        AddRating(addRatingParams, itemId)
            .then((res) => {
                setUserRate({ ...res.rating })
                console.log(res)
            })
            .catch(err => console.log(err))
    };

    return (
        <Stack spacing={1} className="rating-stars">
            <Rating readOnly={checkIfUserRated()}
                className="rating-stars-select" name="half-rating" precision={0.5}
                value={userRate.rating ? Number(userRate.rating) : 0}
                onChange={sendRateForm}
            />
        </Stack>
    );
};

export default RatingStars;