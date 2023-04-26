import React, { useEffect, useState } from "react";
import Hotel from "./Hotel";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 bg-slate-100 mt-10 p-10 gap-5">
        {hotels.map((hotel) => (
          <Hotel key={hotel.id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
