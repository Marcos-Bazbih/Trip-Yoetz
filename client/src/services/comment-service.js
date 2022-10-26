const BASE_URL_COMMENTS = process.env.NODE_ENV === 'production'
    ? 'https://trip-yoetz.onrender.com/api/comments'
    : 'http://localhost:9090/api/comments';

export const addComment = async (comment, itemId) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...comment }),
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(`${BASE_URL_COMMENTS}/${itemId}`, options)
        .then(res => res.json())
        .catch(err => err)
};
export const updateComment = async (newComment, commentId) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...newComment }),
        headers: { 'Content-Type': 'application/json' }
    };
    return await fetch(`${BASE_URL_COMMENTS}/${commentId}`, options)
        .then(res => res.json())
        .catch(err => err)
};
export const deleteComment = async (commentId) => {
    const options = {
        method: "DELETE"
    };
    return await fetch(`${BASE_URL_COMMENTS}/${commentId}`, options)
        .then(res => res.json())
        .catch(err => err)
};