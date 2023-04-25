import React from "react";
import { Link } from "react-router-dom";
import { FaBed,  } from 'react-icons/fa';
import {MdAirplanemodeActive} from 'react-icons/md';
import {IoIosCar} from 'react-icons/io';

const Header = () => {
  return (
    <div className="navbar bg-blue-800 text-primary-content flex flex-col">
        {/* navbar first element section */}
      <div className="flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-xl">HomeLand.com</a>
        </div>
        <div>
          <Link to="/">Home</Link>
          <button className="btn border-0 hover:bg-slate-200 bg-white text-indigo-400 mx-5">
            Register
          </button>
          <button className="btn border-0 hover:bg-slate-200  bg-white text-indigo-400">Login</button>
        </div>
      </div>
      {/* navbar second element dev */}
      <div className="flex gap-4">
        <p className="flex items-center gap-2 rounded-sm outline-slate-200"><FaBed />Stay</p>
        <p className="flex items-center gap-2 rounded-sm outline-slate-200"><MdAirplanemodeActive /> Flights </p>
        <p className="flex items-center gap-2 rounded-sm outline-slate-200"><IoIosCar /> Car Rentals</p>
      </div>
    </div>
  );
};

export default Header;
