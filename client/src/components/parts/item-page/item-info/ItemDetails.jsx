import { useContext, useRef } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import MasksIcon from '@mui/icons-material/Masks';
import { DataContext } from "../../../../contexts/data-context";
import { getAvgRating } from "../../../../utils/getAvgRating";
import HeartIcon from "../../HeartIcon";

const ItemDetails = () => {
    const { item } = useContext(DataContext);
    const heartIconRef = useRef();

    const positionProps = {
        right: "0",
        top: "0"
    };

    return (
        <div className="item-details">
            <HeartIcon
                positionProps={positionProps}
                heartIconRef={heartIconRef} item={item} />
            <h1>{item.name}</h1>
            <div className="item-info">
                <Box className="info-part rating-wrapper" sx={{ '& > legend': { mt: 2 } }}>
                    <p>{item.rating && item.rating.length >= 1 ? `${item.rating.length} reviews` : "no reviews yet"}</p>
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
                    <p>{item.greenPass ? 'green pass required' : 'no green pass required'}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;