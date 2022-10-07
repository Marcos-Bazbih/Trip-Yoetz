import styled from "styled-components";

export const StyledItemInfo = styled.section`
    grid-area:info;
    width: 100%;
    height: 100%;
    display:grid;
    grid-template-areas:
    'details details'
    'images hours'
    'description description';
    grid-template-rows: 20% 50% 30%;
    grid-template-columns: 70% 30%;
    

    .item-details{
        grid-area: details;
        position: relative;
        display: flex;
        flex-wrap: wrap;

        h1{
            width: 100%;
            height: 30%;
            font-size:3rem;
        }
        .item-info{
            width: 100%;
            height: 70%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .info-part{
                text-align: center;
                font-size: 1.5rem;
                font-weight: 900;
                width: 20%;
                height: 100%;
                display :flex;
                justify-content: center;
                align-items: center;
                background: linear-gradient(0deg,black,black);
                background-size: 2px 50%;
                background-repeat: no-repeat;
                background-position: right;

                &:last-child{
                    background-size: 0;
                }

                .item-link{
                    text-decoration: none;
                    border: 2px solid ${({ mode }) => mode.color};
                    border-left-color: transparent;
                    border-right-color: transparent;
                    color: ${({ mode }) => mode.color};
                    padding: 5px;
                    transition: 0.2s ease-in-out;

                    &:hover{
                        color: ${({ mode }) => mode.background};
                        background: ${({ mode }) => mode.color};
                    }
                }
                &.rating-wrapper{
                    flex-direction: column;
                    justify-content: space-evenly;
                }
                &.green-pass{
                    .green-pass-icon{
                        color: green;
                        font-size: 4rem;
                        width: 30%;
                    }
                }
            }
        }
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

    
/* @media  only screen  and (min-width:320px) and (max-width:375px){
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
   
} */
`