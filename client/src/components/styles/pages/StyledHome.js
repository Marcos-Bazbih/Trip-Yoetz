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
        background: url("/images/homePage_search_bg.png");
        background-repeat: no-repeat;
        background-size:contain;
        border: 4px double ${({ mode }) => mode.color};
        border-radius: 10px;
        background-position: bottom;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65%;
        height: 65%;
    }

    @media (max-width: 800px) {
        .home-search-form{
            .MuiAutocomplete-root{
                width: 65%;
            }
        }
    }
    @media (max-width: 600px) {
        .home-search-form{
            background-size:130%;
            width: 80%;
            justify-content: flex-start;
            padding-left: 5px;
            .MuiAutocomplete-root{
                width: 85%;
            }
        }
    }
    @media (max-width: 500px) {
        .home-search-form{
            width: 90%;
            height: 60%;
            .search-btn{
                right: 2%;
            }
        }
    }
    @media (max-width: 400px) {
        .home-search-form{
            background-size:130%;
        }
    }
    @media (max-width: 350px) {
        .home-search-form{
            background-size:130%;
            height: 55%;
            .search-btn{    
                width: 30px;
                height: 30px;
            }
        }
        .greet-user{
            font-size: 2.2rem;
        }
    }
`