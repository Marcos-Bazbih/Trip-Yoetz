import styled from "styled-components";

export const StyledContactFooter = styled.article`
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
  .developer-image{
      width:45%;
      height: 40%;
      border-radius: 50%;
      transition: 0.2s ease-in-out;
  }
  .developer-image:hover{
    border-radius: 10px;

  }
  .developer-info{
    font-size: 1.3rem;
  }

  .contact-icons-box{
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  .contact-icon{
      font-size: 2.5rem;
      background: ${({ mode }) => mode.color};
      color: ${({ mode }) => mode.background};  
      transition: 0.2s ease-in-out;
    }
  .contact-icon:hover{
        transform:scale(1.8);
    }
    @media  only screen  and (max-width:321px){
      .developer-name{
      font-size: 1.3rem;
      }
      .developer-info{
      font-size: 1rem;
      }
      .contact-icon{
    font-size: 1.1rem;
      }
    }
`;