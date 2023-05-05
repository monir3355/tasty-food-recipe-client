import React from "react";
import Slider from "../../components/Slider";
import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import LazyLoad from "react-lazy-load";

const Home = () => {
  const chefs = useLoaderData();
  // console.log(chefs);
  return (
    <div>
      {/* Slider Section */}
      <Slider />
      <div className="pt-16 max-w-[1400px] mx-auto px-4">
        {/* Our Professional Chefs Section */}
        <section className="text-center">
          <h4 className="text-4xl font-semibold">Our Professional Chefs</h4>
          <p className="text-lg pt-6 pb-12">
            Here is a list of our favorite American dishes and recipes to
            surprise even the most experienced American chefs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <Chefs key={chef.id} chef={chef}></Chefs>
            ))}
          </div>
        </section>
        {/* WHO WE ARE section */}
        <section className="flex lg:flex-row flex-col-reverse items-center justify-center gap-12 my-12 pt-8 pb-8">
          <LazyLoad>
            <img className="w-full rounded-lg" src="/images/who.jpg" alt="" />
          </LazyLoad>
          <div>
            <h2 className="text-blue-600 font-semibold text-xl">WHO WE ARE</h2>
            <h4 className="text-5xl font-semibold my-4">
              One thousand flavors in one place.
            </h4>
            <p className="my-4">
              Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus
              ac sed primis convallis fames taciti dolor tempor. Faucibus morbi
              posuere sagittis turpis class vivamus penatibus ornare mollis
              donec scelerisque.
            </p>
            <p>
              Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus
              ac sed primis convallis fames taciti dolor tempor. Faucibus morbi
              posuere sagittis turpis class vivamus penatibus ornare mollis
              donec scelerisque.
            </p>
          </div>
        </section>
        {/* TESTIMONIAL Section */}
        <section className="py-16 bg-gray-100">
          <div className="text-center">
            <h2 className="text-blue-600 font-semibold text-xl">TESTIMONIAL</h2>
            <h4 className="text-5xl font-semibold my-6">What they say</h4>
            <p className="mt-4 mb-12">
              Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus
              ac sed primis convallis fames taciti dolor tempor. Faucibus morbi
              posuere sagittis turpis class vivamus penatibus ornare mollis
              donec scelerisque.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-3">
            <div className="text-center bg-white rounded-md px-4">
              <LazyLoad>
                <img
                  className="h-16 w-16 rounded-full border border-black my-8 mx-auto"
                  src="/images/testimonial/testi1.jpg"
                  alt=""
                />
              </LazyLoad>
              <div>
                <p>
                  The standout dish for me was the seared scallops. They were
                  expertly cooked and had a beautiful caramelized crust on the
                  outside while remaining tender and juicy on the inside. The
                  accompanying sauce was a delightful blend of citrus and herbs
                  that perfectly complemented the sweetness of the scallops.
                </p>
                <h4 className="font-semibold text-xl my-6">Ethan Marshall</h4>
              </div>
            </div>
            <div className="text-center bg-white rounded-md px-4">
              <img
                className="h-16 w-16 rounded-full border border-black my-8 mx-auto"
                src="/images/testimonial/testi2.jpg"
                alt=""
              />
              <div>
                <p>
                  The standout dish for me was the seared scallops. They were
                  expertly cooked and had a beautiful caramelized crust on the
                  outside while remaining tender and juicy on the inside. The
                  accompanying sauce was a delightful blend of citrus and herbs
                  that perfectly complemented the sweetness of the scallops.
                </p>
                <h4 className="font-semibold text-xl my-6">Sophie Clarke</h4>
              </div>
            </div>
            <div className="text-center bg-white rounded-md px-4">
              <LazyLoad>
                <img
                  className="h-16 w-16 rounded-full border border-black my-8 mx-auto"
                  src="/images/testimonial/testi3.jpg"
                  alt=""
                />
              </LazyLoad>
              <div>
                <p>
                  The standout dish for me was the seared scallops. They were
                  expertly cooked and had a beautiful caramelized crust on the
                  outside while remaining tender and juicy on the inside. The
                  accompanying sauce was a delightful blend of citrus and herbs
                  that perfectly complemented the sweetness of the scallops.
                </p>
                <h4 className="font-semibold text-xl my-6">Elina Rebort</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
