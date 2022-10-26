const BASE_URL_RESTAURANTS = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.onrender.com/api/restaurants"
    : "http://localhost:9090/api/restaurants";

export const getRestaurants = async () => {
    return await fetch(BASE_URL_RESTAURANTS)
        .then(res => res.json())
        .catch(err => err)
};
export const getRestaurantById = async (id) => {
    return await fetch(`${BASE_URL_RESTAURANTS}/${id}`)
        .then(res => res.json())
        .catch(err => err)
};
export const addRestaurant = async (restaurant) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...restaurant }),
        headers: { 'Content-Type': 'application/json' }
    }
    return await fetch(BASE_URL_RESTAURANTS, options)
        .then(res => res.json())
        .catch(err => err)
};
export const updateRestaurant = async (id, restaurant) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant }),
        headers: { 'Content-Type': 'application/json' }
    }
    return await fetch(`${BASE_URL_RESTAURANTS}/${id}`, options)
        .then(res => res.json())
        .catch(err => err)
};
export const deleteRestaurant = async (id) => {
    const options = {
        method: "DELETE"
    };
    return await fetch(`${BASE_URL_RESTAURANTS}/${id}`, options)
        .then(res => res.json())
        .catch(err => err)
};