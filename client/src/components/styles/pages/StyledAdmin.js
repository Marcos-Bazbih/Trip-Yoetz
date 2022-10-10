import styled from "styled-components";

export const StyledAdmin = styled.section`
    margin-top:10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    .add-item-btn{
        background: ${({ mode }) => mode.background};
        border: 2px solid ${({ mode }) => mode.color};
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        left: 15%;
        top: -50px;
        transition: 0.2s ease-in-out;
        
        &:hover{
            background: ${({ mode }) => mode.color};
        }
        &:hover> .add-item-icon{
            color: ${({ mode }) => mode.background};
        }

        .add-item-icon{
            font-size: 3rem;
            color: ${({ mode }) => mode.color};
            transition: 0.2s ease-in-out;
        }
    }
    .popup-dialog-modal{
        width: 60%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .modal-form-wrapper{
            width: 100%;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-evenly;
        }
        h1{
            font-size: 3rem;
            height: 5%;
        }
        form{
            width: 100%;
            height:95%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            .input-wrapper{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                label{
                    font-size: 1.8rem;
                }
                input,select{
                    font-size: 1.5rem;
                    outline: none;
                    width: 50%;
                    border:none;
                    border-bottom: 2px solid black;
                }
            }
            button{
                background: ${({ mode }) => mode.background};
                color: ${({ mode }) => mode.color};
                border: 2px solid ${({ mode }) => mode.color};
                cursor: pointer;
                font-size: 2.5rem;
                padding: 0 10px;
                transition: 0.2s ease-in-out;

                &:hover{
                    background: ${({ mode }) => mode.color};
                    color: ${({ mode }) => mode.background};
                }
            }
        }
        .close-dialog-btn{
            cursor: pointer;
            background: none;
            border: none;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            .close-dialog-icon{
                font-size: 4rem;
            }    
        }
        &::backdrop{
                background-color: rgba(0,0,0,0.5);
        }
    }
    .admin-table-wrapper{
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        width: 95%;
        overflow: hidden;
    }
    th{
        font-size:1.2rem;
        font-weight:900;
        color: ${({ mode }) => mode.background};
        background: ${({ mode }) => mode.color};
    }
    td{
        height: 50px;
        max-width: 50px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: auto;
        text-align: center;
        padding: 0;
        overflow: hidden;
        font-size:1.3rem;
        border: 1px solid black;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};

        &:last-of-type, &:nth-last-child(2){
            color: ${({ mode }) => mode.background};
            background: ${({ mode }) => mode.color};
            border-color: ${({ mode }) => mode.background};
        }
    }
    .td-btn{
        cursor: pointer;
        border: none;
        background: none;
        transition: 0.2s ease-in-out;
        
        &:hover{
            transform: scale(2);
        }

        .td-btn-icon{
            font-size: 2rem;
            color: ${({ mode }) => mode.background};
        }
    }
    .table-link{
        width: 100%;
        height: 100%;
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        padding: 5px;
        transition: 0.2s ease-in-out;

        &:hover{
            color: ${({ mode }) => mode.background};
            background: ${({ mode }) => mode.color};
        }
    }

    @media (max-width: 768px) {
        td{
            max-width: 100px;
        }
        .popup-dialog-modal{
            h1{
                font-size: 2.5rem;
            } 
            form{
                .input-wrapper{
                    label{
                        font-size: 1.5rem;
                    } 
                    input,select{
                        font-size: 1.3rem;
                    }
                }
                button{
                    font-size: 2.2rem;
                }
            }
        }
    }
    @media (max-width: 426px) {
        .add-item-btn{
            top: initial;
            bottom:-10%;
            left: 0;
            right: 0;
            width: fit-content;
            margin: auto;
        }
        td{
            max-width: 150px;
        }
        .popup-dialog-modal{
            width: 80%;
            h1{
                font-size: 2rem;
            }
            form{
                .input-wrapper{
                    input,select{
                        width: 70%;
                    }
                }
            }
        }
    }
`