import styled from "styled-components";

export const StyledCategoryPage = styled.section`
    margin:0 auto 10vh;
    width: 60%;
    height: fit-content;
    display: grid;
    grid-template-areas:
    '. . .'
    'title title sort'
    'cards cards cards'
    ;
    grid-template-rows: 10vh auto auto;
    grid-template-columns: 35% 35% 30%;
    gap: 5vh 0; 

    .category-name-h1{
        grid-area: title;
        font-size: 4rem;
    }
    .sort-wrapper{
        grid-area: sort;
        
        .sort-sticky{
            width: 100%;
            height: 8vh;

            select{
                cursor: pointer;
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
                border: 2px solid ${({ mode }) => mode.color};
                font-size: 1.5rem;
                height: 100%;
                width: 100%;
                outline: none;
            }
        }
    }
    .items-container{
        grid-area: cards;
        width: 100%;
        height: 100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-evenly;
        gap: 3rem;
    }

    

    @media (max-width: 768px) {
        width: 70%;
    }
`