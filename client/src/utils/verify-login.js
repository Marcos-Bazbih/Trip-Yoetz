import { loginUser } from "../services/user-service";
import jwt_decode from "jwt-decode";

export const VerifyLogin = async (userCheck, setUserCheck, navigate, setErrorMsg) => {
    try {
        return await loginUser(userCheck)
            .then(res => {
                if (res.success) {
                    localStorage.setItem('token', res.token)
                    const token = localStorage.getItem("token");
                    const decoded = jwt_decode(token);
                    setUserCheck({ ...decoded.user, isLogin: true });
                    alert(`Welcome ${decoded.user.name} ${decoded.user.lastName}`);
                    navigate(-1);
                }
                else {
                    setErrorMsg(res.message);
                }
            })
            .catch(err => setErrorMsg(err.message))
    } catch (err) {
        setErrorMsg(err.message);
    }
};