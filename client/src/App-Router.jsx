import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainContext } from "./contexts/data-context";
import Header from "./components/layout/Header";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
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
import AdminRestaurants from "./components/parts/admin/AdminRestaurants";
import AdminHotels from "./components/parts/admin/AdminHotels";
import AdminRoutes from "./components/pages/AdminRoutes";
import AdminProfile from "./components/parts/admin/AdminProfile";
import AdminActivities from "./components/parts/admin/AdminActivities";

const AppRouter = () => {
    const { user } = useContext(MainContext);
    const PrivateRoute = () => {
        if (user.isLogin) {
            if (user.isAdmin) return <AdminRoutes />
            if (!user.isAdmin) return <UserProfile />
        }
        return <Navigate to="/" />;
    }
    const PrivateRouteLogin = () => {
        return user.isLogin ? <PrivateRoute /> : <Login />
    }
    const PrivateRouteRegister = () => {
        return user.isLogin ? <PrivateRoute /> : <Register />
    }

    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/cities" element={<City />} />
                    <Route exact path="/hotels" element={<Hotels />} />
                    <Route exact path="/activities" element={<Activities />} />
                    <Route exact path="/restaurants" element={<Restaurants />} />
                    <Route exact path="/:itemPage" element={<ItemPage />} />
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
    )
}
export default AppRouter;

