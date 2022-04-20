import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 45vh;
  background: ${({ mode }) => mode.color};
  color: ${({ mode }) => mode.background};  
  grid-area: footer;
  position: absolute;
  z-index:10;
  bottom: ${({ toggle }) => toggle ? "-40vh" : "0"};
  display: grid;
  grid-template-areas:
  'marcos tikva avi . logo';
  grid-template-columns:20% 20% 20% 10% 30%;
  grid-template-rows: 100%;
  text-align: center;
  transition: 0.2s ease-in-out;
  border-radius: ${({ toggle }) => toggle ? "0" : "50px 50px 0 0"};

  .open-footer-btn  {
    cursor: pointer;
    background: ${({ mode }) => mode.color};
    color: ${({ mode }) => mode.background};
    border: none;
    border-radius: 50px 50px 0 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    right: 30%;
    top: -5vh;
    width: 10vw;
    height: 10vh;
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Lobster Two', cursive;
  }
  .open-footer-icon{
    font-size: 3rem;
    transition: 0.2s ease-in-out;
  }
  .flip-arrow{
    transform: rotate(180deg)
  }

  .logo{
    grid-area: logo;
    padding:10vh 0 2vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .TripYoetz-logo {
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-family: 'Lobster Two', cursive;
        font-size:3.5rem;
        font-weight:900;
        text-decoration:none;
        color: ${({ mode }) => mode.background};
  }
  .logo-icon{
        border-radius:50%;
        color: ${({ mode }) => mode.background};
        background:${({ mode }) => mode.color};
        font-size:3rem;
  }

  .about-us-link{
        text-decoration: none;
        color: ${({ mode }) => mode.background};
        background:${({ mode }) => mode.color};
        font-size:2rem;
        font-weight:900;
        padding:5px;
        font-family: 'Lobster Two', cursive;
        background: linear-gradient(0deg, ${({ mode }) => mode.background},${({ mode }) => mode.background});
        background-size: 100% 3%;
        background-repeat: no-repeat;
        background-position: bottom;
        transition: 0.2s ease-in-out;
  }
  .about-us-link:hover{
        background-size: 100% 100%;
        color: ${({ mode }) => mode.color};
  }

  .copyright{
    font-size: 1.3rem;
  }
  @media  only screen and (min-width:320px) and (max-width:376px){
  .open-footer-btn{
    font-size: 1rem;
    font-weight: 200;
  }
    .open-footer-icon{
    font-size: 1.5rem;
    }
    .TripYoetz-logo{
      font-size:1.7rem;
        font-weight:300;
    }
    .about-us-link{
      font-size:1.5rem;
        font-weight:200;
    }
    .copyright{
    font-size: 1rem;
    }
    
  }
  @media  only screen and (min-width:375px) and (max-width:425px){
    .open-footer-btn{
    font-size: 1rem;
    font-weight: 200;
  }
    .open-footer-icon{
    font-size: 1.5rem;
    }
    .TripYoetz-logo{
      font-size:1.7rem;
        font-weight:300;
    }
    .about-us-link{
      font-size:1.5rem;
        font-weight:200;
    }
    .copyright{
    font-size: 1rem;
    }
    
  }
  @media  only screen and (min-width:425px) and (max-width:768px){
    .open-footer-btn{
    font-size: 1rem;
    font-weight: 200;
  }
    .open-footer-icon{
    font-size: 1.5rem;
    }
    .TripYoetz-logo{
      font-size:1.7rem;
        font-weight:300;
    }
    .about-us-link{
      font-size:1.5rem;
        font-weight:200;
    }
    .copyright{
    font-size: 1rem;
    }
    
  }
`