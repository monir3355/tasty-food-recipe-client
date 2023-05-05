import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex flex-col items-center my-12">
      <h2 className="text-5xl font-semibold mb-6">Profile</h2>
      <div className="card w-96 glass">
        <figure>
          <img src={user?.photoURL} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name: {user?.displayName}</h2>
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-primary">Go To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
