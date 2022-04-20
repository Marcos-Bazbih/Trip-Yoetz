import styled from "styled-components";

export const StyledCity = styled.section`
    margin:0 auto 10vh;
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5vh; 

    .city-name-h1{
        margin-top:12.5vh;
        font-size: 4rem;
    }
    .city-name-span{
    color: ${({ mode }) => mode.background};
    background: ${({ mode }) => mode.color};
    font-family: 'Lobster Two', cursive;
    padding: 0 5px;
    }
    .city-description{
        width: 80%;
        min-height: 20vh;
        position: relative;
    }
    .city-description-text{
        font-size: 2.2rem;
    }

    @media  only screen  and (min-width:320px) and (max-width:375px){
        width: 90%;
        .city-description-text{
           font-size: 1.5rem;
        }
    }

    @media  only screen  and (min-width:375px) and (max-width:425px){
        width: 90%;
        .city-description-text{
           font-size: 1.5rem;
        }
    }

    @media  only screen  and (min-width:425px) and (max-width:768px){
        width: 90%;
        .city-description-text{
           font-size: 1.5rem;
        }
    }

    /* @media  only screen  and (min-width:768px) and (max-width:1024){
        width: 90%;
        .city-description-text{
           font-size: 1.5rem;
        } 
    } */

`