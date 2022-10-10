const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://trip-yoetz-app.herokuapp.com'
    : 'http://localhost:9090/api/ratings';

export const AddRating = async (rating, itemId) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...rating }),
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(`${BASE_URL}/${itemId}`, options)
        .then(res => res.json())
        .catch(err => err)
};

export const UpdateRating = async (newRating, ratingId) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...newRating }),
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(`${BASE_URL}/${ratingId}`, options)
        .then(res => res.json())
        .catch(err => err)
};