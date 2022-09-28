import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../layout/navbar";
import CommentsSection from "../parts/Comments-section";
import ItemInfo from "../parts/item-page/item-info";
import QaSection from "../parts/Qa-Section";
import { StyledItemPage } from "../styles/pages/StyledItemPage";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledCommentsQa } from "../styles/parts/StyledCommentsQa";
import RatingStars from "../parts/item-page/RatingStars";
// import useCityData from "../../hooks/useCityData";

const ItemPage = () => {
    const { mode } = useContext(ThemeContext);
    // const { user, city } = useCityData();
    const product = useLocation().state;
    const [toggle, setToggle] = useState(true);

    const ratingProps = {
        rating: product.rating,
        category: product.category,
        itemId: product._id
    };

    return (
        <StyledItemPage mode={mode}>
            <Navbar />
            <ItemInfo item={product} />
            <RatingStars {...ratingProps} />
            <div className="toggle-btns-wrapper">
                <button className={`toggle-btn ${toggle ? 'toggle-active' : ''}`}
                    disabled={toggle} onClick={() => setToggle(true)}>
                    Comments
                </button>
                <button className={`toggle-btn ${!toggle ? 'toggle-active' : ''}`}
                    disabled={!toggle} onClick={() => setToggle(false)}>
                    Q&A
                </button>
            </div>
            <StyledCommentsQa mode={mode} className="comments-qa">
                {toggle
                    ?
                    <CommentsSection currentCard={product} />
                    :
                    <QaSection currentCard={product} />
                }
            </StyledCommentsQa>
        </StyledItemPage>
    );
};

export default ItemPage;