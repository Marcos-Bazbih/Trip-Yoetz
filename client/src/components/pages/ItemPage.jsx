import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import useItemData from "../../hooks/useItemData";
import { StyledItemPage } from "../styles/pages/StyledItemPage";
import { StyledCommentsQa } from "../styles/parts/StyledCommentsQa";
import Navbar from "../layout/navbar";
import CommentsSection from "../parts/Comments-section";
import ItemInfo from "../parts/item-page/item-info";
import QaSection from "../parts/Qa-Section";
import RatingStars from "../parts/item-page/RatingStars";

const ItemPage = () => {
    const { mode } = useContext(ThemeContext);
    const { item } = useItemData();
    const [toggle, setToggle] = useState(true);

    return (
        <StyledItemPage mode={mode}>
            <Navbar />
            <ItemInfo />
            <RatingStars />
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