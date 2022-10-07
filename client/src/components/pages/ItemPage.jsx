import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledItemPage } from "../styles/pages/ItemPage.styled";
import Navbar from "../layout/navbar";
import ItemInfo from "../parts/item-page/item-info";
import RatingStars from "../parts/item-page/RatingStars";
import CommentsQa from "../parts/item-page/comments-qa";

const ItemPage = () => {
    const { mode } = useContext(ThemeContext);

    return (
        <StyledItemPage mode={mode}>
            <Navbar />
            <ItemInfo />
            <RatingStars />
            <CommentsQa />
        </StyledItemPage>
    );
};

export default ItemPage;