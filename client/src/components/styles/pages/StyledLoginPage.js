import styled from "styled-components";

export const StyledLoginPage = styled.section`
    width: 90%;
    height: 90%;
    position: absolute;
    left: 5%;
    top: 5%;
    border-radius: 50px;
    display: flex;
    justify-content:flex-end;
    position: relative;
    box-shadow: 0 0 10px 0px ${({ mode }) => mode.color};
    
    .redirect-signup{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;    
        border-radius: 50px 0 100% 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5%;
        gap: 3rem;


        h1 {
            font-size: 3rem;
        }
        h2{
            font-size: 1.8rem;
        }
        .navigate-btn{
            cursor: pointer;
            width:fit-content;
            height: fit-content;
            padding: 5px 10px;
            border: 2px solid ${({ mode }) => mode.color};
            border-radius: 50px;
            font-size: 1.8rem;
            font-weight: 900;
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            transition: 0.2s ease-in-out;
        }
        .navigate-btn:hover{
            background: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
            border-color: ${({ mode }) => mode.background};
        }
    }

    .visible-password-btn{
        cursor: pointer;
        position: absolute;
        right: -15%;
        bottom: 20%;
        display: flex;
        align-items:center;
        justify-content: center;
        border: none;
        background: transparent;
    }
    .visible-password-icon{
        font-size: 2.5rem;
        color: ${({ mode }) => mode.color};
    }
    .error-msg{
        font-size:2rem;
        color: red;
    }

    .login-wrapper{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-form{
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:3rem;
    }
    .login-title{
        font-size: 4.5rem;
    }
    .login-input{
        width: 100%;
        font-size: 1.5rem;
        font-weight: 900;
        border: 2px solid black;
        border-radius: 50px;
        padding: 10px;
    }
    .input-wrapper{
        position: relative;
        width: 60%;
    }
    .login-icon{
        color: black;
        font-size:1.5rem;
        position: absolute;
        right: 5%;
        top: 35%;
    }
    .login-icon.person{

    }
    .login-icon.password{

    }


    .login-btn{
        cursor: pointer;
        width:fit-content;
        height: fit-content;
        padding: 5px 10px;
        border: 2px solid ${({ mode }) => mode.background};
        border-radius: 50px;
        font-size: 1.8rem;
        font-weight: 900;
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        transition: 0.2s ease-in-out;
    }
    .login-btn:hover{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        border-color: ${({ mode }) => mode.color};
    }
`