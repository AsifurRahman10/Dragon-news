import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const AuthLayout = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <section className="w-11/12 md:w-9/12 mx-auto py-14">
        <Navbar></Navbar>
        {/* outlet */}
        <Outlet></Outlet>
      </section>
    </div>
  );
};
