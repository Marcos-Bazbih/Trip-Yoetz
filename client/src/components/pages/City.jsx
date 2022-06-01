import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import Navbar from '../layout/Navbar';
import CityImages from '../parts/CityImages';
import CityPageSlider from '../parts/CityPageSlider';
import { StyledCity } from '../styles/pages/StyledCity';
import useCity from '../../hooks/useCity';

const City = () => {
    const { mode } = useContext(ThemeContext);
    const { city, hotels, activities, restaurants } = useCity();

    return (
        <StyledCity mode={mode}>
            <h1 className='city-name-h1'>Discover <span className='city-name-span'>{city.name}</span></h1>
            <Navbar />
            <CityImages images={city.images} />
            <article className="city-description">
                <h1 className="city-description-text">{city.description}</h1>
            </article>
            <CityPageSlider
                category="restaurants"
                name="Eat"
                info={`Quintessential ${city.name} restaurants, bars, and beyond.`}
                items={restaurants} />
            <CityPageSlider
                category="hotels"
                name="Stay"
                info={"A mix of the charming, iconic, and modern."}
                items={hotels} />
            <CityPageSlider
                category="activities"
                name="Do"
                info={`Places to see, ways to wander, and signature experiences that define ${city.name}.`}
                items={activities} />
        </StyledCity >
    )
};
export default City;