import styled from "styled-components";

export const StyledAdminNavbar = styled.nav`
    color: ${({ mode }) => mode.color};
    height: 10vh;    
    width: 100%;
    position: fixed;
    z-index: 10;

    .admin-icon{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        border: 2px solid ${({ mode }) => mode.background};
        border-radius: 50px;
        font-size: 6rem;
        padding: 2px;
    }
    .navbar-list{
        list-style:none;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        width: 60%;
        height: 100%;
        margin: auto;
    }
    .navbar-link {
        text-decoration:none;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        border:2px solid ${({ mode }) => mode.color};
        padding:8px;
        transition: 0.2s ease-in-out;
        font-size:1.8rem;
        font-weight: 900;
        border-radius:10px;
    }
    .navbar-link:hover{
        color: ${({ mode }) => mode.background};
        background: ${({ mode }) => mode.color};
    }


    @media only screen and (max-width:768px){
        .navbar-link{
            font-size:1.2rem;
        }
    }
    @media only screen and (max-width:600px){
    .navbar-list{
        width: 100%;
        }
    }
    @media only screen and (max-width:376px){
    .navbar-link{
        padding: 5px 2px;
    }
    .admin-icon{
        font-size: 3rem;
    }
    }
    @media only screen and (max-width:321px){
        .navbar-link{
            font-size:1rem;
        }
    }
`