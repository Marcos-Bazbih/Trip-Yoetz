import styled from "styled-components";

export const StyledCity = styled.section`
    margin:0 auto 10vh;
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 5vh; 

    .city-title{
        margin-top:15vh;
        font-size: 4rem;
        
        span{
            color: ${({ mode }) => mode.background};
            background: ${({ mode }) => mode.color};
            font-family: 'Lobster Two', cursive;
            padding: 0 5px;
        }
    }
    .city-description{
        width: 100%;
        min-height: 20vh;

        h1{
            font-size: 2.2rem;
        }
    }
    .city-images-wrapper{
        width: 100%;
        height: 40vh;
        margin:auto;
        display:grid;
        grid-template-areas:
        'one main-img'
        'two main-img';
        grid-template-columns: 45% 55%;
        grid-template-rows: 40% 60%;
    
        .city-img{
            width: 100%;
            height: 100%;
            border: 1px solid white;
            transition: 0.2s ease-in-out;

            &:hover{
                filter:brightness(130%);
            }

            &.main-img{
                grid-area:main-img;
            }
            &.one{
                grid-area:one;
            }
            &.two{
                grid-area:two;
            }
        }
    }
`