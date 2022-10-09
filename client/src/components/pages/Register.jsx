import { useContext, useRef } from "react"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ThemeContext } from "../../contexts/theme-context";
import { StyledRegisterPage } from "../styles/pages/RegisterPage.styled";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { mode } = useContext(ThemeContext);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { registerUser, navigate, visiblePassword,
    errorMsg, setErrorMsg,
    formUser, setFormUser,
    visiblePasswordHandle, handleOnChange
  } = useAuth();

  const submitRegisterForm = (event) => {
    event.preventDefault();
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      setFormUser(formUser);
      registerUser()
    }
    else {
      setErrorMsg("passwords not matching");
    }
  };

  return (
    <StyledRegisterPage mode={mode}>
      <section className="container-flex">
        <div className="redirect-login">
          <h1>Already a member ?</h1>
          <h2>To login please click the link below</h2>
          <button className="navigate-btn" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
        <div className="register-wrapper">
          <form className="register-form" onSubmit={submitRegisterForm}>
            <h1 className="register-title">Register</h1>
            <div className="input-wrapper">
              <label htmlFor="firstName">First name</label>
              <input className="register-input" required name="firstName"
                onChange={handleOnChange} type="text" placeholder=""
                minLength={2} maxLength={10} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last name</label>
              <input className="register-input" required name="lastName"
                onChange={handleOnChange} type="text" placeholder=""
                minLength={2} maxLength={10} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthDate">Birth Date</label>
              <input className="register-input" required name="birthDate"
                onChange={handleOnChange} type="date"
                min="1902-01-01" max="2004-01-01" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input className="register-input" required name="email"
                onChange={handleOnChange} type="email" placeholder="" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="image">Profile image</label>
              <input className="register-input" name="image"
                onChange={handleOnChange} type="text" placeholder="(optional)" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input className="register-input" ref={passwordRef} required
                name="password" onChange={handleOnChange}
                type={visiblePassword ? "text" : "password"}
                placeholder="" minLength={4} maxLength={14} />
            </div>
            <div className="input-wrapper relative-input">
              <button type="button" onClick={visiblePasswordHandle} className="visible-password-btn">
                {
                  visiblePassword
                    ?
                    <VisibilityIcon className="visible-password-icon" />
                    :
                    <VisibilityOffIcon className="visible-password-icon" />
                }
              </button>
              <label htmlFor="password">Confirm password</label>
              <input className="register-input" ref={confirmPasswordRef} required
                type={visiblePassword ? "text" : "password"}
                placeholder="" minLength={4} maxLength={14} />
            </div>
            <h2 className="error-msg">{errorMsg}</h2>
            <button className="register-btn">REGISTER</button>
          </form>
        </div>
      </section>
    </StyledRegisterPage>
  );
};

export default Register;