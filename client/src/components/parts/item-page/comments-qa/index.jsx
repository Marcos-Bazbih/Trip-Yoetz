import { useContext, useState } from "react";
import { ThemeContext } from "../../../../contexts/theme-context";
import useItemData from "../../../../hooks/useItemData";
import { StyledCommentsQa } from "../../../styles/parts/StyledCommentsQa";
import CommentsSection from "./Comments-section";
import QaSection from "./Qa-Section";

const CommentsQa = () => {
    const { mode } = useContext(ThemeContext);
    const [toggle, setToggle] = useState(true);
    const { item } = useItemData();

    return (
        <>
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
                    <CommentsSection />
                    :
                    <QaSection currentCard={item} />
                }
            </StyledCommentsQa>
        </>
    );
};

export default CommentsQa;