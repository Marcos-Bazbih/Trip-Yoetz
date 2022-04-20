import styled from "styled-components";

export const StyledAdminProfile = styled.section`
    width: 100%;
    height: 100%;   

    .profile-banner{
        width: 100%;
        height: 35%;
        background-image: url("/profile_banner_bg.png");
        background-size: cover;
        display: flex;
        justify-content: flex-end;

        .profile-img_edit-wrapper{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
        }
        .profile-img{
            width: 65%;
            height: 80%;
            border-radius: 50%;
        }
        .edit-user-btn{
            color:${({ mode }) => mode.background};
            background:${({ mode }) => mode.color};
            cursor: pointer;
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
        }
        .edit-user-btn:hover{
            background:${({ mode }) => mode.background};
            color:${({ mode }) => mode.color};
        }
        .edit-user-icon{
            font-size: 2rem;
        }

    }
    .user-info-wrapper{
        width: 100%;
        height: 65%;
        display: grid;
        grid-template-areas:
        'user-details user-edit';
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
    }
    .user-details{
        grid-area: user-details;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
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
            align-items: center;
            justify-content: space-evenly;
                h2{
                    font-size: 1.8rem;
                }
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
        .user-update-form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            width: 70%;
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
            }
            input:focus{
                outline: none;
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
            }
            button:hover{
                background: ${({ mode }) => mode.background};
                color: ${({ mode }) => mode.color};
            }
        }
    }


@media only screen and (max-width:768px){
    .profile-banner{
        align-items: flex-end;

        .profile-img_edit-wrapper{
            width: 100%;
            height: 70%;

            .profile-img{
                width: 20%;
                height: 60%;
            }
        }
    }
    .user-info-wrapper{
        grid-template-columns: 100%;
        grid-template-rows: 100% 100%;
    }
    .user-info-wrapper.responsive{
        grid-template-areas:
        'user-edit'
        'user-details'
        ;
    }
}
@media only screen and (max-width:425px){
    .profile-banner .profile-img_edit-wrapper .profile-img{
        width: 30%;
    }
}
`;
