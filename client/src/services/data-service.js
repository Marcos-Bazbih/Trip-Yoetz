const BASE_URL_DATA = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com/api/data"
    : "http://localhost:9090/api/data";

export const fetchDataByCity = async (city) => {
    return await fetch(`${BASE_URL_DATA}/${city}`)
        .then((res) => res.json())
        .catch((err) => err)
};