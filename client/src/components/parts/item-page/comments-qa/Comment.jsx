import { useContext, useRef, useEffect, useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from "../../../../contexts/data-context";
import { updateComment, deleteComment } from "../../../../services/comment-service";
import useItemData from "../../../../hooks/useItemData";
import { verifyUserAccess } from "../../../../utils/verifyUserAccess";

const Comment = ({ comment }) => {
    const { user, item } = useContext(DataContext);
    const { updateCommentsLocalStorage, deleteCommentLocalStorage } = useItemData();
    const [isUserLikedComment, setIsUserLikedComment] = useState(false);
    const likeRef = useRef();

    useEffect(() => {
        for (const userId of comment.likes.users_Id) {
            if (userId === user._id) {
                setIsUserLikedComment(true);
                likeRef.current.classList.add('liked');
            }
        }
    }, [comment.likes.users_Id, user._id])

    const getUpdatedLikes = () => {
        if (!isUserLikedComment) {
            return {
                likes: {
                    amount: Number(comment.likes.amount + 1),
                    users_Id: [...comment.likes.users_Id, user._id]
                }
            }
        }
        else {
            let filteredLikesArray = comment.likes.users_Id.filter((userId) => userId !== user._id);
            return {
                likes: {
                    amount: Number(comment.likes.amount - 1),
                    users_Id: filteredLikesArray.length >= 1 ? [filteredLikesArray] : []
                }
            }
        }
    };
    const likeComment = () => {
        likeRef.current.classList.toggle('liked');
        updateComment(getUpdatedLikes(), comment._id)
            .then((res) => {
                setIsUserLikedComment(!isUserLikedComment)
                updateCommentsLocalStorage(res.comment.itemRef)
                console.log(res)
            })
    };
    const removeComment = () => {
        deleteComment(comment._id)
            .then((res) => {
                deleteCommentLocalStorage(item, comment)
                console.log(res);
            })
    };

    return (
        <article className="article-box">
            {
                comment.writer_id === user._id || user.isAdmin ?
                    <button className="remove-article-btn" onClick={removeComment}>
                        <DeleteIcon className="remove-article-icon" />
                    </button>
                    : null
            }
            <div className="article-header">
                <h1>{comment.writer_name}</h1>
                <img src={comment.writer_img} alt={`${comment.writer_name} img`} />
            </div>
            <div className="article-body">
                <p>{comment.body}</p>
            </div>
            <div className="article-footer comment">
                <span className="article-time">{comment.createdAt.substr(0, 10)}
                </span>
                <span className="comment-likes-amount">{comment.likes.amount}</span>
                <button disabled={verifyUserAccess(user)} onClick={likeComment}>
                    <ThumbUpIcon ref={likeRef} className="comment-likes-icon" />
                </button>
            </div>
        </article>
    );
};

export default Comment;