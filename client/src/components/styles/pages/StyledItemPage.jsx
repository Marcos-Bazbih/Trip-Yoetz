import styled from "styled-components";

export const StyledItemPage = styled.section`
    margin:0 auto 10vh;
    width: 60%;
    height: fit-content;
    display: grid;
    grid-template-areas:
    'nav nav'
    'info info'
    'rating rating'
    'toggle toggle'
    'comments-qa comments-qa';
    grid-template-rows:10vh 90vh 5vh 10vh auto;
    grid-template-columns:50% 50%;
    gap: 5vh; 

    .rating-stars{
        grid-area: rating;
        display: flex;
        align-items: center;
    }
    .rating-stars-select{
        font-size:5rem;
    }

    .toggle-btns-wrapper{
        grid-area:toggle;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 100%;
        width: 50%;
        margin: 0 auto;
    }
    .toggle-btn{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        cursor: pointer;
        width: 40%;
        height: 100%;
        font-size: 2.5rem;
        border-top: none;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
        border-bottom: 2px solid ${({ mode }) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .toggle-active{
        border-left-color: black;
        border-right-color: black;
        border-bottom-color: transparent;
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
    }
`