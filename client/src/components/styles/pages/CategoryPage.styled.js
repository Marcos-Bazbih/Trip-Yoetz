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
    grid-template-rows: 10vh 8vh auto;
    grid-template-columns: 35% 35% 30%;
    gap: 5vh 0; 

    .category-name-grid{
        grid-area: title;
        display: flex;
        align-items: flex-end;

        h1{
            font-size: 4rem;
        }
    }
    .sort-grid{
        grid-area: sort;

            select{
                width: 100%;
                height: 100%;
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
    .items-container-grid{
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
    @media (max-width: 600px) {
        grid-template-columns: 50% 0% 50%;
        grid-template-rows: 10vh 6vh auto;

        .category-name-grid{
            h1{
                font-size: 3rem;
            }
        }
    }
    @media (max-width: 500px) {
        width: 80%;
    }
    @media (max-width: 426px) {
        grid-template-columns: 50% 10% 40%;
    }
    @media (max-width: 376px) {
        .category-name-grid{
            h1{
                font-size: 2.7rem;
            }
        }
    } 
    @media (max-width: 325px) {
        .category-name-grid{
            h1{
                font-size: 2.4rem;
            }
        }
    } 
`