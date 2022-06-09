import styled from "styled-components";

export const StyledNavbar = styled.nav`
    backdrop-filter: blur(10px);
    color: ${({ mode }) => mode.color};
    height: 10vh;    
    width: 90%;
    position: fixed;
    left: 5%;
    margin: 0 auto;
    z-index: 10;
    
    ul{
        display:flex;
        justify-content: center;
        align-items:center;
        list-style:none;
        gap: 8%;
        width: 100%;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        border:2px solid ${({ mode }) => mode.color};
        padding:8px;
        transition: 0.2s ease-in-out;
        font-weight: 900;
        border-radius:10px;

        &.big{
            font-size:1.8rem;
        }
        &.mini{
            font-size:3rem;
        }
        &.highlight-current-route{
            background: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
        }
        &:hover{
        color: ${({ mode }) => mode.background};
        background: ${({ mode }) => mode.color};
        }
    }
    /* @media (max-width: 550px) {
        ul{
            gap: 5%;
        }
    }
    @media (max-width: 450px) {
        a{
            font-size:1.6rem;
            padding:5px;
        }
    }
    @media (max-width: 390px) {
        ul{
            gap: 3%;
        }
    }
    @media (max-width: 365px) {
        ul{
            gap: 1%;
        }
    } */

`