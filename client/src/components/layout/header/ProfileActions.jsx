import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/data-context";
import ProfileImg from "../../parts/ProfileImg";
import { logoutAndClearLocalStorage } from "../../../utils/logoutAndClearLocalStorage";
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileActions = () => {
    const { user, setUser } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <div className="profile-actions">
            {
                user.isLogin ?
                    <>
                        <button className="logout-btn"
                            onClick={() => logoutAndClearLocalStorage(setUser, navigate)}>
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