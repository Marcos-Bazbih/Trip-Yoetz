import styled from "styled-components";

export const StyledItemCard = styled.article`
    width: 100%;
    height: 25vh;
    display:flex;
    position: relative;
    border-radius:5px;
    border: 1px solid ${({ mode }) => mode.color};
    
    .heart-btn{
        cursor: pointer;
        z-index: 1;
        position: absolute;
        padding:8px;
        left: 10px;
        top: 10px;
        border-radius:50%;
        background:white;
        border:2px solid black;
        display: flex;
        justify-content:center;
        align-items: center;

        &:disabled{
            border-color: gray;
        }
        &:disabled> .heart-icon{
            color:gray;
        }

        .heart-icon {
            font-size:1.5rem;
            color:black;
            transition: 0.1s ease-in-out;

            &.item-liked{
                color: red;
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
        }
    }
    .card-info{
        width: 70%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        font-size:1.3rem;
        font-weight: 900;
        text-align: center;
        
        .card-price{
            position: absolute;
            right: 10px;
            top: 10px;
            background-color: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
            padding: 4px;

            p{
                font-size: 1.5rem;
                font-weight: 900;
            }
        }
        h1{
            text-align: center;
            font-size:2.2rem;
        }
        .rating-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            gap:2rem;
        }
    }
    .card-link{
        border-radius: 0 5px 5px 0;
        width: 30%;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        
        img{
            transition: 0.2s ease-in-out;
            width: 100%;
            height: 100%;
        
            &:hover{
                filter: brightness(125%);
                transform: scale(1.1);
            }
        }
    }

    @media (max-width: 768px) {
        height: 28vh;
    }
    @media (max-width: 600px) {
        height: 45vh;
        flex-direction: column-reverse;

        .card-info{
            width: 100%;
            height: 40%;
            h1{
                align-self: flex-start;
                margin-left: 10px;
            }
        }
        .card-link{
            width: 100%;
            height: 60%;
            border-radius: 5px 5px 0 0;
        }
    }
    @media (max-width: 376px) {
        .card-info{
            font-size:1.2rem;
            h1{
                font-size:2rem;
            }
            .card-price{
                right: 5px;
                top: 5px;
                p{
                    font-size: 1.3rem;
                    font-weight: 900;
                }
            }
        }
    }
    @media (max-width: 325px) {
        height: 42.5vh;
    }
`