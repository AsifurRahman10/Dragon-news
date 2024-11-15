import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export const Slider = () => {
  return (
    <div className="flex items-center p-4 bg-base-200">
      <p className="py-2 px-6 bg-[#D72050] text-white text-sm sm:text-base">
        Latest
      </p>
      <div className="flex-1 overflow-hidden">
        <Marquee
          speed={40}
          gradient={false}
          className="text-sm sm:text-base flex"
        >
          <Link to={"/news"} className="ml-8 whitespace-nowrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"} className="ml-8 whitespace-nowrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"} className="ml-8 whitespace-nowrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"} className="ml-8 whitespace-nowrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
          <Link to={"/news"} className="ml-8 whitespace-nowrap">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            eveniet.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};
