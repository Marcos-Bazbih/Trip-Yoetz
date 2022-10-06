import { useContext, useRef } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import MasksIcon from '@mui/icons-material/Masks';
import { DataContext } from "../../../../contexts/data-context";
import { activateHeartIcon, addClassToHeart, verifyUserFavorites } from "../../../../utils/favoritesList-functions";
import { getAvgRating } from "../../../../utils/getAvgRating";

const ItemDetails = () => {
    const { user, item } = useContext(DataContext);
    const heartIcon = useRef();
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    return (
        <div className="item-details">
            <button className="heart-icon-btn" disabled={verifyUserFavorites(user)}
                onClick={() => activateHeartIcon(heartIcon, item)}>
                <FavoriteIcon ref={heartIcon} className={`heart-icon ${addClassToHeart(user, favorites, item)}`}>
                </FavoriteIcon>
            </button>
            <h1 className="item-name-h1">{item.name}</h1>
            <div className="item-info">
                <Box className="rating-wrapper info-part" sx={{ '& > legend': { mt: 2 } }}>
                    <p className="reviews">
                        {item.rating && item.rating.length >= 1 ? `${item.rating.length} reviews` : "no reviews yet"}
                    </p>
                    <Rating className="rating-stars" name="text-feedback" value={Number(getAvgRating(item.rating))}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>
                <p className="info-part">{item.location}</p>
                <p className="info-part">phone: {item.phone}</p>
                <div className="info-part">
                    <a className="item-link" target="_blank" rel="noreferrer" href={item.link}>Visit here</a>
                </div>
                <div className="info-part green-pass">
                    <MasksIcon className="green-pass-icon" />
                    <h1>{item.greenPass ? 'green pass required' : 'no green pass required'}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;