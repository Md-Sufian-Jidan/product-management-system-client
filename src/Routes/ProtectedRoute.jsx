import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ProtectedRoute = ({ children }) => {

    const { user, isLoading } = useAuth();
    let location = useLocation();
    console.log(location);

    if (isLoading) {
        return <span className="loading loading-bars loading-lg flex justify-center items-center my-10"></span>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default ProtectedRoute;