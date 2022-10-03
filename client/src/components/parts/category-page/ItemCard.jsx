import { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { getAvgRating } from "../../../utils/getAvgRating";
import { StyledItemCard } from "../../styles/parts/category-page/ItemCard.styled";
import { DataContext } from "../../../contexts/data-context";
import { ThemeContext } from "../../../contexts/theme-context";
import { verifyUserFavorites, activateHeartIcon, addClassToHeart } from "../../../utils/favoritesList-functions";
import { navigateToItemPage } from "../../../utils/navigateToItemPage";

const ItemCard = ({ product }) => {
    const { user, city, setItem, setLoader } = useContext(DataContext);
    const { mode } = useContext(ThemeContext);
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();
    const heartIcon = useRef();
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    useEffect(() => {
        setRating(getAvgRating(product.rating))
    }, [product.rating]);

    return (
        <StyledItemCard mode={mode}>
            {product &&
                <>
                    <button className="heart-btn" disabled={verifyUserFavorites(user)}
                        onClick={() => activateHeartIcon(heartIcon, product)}>
                        <FavoriteIcon ref={heartIcon} className={`heart-icon ${addClassToHeart(user, favorites, product)}`}>
                        </FavoriteIcon>
                    </button>
                    <div className="card-info">
                        <div className="card-price">
                            <p>{product.price[0]}$ - {product.price[1]}$</p>
                        </div>
                        <h1>{product.name}</h1>
                        <address>{product.location}</address>
                        <Box className="rating-wrapper" sx={{ '& > legend': { mt: 2 } }}>
                            <p>{rating ? `${product.rating.length} reviews` : "no reviews yet"}</p>
                            <Rating
                                className="rating-stars"
                                name="text-feedback"
                                readOnly
                                fontSize="inherit"
                                value={Number(rating)}
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }}
                                />} />
                        </Box>
                    </div>
                    <div className="card-link"
                        onClick={() => navigateToItemPage(navigate, city.name, product, setItem, setLoader)}>
                        <img src={product.images[0]} alt={product.name} />
                    </div>
                </>
            }
        </StyledItemCard>
    );
};

export default ItemCard;