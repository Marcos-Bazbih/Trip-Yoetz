import styled from "styled-components";

export const StyledContainer = styled.section`
    min-height: 85vh;
    width: 100%;
    background: ${({mode})=> mode.background};
    color: ${({mode})=> mode.color};
    grid-area: main;
    overflow-y:auto;
    position: relative;

    .back-to-top-arrow{
        cursor: pointer;
        position: fixed;
        bottom: 10vh;
        right: 10vw;
        font-size: 4rem; 
        font-weight: 900;
        border: 2px solid ${({mode})=> mode.color};
        border-radius: 50%;
        display: none;
        transition: 0.2s ease-in-out;
        color: ${({mode})=> mode.background};
        background: ${({mode})=> mode.color};
        
        &:hover{
            color: ${({mode})=> mode.color};
            background: ${({mode})=> mode.background};
        }

        &.active{
            display: block;
        }
    }

    @media (max-width: 768px) {
        .back-to-top-arrow{
            right: 7vw;
            font-size: 3.5rem; 
        }
    }
    @media (max-width: 500px) {
        .back-to-top-arrow{
            right: 5vw;
            font-size: 3rem; 
        }
    }
`