import { Link, NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Loading } from "./Loading";
export const Navbar = () => {
  const { user, handleSignOut, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex justify-between">
      <div className="flex-1">{user && <p>{user?.displayName}</p>}</div>
      <div className="space-x-6 flex-1">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={user ? user?.photoURL : userLogo}
          alt=""
        />
        {user && user?.email ? (
          <button
            onClick={handleSignOut}
            className="btn bg-[#403F3F] text-white rounded-none border-none px-12 text-xl font-semibold"
          >
            Log-out
          </button>
        ) : (
          <Link to={"/auth/login"}>
            <button className="btn bg-[#403F3F] text-white rounded-none border-none px-12 text-xl font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
