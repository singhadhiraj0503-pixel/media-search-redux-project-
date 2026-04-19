import React, { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResult,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search,
  );

  const getData = async () => {
    try {
      let data;
      if (activeTab == "photos") {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "photos",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));
      }
      if (activeTab == "videos") {
        let response = await fetchVideos(query);
        data = response.data.videos.map((item) => ({
          id: item.id,
          type: "videos",
          title: item.user.name || "video",
          thumbnail: item.image,
          src: item.video_files[0].link,
        }));
      }

      dispatch(setResult(data));
      console.log(data);
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  useEffect(
    function () {
      if (!query) return;
      getData();
    },
    [query, activeTab],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="w-full p-4">
      {result.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
