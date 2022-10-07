import styled from "styled-components";

export const StyledHeartIcon = styled.button`
    cursor: pointer;
    z-index: 1;
    position: absolute;
    padding:8px;
    left: ${({ positionProps }) => positionProps.left && positionProps.left};
    top: ${({ positionProps }) => positionProps.top && positionProps.top};
    right: ${({ positionProps }) => positionProps.right && positionProps.right};
    border-radius:50%;
    background:white;
    border:2px solid black;
    display: flex;
    justify-content:center;
    align-items: center;

    &:disabled{
        border-color: gray;
    }
    &:disabled> .heart-icon{
        color:gray;
    }

    .heart-icon {
        font-size:1.5rem;
        color:black;
        transition: 0.1s ease-in-out;

        &.item-liked{
            color: red;
            animation-name: heart;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
        }
            
        @keyframes heart {
            50% {
                transform: scale(2);
            }
            100% {
                transform: scale(1);
                color: red;
            }
        }
    }
`
