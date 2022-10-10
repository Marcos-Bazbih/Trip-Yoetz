import { useContext } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ThemeContext } from "../../contexts/theme-context"
import { StyledLoginPage } from "../styles/pages/LoginPage.styled";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { mode } = useContext(ThemeContext);
  const { decodeAndLoginUser, navigate, visiblePassword,
    errorMsg, formUser, setFormUser,
    visiblePasswordHandle, handleOnChange, loading
  } = useAuth();

  const submitLoginForm = (event) => {
    event.preventDefault();
    setFormUser(formUser);
    decodeAndLoginUser();
  };

  return (
    <StyledLoginPage mode={mode}>
      <section className="container-flex">
        <div className="redirect-signup">
          <h1>New here ?</h1>
          <h2>To register please click the link below</h2>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
        <div className="login-wrapper">
          <form onSubmit={submitLoginForm}>
            <h1>Login</h1>
            <div className="input-wrapper">
              <input required name="email"
                onChange={handleOnChange} type="email" placeholder="email" />
              <PersonIcon className="login-icon" />
            </div>
            <div className="input-wrapper">
              <input required name="password"
                onChange={handleOnChange} type={visiblePassword ? "text" : "password"}
                placeholder="password" minLength={4} maxLength={14} />
              <LockIcon className="login-icon" />
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
            <button className="login-btn" disabled={loading}>
              {loading ? "..." : "LOGIN"}
            </button>
            <h2 className="error-msg">{errorMsg}</h2>
          </form>
        </div>
      </section>
    </StyledLoginPage>
  );
};

export default Login;