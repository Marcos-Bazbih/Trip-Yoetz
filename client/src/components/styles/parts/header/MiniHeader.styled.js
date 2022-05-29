import styled from "styled-components";

export const StyledMiniHeader = styled.header`
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    height: 100%;
    width: 100%;
    grid-area: header;
    display:grid;
    grid-template-areas:
    'search logo . burger';
    grid-template-columns: 32% 36% 21% 11%;
    grid-auto-rows: 100%;

    .header-search-form{
        grid-area: search;
        width: 100%;
        height: 100%;
        position: relative;
        display:flex;
        align-items:center;
        padding-left: 10px;
    }
    .logo-wrapper{
        grid-area: logo;
        display:flex;
        justify-content: center;

        .TripYoetz-logo {
            display:flex;
            align-items: center;
            height: 100%;
            font-family: 'Lobster Two', cursive;
            font-size:4rem;
            font-weight:900;
            text-decoration:none;
            color: ${({ mode }) => mode.color};

            .logo-icon{
                border-radius:50%;
                color: ${({ mode }) => mode.background};
                background:${({ mode }) => mode.color};
                font-size:3.5rem;
            }
        }
    }
    .burger-menu-button{
        grid-area: burger;
        display:flex;
        justify-content: center;
        align-items:center;
        border:none;
        color: ${({ mode }) => mode.color};
        background:${({ mode }) => mode.background};
        cursor:pointer;
        
        .burger-menu-icon{
            width:100%;
            height:100%;
        }
    }
    
    @media (max-width: 700px) {
        grid-template-columns: 34% 32% 22% 12%;
    }
    @media (max-width: 640px) {
        .burger-menu-button{
            .burger-menu-icon{
                width:70%;
                height:70%;
            }
        }
        .logo-wrapper{
            .TripYoetz-logo{
                font-size:3rem;
                .logo-icon{
                    font-size:2.5rem;
                }
            }
        }
    }
    @media (max-width: 600px) {
        grid-template-areas: 'search logo burger';
        grid-template-columns: 45% 40% 15%;
    }
    @media (max-width: 450px) {
        grid-template-columns: 55% 30% 15%;
        .logo-wrapper{
            .TripYoetz-logo{
                font-size:2.5rem;
                .logo-icon{
                    font-size:2rem;
                }
            }
        }
        .burger-menu-button{
            .burger-menu-icon{
                width:60%;
                height:60%;
            }
        }
    }
    @media (max-width: 400px) {
        .header-search-form{
            padding-left:2px;
        }
        .search-btn{
            width: 30px;
            height: 30px;
            right: 8%;
        }
    }
    @media (max-width: 375px) {
        grid-template-columns: 50% 35% 15%;
        .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.css-15mnk20-MuiAutocomplete-root 
        .MuiAutocomplete-inputRoot{
            padding-right:39px;
        }
        .search-btn{
            width: 30px;
            height: 30px;
            right: 5%;
        }
        .burger-menu-button{
            .burger-menu-icon{
                width:80%;
                height:80%;
            }
        }
    }
`