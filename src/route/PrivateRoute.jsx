import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Loading } from "../Components/Loading";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user.email) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/auth/login"}></Navigate>;
  }
};
