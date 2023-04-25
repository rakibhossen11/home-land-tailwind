import React from "react";
import image from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <div
      className="hero min-w-full min-h-full"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-content text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Home is where you book it</h1>
          <p className="mb-5">And we've got just the place for you</p>
          <button className="btn bg-blue-500 hover:bg-blue-800 border-0">Explore holidays rentals</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
