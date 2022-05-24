import { login } from "../services/user-service";
import jwt_decode from "jwt-decode";

export const decodeAndLoginUser = async (userCheck, setUserCheck, navigate, setErrorMsg) => {
    login(userCheck).then(res => {
        if (res.success) {
            localStorage.setItem('tripYoetz_token', res.token)
            const token = localStorage.getItem("tripYoetz_token");
            const decoded = jwt_decode(token);
            setUserCheck({ ...decoded.user, isLogin: true });
            alert(`Welcome ${decoded.user.firstName} ${decoded.user.lastName}`);
            navigate(-1);
        }
        else {
            setErrorMsg(res.message);
        }
    })
        .catch(err => setErrorMsg(err.message))
};