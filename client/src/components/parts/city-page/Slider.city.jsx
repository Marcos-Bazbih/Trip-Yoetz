import { useContext, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context';
import { StyledSlider } from '../../styles/parts/city-page/Slider.styled';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const Slider = ({ category, name, info, items }) => {
    const { mode } = useContext(ThemeContext);
    const [left, setLeft] = useState(0);
    const { pathname } = useLocation();

    useEffect(() => {
        setLeft(0);
    }, [pathname])

    const handleSliderBtn = (direction) => {
        if (direction === 'prev') setLeft(left - 12);
        if (direction === 'next') setLeft(left + 12);
    }

    return (
        <StyledSlider mode={mode}>
            <div className='slider-info-wrapper'>
                <h1>{name}</h1>
                <h2>{info}</h2>
                <Link to={`/${category}`}>view all</Link>
            </div>
            <div className='slider-box-display'>
                <div style={{ left: `-${left}vw` }} className='slider-images-wrapper'>
                    {
                        items && items.length >= 1 &&
                        items.map((item, i) =>
                            i < 6 &&
                            <Link className='slider-card' to={`/${item.name}`} state={item} key={item._id}>
                                <h1>{item.name}</h1>
                                <img key={item._id} src={item.images[0]} alt="img" />
                            </Link>
                        )
                    }
                    <div className='end-slider'>
                        <Link to={`/${category}`}>view all</Link>
                    </div>
                </div>
            </div>
            <div className="slider-btns-wrapper">
                <button disabled={left === 0}
                    onClick={() => handleSliderBtn("prev")}>
                    <ArrowCircleLeftIcon className="arrow-icon" />
                </button>
                <button disabled={left === 36}
                    onClick={() => handleSliderBtn("next")}>
                    <ArrowCircleRightIcon className="arrow-icon" />
                </button>
            </div>
        </StyledSlider>
    );
};

export default Slider;