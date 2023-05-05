import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Related from "../components/Related";
import Recipe from "../components/Recipe";

const ViewDetail = () => {
  const [recipes, SetRecipes] = useState([]);
  const chef = useLoaderData();
  const {
    id,
    chef_url,
    chef_name,
    experience,
    short_bio,
    location,
    number_recipe,
    likes,
  } = chef;
  // console.log(chef);
  useEffect(() => {
    const recipeData = async () => {
      const res = await fetch(
        " https://the-cooking-food-server-monir3355.vercel.app/recipes"
      );
      const data = await res.json();
      const chefRecipe = data.filter((recipe) => recipe.category_id === id);
      SetRecipes(chefRecipe);
    };

    recipeData();
  }, []);
  // console.log(recipes);
  return (
    <>
      <div className="py-16 max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-12">
          Chef information and Recipes
        </h2>
        <div className="card glass">
          <figure>
            <img className="w-full h-full" src={chef_url} alt="food" />
          </figure>
          <div className="card-body">
            <div className="flex items-center justify-between">
              <h2 className="card-title text-4xl">{chef_name}</h2>
              <div className="flex flex-col justify-center items-center gap-1">
                <FaRegHeart className="text-2xl" />
                <p>
                  Likes <span className="text-blue-500">{likes}</span>
                </p>
              </div>
            </div>
            <p className="text-lg">
              <span className="font-semibold">Chef Bio :</span> {short_bio}
            </p>

            <p className="text-left">Experience : {experience} Years</p>
            <p className="text-left">
              Numbers of recipes : {number_recipe} types
            </p>
            <p className="text-left">Location : {location}</p>
          </div>
        </div>
        <div>
          <h3 className="text-4xl font-semibold py-12">
            Top recipes for chef :{" "}
            <span className="text-blue-500">{chef_name}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
        <Related />
      </div>
    </>
  );
};

export default ViewDetail;
