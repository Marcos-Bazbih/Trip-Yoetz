import { useContext, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { DataContext } from "../../contexts/data-context";
import { ThemeContext } from '../../contexts/theme-context'
import { userUpdate } from "../../services/user-service";
import { StyledProfilePage } from "../styles/pages/ProfilePage.styled";
import { removeItemToFavorites } from '../../utils/favoritesList-functions';
import useItemData from "../../hooks/useItemData";

const UserProfile = () => {
  const { user } = useContext(DataContext);
  const { mode } = useContext(ThemeContext);
  const { navigateToItemPage } = useItemData();
  const [profileInfoUpdate, SetProfileInfoUpdate] = useState({ ...user });
  const [toggleEdit, setToggleEdit] = useState(false);
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")))
  }, [])


  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit)
  };
  const handleOnChange = (event) => {
    profileInfoUpdate[event.target.name] = event.target.value;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    SetProfileInfoUpdate({ ...profileInfoUpdate });
    userUpdate(user._id, user, profileInfoUpdate)
      .then(() => alert("changed successfully, please log in again to see the changes"));
  };
  const handleDelete = (favorite) => {
    removeItemToFavorites(favorite);
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  };


  return (
    <StyledProfilePage mode={mode}>
      <div className="profile-banner">
        <div>
          <img src={user.image} alt={`${user.name} profile`} />
          <button onClick={handleToggleEdit}>
            <EditIcon className="edit-user-icon" /> Edit profile
          </button>
        </div>
      </div>
      <section className={`user-info-wrapper ${toggleEdit ? 'responsive' : ''}`}>
        <div className="user-details">
          <div className="user-details-header">
            <h1>YOUR INFORMATION</h1>
          </div>
          <div className="user-details-body">
            <h2>Name: {`${user.firstName} ${user.lastName}`} </h2>
            <h2>Age: {new Date().getFullYear() - user.birthDate.slice(0, 4)}</h2>
            <h2>Email: {user.email}</h2>
            <h2>A member since: {user.createdAt.slice(0, 10)}</h2>
          </div>
        </div>
        <div className="user-favorites">
          <div className="user-favorites-header">
            <h1>YOUR FAVORITES</h1>
          </div>
          {
            favorites && favorites.length >= 1 ?
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Category</th>
                    <th>Link</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    favorites.map((favorite) =>
                      <tr key={favorite._id}>
                        <td>{favorite.name}</td>
                        <td>{favorite.city}</td>
                        <td>{favorite.category}</td>
                        <td className="favorite-link" onClick={() => navigateToItemPage(favorite.city, favorite)}>View more</td>
                        <td>
                          <DeleteIcon className="delete-favorite"
                            onClick={() => handleDelete(favorite)} />
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              :
              <h1 className="no-favorites-msg">No favorites yet</h1>
          }
        </div>
        {
          toggleEdit &&
          <div className="user-update-wrapper">
            <h1>Edit Your Profile</h1>
            <form onSubmit={handleSubmit}>
              <input defaultValue={user.firstName} name="firstName" type="text"
                onChange={handleOnChange} placeholder="first name"
                minLength={2} maxLength={10} />

              <input defaultValue={user.lastName} name="lastName" type="text"
                onChange={handleOnChange} placeholder="last name"
                minLength={2} maxLength={10} />

              <input defaultValue={user.email} name="email" type="email"
                onChange={handleOnChange} placeholder="email" />

              <input defaultValue={user.birthDate.slice(0, 10)} name="birthDate" type="date"
                onChange={handleOnChange} placeholder="birth date"
                min="1902-01-01" max="2004-01-01" />

              <input defaultValue={user.image} name="image" type="text"
                onChange={handleOnChange} placeholder="profile image" />

              <button>UPDATE</button>
            </form>
          </div>
        }
      </section>
    </StyledProfilePage>
  );
};

export default UserProfile;