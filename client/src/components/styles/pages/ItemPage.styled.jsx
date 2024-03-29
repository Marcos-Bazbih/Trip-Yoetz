import styled from "styled-components";

export const StyledItemPage = styled.section`
    margin:0 auto 10vh;
    width: 60%;
    height: fit-content;
    display: grid;
    grid-template-areas:
    'nav'
    'info'
    'rating'
    'toggle'
    'comments-qa';
    grid-template-rows:10vh 90vh 10vh 10vh auto;
    grid-template-columns:100%;
    gap: 5vh 0; 

    .rating-stars-wrapper{
        grid-area: rating;
        display: flex;
        align-items: center;
        height: 100%;

        .rating-stars-select{
            font-size:5rem;
        }
    }
    .toggle-btns-wrapper{
        grid-area:toggle;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 100%;
        width: 50%;
        margin: 0 auto;

        button{
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            cursor: pointer;
            width: 50%;
            height: 100%;
            font-size: 2.2rem;
            border-top: none;
            border-left: 2px solid transparent;
            border-right: 2px solid transparent;
            border-bottom: 2px solid ${({ mode }) => mode.color};
            transition: 0.2s ease-in-out;

            &.toggle-active{
                border-left-color: black;
                border-right-color: black;
                border-bottom-color: transparent;
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
            }
        }
    }

    @media (max-width: 768px) {
        width: 70%;
        grid-template-rows: 10vh 150vh 10vh 10vh auto;
        .toggle-btns-wrapper{
            width: 70%;
        }
    }
    @media (max-width: 500px) {
        .toggle-btns-wrapper{
            width: 100%;
        }
    }
    @media (max-width: 376px) {
        width: 80%;
        .rating-stars-wrapper{
            .rating-stars-select{
                font-size: 4.5rem;
            }
        }
        .toggle-btns-wrapper{
            button{
                font-size: 1.8rem;
            }
        }
    }
`