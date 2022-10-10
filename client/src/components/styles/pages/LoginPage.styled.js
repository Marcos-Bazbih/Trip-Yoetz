import styled from "styled-components";

export const StyledLoginPage = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    
    .container-flex{
        width: 90%;
        height: 90%;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 50px;
        box-shadow: 0 0 10px 0px ${({ mode }) => mode.color};
    }
    .redirect-signup{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
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
            text-align: center;
            font-size: 1.8rem;
        }
        button{
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            cursor: pointer;
            width:fit-content;
            height: fit-content;
            padding: 5px 10px;
            border: 2px solid ${({ mode }) => mode.color};
            border-radius: 20px;
            font-size: 1.8rem;
            font-weight: 900;
            transition: 0.2s ease-in-out;
            
            &:hover{
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
                border-color: ${({ mode }) => mode.background};
            }
        }
    }
    .login-wrapper{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        form{
            width: 80%;
            height: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap:3rem;

            h1{
                font-size: 4.5rem;
            }
            .input-wrapper{
                position: relative;
                width: 60%;

                input{
                    width: 100%;
                    font-size: 1.5rem;
                    font-weight: 900;
                    border: 2px solid black;
                    border-radius: 50px;
                    padding: 10px;
                }
            }
            .login-icon{
                color: black;
                font-size:1.5rem;
                position: absolute;
                right: 5%;
                top: 35%;
            }
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

        .visible-password-icon{
            font-size: 2.5rem;
            color: ${({ mode }) => mode.color};
        }
    }
    .error-msg{
        font-size:2rem;
        color: red;
    }
    .login-btn{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        cursor: pointer;
        width:fit-content;
        height: fit-content;
        padding: 5px 10px;
        border: 2px solid ${({ mode }) => mode.background};
        border-radius: 50px;
        font-size: 1.8rem;
        font-weight: 900;
        transition: 0.2s ease-in-out;

        &:hover{
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            border-color: ${({ mode }) => mode.color};
        }

        &:disabled{
            background: gray;
            color: black;
        }
    }

    @media (max-width: 768px) {
        .redirect-signup{
            h1 {
                font-size: 2.5rem;
            } 
            h2{
                font-size: 1.5rem;
            }
            button{
                font-size: 1.5rem;
            }
        }
        .login-wrapper{
            form{
                h1{
                    font-size: 3.5rem;
                } 
                .input-wrapper{
                    width: 70%;
                    
                }
            }
        }
        .login-btn{
            font-size: 1.5rem;
        }
    }
    @media (max-width: 600px) {
        .redirect-signup{
            border-radius: 50px 0 50% 50px;

            h1 {
                font-size: 2.2rem;
            } 
            h2{
                font-size: 1.3rem;
            }
            button{
                font-size: 1.3rem;
            }    
        }
        .login-wrapper{
            form{
                width: 90%;

                h1{
                    font-size: 3rem;
                } 
                .input-wrapper{
                    align-self: flex-start;
                    width: 80%;

                    input{
                    font-size: 1.2rem;
                }
                }
            }
        }
        .visible-password-btn{
            .visible-password-icon{
                font-size: 2rem;
            }
        }
        .login-btn{
            border-radius: 20px;
            font-size: 1.3rem;
        }
    }
    @media (max-width: 426px) {
        .redirect-signup{
            order: 2;
            width: 100%;
            height: 40%;
            border-radius: 0 0 50px 50px;
            justify-content: space-evenly;
            gap: 0;
            padding: 0;
        }
        .login-wrapper{
            order: 1;
            width: 100%;
            height: 60%;
            
            form{
                width: 100%;
                height: 100%;

                .input-wrapper{
                    width: 70%;
                    align-self: initial;
                }
            }
        }
    }
`