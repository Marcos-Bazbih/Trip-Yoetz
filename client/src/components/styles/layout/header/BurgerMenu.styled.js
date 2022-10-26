import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    color: ${({ mode }) => mode.background};
    position: absolute;
    top: 0;
    left: ${({ left }) => left}vw;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    transition: 0.2s ease-in-out;
    
    .menu-popup{
        width: 65%;
        height: 100%;
        color: ${({ mode }) => mode.background};
        background-color: ${({ mode }) => mode.color};
        border-radius: 0 10% 0 0;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
        padding: 2rem 0;

        .menu-close-btn{
            position: absolute;
            top: 5%;
            right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            background: transparent;
            cursor:pointer;

            .menu-close-icon{
                color: ${({ mode }) => mode.background};
                border: 2px solid ${({ mode }) => mode.background};
                font-weight: bold;
                font-size: 4.5rem;
                padding: 0.5rem;
                border-radius: 50%;
                transition: 0.2s ease-in-out;

                &:hover{
                    color: ${({ mode }) => mode.color};
                    background-color: ${({ mode }) => mode.background};
                }
            }
        }
        .menu-link{
            text-decoration: none;
            color: ${({ mode }) => mode.background};
            font-size: 2.5rem;
            font-weight: bold;
            padding: 1rem;
            cursor: pointer;
            background-image: linear-gradient(90deg, ${({ mode }) => mode.background}, ${({ mode }) => mode.background});
            background-size: 2% 100%;
            background-repeat: no-repeat;
            background-position: left;
            transition: 0.2s ease-in-out;

            &:hover{
                background-size: 100% 100%;
                color: ${({ mode }) => mode.color};
            }

            &.logout{
                font-size: 2.5rem;
                border: 2px solid ${({ mode }) => mode.background};
                border-radius: 5px;
                background-color: transparent;
                position: absolute;
                bottom: 5%;
                left: 1rem;
            }
        }
        .theme-mode-wrapper{
            height: 15%;
            width: calc(100% - 1rem);
            display: flex;
            align-items: center;
            position: relative;
            margin-left: 1rem;

        .toggle-mode-btn{
            background:${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            max-width: 20%;
            cursor: pointer;
            border: 2px solid ${({ mode }) => mode.color};
            border-radius:50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.2s ease-in-out;

            .toggle-icon{
                padding:1px;
                font-size:4rem;
            }
        } 
        .theme-palette{
            position: absolute; 
            display:flex;
            justify-content: space-evenly;
            align-items: center;
            left: 20%;
            width: 0px;
            height: 100%;
            transition:0.2s ease-in-out;
            overflow:hidden;
    
            &.active {
                width: 80%;
            }
    
            .theme-option{
                cursor: pointer;
                border: 1px solid white;
                border-radius:50%;
                width: 15%;
                height: 50%;
                transition:0.2s ease-in-out;
    
                &:nth-child(1){
                    background: linear-gradient(120deg, rgba(0,0,0,1) 40%, rgba(255,250,207,1) 60%);
                    left: 0;
                }
                &:nth-child(2){
                    background: linear-gradient(120deg, rgba(211,211,221,1) 40%, rgba(36,36,35,1) 60%);
                }
                &:nth-child(3){
                    background: linear-gradient(120deg, rgba(20,33,61,1) 40%, rgba(152,193,217,1) 60%);
                    left: 7vw;
                }
                &:nth-child(4){
                    background: linear-gradient(120deg, rgba(0,0,0,1) 40%, rgba(152,150,241,1) 60%);
                    left: 11vw;
                }
            }
        }
        }

        @media (max-width: 450px) {
            &.menu-popup{
                width: 80%;
            }
        }
        @media (max-width: 350px) {
            &.menu-popup{
                .menu-close-btn{
                    .menu-close-icon{
                        font-size: 3.5rem;
                    }
                }
                .theme-mode-wrapper{
                    .theme-palette{
                        .theme-option{
                            width: 20%;
                            height: 50%; 
                        }
                    }
                }
            }
        }
    }   
`