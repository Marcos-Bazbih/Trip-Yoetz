import useAdminData from "../../../../hooks/useAdminData";
import AdminCategory from "./AdminCategory";

const AdminRestaurants = () => {
    const { hotels } = useAdminData();

    return (
        <AdminCategory categoryArray={hotels} category="hotels" />
    );
};
export default AdminRestaurants;