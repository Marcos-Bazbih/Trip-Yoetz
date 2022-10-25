const BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://trip-yoetz.onrender.com'
    : 'http://localhost:9090/api/q_a';

export const addQuestion = async (question, itemId) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...question }),
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(`${BASE_URL}/${itemId}`, options)
        .then(res => res.json())
        .catch(err => err)
};
export const updateQuestion = async (newQuestion, questionId) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...newQuestion }),
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(`${BASE_URL}/${questionId}`, options)
        .then(res => res.json())
        .catch(err => err)
};
export const deleteQuestion = async (questionId) => {
    const options = {
        method: "DELETE"
    };
    return await fetch(`${BASE_URL}/${questionId}`, options)
        .then(res => res.json())
        .catch(err => err)
};