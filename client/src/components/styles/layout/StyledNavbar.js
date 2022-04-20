import styled from "styled-components";

export const StyledNavbar = styled.nav`
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    height: 10vh;    
    width: 90%;
    margin: auto;
    position: fixed;
    left: 5%;
    z-index: 10;
    
    .navbar-list{
        list-style:none;
        display:flex;
        justify-content:center;
        gap:10%;
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
    @media  only screen  and (min-width:320px) and (max-width:375px){
        .navbar-list{
        gap:5%;
       
    }
    .navbar-link{
        font-size:1rem;

    }
    }
    @media  only screen  and (min-width:375px) and (max-width:425px){
        .navbar-list{
        gap:5%;
       
    }
    .navbar-link{
        font-size:1.5rem;

    }
    }
    @media  only screen  and (min-width:425px) and (max-width:768px){
        .navbar-list{
        gap:5%;
       
    }
    .navbar-link{
        font-size:1.5rem;

    }
    }
    
`