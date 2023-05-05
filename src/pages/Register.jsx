import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, UpdateUser, setPUpdate } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo);
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("at least one uppercase");
      return;
    } else if (!/(?=.*[!#$%&? "])/.test(password)) {
      setError("at least one special key");
      return;
    } else if (password.length < 6) {
      setError("please input 6 or more letter");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("Successfully registration!");
        form.reset();
        navigate("/");
        UpdateUser(name, photo)
          .then(() => {
            console.log("Profile Updated");
            setPUpdate(new Date().getTime());
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero py-20 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold px-4">Please Register!</h1>
        </div>
        <form
          onSubmit={handleRegister}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text-alt">
                  Already have an account{" "}
                  <Link to="/login" className="link link-hover text-blue-500">
                    Login
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
      </div>
    </div>
  );
};

export default Register;
