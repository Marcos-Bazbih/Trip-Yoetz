const BASE_URL_ACTIVITIES = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.onrender.com/api/activities"
    : "http://localhost:9090/api/activities";

export const getActivities = async () => {
    return await fetch(BASE_URL_ACTIVITIES)
        .then(res => res.json())
        .catch(err => err)
};
export const getActivityById = async (id) => {
    return await fetch(`${BASE_URL_ACTIVITIES}/${id}`)
        .then(res => res.json())
        .catch(err => err)
};
export const addActivity = async (activity) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...activity }),
        headers: { 'Content-Type': 'application/json' }
    }
    return await fetch(BASE_URL_ACTIVITIES, options)
        .then(res => res.json())
        .catch(err => err)
};
export const updateActivity = async (id, activity) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity }),
        headers: { 'Content-Type': 'application/json' }
    }
    return await fetch(`${BASE_URL_ACTIVITIES}/${id}`, options)
        .then(res => res.json())
        .catch(err => err)
};
export const deleteActivity = async (id) => {
    const options = {
        method: "DELETE",
    };
    return await fetch(`${BASE_URL_ACTIVITIES}/${id}`, options)
        .then(res => res.json())
        .catch(err => err)
};