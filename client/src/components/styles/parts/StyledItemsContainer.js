import styled from "styled-components";

export const StyledItemsContainer = styled.section`
    grid-area: cards;
    width: 100%;
    height: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    gap: 3rem;
    @media  only screen  and (min-width:320px) and (max-width:426px){
width: 160%;
margin-left:-25% ;
    }
    @media  only screen  and (min-width:425px)and (max-width:766px){
        width: 160%;
margin-left:-25% ;
    }
    @media  only screen  and (min-width:767px){}
`