import styled from "styled-components";

export const StyledBigHeader = styled.header`
    background: ${({ mode }) => mode.background};
    color: ${({ mode }) => mode.color};
    height: 100%;
    width: 100%;
    grid-area: header;
    display:grid;
    grid-template-areas:
    'profile themes about search logo';
    grid-template-columns:20% 15% 15% 22% 28%;
    grid-auto-rows: 100%;

    .profile-actions{
        height: 100%;
        grid-area: profile;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:2%;

        .login-register-btn{
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            text-decoration:none;
            padding:3px 7px;
            font-size:2.5rem;
            font-family: 'Lobster Two', cursive;
            font-weight:900;
            border:3px solid ${({ mode }) => mode.color};
            border-radius:15px;
            transition: 0.2s;
    
            &:hover{
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
            }
        }
        .logout-btn{
            cursor: pointer;
            background: ${({ mode }) => mode.background};
            color: ${({ mode }) => mode.color};
            padding:5px;
            border:3px solid ${({ mode }) => mode.color};
            border-radius:15px;
            transition: 0.2s;
            display: flex;
            justify-content: center;
            align-items: center;
    
            &:hover{
                background: ${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
            }

            .logout-icon{
                font-size:1.7rem;
            }
        }
    }
    .theme-mode-wrapper{
        grid-area:themes;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;

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

            &:hover{
                background:${({ mode }) => mode.color};
                color: ${({ mode }) => mode.background};
            }

            .toggle-icon{
                padding:1px;
                font-size:3rem;
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
                border: 2px solid ${({ mode }) => mode.color};
                border-radius:50%;
                width: 20%;
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
    .about-us-wrapper{
        grid-area: about;
        display: flex;
        justify-content: center;
        align-items: center;

        .about-us-link{
            text-decoration: none;
            color: ${({ mode }) => mode.color};
            background:${({ mode }) => mode.background};
            font-size:2.5rem;
            font-weight:900;
            padding:5px;
            font-family: 'Lobster Two', cursive;
            background: linear-gradient(0deg, ${({ mode }) => mode.color},${({ mode }) => mode.color});
            background-size: 100% 3%;
            background-repeat: no-repeat;
            background-position: top;
            transition: 0.2s ease-in-out;

            &:hover{
                background-size: 100% 100%;
                color: ${({ mode }) => mode.background};
            }
        }
    }
    .header-search-form{
        grid-area: search;
        width: 100%;
        height: 100%;
        position: relative;
        display:flex;
        align-items:center;
    }
    .logo-wrapper{
        grid-area: logo;
        display:flex;
        justify-content: flex-end;
        padding-right:10%;

        .TripYoetz-logo {
            display:flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            font-family: 'Lobster Two', cursive;
            font-size:4rem;
            font-weight:900;
            text-decoration:none;
            color: ${({ mode }) => mode.color};

            .logo-icon{
                border-radius:50%;
                color: ${({ mode }) => mode.background};
                background:${({ mode }) => mode.color};
                font-size:3.5rem;
            }
        }
    }
`