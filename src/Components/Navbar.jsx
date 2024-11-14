import { NavLink } from "react-router-dom";
import userLogo from "../assets/user.png";
export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-1"></div>
      <div className="space-x-6 flex-1">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={userLogo} alt="" />
        <button className="btn bg-[#403F3F] text-white rounded-none border-none px-12 text-xl font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};
