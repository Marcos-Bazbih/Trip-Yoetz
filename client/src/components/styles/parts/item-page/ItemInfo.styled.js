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
                background: linear-gradient(0deg,${({ mode }) => mode.color},${({ mode }) => mode.color});
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
        'main-img second-img'
        'main-img third-img';
        grid-template-columns: 60% 40%;
        grid-template-rows: 50% 50%;

        img{
            cursor: pointer;
            width: 100%;
            height: 100%;
            border-radius:5px;
            border:1px solid white;
        }

        .main-img {
            grid-area: main-img;
        }
        .second-img {
            grid-area: second-img;
        }
        .third-img {
            grid-area: third-img;
        }
    }
    .image-modal{
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 80%;
            height: 80%;
            border-radius: 10px;
        }
        button{
            color: ${({mode})=> mode.color};
            background: ${({mode})=> mode.background};
            border: 2px solid ${({mode})=> mode.color};
            cursor: pointer;
            position: absolute;
            top: 10%;
            font-size: 3rem;
            font-weight: 900;
            border-radius: 50%;
            padding: 5px 10px;
            transition: 0.1s ease-in-out;

            &:hover{
                color: ${({mode})=> mode.background};
                background: ${({mode})=> mode.color};
            }
        }
    }
    .activities-hours-wrapper{
        grid-area: hours;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        h1{
            font-size: 2.5rem;
            height: fit-content;
        }
        .activities-hours{
            width: 100%;
            height: 60%;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: space-evenly;
            font-size: 1.5rem;
            font-weight: 900;
        }
    }
    .item-description-wrapper{
        grid-area: description;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 1vh;

        h2{
            font-size: 2rem;
            width: fit-content;
            height: fit-content;
            border-bottom: 2px solid ${({ mode }) => mode.color};
        }
        p{
            font-size: 1.8rem;
            font-weight: 900;
            width: 100%;
            height: 75%;
            overflow: auto;
        }
    }
    
    @media (max-width: 768px) {
        grid-template-areas:
        'details'
        'images'
        'hours'
        'description';
        grid-template-rows: 20% 30% 30% 20%;
        grid-template-columns: 100%;

        .item-details{
            h1{
                font-size:2.7rem;
            }
            .item-info{
                flex-wrap: wrap;
                .info-part{
                    font-size: 1.2rem;
                    width: 50%;
                    height: 33%;
                }
            }
        }
    }
    @media (max-width: 426px) {
        grid-template-rows: 20% 25% 30% 25%;
    }
    @media (max-width: 376px) {
        grid-template-rows: 25% 25% 25% 25%;
        .activities-hours-wrapper{
            h1{
                font-size: 2rem;
            }
            .activities-hours{
                font-size: 1.3rem;
            }
        }
        .item-description-wrapper{
            h2{
                font-size: 1.8rem;
            }
            p{
                font-size: 1.5rem;
            }
        }
    }
`