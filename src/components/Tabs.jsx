import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="w-full p-4 flex items-center justify-evenly">
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
            className={`text-3xl ${activeTab === elem ? "bg-emerald-600" : "bg-gray-800"} text-white p-4 rounded-2xl active:scale-95 transition`}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
