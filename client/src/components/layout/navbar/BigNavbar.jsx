import React from 'react'
import { Link } from 'react-router-dom';

const BigNavbar = ({ city, highlightCurrentRoute }) => {
    return (
        <ul>
            <li>
                <Link to={`/${city.name}`}
                    className={"big" + highlightCurrentRoute(`/${city.name}`)       }>
                    {city.name}
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/hotels`}
                    className={"big" + highlightCurrentRoute(`/${city.name}/hotels`)        }>
                    Hotels
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/restaurants`}
                    className={"big" + highlightCurrentRoute(`/${city.name}/restaurants`)       }>
                    Restaurants
                </Link>
            </li>
            <li>
                <Link to={`/${city.name}/activities`}
                    className={"big" + highlightCurrentRoute(`/${city.name}/activities`)        }>
                    Activities
                </Link>
            </li>
        </ul>
    );
};

export default BigNavbar;