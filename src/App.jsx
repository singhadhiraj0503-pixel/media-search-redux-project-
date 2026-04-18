import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="size-full">
      {/* <button
        className="p-4 bg-black text-white rounded-2xl active:scale-[0.95]"
        onClick={async () => {
          let data = await fetchPhotos("dog");
          console.log(data.results);
        }}
      >
        Get Photos
      </button>

      <button
        className="p-4 bg-black text-white rounded-2xl active:scale-[0.95]"
        onClick={async () => {
          let data = await fetchVideos("dog");
          console.log(data.data.videos);
        }}
      >
        Get Videos
      </button> */}
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
