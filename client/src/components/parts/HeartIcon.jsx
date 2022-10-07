import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import { DataContext } from '../../contexts/data-context';
import { activateHeartIcon, addClassToHeart } from '../../utils/favoritesList-functions';
import { verifyUserAccess } from "../../utils/verifyUserAccess";
import { StyledHeartIcon } from "../styles/parts/HeartIcon.styled";

const HeartIcon = ({ heartIconRef, item, positionProps }) => {
    const { user } = useContext(DataContext);
    const favorites = JSON.parse(localStorage.getItem("favorites"));

    return (
        <StyledHeartIcon
            positionProps={positionProps}
            disabled={verifyUserAccess(user)}
            onClick={() => activateHeartIcon(heartIconRef, item)}>
            <FavoriteIcon ref={heartIconRef}
                className={`heart-icon ${addClassToHeart(user, favorites, item)}`}>
            </FavoriteIcon>
        </StyledHeartIcon>
    );
};

export default HeartIcon;