import React, { useState } from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Recipe = ({ recipe }) => {
  const [btnDisable, setBtnDisable] = useState(false);

  const notify = () => toast("Thanks for Love !");
  const handleBtnDisable = () => {
    setBtnDisable(!btnDisable);
    notify();
  };
  const {
    recipe_url,
    recipe_name,
    ingredients,
    cooking_method,
    rating,
    likes,
  } = recipe;
  // console.log(recipe);
  return (
    <div className="card glass">
      <figure className="h-[300px]">
        <img className="w-full h-full" src={recipe_url} alt="food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{recipe_name}</h2>
        <p>
          <span className="font-semibold">Cooking Method :</span>{" "}
          {cooking_method.slice(0, 100)}...{" "}
        </p>
        <h2 className="card-title">Ingredients : </h2>
        {ingredients.map((inte, index) => (
          <p key={inte}>
            {index + 1}. {inte}
          </p>
        ))}
        <hr className="py-1" />
        <div className="card-actions flex justify-center items-center">
          <div>
            <Rating
              className="text-yellow-500"
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />{" "}
            <span>{rating}</span>
          </div>
          <button
            onClick={handleBtnDisable}
            disabled={btnDisable}
            className="btn btn-primary ml-auto"
          >
            <FaRegHeart /> <span className="ml-1">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
