import { register } from "../services/user-service";

export const registerUser = async (userCheck, navigate, setErrorMsg) => {
    register(userCheck).then(res => {
        if (res.success) {
            alert(res.message);
            navigate('/login');
        }
        else {
            setErrorMsg(res.message)
        }
    })
        .catch(err => setErrorMsg(err.message))
};