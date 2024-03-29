import { useEffect, useState, useContext, useRef } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import useItemData from "../../../hooks/useItemData";
import { DataContext } from "../../../contexts/data-context";
import { ThemeContext } from "../../../contexts/theme-context";
import { getAvgRating } from "../../../utils/getAvgRating";
import { StyledItemCard } from "../../styles/parts/category-page/ItemCard.styled";
import HeartIcon from "../HeartIcon";

const ItemCard = ({ product }) => {
    const { city } = useContext(DataContext);
    const { mode } = useContext(ThemeContext);
    const { navigateToItemPage } = useItemData();
    const [rating, setRating] = useState(0);
    const heartIconRef = useRef();

    useEffect(() => {
        setRating(getAvgRating(product.rating))
    }, [product.rating]);

    const positionProps = {
        left: "10px",
        top: "10px"
    };

    return (
        <StyledItemCard mode={mode}>
            {product &&
                <>
                    <HeartIcon
                        positionProps={positionProps}
                        heartIconRef={heartIconRef}
                        item={product} />
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
                        onClick={() => navigateToItemPage(city.name, product)}>
                        <img src={product.images[0]} alt={product.name} />
                    </div>
                </>
            }
        </StyledItemCard>
    );
};

export default ItemCard;