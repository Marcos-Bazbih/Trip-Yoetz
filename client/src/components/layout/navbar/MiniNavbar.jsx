import AttractionsIcon from '@mui/icons-material/Attractions';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import { Link } from 'react-router-dom';

const MiniNavbar = ({ city, highlightCurrentRoute }) => {
    return (
        <ul>
            <li>
                <Link to={`/${city.name}`}
                    className={"mini" + highlightCurrentRoute(`/${city.name}`)}>
                    {city.name}
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/hotels`}
                    className={"mini" + highlightCurrentRoute(`/${city.name}/hotels`)}>
                    <HotelIcon />
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/restaurants`}
                    className={"mini" + highlightCurrentRoute(`/${city.name}/restaurants`)}>
                    <RestaurantIcon />
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/activities`}
                    className={"mini" + highlightCurrentRoute(`/${city.name}/activities`)}>
                    <AttractionsIcon />
                </Link>
            </li>
        </ul>
    );
};

export default MiniNavbar;