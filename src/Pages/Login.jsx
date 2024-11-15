import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Loading } from "../Components/Loading";

export const Login = () => {
  const { signIn, setUser, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        return;
      });
  };
  return (
    <div className="flex justify-center items-center mix-h-screen mt-20">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-16 rounded-none">
        <h2 className="text-2xl font-semibold pb-8 text-center">
          Login your account
        </h2>
        <hr className="mb-4" />
        <form onSubmit={handleLogin} className="card-body p-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded-none bg-[#F3F3F3] border-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered rounded-none bg-[#F3F3F3] border-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 w-full">
            <button className="btn  bg-[#403F3F] text-white">Login</button>
          </div>
        </form>
        <p className="mt-4 text-center font-semibold">
          Don’t Have An Account ?{" "}
          <Link className="text-red-500" to={"/auth/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
