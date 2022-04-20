import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { StyledAdminNavbar } from '../styles/layout/StyledAdminNavbar'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const AdminRoutes = () => {
  const { mode } = useContext(ThemeContext);
  
  return (
    <>
      <StyledAdminNavbar mode={mode}>
        <ul className="navbar-list" >
          <li><SupervisorAccountIcon className="admin-icon" /></li>
          <li><Link className="navbar-link" to="/profile">My Profile</Link></li>
          <li><Link className="navbar-link" to="AdminRestaurants">Restaurants</Link></li>
          <li><Link className="navbar-link" to="AdminHotels">Hotels</Link></li>
          <li><Link className="navbar-link" to="AdminActivities">Activities</Link></li>
        </ul>
      </StyledAdminNavbar>
      <Outlet />
    </>
  );
};
export default AdminRoutes;