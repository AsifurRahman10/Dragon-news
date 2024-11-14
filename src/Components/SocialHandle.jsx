import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const SocialHandle = () => {
  return (
    <div className="mt-8">
      <p className="text-2xl font-bold mb-4">Find Us On</p>
      <div className="join join-vertical flex">
        <button className="btn join-item bg-transparent w-full text-[#706F6F] font-medium h-16 flex items-center justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item bg-transparent w-full text-[#706F6F] font-medium h-16 flex items-center justify-start">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item bg-transparent w-full h-16 text-[#706F6F] font-medium flex items-center justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};
