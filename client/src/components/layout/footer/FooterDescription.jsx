import { Link } from "react-router-dom";
import Logo from "../header/Logo";

const FooterDescription = () => {
    return (
        <div className="footer-description">  
            <Logo />
            <Link className="about-us-link" to={"/about"}>Learn more</Link>
            <h2 className="copyright">copyright © | 2022 TripYoetz | all right reserved.</h2>
        </div>
    );
};

export default FooterDescription;