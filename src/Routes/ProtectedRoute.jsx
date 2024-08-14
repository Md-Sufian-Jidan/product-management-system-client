
const ProtectedRoute = ({ user, loading }) => {

    if (!user && loading) {
        return <span className="loading loading-bars w-52"></span>
    }
    return user;
};

export default ProtectedRoute;