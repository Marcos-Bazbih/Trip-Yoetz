import styled from "styled-components";

export const StyledProfilePage = styled.section`
    width: 100%;
    height: 100%;

    .profile-banner{
        width: 100%;
        height: 35%;
        background-image: url("/images/profile_banner_bg.png");
        background-size: cover;
        display: flex;
        justify-content: flex-end;

        div{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;

            img{
                width: 65%;
                height: 80%;
                border-radius: 50%;
            }
            button{
                cursor: pointer;
                color:${({ mode }) => mode.background};
                background:${({ mode }) => mode.color};
                width: fit-content;
                height: 10%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                gap: 5px;
                padding: 5px 10px;
                border:2px solid black;
                border-radius: 5px;
                transition: 0.2s ease-in-out; 

                &:hover{
                    background:${({ mode }) => mode.background};
                    color:${({ mode }) => mode.color};
                }
                .edit-user-icon{
                    font-size: 2rem;
                }
            }
        }
    }
    .user-info-wrapper{
        width: 100%;
        height: 65%;
        display: grid;
        grid-template-areas:
        'user-details user-favorites user-edit';
        grid-template-columns: 25% 50% 25%;
        grid-template-rows: 100%;
    }
    .user-details{
        grid-area: user-details;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-left: 10%;

        .user-details-header{
            text-align: center;
            width: 100%;
            height: 10%;
            font-size: 2.2rem;
            text-decoration: underline;
        }
        .user-details-body{
            width: 100%;
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
                h2{
                    font-size: 1.6rem;
                }
        }
    }   
    .user-favorites{
        grid-area: user-favorites;
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        gap: 2rem;

        .user-favorites-header{
            text-align: center;
            width: 100%;
            font-size: 2.2rem;
            text-decoration: underline;
        }
        table{
            width: 100%;
            border-collapse: collapse;
            text-align: center;
            font-size: 1.5rem;
            border: 2px solid ${({ mode }) => mode.color};

            thead{
                height: 5vh;
                font-size: 2.2rem;
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
                position: sticky;
                top: 0;
            }
            tr{
                transition: 0.2s ease-in-out;
            }
            td:first-of-type{
                width: 20%;
            }
            td{
                width: 8%;
                border: 2px solid ${({ mode }) => mode.color};
                height: 5vh;
                font-size: 1.6rem;
                font-weight: 900;

                &.favorite-link{
                    cursor: pointer;
                }
                .delete-favorite{
                    cursor: pointer;
                    font-size: 2.5rem;
                        &:hover{
                            color:red;
                        }
                }
            }
        }
        .no-favorites-msg{
            padding-top: 10%;
            font-size: 3.5rem;
        }
    }
    .user-update-wrapper{
        grid-area: user-edit;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        h1{
            text-align: center; 
            font-size: 2.2rem;
            text-decoration: underline;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            width: 80%;
            height: 80%;
            border: 3px solid ${({ mode }) => mode.color};
            border-radius: 50px;
            
            input{
                width: 80%;
                font-size: 1.6rem;
                font-weight: 900;
                padding: 5px 10px;
                border: 2px solid transparent;
                border-bottom-color: ${({ mode }) => mode.color};
                background: ${({ mode }) => mode.background};
                color: ${({ mode }) => mode.color};
                transition: 0.2s ease-in-out;
                
                &:focus{
                    outline: none;
                }
            }
            button{
                cursor: pointer;
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
                font-size: 1.6rem;
                font-weight: 900;
                padding: 5px 10px;
                border: 2px solid ${({ mode }) => mode.color};
                border-radius: 15px;
                transition: 0.2s ease-in-out;
                
                &:hover{
                    background: ${({ mode }) => mode.background};
                    color: ${({ mode }) => mode.color};
                }
            }
        }
    }
    
    @media (max-width:768px){
        .profile-banner{
            div{
                width: 30%;
            }
        }
        .user-info-wrapper{
            grid-template-areas:
            'user-details'
            'user-favorites'
            'user-edit'
            ;
            grid-template-rows: 100% 100% 100%;
            grid-template-columns: 100%;
    
            &.responsive{
                grid-template-areas:
                'user-edit'
                'user-details'
                'user-favorites'
                ;
            }
        }
        .user-details{
            padding:0;
    
            .user-details-header{
                text-align: center;
                width: 100%;
                height: 10%;
                font-size: 2.2rem;
                text-decoration: underline;
            }
            .user-details-body{
                flex-direction: column;
                align-items: center;
                    h2{
                        font-size: 2rem;
                    }
            }
        }
    }
    @media (max-width:551px){
        .profile-banner{
            div{
                width: 50%;
                height: 90%;
            }
        }
    }
    @media (max-width:376px){
    .profile-banner{
        background: none;
        div{
            width: 100%;

            img{
                width: 50%;
            }
        }
    }
    .user-favorites{
        table {
            thead{
                font-size: 1.3rem;
            }
            td{
                font-size: 1rem;
            }
        }
    } 
    }
`;