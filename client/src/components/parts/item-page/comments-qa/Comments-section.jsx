import { useContext, useState, useRef } from "react";
import { DataContext } from "../../../../contexts/data-context";
import { addComment } from "../../../../services/comment-service";
import useItemData from "../../../../hooks/useItemData";
import { verifyUserAccess } from "../../../../utils/verifyUserAccess";
import Comment from "./Comment";

const CommentsSection = () => {
    const { user } = useContext(DataContext);
    const { item, updateCommentsLocalStorage } = useItemData();
    const [comment, setComment] = useState({});
    const [charsLength, setCharsLength] = useState(0);
    const inputRef = useRef();

    const handleCommentOnChange = (event) => {
        comment.body = event.target.value;
        setCharsLength(event.target.value.length);
    };
    const sendCommentForm = (event) => {
        event.preventDefault();
        comment.category = item.category;
        comment.writer_name = `${user.firstName} ${user.lastName}`;
        comment.writer_id = user._id;
        comment.writer_img = user.image;
        setComment(comment);

        addComment(comment, item._id)
            .then((res) => {
                updateCommentsLocalStorage(res.comment.itemRef)
                console.log(res)
            })
            .then(() => {
                inputRef.current.value = "";
                setCharsLength(0);
            })
    };

    return (
        <>
            <form className="insert-comment-form" onSubmit={sendCommentForm}>
                <label className="comment-body-label" htmlFor="body">Comment here</label>
                <textarea ref={inputRef} disabled={verifyUserAccess(user)}
                    maxLength="180" rows="5" cols="60"
                    className="comment-body-input"
                    name="body" required
                    onChange={handleCommentOnChange}
                    placeholder={!verifyUserAccess(user)
                        ?
                        "How was your experience here ?"
                        :
                        "Please login or register to comment"}
                >
                </textarea>
                <button className="comment-send-btn" disabled={verifyUserAccess(user)}>SEND</button>
                <div className="comment-count-wrapper">
                    <span className="comment-count-current">{charsLength}/</span>
                    <span className="comment-count-maximum">180</span>
                </div>
            </form>
            {
                item.comments && item.comments.length >= 1
                    ?
                    <h1 className="comments-amount">{item.comments.length} comments</h1>
                    : null
            }
            <section className="comments-section">
                {
                    item.comments && item.comments.length >= 1 ?
                        item.comments.map((commentItem, i) =>
                            <Comment comment={commentItem} key={i} />
                        )
                        :
                        <h1 className="empty-comments">No comments yet</h1>
                }
            </section>
        </>
    );
};

export default CommentsSection;