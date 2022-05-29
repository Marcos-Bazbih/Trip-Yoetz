import styled from "styled-components";

export const StyledSearchBtn = styled.button`
    position: absolute;
    right: 5%;
    width: 35px;
    height: 35px;
    background: ${({ mode }) => mode.color};
    cursor: pointer;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled{
        background: gray;
    }

    .search-icon{
        color: ${({ mode }) => mode.background};
        font-size: 2rem;
        font-weight: 900;
        padding: 2px;
    }
`;