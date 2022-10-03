import { useContext, useState } from "react";
import Navbar from "../layout/navbar";
import CommentsSection from "../parts/Comments-section";
import ItemInfo from "../parts/item-page/item-info";
import QaSection from "../parts/Qa-Section";
import { StyledItemPage } from "../styles/pages/StyledItemPage";
import { DataContext } from "../../contexts/data-context";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledCommentsQa } from "../styles/parts/StyledCommentsQa";
import RatingStars from "../parts/item-page/RatingStars";

const ItemPage = () => {
    const { mode } = useContext(ThemeContext);
    const { item } = useContext(DataContext);
    const [toggle, setToggle] = useState(true);
    
    const ratingProps = {
        rating: item.rating,
        category: item.category,
        itemId: item._id
    };

    return (
        <StyledItemPage mode={mode}>
            <Navbar />
            <ItemInfo item={item} />
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
                    <CommentsSection currentCard={item} />
                    :
                    <QaSection currentCard={item} />
                }
            </StyledCommentsQa>
        </StyledItemPage>
    );
};

export default ItemPage;