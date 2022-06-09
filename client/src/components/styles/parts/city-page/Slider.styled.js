import styled from "styled-components";

export const StyledSlider = styled.div`
    width: 100%;
    height: 18vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    
    .slider-info-wrapper{
        width: 19%;
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;

        h1{
            font-size: 2.5rem;
        }
        h2{
            font-size: 1.5rem;
        }
        a{
            font-size: 1.5rem;
            font-weight: 900;
            text-decoration: underline;
            color: ${({ mode }) => mode.color};
        }
    }
    .slider-box-display{
        position: relative;
        width: 80%;
        height: 100%;
        overflow: hidden;

        .slider-images-wrapper{
            height: 100%;
            position: absolute;
            display: flex;
            align-items:center;
            gap: 1vw;
            transition: 0.2s ease-in-out;

            .slider-card{
                width: 11vw;
                height: 100%;
                border-radius: 5px;
                border: 2px solid black;
                transition: 0.2s ease-in-out;
                position: relative;
                display: flex;
                justify-content: center;
                overflow: hidden;

                h1{
                    width: 100%;
                    min-height: 30%;
                    background: rgba(255, 255, 255, 0.7);
                    color: black;
                    text-align: center;
                    font-size: 1.7rem;
                    font-weight:900;
                    position: absolute;
                    z-index:2;
                }
                img{ 
                    width: 100%;
                    height: 100%;
                    transition: 0.2s ease-in-out;
                }  
                &:hover> img{
                    transform: scale(1.2);
                }
            }
            .end-slider{
                position: absolute;
                display:flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 11vw;
                border: 5px double black;
                border-radius: 50px;
                left: 72vw;

                a{
                    font-size: 1.5rem;
                    font-weight: 900;
                    text-decoration: underline;
                    color: ${({ mode }) => mode.color};
                }
            }
        }
    }
    .slider-btns-wrapper{
        position: absolute;
        right: -20%;
        height: 100%;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        button{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            border: 2px solid ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.color};
            background: ${({ mode }) => mode.background};
            transition: 0.2s ease-in-out;

            &:disabled{
                border-color: darkGray;
                color: darkGray;
                background: darkWhite;
            }
            .arrow-icon{
                font-size: 3rem;
            }
        }
    }
`