import { StyledProfileImg } from "../styles/parts/StyledProfileImg"

const ProfileImg = ({ user }) => {
    return (
        <StyledProfileImg user={user} to={"/profile"}>
            <div className="user-status"></div>
            <img className="user-profile-img" src={user.image} alt={`${user.name} profile`} />
        </StyledProfileImg>
    )
}

export default ProfileImg