import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const Register = () => {
  const { handleUserRegister, setUser, handleUpdateProfile } =
    useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!regex.test(password)) {
      setError(true);
      return;
    }
    setError(false);
    handleUserRegister(email, password).then((res) => {
      setUser(res.user);
      handleUpdateProfile({ displayName: name, photoURL: photo }).then(() => {
        navigate("/");
      });
    });
  };
  return (
    <div className="flex justify-center items-center mix-h-screen mt-10">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 p-16 rounded-none">
        <h2 className="text-2xl font-semibold pb-8 text-center">
          Register your account
        </h2>
        <hr className="mb-4" />
        <form onSubmit={handleRegister} className="card-body p-0">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered rounded-none bg-[#F3F3F3] border-none"
              required
            />
          </div>
          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered rounded-none bg-[#F3F3F3] border-none"
              required
            />
          </div>
          {/* email */}
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
          </div>
          <div className="flex items-center gap-3 mt-4 text-sm text-[#706F6F]">
            <input type="checkbox" className="checkbox" />
            <p>
              Accept <span className="font-semibold">Term & Conditions</span>
            </p>
          </div>
          <div>
            {error ? (
              <label className="label">
                <span className="label-text text-sm text-red-500 font-semibold">
                  Your password must have one capital letter and one number
                </span>
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="form-control mt-6 w-full">
            <button className="btn bg-[#403F3F] text-white">Login</button>
          </div>
        </form>
        <p className="mt-4 text-center font-semibold">
          Already have an account?{" "}
          <Link className="text-red-500" to={"/auth/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
