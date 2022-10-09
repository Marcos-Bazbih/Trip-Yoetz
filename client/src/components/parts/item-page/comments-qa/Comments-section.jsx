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
            <form className="form" onSubmit={sendCommentForm}>
                <label htmlFor="body">Comment here</label>
                <textarea ref={inputRef} disabled={verifyUserAccess(user)}
                    maxLength="180" rows="5" cols="60"
                    name="body" required
                    onChange={handleCommentOnChange}
                    placeholder={!verifyUserAccess(user)
                        ?
                        "How was your experience here ?"
                        :
                        "Please login or register to comment"}
                >
                </textarea>
                <button disabled={verifyUserAccess(user)}>SEND</button>
                <div className="comment-count-wrapper">
                    <span>{charsLength}/</span>
                    <span>180</span>
                </div>
            </form>
            {
                item.comments && item.comments.length >= 1
                    ?
                    <h1 className="comments-qa-amount">{item.comments.length} Comments</h1>
                    : null
            }
            <section className="articles-section">
                {
                    item.comments && item.comments.length >= 1 ?
                        item.comments.map((commentItem, i) =>
                            <Comment comment={commentItem} key={i} />
                        )
                        :
                        <h1 className="comments-qa-amount">No comments yet</h1>
                }
            </section>
        </>
    );
};

export default CommentsSection;