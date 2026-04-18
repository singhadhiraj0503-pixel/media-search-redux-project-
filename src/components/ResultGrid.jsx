import React from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResult,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const ResultGrid = () => {
  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search,
  );

  const getData = async () => {
    if (activeTab == "photos") {
      let data = await fetchPhotos(query);
      console.log(data);
    }
  };

  return (
    <div className="w-full p-4">
      <button
        className="p-4 bg-blue-600 text-white rounded-2xl active:scale-95"
        onClick={getData}
      >
        Get Data
      </button>
    </div>
  );
};

export default ResultGrid;
