import { FaGithub, FaGoogle } from "react-icons/fa";
export const SocialLogin = () => {
  return (
    <div>
      <p className="text-2xl font-bold">Login with</p>
      <button className="flex items-center btn w-full bg-transparent border-2 border-black mt-8">
        <FaGoogle></FaGoogle> Login with Google
      </button>
      <button className="flex items-center btn w-full bg-transparent border-2 border-black mt-4">
        <FaGithub></FaGithub> Login with Github
      </button>
    </div>
  );
};
