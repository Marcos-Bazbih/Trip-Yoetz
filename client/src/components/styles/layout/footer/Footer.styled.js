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
  text-align: center;
  transition: 0.2s ease-in-out;
  border-radius: ${({ toggle }) => toggle ? "0" : "50px 50px 0 0"};
  
  .overflow-box{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
    'marcos tikva avi . description';
    grid-template-columns:20% 20% 20% 10% 30%;
    grid-template-rows: 100%;
    border-radius: inherit;
  }
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
    font-size: 1.8rem;
    font-weight: 900;
    font-family: 'Lobster Two', cursive;

    .open-footer-icon{
      font-size: 2.8rem;
      transition: 0.2s ease-in-out;

    }
    .flip-arrow{
      transform: rotate(180deg)
    }
  }
  .footer-description{
    grid-area: description;
    padding:10vh 0 2vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .logo-wrapper{
      display:flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      .TripYoetz-logo {
            font-family: 'Lobster Two', cursive;
            font-size:3.5rem;
            font-weight:900;
            text-decoration:none;
            color: ${({ mode }) => mode.background};
            
            .logo-icon{
                  border-radius:50%;
                  color: ${({ mode }) => mode.background};
                  background:${({ mode }) => mode.color};
                  font-size:3rem;
            }
      }
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

          &:hover{
                background-size: 100% 100%;
                color: ${({ mode }) => mode.color};
          }
    }
    .copyright{
      font-size: 1.3rem;
    }
  }

  @media (max-width: 900px) {
    .open-footer-btn{
      right: 29%;
      width: 12vw;
    }
  }
  @media (max-width: 770px) {
    .overflow-box{
      .footer-description{
        .logo-wrapper{
          .TripYoetz-logo{
            font-size:3rem;
            .logo-icon{
              font-size:2.5rem;
            }
          }
        }
      }
      .about-us-link{
        font-size:1.5rem;
      }
      .copyright{
        font-size: 1.1rem;
      }
    }
  }
  @media (max-width: 750px) {
    .open-footer-btn{
      right: 28%;
      width: 14vw;
    }
  }
  @media (max-width: 645px) {
    .open-footer-btn{
      width: 20vw;
      right: 40%;
    }
    .overflow-box{
      grid-template-areas:
      'marcos tikva avi'
      'description description description';
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 70% 30%;

      .footer-description{
        padding: 0;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        .logo-wrapper{
          width: 50%;
          .TripYoetz-logo{
            font-size:2.5rem;
            .logo-icon{
              font-size:2rem;
            }
          }
        }
        .about-us-link{
          margin: 0 auto;
        }
        .copyright{
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 452px) {
    .open-footer-btn{
      width: 26vw;
      right: 36%;
    }
    .overflow-box{
      &.overflow-scroll{
        overflow: auto;
      }
      grid-template-areas:
      'marcos' 
      'tikva' 
      'avi' 
      'description';
      grid-template-columns: 100%;
      grid-template-rows: 45vh 45vh 45vh 45vh;

      .footer-description{
        align-content: center;
        padding-top: 5vh;
        gap: 7rem 0;
        .logo-wrapper{
          .TripYoetz-logo{
            font-size:4rem;

            .logo-icon{
              font-size:3rem;
            }
          }
        }
        .about-us-link{
          font-size: 2rem;
        }
        .copyright{
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 360px) {
    .open-footer-btn{
      width: 34vw;
      right: 32%;
    }
  .overflow-box{
    .footer-description{
      .logo-wrapper{
        .TripYoetz-logo{
          font-size: 3rem;
        }
      }
      .about-us-link{
        font-size: 1.5rem;
      }
    }
  }
  }
`;