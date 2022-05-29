import { Link } from 'react-router-dom';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <Link to={"/"} className="TripYoetz-logo">
                <TravelExploreIcon className="logo-icon" />
                TripYoetz
            </Link>
        </div>
    );
};

export default Logo;