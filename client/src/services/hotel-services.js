const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://trip-yoetz.herokuapp.com'
    : 'http://localhost:9090';

export const GetHotels = async () => {
    try {
        return await fetch(`${BASE_URL}/api/hotels`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const GetHotelById = async (id) => {
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const AddHotel = async (Hotel) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...Hotel }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const UpdateHotel = async (id, hotel) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const DeleteHotel = async (id) => {
    const options = {
        method: "DELETE"
    };
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AddCommentToHotels = async (id, hotel, comments, comment) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel, comments: [...comments, { ...comment }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const RemoveCommentFromHotels = async (id, hotel, comments, comment) => {
    const filterComments = comments.filter((item) => item.id !== comment.id);
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel, comments: [...filterComments] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const LikeCommentHotel = async (id, hotel, comments, commentId, commentWithLike) => {
    let filteredComments = comments.filter(comment => comment.id !== commentId);

    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel, comments: [...filteredComments, { ...commentWithLike }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
}
export const RateHotel = async (id, hotel, rating) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel, rating: [...hotel.rating, { ...rating }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AnswerToQuestionHotels = async (id, hotel, qId, q_a, answer) => {
    let filtered_qa = q_a.filter(q => q.id !== qId);

    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel, q_a: [...filtered_qa, answer] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AddQuestionToHotels = async (id, hotel, q_a, question) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel, q_a: [...q_a, { ...question }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const RemoveQuestionFromHotels = async (id, hotel, q_a, question) => {
    const filterQA = q_a.filter((item) => item.id !== question.id);
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...hotel, q_a: [...filterQA] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/hotels/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};