import styled from "styled-components";

export const StyledSearchBtn = styled.button`
    width: 15%;
    height: 50%;
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
        padding: 2px;
    }
`;