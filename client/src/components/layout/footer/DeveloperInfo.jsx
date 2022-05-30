import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context";
import { StyledDeveloperInfo } from "../../styles/layout/footer/DeveloperInfo.styled";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const DeveloperInfo = ({ name, info, email, linkedin, github, img }) => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledDeveloperInfo className={name} mode={mode}>
            <h1 className="developer-name">{name}</h1>
            <h2 className="developer-info">{info}</h2>
            <img className="developer-image" src={img} alt={`${name} img`} />
            <div className="contact-icons-box">
                <a href={`mailto:${email}`}>
                    <EmailIcon className="contact-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href={linkedin}>
                    <LinkedInIcon className="contact-icon" />
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    <GitHubIcon className="contact-icon" />
                </a>
            </div>
        </StyledDeveloperInfo>
    );
};

export default DeveloperInfo;