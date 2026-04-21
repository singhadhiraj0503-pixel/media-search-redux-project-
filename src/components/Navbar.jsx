import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="w-full px-6 py-2 bg-gray-700 text-white font-mono flex items-center justify-between">
        <h1 className="text-4xl font-bold">Media Search</h1>
        <div className="flex gap-10">
          <NavLink
            className="hover:text-emerald-400 font-semibold cursor-pointer"
            to="/"
          >
            Search
          </NavLink>
          <NavLink
            className="hover:text-emerald-400 font-semibold cursor-pointer"
            to="/collections"
          >
            Collections
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
