import styled from "styled-components";


export const StyledAbout = styled.section`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;
    gap: 3rem;

  .title-Logos-container{
  width: 100%;
  height: 15vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .logos-wrapper{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-img{
      height: 90%;
      width: 30%;
    }
  }
  .welcome-title{
    font-family: 'Lobster Two', cursive;
    text-align: center;
    width: 50%;
    font-size: 5rem;
  }
  .logo-icon{
    font-size: 4rem;
    animation-name: fadeIn;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }
  @keyframes fadeIn {
    from {
      transform:scale(0);
    }
    to {
      transform:scale(1);
    }
}
  }
  .info{
        width: 90%;
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        h1{
          text-align: center;
          height: 20%;
          font-weight:900;
          font-size: 3.5rem;
        }
        div{
          position: relative;
          display: flex;
          align-items: center;
          height: 80%;
          width: 80%;
          font-size: 1.5rem;

          .quote-icon-top{
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10;
            font-size: 4rem;
          }
          .quote-icon-bottom{
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
            font-size: 4rem;
          }
          h3{
            margin: auto;
            width: 85%;
            height: fit-content;
            font-size: 2.2rem;
          }
          span{
            padding: 0 5px;
            font-size: 3rem;
            background-color: ${({ mode }) => mode.color};
            color: ${({ mode }) => mode.background};
          }
    }
  }
  .location{
      width: 90%;
      height: 45vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .our-information{
        width: 50%;
        height: 80%;
        display: flex;
        flex-direction: column;
      }
      .location-map{
        width: 30%;
        height: 80%;
      }
      h1{
          text-align: center;
          height: 20%;
          width: 100%;
          font-weight:900;
          font-size: 3.5rem;
      }

      .info-box{
        padding: 0 20%;
        width: 100%;
        height: calc(100% / 3);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 900;

        .contact-icon{
          font-size: 3rem;
        }
      }
  }
  .developers-container{
  width: 100%;
  height: 45vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  .developers-container-title{
    font-size: 3.5rem;
    width: 100%;
    height: 10%;
    text-align: center;
    font-weight:900;
  }
  .developer-box{
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    transition: 0.2s ease-in-out;

    h1{
      font-size: 2.5rem;
    }
    h2{
      font-size: 2rem;
    }
    h3{
      font-size: 1.5rem;
    }
  }
  .developer-box:hover{
    background: ${({ mode }) => mode.color};
    color: ${({ mode }) => mode.background};
  }
  .links-below-title{
    font-size: 2.5rem;
  }
  }


  @media screen and (max-width:768px)  {
    .title-Logos-container{
      .logos-wrapper{
        .logo-img{
          width: 50%;
        }
      }
      .welcome-title{
        font-size: 4rem;
      }
      .logo-icon{
        font-size: 3.5rem;
      }
    }
    .info{
      div{
        h3{
          font-size: 1.8rem;
        }
      }
    }
  };
  @media screen and (max-width:426px)  {
    .title-Logos-container{
      .logos-wrapper{
        width: 40%;
        .logo-img{
          width: 45%;
          height: 60%;
        }
      }
      .welcome-title{
        font-size: 2.5rem;
      }
      .logo-icon{
        font-size: 2rem;
      }
    }
    .info{
      width: 100%;
      div{
        width: 90%;
        span{
          font-size: 2.2rem;
        }
        h3{
          font-size: 1.5rem;
        }
      }
    }
    .location{
      .our-information .info-box{
        padding: 0;
        width: 60%;
        .contact-icon{
          font-size: 2rem;
        }
      p{
        font-size: 1.2rem;
      }
    }
    .location-map{
      width: 40%;
    } 
    }
    .developers-container{
      .developers-container-title{
        font-size: 2.5rem;
      }
      .developer-box{
        width: 100%;
      }
      .links-below-title{
        font-size: 1.5rem;
      }
    }
  };
`;