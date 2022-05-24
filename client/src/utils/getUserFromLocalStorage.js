import jwt_decode from "jwt-decode";

export const getUserFromLocalStorage = (setUser) => {
    if (localStorage.tripYoetz_token) {
        const token = localStorage.getItem("tripYoetz_token");
        const decoded = jwt_decode(token);
        if (Date.now() <= decoded.exp * 1000) {
            setUser({ ...decoded.user, isLogin: true });
        }
        else {
            localStorage.clear();
            setUser({});
        }
    }
};