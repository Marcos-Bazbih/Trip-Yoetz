import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledProfileImg = styled(Link)`
    width: 18%;
    height: 70%;
    cursor: pointer;
    border:none;
    border-radius: 50%;
    position: relative;

    .user-status{
        position:absolute;
        right: -2%;
        top: 7%;
        width: 20%;
        height: 20%;
        background:${({ user }) => user.isAdmin ? "indigo" : "LimeGreen"};
        border-radius: 50%;
        border: 2px solid white;
        z-index:10;
        animation-name: status;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    @keyframes status {
        0%{}
        100%{transform:scale(1.3)}
    }
    .user-profile-img {
        width: 100%;
        height: 100%;
        border-radius:inherit;
    }
@media  only screen  and (min-width:320px) and (max-width:375px){
    .user-profile-img {
        width: 250%;
        height: 80%;
        border-radius:inherit;
        margin-top:20%;
    }
    .user-status{
        position:absolute;
        right: -140%;
        top: 11%;
        width: 25%;
        height: 15%;
        background:${({ user }) => user.isAdmin ? "indigo" : "LimeGreen"};
        border-radius: 50%;
        border: 0.4px solid white;
        z-index:10;
        animation-name: status;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
}
@media  only screen  and (min-width:375px)and (max-width:426px){
    .user-profile-img {
        width: 250%;
        height: 80%;
        border-radius:inherit;
        margin-top:20%;
        margin-left:20%;
    }
    .user-status{
        border: 0.6px solid white;
        position:absolute;
        right: -150%;
        top: 11%;
        width: 26.5%;
        height: 15.5%;
    }
}
@media  only screen  and (min-width:427px)and (max-width:766px){
    .user-profile-img {
        width: 250%;
        height: 80%;
        border-radius:inherit;
        margin-top:20%;
        margin-left:20%;
    }
    .user-status{
        position:absolute;
        right: -150%;
        top: 11%;
        width: 45.5%;
        height: 15.5%;
    }
}
@media  only screen  and (min-width:767px){}
`