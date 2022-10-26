const BASE_URL_CITIES = process.env.NODE_ENV === "production"
  ? "https://trip-yoetz.onrender.com/api/cities"
  : "http://localhost:9090/api/cities";

export const getAllCities = async () => {
  return await fetch(BASE_URL_CITIES)
    .then((res) => res.json())
    .catch(err => err)
};
export const getCityByName = async (name) => {
  return await fetch(`${BASE_URL_CITIES}/${name}`)
    .then(res => res.json())
    .catch(err => err)
};
export const addCity = async (activity) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...activity }),
    headers: { "Content-Type": "application/json" },
  };
  return await fetch(BASE_URL_CITIES, options)
    .then((res) => res.json())
    .catch(err => err)
};
export const updateCity = async (id, city) => {
  const options = {
    method: "PUT",
    body: JSON.stringify({ ...city }),
    headers: { 'Content-Type': 'application/json' }
  }
  return await fetch(`${BASE_URL_CITIES}/${id}`, options)
    .then((res) => res.json())
    .catch(err => err)
};
export const deleteCity = async (id) => {
  const options = {
    method: "DELETE"
  };
  return await fetch(`${BASE_URL_CITIES}/${id}`, options)
    .then((res) => res.json())
    .catch(err => err)
};