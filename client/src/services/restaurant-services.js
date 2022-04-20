const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com"
    : "http://localhost:9090";

export const GetRestaurants = async () => {
    try {
        return await fetch(`${BASE_URL}/api/restaurants`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const GetRestaurantById = async (id) => {
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const AddRestaurant = async (restaurant) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...restaurant }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const UpdateRestaurant = async (id, restaurant) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const DeleteRestaurant = async (id) => {
    const options = {
        method: "DELETE"
    };
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AddCommentToRestaurants = async (id, restaurant, comments, comment) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, comments: [...comments, { ...comment }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const RemoveCommentFromRestaurants = async (id, restaurant, comments, comment) => {
    const filterComments = comments.filter((item) => item.id !== comment.id);
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, comments: [...filterComments] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const LikeCommentRestaurant = async (id, restaurant, comments, commentId, commentWithLike) => {
    let filteredComments = comments.filter(comment => comment.id !== commentId);

    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, comments: [...filteredComments, { ...commentWithLike }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
}
export const RateRestaurant = async (id, restaurant, rating) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, rating: [...restaurant.rating, { ...rating }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AnswerToQuestionRestaurants = async (id, restaurant, qId, q_a, answer) => {
    let filtered_qa = q_a.filter(q => q.id !== qId);

    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, q_a: [...filtered_qa, answer] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AddQuestionToRestaurants = async (id, restaurant, q_a, question) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, q_a: [...q_a, { ...question }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const RemoveQuestionFromRestaurants = async (id, restaurant, q_a, question) => {
    const filterQA = q_a.filter((item) => item.id !== question.id);
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...restaurant, q_a: [...filterQA] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/restaurants/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};