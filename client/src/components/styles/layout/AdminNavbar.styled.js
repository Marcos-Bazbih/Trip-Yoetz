import styled from "styled-components";

export const StyledAdminNavbar = styled.nav`
    backdrop-filter: blur(2px);
    color: ${({ mode }) => mode.color};
    height: 10vh;    
    width: 100%;
    position: fixed;
    z-index: 10;

    ul{
        list-style:none;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        width: 60%;
        height: 100%;
        margin: auto;
    }
    .admin-icon{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        border: 2px solid ${({ mode }) => mode.background};
        border-radius: 50px;
        font-size: 6rem;
        padding: 2px;
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
        
        &:hover{
            color: ${({ mode }) => mode.background};
            background: ${({ mode }) => mode.color};
        }
    }

    @media (max-width:768px){
        .navbar-link{
            font-size:1.2rem;
        }
        .admin-icon{
            font-size: 5rem;
        }
    }
    @media (max-width:600px){
        ul{
            width: 100%;
        }
    }
    @media (max-width:376px){
        .navbar-link{
            padding: 5px 2px;
            font-size: 1rem;
        }
        .admin-icon{
            font-size: 3.5rem;
        }
    }
`