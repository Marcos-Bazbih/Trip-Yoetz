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
                    title="Hotels"
                    className={"mini" + highlightCurrentRoute(`/${city.name}/hotels`)}>
                    <HotelIcon className='navbar-icon' />
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/restaurants`}
                    title="Restaurants"
                    className={"mini" + highlightCurrentRoute(`/${city.name}/restaurants`)}>
                    <RestaurantIcon className='navbar-icon' />
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/activities`}
                    title="Activities"
                    className={"mini" + highlightCurrentRoute(`/${city.name}/activities`)}>
                    <AttractionsIcon className='navbar-icon' />
                </Link>
            </li>
        </ul>
    );
};

export default MiniNavbar;