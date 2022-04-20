import styled from "styled-components";

export const StyledItemInfo = styled.section`
    grid-area:info;
    width: 100%;
    height: 100%;
    display:grid;
    grid-template-areas:
    'details details details'
    'images images hours'
    'description description description';
    grid-template-rows: 15% 47% 38%;
    grid-template-columns: 30% 30% 40%;

    .heart-icon-btn{
        cursor: pointer;
        position: absolute;
        padding:8px;
        right: 5%;
        top: 5%;
        border-radius:50%;
        background:white;
        border:2px solid black;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .heart-icon {
        font-size:1.5rem;
        color:black;
        transition: 0.1s ease-in-out;
    }
    .heart-icon-btn:disabled{
        border-color: gray;
    }
    .heart-icon-btn:disabled> .heart-icon{
        color:gray;
    }
    .item-liked{
        color: red;
    }
    .item-liked{
        animation-name: heart;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    @keyframes heart {
        50% {
            transform: scale(2);
        }
        100% {
            transform: scale(1);
            color: red;
        }
    }


    .item-details{
    position: relative;
    grid-area: details;
    display: flex;
    flex-direction: column;
    justify-content:center;
    flex-wrap: wrap;
    }
    .item-info{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .info-part{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 900;
        width: 20%;
        height: 50%;
        display :flex;
        justify-content: center;
        align-items: center;
        border-right: 2px solid black;
    }
    .info-part:last-child{
        border: none;
    }
    

    .item-name-h1{
        margin-left:5%;
        width: 100%;
        height: 30%;
        font-size:3rem;
    }
    .rating-wrapper{
        justify-content: space-evenly !important;
    }
    .item-link{
        text-decoration: none;
        border: 2px solid ${({ mode }) => mode.color};
        border-left-color: transparent;
        border-right-color: transparent;
        color: ${({ mode }) => mode.color};
        padding: 5px;
        transition: 0.2s ease-in-out;
    }
    .item-link:hover{
        color: ${({ mode }) => mode.background};
        background: ${({ mode }) => mode.color};
    }
    .green-pass{
        justify-content: space-evenly !important;
    }
    .green-pass-icon{
        color: green;
        font-size: 4rem;
    }

    .item-images-wrapper{
        grid-area: images;
        display:grid;
        grid-template-areas:
        'item-main-img item-one'
        'item-main-img item-two';
        grid-template-columns: 60% 40%;
        grid-template-rows: 50% 50%;
    }
    .item-main-img {
        width: 100%;
        height: 100%;
        grid-area: item-main-img;
        border-radius:5px;
        border:1px solid white;
    }
    .item-one {
        width: 100%;
        height: 100%;
        grid-area: item-one;
        border-radius:5px;
        border:1px solid white;
    }
    .item-two {
        width: 100%;
        height: 100%;
        grid-area: item-two;
        border-radius:5px;
        border:1px solid white;
    }


    .activities-hours-wrapper{
        grid-area: hours;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .activities-hours-title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 2.5rem;
        height: 25%;
    }
    .activities-hours{
        width: 100%;
        height: 55%;
        display: flex;
        flex-direction:column;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 900;
    }
    .item-prices{
        font-size: 2.5rem;
    }

    .item-description-wrapper{
        grid-area: description;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        
    }
    .item-description{
        font-size: 1.8rem;
        font-weight: 900;
        width: 100%;
        height: 75%;
        overflow: auto;
    }
    .item-description-title{
        display: flex;
        align-items: center;
        font-size: 2rem;
        width: fit-content;
        height: 15%;
        border-bottom: 2px solid black;
    }
@media  only screen  and (min-width:320px) and (max-width:375px){
    .info-part{
        font-size: 0.7rem;
    }
    .item-name-h1{
        font-size:1.5rem;
    }
    .heart-icon-btn{
        padding:0.5px;
    }
    .green-pass-icon{
        display: none;
    }
    .activities-hours-title{
        font-size: 1.5rem;
        margin-left: 50px;

    }
    .activities-hours{
        font-size: 1rem;
        overflow: auto;
        margin-left: 50px;
    }
    .item-prices{
        font-size: 1rem;
        margin-top: 20px;
    }
    .item-description-title{
        font-size: 1.5rem;
    }
    .item-description{
        font-size: 1rem;
    }
    .rating-stars{
        font-size: 0.7rem;
    
    }
    .rating-wrapper{
      flex-direction: column;
       }
   

}
@media  only screen  and (min-width:375px) and (max-width:425px){
    .info-part{
        font-size: 0.7rem;
    }
    .item-name-h1{
        font-size:1.5rem;
    }
    .heart-icon-btn{
        padding:0.5px;
    }
    .green-pass-icon{
        display: none;
    }
    .activities-hours-title{
        font-size: 1.5rem;
        margin-left: 50px;

    }
    .activities-hours{
        font-size: 1rem;
        overflow: auto;
        margin-left: 50px;
    }
    .item-prices{
        font-size: 1rem;
        margin-top: 20px;
    }
    .item-description-title{
        font-size: 1.5rem;
    }
    .item-description{
        font-size: 1rem;
    }
    .rating-stars{
        font-size: 0.7rem;
    
    }
    .rating-wrapper{
      flex-direction: column;
       }
   
}
@media  only screen  and (min-width:425px) and (max-width:768px){
    .info-part{
        font-size: 1rem;
    }
    .item-name-h1{
        font-size:1.5rem;
    }
    .heart-icon-btn{
        padding:0.5px;
    }
    .green-pass-icon{
        display: none;
    }
    .activities-hours-title{
        font-size: 1.5rem;
        margin-left: 50px;

    }
    .activities-hours{
        font-size: 1rem;
        overflow: auto;
        margin-left: 50px;
    }
    .item-prices{
        font-size: 1rem;
        margin-top: 20px;
    }
    .item-description-title{
        font-size: 1.5rem;
    }
    .item-description{
        font-size: 1.5rem;
    }
    .rating-stars{
        font-size: 1rem;
    
    }
    .rating-wrapper{
      flex-direction: column;
       }
   
}

`