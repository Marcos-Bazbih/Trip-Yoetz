import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { login, register } from '../services/user-service';
import { DataContext } from '../contexts/data-context';

const useAuth = () => {
    const { setUser } = useContext(DataContext);
    const [formUser, setFormUser] = useState({});
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
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
        setLoading(true)
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
            .finally(() => { setLoading(false) })
    };
    const registerUser = async () => {
        setLoading(true)
        register(formUser).then(res => {
            if (res.success) {
                navigate('/login');
            }
            else {
                setErrorMsg(res.message)
            }
        })
            .catch(err => setErrorMsg(err.message))
            .finally(() => { setLoading(false) })

    };
    const logoutAndClearLocalStorage = () => {
        if (localStorage.tripYoetz_token) {
            if (window.confirm("Are you sure you want to logout ?")) {
                localStorage.removeItem("tripYoetz_token");
                setUser({});
                alert("Hope to see you again !");
                navigate('/');
            };
        };
    };


    return {
        decodeAndLoginUser, registerUser, logoutAndClearLocalStorage,
        navigate, visiblePassword,
        formUser, setFormUser,
        errorMsg, setErrorMsg,
        visiblePasswordHandle, handleOnChange, loading
    }
};

export default useAuth;