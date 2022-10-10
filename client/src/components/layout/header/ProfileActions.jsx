import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../contexts/data-context";
import ProfileImg from "../../parts/ProfileImg";
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from "../../../hooks/useAuth.js";

const ProfileActions = () => {
    const { user } = useContext(DataContext);
    const { logoutAndClearLocalStorage } = useAuth();

    return (
        <div className="profile-actions">
            {
                user.isLogin ?
                    <>
                        <button className="logout-btn"
                            onClick={logoutAndClearLocalStorage}>
                            <LogoutIcon className="logout-icon" />
                        </button>
                        <ProfileImg user={user} />
                    </>
                    : <>
                        <Link to={"/login"} className="login-register-btn">Login</Link>
                        <Link to={"/register"} className="login-register-btn">Register</Link>
                    </>
            }
        </div>
    );
};

export default ProfileActions;