import styled from "styled-components";

export const StyledCategoryPage = styled.section`
    margin:0 auto 10vh;
    width: 60%;
    height: fit-content;
    display: grid;
    grid-template-areas:
    '. . .'
    'title title title'
    'cards cards sort'
    ;
    grid-template-rows: 10vh 7.5vh auto;
    grid-template-columns: 40% 40% 20%;
    gap: 5vh; 

    .category-name-h1{
        grid-area: title;
        font-size: 4rem;
    }
    .sort-wrapper{
        grid-area: sort;
    }
    .sort-fixed{
        width: 15vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        top:20vh;
    }
    .sort-select{
        cursor: pointer;
        background: ${({mode}) => mode.color};
        color: ${({mode}) => mode.background};
        border: 2px solid ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width: 75%;
        outline: none;
    }
    .sort-btn{
        cursor: pointer;
        background: ${({mode}) => mode.background};
        color: ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width:20%;
        border: 2px solid ${({mode}) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .sort-btn:hover{
        background: ${({mode}) => mode.color};
        color: ${({mode}) => mode.background};
    }


    
    @media  only screen  and (min-width:320px) and (max-width:375px){
        .sort-fixed{
        width: 15vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        top:20vh;
        margin-left: -9%;
    }
    .sort-btn{
        cursor: pointer;
        background: ${({mode}) => mode.background};
        color: ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width:70%;
        border: 2px solid ${({mode}) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .category-name-h1{
        grid-area: title;
        font-size: 3rem;
    }
    .sort-select{
        font-size: 0.74rem;
    }
    }
    @media  only screen  and (min-width:375px)and (max-width:426px){
        .sort-fixed{
        width: 15vw;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        top:20vh;
        margin-left: -7%;
    }
    .sort-btn{
        cursor: pointer;
        background: ${({mode}) => mode.background};
        color: ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width:70%;
        border: 2px solid ${({mode}) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .category-name-h1{
        grid-area: title;
        font-size: 3rem;
    }
    .sort-select{
        font-size: 0.9rem;
    }
    }
    @media  only screen  and (min-width:425px)and (max-width:766px){
        .sort-btn{
        cursor: pointer;
        background: ${({mode}) => mode.background};
        color: ${({mode}) => mode.color};
        font-size: 1.5rem;
        height: 50%;
        width:100%;
        border: 2px solid ${({mode}) => mode.color};
        transition: 0.2s ease-in-out;
    }
    .sort-select{
        cursor: pointer;
        background: ${({mode}) => mode.color};
        color: ${({mode}) => mode.background};
        border: 0.1px solid ${({mode}) => mode.color};
        font-size: 1.1rem;
        height: 50%;
        width: 50%;
    }
    .sort-fixed{
        width: 15vw; 
        height: 10vh;
        display: flex;
        justify-content: space-between;
         align-items: flex-start;
        position: fixed;
        top:20vh;
        margin-left: -6%;
    }
    }
    @media  only screen  and (min-width:767px){
        .sort-fixed{
        width: 20vw; 
        height: 10vh;
        display: flex;
        justify-content: space-between;
         align-items: flex-start;
        position: fixed;
        top:20vh;
        margin-left: -2%;
    }

    }
`