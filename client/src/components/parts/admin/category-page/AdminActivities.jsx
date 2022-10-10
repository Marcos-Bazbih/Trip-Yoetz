import useAdminData from "../../../../hooks/useAdminData";
import AdminCategory from "./AdminCategory";

const AdminRestaurants = () => {
    const { activities } = useAdminData();

    return (
        <AdminCategory categoryArray={activities} category="activities"/>
    );
};
export default AdminRestaurants;