import useAdminData from "../../../../hooks/useAdminData";
import AdminCategory from "./AdminCategory";

const AdminRestaurants = () => {
    const { restaurants } = useAdminData();

    return (
        <AdminCategory categoryArray={restaurants} category="restaurants" />
    );
};
export default AdminRestaurants;