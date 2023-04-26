import React, { useContext } from "react";
import { FaBed } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import { IoIosCar } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const {user,logout} = useContext(AuthContext);

  const handleLogout = () =>{
    logout()
    .then(result =>{})
    .catch(error => console.log(error))
  }

  return (
    <div className="">
      {/* navbar first element section */}
      <div className="navbar bg-blue-800 text-primary-content flex justify-between">
        <div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">HomeLand.com</Link >
        </div>
        <div>
          <p>List Your Property</p>
          {
            !user && <span><Link to='/register' className="btn border-0 hover:bg-slate-200 bg-white text-indigo-400 mx-5">
            Register
          </Link>
          <Link to='/login' className="btn border-0 hover:bg-slate-200  bg-white text-indigo-400">
            Login
          </Link></span>
          }
          {
            user && <span> {user.displayName} <button onClick={handleLogout}>signout</button></span>
          }
        </div>
      </div>
      {/* navbar second element dev */}
      <div className="gap-4 navbar bg-blue-800 text-primary-content flex justify-start">
        <Link to='/stay' className="flex items-center gap-2 rounded-sm outline-slate-200  ml-5">
          <FaBed />
          Hotels
        </Link>
        <Link to='/flights' className="flex items-center gap-2 rounded-sm outline-slate-200">
          <MdAirplanemodeActive /> Flights{" "}
        </Link>
        <Link to='/carrental' className="flex items-center gap-2 rounded-sm outline-slate-200">
          <IoIosCar /> Car Rentals
        </Link>
      </div>
    </div>
  );
};

export default Header;
