import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme-context';
import { StyledCityPageSlider } from '../styles/parts/StyledCityPageSlider';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const CityPageSlider = ({ category, name, info, items }) => {
    const { mode } = useContext(ThemeContext);
    const [left, setLeft] = useState(0);

    const handleSliderNext = () => {
        setLeft(left + 12);
    }
    const handleSliderPrev = () => {
        setLeft(left - 12);
    }

    return (
        <StyledCityPageSlider mode={mode}>

            <div className='slider-info-wrapper'>
                <h1 className='slider-name'>{name}</h1>
                <h2 className='slider-info'>{info}</h2>
                <Link className="slider-link" to={`/${category}`}>view all</Link>
            </div>

            <div className='slider-box-display'>
                <div style={{ left: `-${left}vw` }} className='slider-images-wrapper'>
                    {
                        items && items.length >= 1
                            ?
                            items.map((item, i) =>
                                i < 6 ?
                                    <Link className='slider-card' to={`/${item.name}`} state={item} key={item._id}>
                                        <h1 className='slider-card-name'>{item.name}</h1>
                                        <img className='slider-img' key={item._id} src={item.images[0]} alt="img" />
                                    </Link>
                                    : null
                            )
                            :
                            null
                    }
                    <div className='end-slider'>
                        <Link className="slider-link" to={`/${category}`}>view all</Link>
                    </div>
                </div>
            </div>

            <button disabled={left === 36} onClick={handleSliderNext} className='next-img-btn'>
                <ArrowCircleRightIcon className="arrow-icon" />
            </button>
            <button disabled={left === 0} onClick={handleSliderPrev} className='prev-img-btn'>
                <ArrowCircleLeftIcon className="arrow-icon" />
            </button>
        </StyledCityPageSlider>
    );
};

export default CityPageSlider;

