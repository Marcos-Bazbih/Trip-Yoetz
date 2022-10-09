import styled from "styled-components";

export const StyledRegisterPage = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    
    .container-flex{
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: row-reverse;
        justify-content:center;
        align-items: center;
        flex-wrap: wrap;
        border-radius: 50px;
        box-shadow: 0 0 10px 0px ${({ mode }) => mode.color};
    }
    .redirect-login{
        background: ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.background};
        width: 50%;
        height: 100%;    
        border-radius: 0px 50px 50px 100%;
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
    .register-wrapper{
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        form{
            width: 80%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            
            h1{
                font-size: 4rem;
            }
            .input-wrapper{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                &.relative-input{
                    position: relative;
                }
                input{
                    width: 60%;
                    font-size: 1.5rem;
                    font-weight: 900;
                    border: 2px solid black;
                    border-radius: 50px;
                    padding: 5px 10px;
                }
                label{
                    font-size: 1.8rem;
                    font-weight: 900;
                    padding-left: 2%;
                    text-decoration: underline;
                }
            }
        }
    }
    .visible-password-btn{
        cursor: pointer;
        position: absolute;
        height: 100%;
        right: -10%;
        bottom: 0%;
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
        
        &:hover{
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            border-color: ${({ mode }) => mode.color};
        }
    }

    @media (max-width: 768px) {
        .redirect-login{
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
        .register-wrapper{
            form{
                width: 90%;
                h1{
                    font-size: 3rem;
                } 
                .input-wrapper{
                    label{
                        font-size: 1.5rem;
                        padding: 0;
                    }
                    input{
                        width: 50%;
                        font-size: 1.2rem;
                    }
                }
            }
        }
        .register-btn{
            font-size: 1.2rem;
        }
        .visible-password-btn{
            .visible-password-icon{
                font-size: 2rem;
            }
        }
    }
    @media (max-width: 600px) {
        .redirect-login{
            border-radius: 0 50px 50px 50%;

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
    }
    @media (max-width: 426px) {
        .redirect-login{
            order: 2;
            width: 100%;
            height: 30%;
            border-radius: 0 0 50px 50px;
            justify-content: space-evenly;
            gap: 0;
            padding: 0;
        }
        .register-wrapper{
            order: 1;
            width: 100%;
            height: 70%;

            form{
                width: 100%;
                height: 100%;
                
                h1{
                    font-size: 2.7rem;
                }
                .input-wrapper{
                    width: 80%;    

                    input{
                        width: 55%;
                    }
                }
            }
        }
        .visible-password-btn{
            right: -9%;
        }
    }
`