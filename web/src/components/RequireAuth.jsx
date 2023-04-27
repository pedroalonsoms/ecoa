import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(auth);

  return (
    // auth.find(role => allowedRoles?.includes(role))
    // auth?.roles?.find(role => allowedRoles?.includes(role))
    allowedRoles?.includes(auth?.role) ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )

    // auth?.fullName ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
