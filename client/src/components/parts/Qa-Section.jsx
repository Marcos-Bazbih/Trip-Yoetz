import { useContext, useRef, useState } from 'react';
import { MainContext } from '../../contexts/data-context';
import { AddQuestionToRestaurants, GetRestaurants } from '../../services/restaurant-services';
import { AddQuestionToHotels, GetHotels } from '../../services/hotel-services';
import { AddQuestionToActivities, GetActivities } from '../../services/activity-service';
import { GetDataByName } from '../../state-management/actions/categories-actions';
import { verifyUserAccess } from "../../utils/verifyUserAccess";
import Q_A from './Q_A';

const QaSection = ({ currentCard }) => {
    const { user, restaurantsDispatch, city } = useContext(MainContext);
    const [question, setQuestion] = useState({ id: null, user_id: null });
    const inputRef = useRef();
    const [charsLength, setCharsLength] = useState(0);

    const handleFormOnInput = (event) => {
        question[event.target.name] = event.target.value;
        setCharsLength(event.target.value.length);
    };
    const sendQuestionForm = (event) => {
        event.preventDefault();
        question.qDate = new Date();
        question.id = currentCard.q_a.length + 1;
        question.writer = `${user.name} ${user.lastName}`;
        question.user_img = user.image;
        question.user_id = user._id;
        setQuestion(question);

        switch (currentCard.category) {
            case "restaurant":
                AddQuestionToRestaurants(currentCard._id, currentCard, currentCard.q_a, question)
                GetRestaurants()
                    .then(res => {
                        restaurantsDispatch(
                            GetDataByName(res.data, city)
                        )
                    })
                inputRef.current.value = "";
                break;
            case "hotel":
                AddQuestionToHotels(currentCard._id, currentCard, currentCard.q_a, question)
                GetHotels()
                    .then(res => {
                        restaurantsDispatch(
                            GetDataByName(res.data, city)
                        )
                    })
                inputRef.current.value = "";
                break;
            case "activity":
                AddQuestionToActivities(currentCard._id, currentCard, currentCard.q_a, question)
                GetActivities()
                    .then(res => {
                        restaurantsDispatch(
                            GetDataByName(res.data, city)
                        )
                    })
                inputRef.current.value = "";
                break;
            default:
                break;
        }
    };

    return (
        <>
            <form className="insert-comment-form" onSubmit={sendQuestionForm}>
                <label className="comment-body-label" htmlFor="body">Ask here</label>
                <textarea ref={inputRef} disabled={verifyUserAccess(user)}
                    maxLength="200" rows="5" cols="60"
                    placeholder={!verifyUserAccess(user)
                        ?
                        "What do you want to know ?"
                        :
                        "Plese login or register to ask"}
                    onChange={handleFormOnInput} name="q"
                    className="comment-body-input"
                    required>
                </textarea>
                <button className="comment-send-btn" disabled={verifyUserAccess(user)}>SEND</button>
                <div className="comment-count-wrapper">
                    <span className="comment-count-current">{charsLength}/</span>
                    <span className="comment-count-maximum">200</span>
                </div>
            </form>
            {
                currentCard.q_a && currentCard.q_a.length >= 1
                    ?
                    <h1 className="comments-amount">{currentCard.q_a.length} Questions</h1>
                    : null
            }
            <section className="comments-section">
                {
                    currentCard.q_a && currentCard.q_a.length >= 1 ?
                        currentCard.q_a.map((item, i) =>
                            <Q_A currentCard={currentCard} item={item} key={i} />
                        )
                        :
                        <h1 className="empty-comments">No questions yet</h1>
                }
            </section>
        </>
    )
}

export default QaSection;