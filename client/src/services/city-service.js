const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com"
    : "http://localhost:9090";

export const GetCities = async () => {
  try {
    return await fetch(`${BASE_URL}/api/cities`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
export const GetCityByName = async (name) => {
  const options = {
    method: "GET"
  };
  try {
    return await fetch(`${BASE_URL}/api/cities/${name}`, options)
      .then((res) => res.json())
  } catch (err) {
    console.log(err);
  }
};
export const AddCity = async (activity) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...activity }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return await fetch(`${BASE_URL}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};
export const UpdateCity = async (id, city) => {
  const options = {
    method: "PUT",
    body: JSON.stringify({ ...city }),
    headers: { 'Content-Type': 'application/json' }
  }
  try {
    return await fetch(`${BASE_URL}/api/cities/${id}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
  }
  catch (err) {
    console.log(err);
  }
}
export const DeleteCity = async (id) => {
  const options = {
    method: "DELETE"
  };
  try {
    return await fetch(`${BASE_URL}/${id}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};