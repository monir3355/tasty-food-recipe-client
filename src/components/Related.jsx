import React from "react";

const Related = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold my-12">Related Recipes:</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="cursor-pointer">
          <img
            className="rounded-md"
            src="/images/related/related1.jpg"
            alt=""
          />
          <h4 className="text-2xl font-semibold mt-4">Philly cheesesteak</h4>
        </div>
        <div className="cursor-pointer">
          <img
            className="rounded-md"
            src="/images/related/related2.jpg"
            alt=""
          />
          <h4 className="text-2xl font-semibold mt-4">Fried Chicken</h4>
        </div>
        <div className="cursor-pointer">
          <img
            className="rounded-md"
            src="/images/related/related3.jpg"
            alt=""
          />
          <h4 className="text-2xl font-semibold mt-4">Barbecue ribs</h4>
        </div>
        <div className="cursor-pointer">
          <img
            className="rounded-md"
            src="/images/related/related4.jpg"
            alt=""
          />
          <h4 className="text-2xl font-semibold mt-4">Macaroni and cheese</h4>
        </div>
        <div className="cursor-pointer">
          <img
            className="rounded-md"
            src="/images/related/related5.jpg"
            alt=""
          />
          <h4 className="text-2xl font-semibold mt-4">Apple pie</h4>
        </div>
      </div>
    </div>
  );
};

export default Related;
