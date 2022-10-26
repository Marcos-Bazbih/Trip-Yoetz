const BASE_URL_HOTELS = process.env.NODE_ENV === 'production'
    ? 'https://trip-yoetz.onrender.com/api/hotels'
    : 'http://localhost:9090/api/hotels';

export const getHotels = async () => {
    return await fetch(BASE_URL_HOTELS)
        .then(res => res.json())
        .catch(err => err)
};
export const getHotelById = async (id) => {
    return await fetch(`${BASE_URL_HOTELS}/${id}`)
        .then(res => res.json())
        .catch(err => err)
};
export const addHotel = async (Hotel) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...Hotel }),
        headers: { 'Content-Type': 'application/json' }
    }
    return await fetch(BASE_URL_HOTELS, options)
        .then(res => res.json())
        .catch(err => err)
};
export const updateHotel = async (id, hotel) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel }),
        headers: { 'Content-Type': 'application/json' }
    }
    return await fetch(`${BASE_URL_HOTELS}/${id}`, options)
        .then(res => res.json())
        .catch(err => err)
};
export const deleteHotel = async (id) => {
    const options = {
        method: "DELETE"
    };
    return await fetch(`${BASE_URL_HOTELS}/${id}`, options)
        .then(res => res.json())
        .catch(err => err)
};