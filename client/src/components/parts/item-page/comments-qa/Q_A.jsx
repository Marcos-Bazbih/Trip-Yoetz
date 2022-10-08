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
                    <button className="remove-article-btn" onClick={removeQuestion}>
                        <DeleteIcon className="remove-article-icon" />
                    </button>
                    : null
            }
            <article className="article-box question">
                <div className="article-header">
                    <h1>{qa.writer_name}</h1>
                    <img src={qa.writer_img} alt={`${qa.writer_name} img`} />
                </div>
                <div className="article-body">
                    <p>{qa.question}</p>
                </div>
                <div className="article-footer">
                    <span className="article-time">{qa.q_date.substr(0, 10)}</span>
                </div>
            </article>
            {
                qa.answer &&
                <article className="article-box answer">
                    <div className="article-header">
                        <h1>{qa.admin_name}</h1>
                        <img src={qa.admin_img} alt={`${qa.admin_name} img`} />
                    </div>
                    <div className="article-body">
                        <p>{qa.answer}</p>
                    </div>
                    <div className="article-footer">
                        <span className="article-time">{qa.a_date.substr(0, 10)}</span>
                    </div>
                </article>
            }
            {
                user.isAdmin && !qa.answer
                    ?
                    <form className="insert-answer-form" onSubmit={sendAnswerForm}>
                        <input ref={inputRef} placeholder="answer here..."
                            name="answer" type="text"
                            maxLength={180}
                            required onChange={handleAnswerOnChange} />
                        <button>SEND</button>
                    </form>
                    :
                    null
            }
        </div>
    );
};

export default Q_A;