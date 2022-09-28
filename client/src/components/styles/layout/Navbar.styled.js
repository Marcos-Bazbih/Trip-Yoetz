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
        font-size:1.8rem;

        .navbar-icon{
           font-size: 2.5rem;
        }
        &.mini{
            display: flex;
            align-items: center;
            justify-content: center;
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

    @media (max-width: 376px) {
        a{
            font-size: 1.5rem;
            .navbar-icon{
               font-size: 2rem;
            }
        }
    }
`