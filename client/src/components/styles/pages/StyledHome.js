import styled from "styled-components";

export const StyledHome = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;

    .greet-user{
        text-transform: capitalize;
        position:absolute;
        right: 5%;
        top: 0%;
        font-size: 2.7rem;
        font-family: 'Lobster Two', cursive;
        font-weight: 900;
        span {
            color:${({ mode }) => mode.background};
            background:${({ mode }) => mode.color};
            padding: 0 5px;
            font-family: 'Lobster Two', cursive;
            font-weight: 900;
        }
    }
    
    .home-search-form{
        background: url("/homePage_search_bg.png");
        background-repeat: no-repeat;
        background-size:contain;
        border: 4px double ${({ mode }) => mode.color};
        border-radius: 10px;
        background-position: center;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 65%;
        height: 65%;
    }















    @media  only screen and (min-width:320px) and (max-width:361px){
        .search-form{
        background-size:cover;
        width: 80%;
        height: 70%;
        }
        .search-input{
            font-size: 1.2rem;
            font-weight: 120;
        }
        .search-icon{
            font-size: 1.5rem;
        }
    }
     @media  only screen  and (min-width:361px) and (max-width:750px){
        .search-form{
        background-size:cover;
        width: 80%;
        height: 70%;
        }
        .search-input{
            font-size: 1rem;
            font-weight: 120;
        }
        .search-icon{
            font-size: 1.5rem;
        }
    }

`