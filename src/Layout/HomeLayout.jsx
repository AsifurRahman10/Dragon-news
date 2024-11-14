import { Outlet } from "react-router-dom";
import { LeftAsideNav } from "../Components/AsideNav/LeftAsideNav";
import { RightAsideNav } from "../Components/AsideNav/RightAsideNav";
import { Header } from "../Components/Header";
import { Navbar } from "../Components/Navbar";
import { Slider } from "../Components/Slider";

export const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-4/5 mx-auto">
          <Slider></Slider>
        </section>
        <nav className="w-4/5 mx-auto my-6">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid md:grid-cols-12 gap-6 w-4/5 mx-auto my-6">
        {/* left aside */}
        <aside className="col-span-3">
          <LeftAsideNav></LeftAsideNav>
        </aside>
        {/* main content  */}
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        {/* right content */}
        <aside className="col-span-3">
          <RightAsideNav></RightAsideNav>
        </aside>
      </main>
    </div>
  );
};
