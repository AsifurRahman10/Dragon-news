import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
export const SocialLogin = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  return (
    <div>
      <p className="text-2xl font-bold">Login with</p>
      <button
        onClick={loginWithGoogle}
        className="flex items-center btn w-full bg-transparent border-2 border-black mt-8"
      >
        <FaGoogle></FaGoogle> Login with Google
      </button>
      <button
        onClick={loginWithGithub}
        className="flex items-center btn w-full bg-transparent border-2 border-black mt-4"
      >
        <FaGithub></FaGithub> Login with Github
      </button>
    </div>
  );
};
