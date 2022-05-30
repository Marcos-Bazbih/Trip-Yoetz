import styled from "styled-components";

export const StyledDeveloperInfo = styled.article`
    width: 100%;
    height: 100%;
    background: ${({ mode }) => mode.color};
    color: ${({ mode }) => mode.background};  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top:10vh;
    border-radius: inherit;
    transition: 0.2s ease-in-out;
    
   .marcos{
    grid-area: marcos;
  }
   .tikva{
    grid-area: tikva;
  }
   .avi{
    grid-area: avi;
  }

  .developer-name{
      font-size: 2rem;
  }
  .developer-info{
    font-size: 1.3rem;
  }
  .developer-image{
      width:45%;
      height: 40%;
      border-radius: 50%;
      transition: 0.2s ease-in-out;

      &:hover{
        border-radius: 10px;
      }
  }
  .contact-icons-box{
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .contact-icon{
          font-size: 2.5rem;
          background: ${({ mode }) => mode.color};
          color: ${({ mode }) => mode.background};  
          transition: 0.2s ease-in-out;
    
          &:hover{
                transform:scale(1.8);
            }
      }
  }

  @media (max-width: 770px) {
    .developer-name{
      font-size: 1.8rem;
    }
    .developer-info{
    font-size: 1.2rem;
    }
    .developer-image{
      width:55%;
    }
    .contact-icons-box{
      .contact-icon{
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 645px) {
    padding-top: 6vh;
    
    .developer-image{
      height: 42%;
      width: 42%;
    }
  }
  @media (max-width: 452px) {
    padding-top: 0vh;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .developer-image{
      height: 45%;
      width: 35%;
    }
    .contact-icons-box{
      width: 20%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;

      .contact-icon{
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 360px) {
    .developer-image{
      height: 40%;
    }
    .contact-icons-box{
      .contact-icon{
        font-size: 2.5rem;
      }
    }
  }
`;