import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LazyLoad from "react-lazy-load";

const Chefs = ({ chef }) => {
  const [btnDisable, setBtnDisable] = useState(false);

  const notify = () => toast("Thanks for Love !");
  const handleBtnDisable = () => {
    setBtnDisable(!btnDisable);
    notify();
  };
  const {
    id,
    chef_url,
    chef_name,
    experience,
    location,
    number_recipe,
    likes,
  } = chef;
  return (
    <>
      <div className="card glass">
        <LazyLoad height={300}>
          <img
            className="w-full h-full rounded-t-lg"
            src={chef_url}
            alt="food"
          />
        </LazyLoad>
        <div className="card-body">
          <h2 className="card-title text-2xl">{chef_name}</h2>
          <p className="text-left">Experience : {experience} Years</p>
          <p className="text-left">
            Numbers of recipes : {number_recipe} types
          </p>
          <hr className="py-1" />
          <div className="card-actions">
            <button
              onClick={handleBtnDisable}
              disabled={btnDisable}
              className="btn btn-primary"
            >
              <FaRegHeart /> <span className="ml-1">{likes}</span>
            </button>
            <button className="btn btn-primary ml-auto">
              <Link className="p-4" to={`/chef/${id}`}>
                View Recipes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chefs;
