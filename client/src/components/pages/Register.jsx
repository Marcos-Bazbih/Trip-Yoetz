import { useContext, useRef, useState } from "react"
import { VerifyRegister } from "../../utils/verify-register";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledRegisterPage } from "../styles/pages/StyledRegisterPage";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () => {
  const [formUser, setFormUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { mode } = useContext(ThemeContext);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const visiblePasswordHandle = () => {
    setVisiblePassword(!visiblePassword)
  }
  const HandleOnChange = (event) => {
    formUser[event.target.name] = event.target.value;
  };
  const SendRegisterForm = (event) => {
    event.preventDefault();
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      setFormUser(formUser);
      VerifyRegister(formUser, navigate, setErrorMsg)
    }
    else {
      setErrorMsg("passwords not matching");
    }
  };

  return (
    <StyledRegisterPage mode={mode}>
      <div className="redirect-login">
        <h1>Already a member ?</h1>
        <h2>To login please click the link below</h2>
        <button className="navigate-btn" onClick={() => navigate('/login')}>Login</button>
      </div>
      <div className="register-wrapper">
        <form className="register-form" onSubmit={SendRegisterForm}>
          <h1 className="register-title">Register</h1>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="name">First name</label>
            <input className="register-input" required name="name"
              onChange={HandleOnChange} type="text" placeholder="first name"
              minLength={2} maxLength={10} />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="lastName">Last name</label>
            <input className="register-input" required name="lastName"
              onChange={HandleOnChange} type="text" placeholder="last name"
              minLength={2} maxLength={10} />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="birthDate">Birth Date</label>
            <input className="register-input" required name="birthDate"
              onChange={HandleOnChange} type="date" placeholder="birth date"
              min="1902-01-01" max="2004-01-01" />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="email">Email</label>
            <input className="register-input" required name="email"
              onChange={HandleOnChange} type="email" placeholder="email" />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="image">Profile image</label>
            <input className="register-input" name="image"
              onChange={HandleOnChange} type="text" placeholder="profile image" />
          </div>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="password">Password</label>
            <input className="register-input" ref={passwordRef} required
              name="password" onChange={HandleOnChange}
              type={visiblePassword ? "text" : "password"}
              placeholder="password" minLength={4} maxLength={14} />
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
            <label className="input-label" htmlFor="password">Confirm password</label>
            <input className="register-input" ref={confirmPasswordRef} required
              type={visiblePassword ? "text" : "password"}
              placeholder="confirm password" minLength={4} maxLength={14} />
          </div>
          <h2 className="error-msg">{errorMsg}</h2>
          <button className="register-btn">REGISTER</button>
        </form>
      </div>
    </StyledRegisterPage>
  );
};

export default Register;