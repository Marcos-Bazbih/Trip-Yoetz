import { useContext, useRef } from "react";
import { getAvgRating } from "../../utils/getAvgRating";
import { StyledItemInfo } from "../styles/parts/StyledItemInfo";
import { verifyUserFavorites, activateHeartIcon, addClassToHeart } from "../../utils/favoritesList-functions";
import { MainContext } from "../../contexts/data-context";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { ThemeContext } from "../../contexts/theme-context";
import MasksIcon from '@mui/icons-material/Masks';


const ItemInfo = ({ item }) => {
    const { user } = useContext(MainContext);
    const { mode } = useContext(ThemeContext);
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const heartIcon = useRef();

    return (
        <StyledItemInfo mode={mode}>
            <div className="item-details">
                <button className="heart-icon-btn" disabled={verifyUserFavorites(user)}
                    onClick={() => activateHeartIcon(heartIcon, item)}>
                    <FavoriteIcon ref={heartIcon} className={`heart-icon ${addClassToHeart(user, favorites, item)}`}>
                    </FavoriteIcon>
                </button>
                <h1 className="item-name-h1">{item.name}</h1>
                <div className="item-info">
                    {
                        item.rating &&
                        <Box className="rating-wrapper info-part" sx={{ '& > legend': { mt: 2 } }}>
                            <p className="reviews">{item.rating.length >= 1 ? `${item.rating.length} reviews` : "no reviews yet"}</p>
                            <Rating className="rating-stars" name="text-feedback" value={Number(getAvgRating(item.rating))} precision={0.5} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} />
                        </Box>
                    }
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
            {
                item.images && item.images.length >= 1
                    ?
                    <div className="item-images-wrapper">
                        <img className="item-main-img" src={item.images[0]} alt={`${item.name} img`} />
                        <img className="item-one" src={item.images[1]} alt={`${item.name} img`} />
                        <img className="item-two" src={item.images[2]} alt={`${item.name} img`} />
                    </div>
                    :
                    null
            }
            <div className="activities-hours-wrapper">
                <h1 className="activities-hours-title">Activity Hours</h1>
                <div className="activities-hours">
                    {
                        item.activitiesHours ?
                            item.activitiesHours.split("PM").map((item, i) =>
                                i < 7 &&
                                <p key={i}>{item} PM</p>
                            )
                            :
                            null
                    }
                </div>
                <h1 className="item-prices">
                    {
                        item.price && item.price.length >= 1
                            ?
                            `${item.price[0]}$ - ${item.price[1]}$`
                            :
                            "No price info"
                    }
                </h1>
            </div>
            <div className="item-description-wrapper">
                {
                    item.description &&
                    <>
                        <h2 className="item-description-title">About</h2>
                        <p className="item-description">{item.description}</p>
                    </>
                }
            </div>
        </StyledItemInfo>
    );
};

export default ItemInfo;