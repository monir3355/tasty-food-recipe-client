import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(user);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithub = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero py-20 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold px-12">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-4">
          <form onSubmit={handleLogin}>
            <div className="mx-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text-alt">
                    Don't have an account{" "}
                    <Link
                      to="/register"
                      className="link link-hover text-blue-500"
                    >
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              <p className="text-red-500">
                <small>{error}</small>
              </p>
              <p className="text-green-700">
                <small>{success}</small>
              </p>
            </div>
          </form>
          <div className="flex justify-center items-center pb-2">
            <div>
              <hr className="border border-primary w-20" />
            </div>{" "}
            <span className="text-xl font-semibold px-4 pb-1">Or</span>{" "}
            <div>
              <hr className="border border-primary w-20" />
            </div>
          </div>
          <button onClick={handleGoogle} className="btn btn-primary mx-4">
            <FaGoogle className="text-2xl mr-2" /> Login With Google
          </button>
          <button onClick={handleGithub} className="btn btn-primary mt-2 mx-4">
            <FaGithub className="text-2xl mr-2" /> Login with github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
