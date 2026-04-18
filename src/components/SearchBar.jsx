import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, settext] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text);

    dispatch(setQuery(text));

    settext("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="p-4 flex gap-5" action="">
        <input
          className="w-full border border-black p-2.5 rounded-2xl"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          required
          type="text"
          name=""
          id=""
          placeholder="Search here..."
        />
        <button className="p-3 text-2xl bg-gray-800 text-white rounded-2xl cursor-pointer active:scale-[0.95]">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
