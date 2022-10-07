import { useContext, useState, useRef } from 'react';
import { DataContext } from '../../../../contexts/data-context';
import { addQuestion } from "../../../../services/qa-service";
import useItemData from '../../../../hooks/useItemData';
import { verifyUserAccess } from "../../../../utils/verifyUserAccess";
import Q_A from './Q_A';

const QaSection = () => {
    const { user } = useContext(DataContext);
    const { item, updateQuestionsLocalStorage } = useItemData();
    const [question, setQuestion] = useState({});
    const [charsLength, setCharsLength] = useState(0);
    const inputRef = useRef();

    const handleQuestionOnChange = (event) => {
        question.question = event.target.value;
        setCharsLength(event.target.value.length);
    };
    const sendQuestionForm = (event) => {
        event.preventDefault();
        question.category = item.category;
        question.writer_name = `${user.firstName} ${user.lastName}`;
        question.writer_id = user._id;
        question.writer_img = user.image;
        setQuestion(question);

        addQuestion(question, item._id)
            .then((res) => {
                updateQuestionsLocalStorage(res.q_a.itemRef)
                console.log(res)
            })
            .then(() => {
                inputRef.current.value = "";
                setCharsLength(0);
            })
    };

    return (
        <>
            <form className="insert-comment-form" onSubmit={sendQuestionForm}>
                <label className="comment-body-label" htmlFor="body">Ask here</label>
                <textarea ref={inputRef} disabled={verifyUserAccess(user)}
                    maxLength="180" rows="5" cols="60"
                    className="comment-body-input"
                    name="question" required
                    onChange={handleQuestionOnChange}
                    placeholder={!verifyUserAccess(user)
                        ?
                        "What do you want to know ?"
                        :
                        "Please login or register to ask"}
                >
                </textarea>
                <button className="comment-send-btn" disabled={verifyUserAccess(user)}>SEND</button>
                <div className="comment-count-wrapper">
                    <span className="comment-count-current">{charsLength}/</span>
                    <span className="comment-count-maximum">180</span>
                </div>
            </form>
            {
                item.q_a && item.q_a.length >= 1
                    ?
                    <h1 className="comments-amount">{item.q_a.length} Questions</h1>
                    : null
            }
            <section className="comments-section">
                {
                    item.q_a && item.q_a.length >= 1 ?
                        item.q_a.map((qaItem, i) =>
                            <Q_A qa={qaItem} key={i} />
                        )
                        :
                        <h1 className="empty-comments">No questions yet</h1>
                }
            </section>
        </>
    );
};

export default QaSection;