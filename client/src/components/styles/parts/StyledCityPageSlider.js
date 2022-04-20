import styled from "styled-components";

export const StyledCityPageSlider = styled.div`
    width: 100%;
    height: 18vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    .slider-info-wrapper{
        width: 19%;
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .slider-name{
        font-size: 2.5rem;
    }
    .slider-info{
        font-size: 1.5rem;
    }
    .slider-link{
        font-size: 1.5rem;
        font-weight: 900;
        text-decoration: underline;
        color: ${({ mode }) => mode.color};
    }
    .slider-box-display{
        position: relative;
        width: 80%;
        height: 100%;
        overflow: hidden;
    }


    .slider-images-wrapper{
        height: 100%;
        position: absolute;
        display: flex;
        align-items:center;
        gap: 1vw;
        transition: 0.2s ease-in-out;
    }
    .next-img-btn, .prev-img-btn{
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid ${({ mode }) => mode.color};
        color: ${({ mode }) => mode.color};
        background: ${({ mode }) => mode.background};
        transition: 0.2s ease-in-out;
    }
    .next-img-btn{
        right: 10%;
    }
    .prev-img-btn{
        right: 13%;
    }

    .next-img-btn:disabled, .prev-img-btn:disabled{
        border-color: darkGray;
        color: darkGray;
        background: darkWhite;
    }
    .arrow-icon{
        font-size: 3rem;
    }

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
    }
    .slider-card-name{
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

    .slider-img{ 
        width: 100%;
        height: 100%;
        transition: 0.2s ease-in-out;
     }    
     .slider-card:hover> .slider-img{
        transform: scale(1.2);
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
    }

    @media  only screen  and (min-width:320px) and (max-width:375px){
        
    .slider-name{
        font-size: 2rem;
        margin-top: 20px;
    }
    .slider-info{
        font-size: 1.3rem;
        width: 150px;
    }
    .arrow-icon{
        font-size: 1.5rem;
    }
    .next-img-btn{
        right: 7%;
    }
    .slider-images-wrapper{
        margin-left: 20px;
    }
    .slider-card-name{
        font-size: 0.6rem;
        font-weight:800;
    }
    .slider-box-display{
        height: 100%;
        width: 35%;
        margin-right: 43px;
    }
    
    }
    @media  only screen  and (min-width:375px) and (max-width:425px){
        .slider-name{
        font-size: 2rem;
        margin-top: 20px;
    }
    .slider-info{
        font-size: 1.3rem;
        width: 150px;
    }
    .arrow-icon{
        font-size: 1.5rem;
    }
    .next-img-btn{
        right: 7%;
    }
    .slider-images-wrapper{
        margin-left: 20px;
    }
    .slider-card-name{
        font-size: 0.6rem;
        font-weight:800;
    }
    .slider-box-display{
        height: 100%;
        width: 34%;
        margin-right: 43px;
    }
  
    }
    @media  only screen  and (min-width:425px) and (max-width:768px){
        .slider-name{
        font-size: 2rem;
        margin-top: 20px;
    }
    .slider-info{
        font-size: 1.3rem;
        width: 150px;
    }
    .arrow-icon{
        font-size: 1.5rem;
    }
    .next-img-btn{
        right: 7%;
    }
    .slider-images-wrapper{
        margin-left: 20px;
    }
    .slider-card-name{
        font-size: 0.6rem;
        font-weight:800;
    }
    .slider-box-display{
        height: 100%;
        width: 46%;
        margin-right: 60px;
    }
    .slider-link{
        font-size: 1rem;
        font-weight: 900;
    }
    .end-slider{
      border: none;
    }
    }

    @media  only screen  and (min-width:768px) and (max-width:1024px){
        .slider-name{
        font-size: 2rem;
        margin-top: 20px;
    }
    .slider-info{
        font-size: 1.3rem;
        width: 150px;
    }
    .arrow-icon{
        font-size: 1.5rem;
    }
    .next-img-btn{
        right: 7%;
    }
    .slider-images-wrapper{
        margin-left: 20px;
    }
    .slider-card-name{
        font-size: 0.6rem;
        font-weight:800;
    }
    .slider-box-display{
        height: 100%;
        width: 45%;
        margin-right: 100px;
    }
    .slider-link{
        font-size: 1rem;
        font-weight: 900;
    }
    .end-slider{
      border: none;
    }
    }

   
    

`