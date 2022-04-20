const BASE_URL = process.env.NODE_ENV === "production"
    ? "https://trip-yoetz.herokuapp.com"
    : "http://localhost:9090";

export const GetActivities = async () => {
    try {
        return await fetch(`${BASE_URL}/api/activities`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const GetActivityById = async (id) => {
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`)
            .then((res) => res.json())
            .catch((err) => console.log(err))
    }
    catch (err) {
        console.log(err);
    }
};
export const AddActivity = async (activity) => {
    const options = {
        method: "POST",
        body: JSON.stringify({ ...activity }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const UpdateActivity = async (id, activity) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const DeleteActivity = async (id) => {
    const options = {
        method: "DELETE",
    };
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AddCommentToActivities = async (id, activity, comments, comment) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, comments: [...comments, { ...comment }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const RemoveCommentFromActivities = async (id, activity, comments, comment) => {
    const filterComments = comments.filter((item) => item.id !== comment.id);
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, comments: [...filterComments] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const LikeCommentActivity = async (id, activity, comments, commentId, commentWithLike) => {
    let filteredComments = comments.filter(comment => comment.id !== commentId);

    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, comments: [...filteredComments, { ...commentWithLike }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const RateActivity = async (id, activity, rating) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, rating: [...activity.rating, { ...rating }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AnswerToQuestionActivities = async (id, activity, qId, q_a, answer) => {
    let filtered_qa = q_a.filter(q => q.id !== qId);

    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, q_a: [...filtered_qa, answer] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const AddQuestionToActivities = async (id, activity, q_a, question) => {
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, q_a: [...q_a, { ...question }] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};
export const RemoveQuestionFromActivities = async (id, activity, q_a, question) => {
    const filterQA = q_a.filter((item) => item.id !== question.id);
    const options = {
        method: "PUT",
        body: JSON.stringify({ ...activity, q_a: [...filterQA] }),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        return await fetch(`${BASE_URL}/api/activities/${id}`, options)
            .then((res) => res.json())
    }
    catch (err) {
        console.log(err);
    }
};