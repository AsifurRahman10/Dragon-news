import moment from "moment";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-[400px]">
        <img src={logo} alt="" />
      </div>
      <p className="text-lg text-gray-400 mt-3">
        Journalism Without Fear or Favour
      </p>
      <p className="font-medium">{moment().format("dddd, MMMM Do, YYYY")}</p>
    </div>
  );
};
