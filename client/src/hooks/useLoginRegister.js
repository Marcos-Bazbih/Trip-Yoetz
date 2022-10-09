import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { login, register } from '../services/user-service';
import { DataContext } from '../contexts/data-context';

const useLoginRegister = () => {
    const { setUser } = useContext(DataContext);
    const [formUser, setFormUser] = useState({});
    const [errorMsg, setErrorMsg] = useState("");
    const [visiblePassword, setVisiblePassword] = useState(false);
    const navigate = useNavigate();

    const visiblePasswordHandle = () => {
        setVisiblePassword(!visiblePassword)
    };
    const handleOnChange = (event) => {
        formUser[event.target.name] = event.target.value;
        setErrorMsg('');
    };
    const decodeAndLoginUser = () => {
        login(formUser).then(res => {
            if (res.success) {
                localStorage.setItem('tripYoetz_token', res.token)
                const token = localStorage.getItem("tripYoetz_token");
                const decoded = jwt_decode(token);
                setUser({ ...decoded.user, isLogin: true });
                navigate('/');
            }
            else {
                setErrorMsg(res.message);
            }
        })
            .catch(err => setErrorMsg(err.message))
    };
    const registerUser = async () => {
        register(formUser).then(res => {
            if (res.success) {
                navigate('/login');
            }
            else {
                setErrorMsg(res.message)
            }
        })
            .catch(err => setErrorMsg(err.message))
    };

    return {
        decodeAndLoginUser, registerUser,
        navigate, visiblePassword,
        formUser, setFormUser,
        errorMsg, setErrorMsg,
        visiblePasswordHandle, handleOnChange
    }
};

export default useLoginRegister;