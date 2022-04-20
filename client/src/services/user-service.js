const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://trip-yoetz.herokuapp.com/auth"
  : "http://localhost:9090/auth";

export const registerUser = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { 'Content-Type': 'application/json' }
  }
  return await fetch(`${BASE_URL}/register`, options)
    .then(res => res.json())
    .catch(err => console.log(err))
};
export const loginUser = async (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ ...user }),
    headers: { 'Content-Type': 'application/json' }
  }
  return await fetch(`${BASE_URL}/login`, options)
    .then(res => res.json())
    .catch(err => console.log(err))
};
export const userUpdate = async (id,user,newUser) => {
  const options = {
    method: "PUT",
    body: JSON.stringify({id:id,password:user.password, ...newUser}),
    headers: { 'Content-Type': 'application/json' }
  }
  return await fetch(`${BASE_URL}/${id}`, options)
    .then(res => res.json())
    .catch(err => console.log(err))
};