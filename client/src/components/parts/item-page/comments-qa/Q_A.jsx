import { useContext, useRef, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from "../../../../contexts/data-context";
import { updateQuestion, deleteQuestion } from "../../../../services/qa-service";
import useItemData from "../../../../hooks/useItemData";

const Q_A = ({ qa }) => {
    const { user, item } = useContext(DataContext);
    const { updateQuestionsLocalStorage, deleteQuestionLocalStorage } = useItemData();
    const [answer, setAnswer] = useState({})
    const inputRef = useRef();

    const handleAnswerOnChange = (event) => {
        answer.answer = event.target.value;
    };
    const sendAnswerForm = (event) => {
        event.preventDefault();
        answer.admin_name = `${user.firstName} ${user.lastName}`;
        answer.admin_id = user._id;
        answer.admin_img = user.image;
        answer.a_date = new Date();
        setAnswer(answer);

        updateQuestion(answer, qa._id)
            .then((res) => {
                updateQuestionsLocalStorage(res.q_a.itemRef)
                console.log(res)
            })
    };
    const removeQuestion = () => {
        deleteQuestion(qa._id)
            .then((res) => {
                deleteQuestionLocalStorage(item, qa)
                console.log(res);
            })
    };

    return (
        <div className="q_a_wrapper">
            {
                qa.writer_id === user._id || user.isAdmin ?
                    <button className="remove-comment-btn" onClick={removeQuestion}>
                        <DeleteIcon className="remove-comment-icon" />
                    </button>
                    : null
            }
            <article className="question-box">
                <div className="q_a-header">
                    <h1 className="q_a-writer">{qa.writer_name}</h1>
                    <img className="q_a-img" src={qa.writer_img} alt={`${qa.writer_name} img`} />
                </div>
                <div className="q_a-body">
                    <p className="q_a-body-text">{qa.question}</p>
                </div>
                <div className="q_a-footer">
                    <span className="q_a-time">{qa.q_date.substr(0, 10)}</span>
                </div>
            </article>
            {
                qa.answer &&
                <article className="answer-box">
                    <div className="q_a-header">
                        <h1 className="q_a-writer admin-writer">{qa.admin_name}</h1>
                        <img className="q_a-img" src={qa.admin_img} alt={`${qa.admin_name} img`} />
                    </div>
                    <div className="q_a-body">
                        <p className="q_a-body-text">{qa.answer}</p>
                    </div>
                    <div className="q_a-footer">
                        <span className="q_a-time">{qa.a_date.substr(0, 10)}</span>
                    </div>
                </article>
            }
            {
                user.isAdmin && !qa.answer
                    ?
                    <form className="insert-answer-form" onSubmit={sendAnswerForm}>
                        <input ref={inputRef} placeholder="answer here..."
                            className="answer-input" name="answer" type="text"
                            required onChange={handleAnswerOnChange} />
                        <button className="answer-send-btn">SEND</button>
                    </form>
                    :
                    null
            }
        </div>
    );
};

export default Q_A;