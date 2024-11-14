import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export const Slider = () => {
  return (
    <div className="flex items-center p-4 bg-base-200">
      <p className="py-2 px-6 bg-[#D72050] text-white">Latest</p>
      <p>
        <Marquee speed={40}>
          <Link to={"/news"} className="ml-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"} className="ml-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"} className="ml-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"} className="ml-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
        </Marquee>
      </p>
    </div>
  );
};
