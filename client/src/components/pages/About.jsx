import { StyledAbout } from '../styles/pages/StyledAbout';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const About = () => {
    const { mode } = useContext(ThemeContext)
    return (
        <StyledAbout mode={mode}>
            <div className='title-Logos-container'>
                <div className='logos-wrapper'>
                    <img className='logo-img indi' src="/indi_logo.png" alt="indi" />
                    <img className='logo-img tech' src='/tech_logo.png' alt="tech" />
                </div>
                <h1 className='welcome-title'>
                    welcome to tripYoetz
                    <TravelExploreIcon className='logo-icon' />
                </h1>
            </div>
            <div className='info'>
                <h1>About Us</h1>
                <div>
                    <FormatQuoteIcon className='quote-icon-top' />
                    <FormatQuoteIcon className='quote-icon-bottom' />
                    <h3>
                        <span>TripYoetz</span>, the world's largest travel guidance platform,
                        helps hundreds of millions of people each month become better travelers,
                        from planning to booking to taking a trip.
                        Travelers across the globe use the Tripadvisor site and app to discover where to stay,
                        what to do and where to eat based on guidance from those who have been there before.
                        With more than 1 billion reviews and opinions of nearly 8 million businesses,
                        travelers turn to Tripadvisor to find deals on accommodations, book experiences,
                        reserve tables at delicious restaurants and discover great places nearby.
                        As a travel guidance company available in 43 markets and 22 languages,
                        Tripadvisor makes planning easy no matter the trip type.
                    </h3>
                </div>
            </div>
            <div className='location'>
                <h1>Contact Us</h1>
                <div className='our-information'>
                    <div className='info-box'>
                        <h2><LocalPhoneIcon className='contact-icon' /></h2>
                        <p>054-8789426</p>
                    </div>
                    <div className='info-box'>
                        <h2><EmailIcon className='contact-icon' /></h2>
                        <p>contact@TripYoetz.com</p>
                    </div>
                    <div className='info-box'>
                        <h2><AccessTimeIcon className='contact-icon' /></h2>
                        <p>24 / 7</p>
                    </div>
                </div>
                <iframe title='our location' className='location-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d846.3125351330848!2d34.89101144280896!3d31.95410998709867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1647873990485!5m2!1siw!2sil" allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className='developers-container'>
                <h1 className='developers-container-title'>Meet the team</h1>
                <div className='developer-box'>
                    <h1>Marcos Bazbih</h1>
                    <h2>24 years old, Ashdod</h2>
                    <h3>Full Stack Developer</h3>
                </div>
                <div className='developer-box'>
                    <h1>Tikva Yosef</h1>
                    <h2>26 years old, Natanya</h2>
                    <h3>Full Stack Developer</h3>
                </div>
                <div className='developer-box'>
                    <h1>Avi Admaso</h1>
                    <h2>26 years old, Ashdod</h2>
                    <h3>Full Stack Developer</h3>
                </div>
                <h1 className='links-below-title'>
                    Follow the links below for more info
                </h1>
            </div>
        </StyledAbout>
    )
}
export default About;

