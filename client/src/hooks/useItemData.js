import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../contexts/data-context';
import { GetActivityById } from '../services/activity-services';
import { GetHotelById } from '../services/hotel-services';
import { GetRestaurantById } from '../services/restaurant-services';

const useItemData = () => {
    const { setLoader, item, setItem } = useContext(DataContext);
    const navigate = useNavigate();

    const updateRatingLocalStorage = (product) => {
        setLoader(true);
        setItem({ ...item, rating: product.rating });
        localStorage.setItem("item", JSON.stringify({ ...item, rating: product.rating }));
        setLoader(false);
    };
    const updateCommentsLocalStorage = (product) => {
        setLoader(true);
        setItem({ ...item, comments: product.comments });
        localStorage.setItem("item", JSON.stringify({ ...item, comments: product.comments }));
        setLoader(false);
    };
    const deleteCommentLocalStorage = (product, deletedComment) => {
        setLoader(true);
        let filteredComments = product.comments.filter((com) => com._id !== deletedComment._id);
        setItem({ ...item, comments: filteredComments });
        localStorage.setItem("item", JSON.stringify({ ...item, comments: filteredComments }));
        setLoader(false);
    };
    const updateQuestionsLocalStorage = (product) => {
        setLoader(true);
        setItem({ ...item, q_a: product.q_a });
        localStorage.setItem("item", JSON.stringify({ ...item, q_a: product.q_a }));
        setLoader(false);
    };
    const deleteQuestionLocalStorage = (product, deletedQuestion) => {
        setLoader(true);
        let filteredQuestions = product.q_a.filter((question) => question._id !== deletedQuestion._id);
        setItem({ ...item, q_a: filteredQuestions });
        localStorage.setItem("item", JSON.stringify({ ...item, q_a: filteredQuestions }));
        setLoader(false);
    };
    const navigateToItemPage = (cityName, product) => {
        setLoader(true)
        switch (product.category) {
            case "Restaurant":
                GetRestaurantById(product._id)
                    .then((res) => {
                        localStorage.setItem("item", JSON.stringify(res.restaurant));
                        setItem(res.restaurant);
                    })
                    .then(() => { navigate(`/${cityName}/${product.name}`) })
                    .finally(() => { setLoader(false) })
                break;
            case "Hotel":
                GetHotelById(product._id)
                    .then((res) => {
                        localStorage.setItem("item", JSON.stringify(res.hotel));
                        setItem(res.hotel);
                    })
                    .then(() => { navigate(`/${cityName}/${product.name}`) })
                    .finally(() => { setLoader(false) })
                break;
            case "Activity":
                GetActivityById(product._id)
                    .then((res) => {
                        localStorage.setItem("item", JSON.stringify(res.activity));
                        setItem(res.activity)
                    })
                    .then(() => { navigate(`/${cityName}/${product.name}`) })
                    .finally(() => { setLoader(false) })
                break;
            default:
                break;
        };
    };

    return {
        item, setItem, navigateToItemPage,
        updateRatingLocalStorage,
        updateCommentsLocalStorage, deleteCommentLocalStorage,
        updateQuestionsLocalStorage, deleteQuestionLocalStorage
    };
};

export default useItemData;