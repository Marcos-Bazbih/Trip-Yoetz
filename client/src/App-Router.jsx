import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DataContext } from "./contexts/data-context";
import Header from "./components/layout/header";
import Container from "./components/layout/Container";
import Footer from "./components/layout/footer";
import City from "./components/pages/City";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Hotels from "./components/pages/Hotels";
import Activities from "./components/pages/Activities";
import Restaurants from "./components/pages/Restaurants";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import UserProfile from "./components/pages/UserProfile";
import NotFound from "./components/pages/NotFound";
import ItemPage from "./components/pages/ItemPage";
import AdminRoutes from "./components/pages/AdminRoutes";
import AdminProfile from "./components/parts/admin/AdminProfile";
import AdminRestaurants from "./components/parts/admin/category-page/AdminRestaurants";
import AdminHotels from "./components/parts/admin/category-page/AdminHotels";
import AdminActivities from "./components/parts/admin/category-page/AdminActivities";

const AppRouter = () => {
    const { user } = useContext(DataContext);
    const PrivateRoute = () => {
        if (user.isLogin) {
            if (user.isAdmin) return <AdminRoutes />
            if (!user.isAdmin) return <UserProfile />
        }
        return <Navigate to="/" />;
    };
    const PrivateRouteLogin = () => {
        return user.isLogin ? <PrivateRoute /> : <Login />
    };
    const PrivateRouteRegister = () => {
        return user.isLogin ? <PrivateRoute /> : <Register />
    };

    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/:city" element={<City />} />
                    <Route exact path="/:city/hotels" element={<Hotels />} />
                    <Route exact path="/:city/activities" element={<Activities />} />
                    <Route exact path="/:city/restaurants" element={<Restaurants />} />
                    <Route exact path="/:city/:itemPage" element={<ItemPage />} />
                    <Route exact path="/register" element={<PrivateRouteRegister />} />
                    <Route exact path="/login" element={<PrivateRouteLogin />} />
                    <Route exact path="/profile" element={<PrivateRoute />}>
                        <Route index element={<AdminProfile />} />
                        <Route path="AdminRestaurants" element={<AdminRestaurants />} />
                        <Route path="AdminHotels" element={<AdminHotels />} />
                        <Route path="AdminActivities" element={<AdminActivities />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
};
export default AppRouter;