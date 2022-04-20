import styled from "styled-components";

export const StyledRegisterPage = styled.section`
    width: 90%;
    height: 90%;
    position: absolute;
    left: 5%;
    top: 5%;
    border-radius: 50px;
    display: flex;
    position: relative;
    box-shadow: 0 0 10px 0px ${({ mode }) => mode.color};
    
    .redirect-login{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
        height: 100%;    
        border-radius: 100% 50px 50px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 5%;
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

    .relative-input{
        position: relative;
    }
    .visible-password-btn{
        cursor: pointer;
        position: absolute;
        right: -5%;
        bottom: 100%;
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


    .register-wrapper{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .register-form{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    .register-title{
        font-size: 4rem;
    }
    .input-wrapper{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input-label{
        font-size: 1.8rem;
        font-weight: 900;
        padding-left: 2%;
        text-decoration: underline;
    }
    .register-input{
        width: 60%;
        font-size: 1.5rem;
        font-weight: 900;
        border: 2px solid black;
        border-radius: 50px;
        padding: 5px 10px;
    }
    .register-btn{
        cursor: pointer;
        width:fit-content;
        height: fit-content;
        padding: 5px 10px;
        border: 2px solid ${({ mode }) => mode.color};
        border-radius: 50px;
        font-size: 1.6rem;
        font-weight: 900;
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        transition: 0.2s ease-in-out;
    }
    .register-btn:hover{
        background: ${({ mode }) => mode.background};
        color: ${({ mode }) => mode.color};
        border-color: ${({ mode }) => mode.color};
    }
`