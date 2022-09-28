const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://trip-yoetz.herokuapp.com'
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