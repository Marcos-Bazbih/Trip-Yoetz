import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { getAvgRating } from "../../utils/getAvgRating";
import { StyledItemCard } from "../styles/parts/StyledItemCard";
import { MainContext } from "../../contexts/data-context";
import { verifyUserFavorites, activateHeartIcon, addClassToHeart } from "../../utils/favoritesList-functions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from "../../contexts/theme-context";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const ItemCard = ({ product }) => {
    const { user } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const [rating, setRating] = useState(0);
    const heartIcon = useRef();

    const favorites = JSON.parse(localStorage.getItem("favorites"));

    useEffect(() => {
        setRating(getAvgRating(product.rating))
    }, [product.rating]);

    return (
        <StyledItemCard mode={mode}>
            {product &&
                <>
                    <button className="heart-icon-btn" disabled={verifyUserFavorites(user)}
                        onClick={() => activateHeartIcon(heartIcon, product)}>
                        <FavoriteIcon ref={heartIcon} className={`heart-icon ${addClassToHeart(user, favorites, product)}`}>
                        </FavoriteIcon>
                    </button>
                    <div className="card-info">
                        <h1 className="card-name">{product.name}</h1>
                        <div className="location-price-wrapper">
                            <address className="card-location">{product.location}</address>
                            <p className="card-price">{product.price[0]}$ - {product.price[1]}$</p>
                        </div>
                        <Box className="rating-wrapper" sx={{ '& > legend': { mt: 2 } }}>
                            <p className="reviews">{rating ? `${product.rating.length} reviews` : "no reviews yet"}</p>
                            <Rating className="rating-stars" name="text-feedback" value={Number(rating)} precision={0.5} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                        </Box>
                    </div>
                    <Link className="card-link" to={`/${product.name}`} state={product}>
                        <img className="image" src={product.images[0]} alt="item-img" />
                    </Link>
                </>
            }
        </StyledItemCard>
    );
};

export default ItemCard;