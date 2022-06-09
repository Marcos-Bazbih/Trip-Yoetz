import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import useCityData from '../../hooks/useCityData';
import Navbar from '../layout/navbar';
import Images from '../parts/city-page/Images.city';
import Sliders from '../parts/city-page/Sliders.city';
import { StyledCity } from '../styles/pages/City.styled';

const City = () => {
    const { mode } = useContext(ThemeContext);
    const { city, restaurants, hotels, activities } = useCityData();
    const slidersProps = { city, restaurants, hotels, activities };

    return (
        <StyledCity mode={mode}>
            <Navbar />
            <h1 className='city-title'>
                Discover <span>{city.name}</span>
            </h1>
            <Images images={city.images} />
            <article className="city-description">
                <h1>{city.description}</h1>
            </article>
            <Sliders {...slidersProps} />
        </StyledCity >
    );
};

export default City;