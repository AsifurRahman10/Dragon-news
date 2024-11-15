import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../Components/Loading";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return <div>{children}</div>;
  } else {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }
};
