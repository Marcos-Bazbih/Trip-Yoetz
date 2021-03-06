import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/data-context";
import { ThemeContext } from "../../contexts/theme-context"
import { decodeAndLoginUser } from "../../utils/decodeAndLoginUser";
import { StyledLoginPage } from "../styles/pages/StyledLoginPage";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Login = () => {
  const { setUser } = useContext(DataContext);
  const { mode } = useContext(ThemeContext);
  const [formUser, setFormUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const navigate = useNavigate();

  const visiblePasswordHandle = () => {
    setVisiblePassword(!visiblePassword)
  };
  const handleOnChange = (event) => {
    formUser[event.target.name] = event.target.value;
  };
  const submitLoginForm = (event) => {
    event.preventDefault();
    setFormUser(formUser);
    decodeAndLoginUser(formUser, setUser, navigate, setErrorMsg);
  };

  return (
    <StyledLoginPage mode={mode}>
      <div className="redirect-signup">
        <h1>New here ?</h1>
        <h2>To register please click the link below</h2>
        <button className="navigate-btn" onClick={() => navigate('/register')}>Register</button>
      </div>
      <div className="login-wrapper">
        <form className="login-form" onSubmit={submitLoginForm}>
          <h1 className="login-title">Login</h1>
          <div className="input-wrapper">
            <input required className="login-input email" name="email"
              onChange={handleOnChange} type="email" placeholder="email" />
            <PersonIcon className="login-icon person" />
          </div>
          <div className="input-wrapper">
            <input required className="login-input password" name="password"
              onChange={handleOnChange} type={visiblePassword ? "text" : "password"}
              placeholder="password" minLength={4} maxLength={14} />
            <LockIcon className="login-icon password" />
            <button type="button" onClick={visiblePasswordHandle} className="visible-password-btn">
              {
                visiblePassword
                  ?
                  <VisibilityIcon className="visible-password-icon" />
                  :
                  <VisibilityOffIcon className="visible-password-icon" />
              }
            </button>
          </div>
          <button className="login-btn">LOGIN</button>
          <h2 className="error-msg">{errorMsg}</h2>
        </form>
      </div>
    </StyledLoginPage>
  );
};

export default Login;