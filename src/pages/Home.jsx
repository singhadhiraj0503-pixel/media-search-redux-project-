import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Home = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div>
      {/* <div className="w-full px-6 py-2 bg-gray-700 text-white font-mono flex items-center justify-between">
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
      </div> */}
      {/* <Navbar /> */}
      <SearchBar />

      {query !== "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        <div className="w-full px-6">
          <h2 className="text-2xl font-semibold italic font-mono">
            Get Started by searching your desired things...{" "}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Home;
