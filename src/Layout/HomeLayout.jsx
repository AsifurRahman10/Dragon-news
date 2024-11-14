import { Header } from "../Components/Header";
import { Slider } from "../Components/Slider";

export const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-4/5 mx-auto">
          <Slider></Slider>
        </section>
      </header>
    </div>
  );
};
