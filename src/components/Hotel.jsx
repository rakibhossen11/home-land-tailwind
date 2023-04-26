import React from "react";

const Hotel = ({ hotel }) => {
  const { name, image, price } = hotel;
  console.log(image);
  return (
    <div>
      <div className="card lg:card-side bg-slate-50 hover:bg-slate-200 shadow-xl">
        <figure>
          <img className="p-4"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>From {price} tonight</p>
          <div className="card-actions justify-end">
            <button className="btn border-0 hover:bg-blue-900  bg-blue-700 text-white">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
