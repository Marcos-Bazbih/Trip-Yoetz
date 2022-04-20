import styled from "styled-components";

export const StyledCommentsQa = styled.section`
    grid-area: comments-qa;
    width: 70%;
    margin:0 auto;
    display:flex;
    flex-direction:column;

    .q_a_wrapper{
        position:relative;
        width: 100%;
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:0.5rem;
    }


    .question-box{
        height: 20vh;
        width: 95%;
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        border: 2px solid ${({ mode }) => mode.color};
        border-radius:10px;
        display: flex;
        flex-direction: column;
        word-break: break-all;
        position: relative;
    }
    .question-box::after{
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
    .answer-box{
        align-self: flex-end;
        height: 20vh;
        width: 95%;
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        border: 2px solid ${({ mode }) => mode.color};
        border-radius:10px;
        display: flex;
        flex-direction: column;
        word-break: break-all;
        position: relative;
    }
    .answer-box::after{
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


    .q_a-header{
        width: 100%;
        height: 22.5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .q_a-writer{
        margin-left:2px;
        font-size: 1.8rem;
        border-bottom:2px solid ${({ mode }) => mode.color};
    }
    .q_a-writer.admin-writer{
        border-bottom-color:${({ mode }) => mode.background};
    }
    .q_a-img{
        height: 100%;
        width: 5%;
        margin-right:5px;
        border-radius: 50%;
    }
    .q_a-body{
        width: 100%;
        height: 62.5%;
    }
    .q_a-body-text{
        font-size: 1.8rem;
    }
    .q_a-footer{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .q_a-time{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 900;
        margin-left: 5px;
    }


    .insert-answer-form{
        width: 95%;
        height: 5vh;
        display: flex;
        justify-content: space-between;
    }
    .answer-input{
        width: 30%;
        border-radius: 20px;
        border: 2px solid ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        font-size:1.5rem;
        padding: 0 5px;
        outline: none;
        transition: 0.2s ease-in-out;
    }
    .answer-input:focus-visible{
        width: 80%;
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
    }
    .answer-send-btn{
        cursor: pointer;
        font-size:1.8rem;
        font-weight:900;
        padding: 0 5px;
        border-radius: 20px;
        border: 2px solid ${({ mode }) => mode.background};
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
    }

    .remove-comment-btn{
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        right: -5%;
        top: 0%;
        display: flex;
        justify-content: center;
        align-items: center;

        .remove-comment-icon{
            font-size: 2.5rem;
        }
        .remove-comment-icon:hover{
            color:red;
        }
    }
    .comments-section{
        margin-top: 5vh;
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column-reverse;
        gap: 5rem;
    }
    .insert-comment-form{
        position: relative;
        width: 100%;
        height: 20vh;
        background:${({ mode }) => mode.background};
        border: 2px solid ${({ mode }) => mode.color};
    }
    .comment-count-wrapper{
        position: absolute;
        right: 3px;
        top: 3px;
        font-size:1.5rem;
        font-weight:900;
    }
    .comment-body-input{
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
    }
    .comment-body-input:focus{
        font-size:2rem;  
    }
    .comment-body-label{
        position: absolute;
        top: -15px;
        left: 2vw;
        font-size: 2.5rem;
        background:${({ mode }) => mode.background};
        width: fit-content;
        text-align: center;
        padding: 0 10px;
    }
    .comment-send-btn{
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
    }
    .comment-send-btn:disabled{
        background: gray;
        color: black;
    }
    .comment-box{
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
    }
    .comment-header{
        width: 100%;
        height: 22.5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .comment-writer{
        margin-left:2px;
        font-size: 1.8rem;
        border-bottom:2px solid ${({ mode }) => mode.color};
    }
    .comment-img{
        height: 100%;
        width: 5%;
        margin-right:5px;
        border-radius: 50%;
    }
    .comment-body{
        width: 100%;
        height: 62.5%;
    }
    .comment-body-text{
        font-size: 1.8rem;
    }
    .comment-footer{
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap:1rem;
        position: relative;
    }
    .comment-time{
        height: 100%;
        display: flex;
        align-items: center;
        position: absolute; 
        left: 5px;
        bottom: 0px;
        font-size: 1.5rem;
        font-weight: 900;
    }
    .comment-likes-btn{
        cursor: pointer;
        background: none;
        border: none;
    }
    .comment-likes-icon{
        font-size: 3rem;
    }
    .liked{
        animation-name: like;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
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
    .comment-likes-amount{
        font-size:2rem;
        font-weight:900;
    }
    .empty-comments, .comments-amount{
        margin-top:2vh;
        text-align: center;
        font-size:3rem;
    }
@media  only screen  and (min-width:320px) and (max-width:375px){
    .comment-body-label{
        font-size: 1.6rem;
    }
}
@media  only screen  and (min-width:375px)and (max-width:426px){
    .comment-body-label{
        font-size: 1.6rem;
    }
}
`