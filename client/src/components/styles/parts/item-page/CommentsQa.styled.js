import styled from "styled-components";

export const StyledCommentsQa = styled.section`
    grid-area: comments-qa;
    width: 100%;
    display:flex;
    flex-direction:column;

    .form{
        position: relative;
        width: 100%;
        height: 20vh;
        background:${({ mode }) => mode.background};
        border: 2px solid ${({ mode }) => mode.color};
        
        label{
            position: absolute;
            top: -15px;
            left: 2vw;
            font-size: 2.5rem;
            background:${({ mode }) => mode.background};
            width: fit-content;
            text-align: center;
            padding: 0 10px;
        }
        textarea{
            position: absolute;
            top: 15%;
            font-size:1.5rem;
            min-height: 55%;
            max-height: 55%;
            min-width:100%;
            max-width: 100%;
            background:${({ mode }) => mode.background};
            border: none;
            resize: none; 
            outline: none;
            transition: 0.2s ease-in-out;
            
            &:focus{
                font-size:2rem;  
            }
        }
        button{
            position: absolute;
            cursor: pointer;
            bottom: 0;
            right: 0;
            display: flex;
            justify-content:center;
            align-items:center;
            width: fit-content;
            height: 20%;
            padding: 5px;
            font-size: 2.2rem;
            background: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
            border: none;
            
            &:disabled{
                background: gray;
                color: black;
            }
        }
        .comment-count-wrapper{
            position: absolute;
            right: 3px;
            top: 3px;
            font-size:1.5rem;
            font-weight:900;
        }
    }
    .comments-qa-amount{
        margin-top:2vh;
        text-align: center;
        font-size:3rem;
    }
    .articles-section{
        margin-top: 5vh;
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column-reverse;
        gap: 5vh 0;
    }
    .remove-article-btn{
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        right: -5%;
        top: 0%;
        display: flex;
        justify-content: center;
        align-items: center;

        .remove-article-icon{
            font-size: 2.5rem;

            &:hover{
                color:red;
            }
        }
    }
    .article-box{
        position: relative;
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        border: 2px solid ${({ mode }) => mode.color};
        border-radius:10px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 20vh;
        word-break: break-all;

        &.question{
            width: 95%;

            &::after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 20%;
                width: 0;
                height: 0;
                border: 30px solid transparent;
                border-right-color: ${({ mode }) => mode.color};
                border-left: 0;
                border-bottom: 0;
                margin-top: -20px;
                margin-left: -30px;
            }
        }
        &.answer{
            background: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
            align-self: flex-end;
            width: 95%;

            &::after{
                content: '';
                position: absolute;
                right: 0;
                bottom: 20%;
                width: 0;
                height: 0;
                border: 30px solid transparent;
                border-left-color: ${({ mode }) => mode.color};
                border-right: 0;
                border-bottom: 0;
                margin-top: -20px;
                margin-right: -30px;
            }
        }
    }
    .article-header{
        width: 100%;
        height: 22.5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        h1{
            margin-left:2px;
            font-size: 1.8rem;
            border-bottom:2px solid ${({ mode }) => mode.color};
        }
        img{
            height: 100%;
            width: 5%;
            margin-right:5px;
            border-radius: 50%;
        }
    }
    .article-body{
        width: 100%;
        height: 62.5%;

        p{
            font-size: 1.8rem;
        }
    }
    .article-footer{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .article-time{
            display: flex;
            align-items: center;
            position: absolute; 
            left: 5px;
            bottom: 0px;
            font-size: 1.5rem;
            font-weight: 900;
        }
        &.comment{
            gap:1rem;
            position: relative;

            .comment-likes-amount{
                font-size:2rem;
                font-weight:900;
            }
            button{
                cursor: pointer;
                background: none;
                border: none;

                .comment-likes-icon{
                    font-size: 3rem;
                    
                    @keyframes like {
                        50% {
                            transform: rotate(30deg) scale(2);
                        }
                        75% {
                            transform: rotate(-30deg)
                        }
                        100% {
                            transform: rotate(0deg) scale(1);
                        }
                    }
                    &.liked{
                        animation-name: like;
                        animation-duration: 1s;
                        animation-fill-mode: forwards;
                        color: red;
                    }
                }
            }
        }
    }
    .q_a_wrapper{
        position:relative;
        width: 100%;
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:0.5rem;
    }
    .insert-answer-form{
        width: 95%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        
        input{
            width: 30%;
            border-radius: 20px;
            border: 2px solid ${({ mode }) => mode.color};
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            font-size:1.5rem;
            padding: 0 5px;
            outline: none;
            transition: 0.2s ease-in-out;

            &:focus-visible{
                width: 80%;
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
            }
        }
        button{
            cursor: pointer;
            font-size:1.8rem;
            font-weight:900;
            padding: 0 5px;
            border-radius: 20px;
            border: 2px solid ${({ mode }) => mode.background};
            background: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
        }
    }

    @media (max-width: 768px) {
        .form{
            height: 25vh;
            textarea{
                max-height: 65%;
                &:focus{
                font-size:1.8rem;  
                }
            }
        }
        .article-box{
            height: 25vh;
        }
        .article-footer{
            &.comment{
                button{
                    .comment-likes-icon{
                        font-size: 2.5rem;
                    }
                } 
            }
        }
    }
    @media (max-width: 426px) {
        .form{
            label{
                font-size: 2rem;
            }    
            button{
                height: 15%;
                font-size: 1.5rem;
            }
        }
        .remove-article-btn{
            right: -10%;
        }
        .article-header{
            img{
                width: 10%;
            }
        }
        .article-body{
            overflow-y: auto;
            p{
            font-size: 1.5rem;
            }
        }
        .insert-answer-form{
            input{
                width: 50%;
            }
            button{
                font-size:1.5rem;
            }
        }
    }
    @media (max-width: 320px) {
        .article-footer{
            &.comment{
                button{
                    .comment-likes-icon{
                        font-size: 2rem;
                    }
                } 
            }
        }
        .remove-article-btn{
            right: -12%;
        }
        .insert-answer-form{
            input{
                font-size:1.3rem;
            }
            button{
                font-size:1.2rem;
            }
        }
    }
`