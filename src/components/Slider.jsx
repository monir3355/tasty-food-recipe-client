import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[400px] lg:h-[600px] 2xl:h-[800px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/10883374/pexels-photo-10883374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60"></div>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center px-20 z-0">
            <div className="lg:w-2/3">
              <h2 className="text-white text-xl sm:text-2xl lg:text-5xl md:text-4xl font-semibold text-center">
                Weber’s Lumin Electric Grill Gives You Gas Grill Power in an
                Apartment-Friendly Package
              </h2>
              <p className="text-white text-sm sm:text-xl py-6 text-center">
                As the lead Meals on Wheels contractor for the East Side of
                Manhattan from 59th Street to 142nd Street, we deliver seven
                meals a week to homebound seniors in direct.
              </p>
              <div className="text-center">
                <button className="btn btn-primary ">Know more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle z-50">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle z-50">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60"></div>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center px-20 z-0">
            <div className="lg:w-2/3">
              <h2 className="text-white text-xl sm:text-2xl lg:text-5xl md:text-4xl font-semibold text-center">
                Weber’s Lumin Electric Grill Gives You Gas Grill Power in an
                Apartment-Friendly Package
              </h2>
              <p className="text-white text-sm sm:text-xl py-6 text-center">
                As the lead Meals on Wheels contractor for the East Side of
                Manhattan from 59th Street to 142nd Street, we deliver seven
                meals a week to homebound seniors in direct.
              </p>
              <div className="text-center">
                <button className="btn btn-primary ">Know more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60"></div>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center px-20 z-0">
            <div className="lg:w-2/3">
              <h2 className="text-white text-xl sm:text-2xl lg:text-5xl md:text-4xl font-semibold text-center">
                Weber’s Lumin Electric Grill Gives You Gas Grill Power in an
                Apartment-Friendly Package
              </h2>
              <p className="text-white text-sm sm:text-xl py-6 text-center">
                As the lead Meals on Wheels contractor for the East Side of
                Manhattan from 59th Street to 142nd Street, we deliver seven
                meals a week to homebound seniors in direct.
              </p>
              <div className="text-center">
                <button className="btn btn-primary ">Know more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/7474617/pexels-photo-7474617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-60"></div>
          <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center px-20 z-0">
            <div className="lg:w-2/3">
              <h2 className="text-white text-xl sm:text-2xl lg:text-5xl md:text-4xl font-semibold text-center">
                Weber’s Lumin Electric Grill Gives You Gas Grill Power in an
                Apartment-Friendly Package
              </h2>
              <p className="text-white text-sm sm:text-xl py-6 text-center">
                As the lead Meals on Wheels contractor for the East Side of
                Manhattan from 59th Street to 142nd Street, we deliver seven
                meals a week to homebound seniors in direct.
              </p>
              <div className="text-center">
                <button className="btn btn-primary ">Know more</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
