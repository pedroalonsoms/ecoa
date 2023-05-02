import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, children, redirectTo = "/login" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
