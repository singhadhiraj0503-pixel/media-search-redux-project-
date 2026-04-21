import React from "react";
import { useDispatch } from "react-redux";
import {
  addCollection,
  addedToast,
  // removeToast,
} from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollection = (item) => {
    // const oldData = JSON.parse(localStorage.getItem("collection")) || [];
    // const newData = [...oldData, item];
    // localStorage.setItem("collection", JSON.stringify(newData));
    // console.log(newData);
    dispatch(addCollection(item));
    dispatch(addedToast());
    // dispatch(removeToast());
  };

  return (
    <div className="w-60 h-70 bg-black rounded-2xl relative overflow-hidden">
      <div className="h-full">
        <a target="_blank" className="h-full cursor-pointer" href={item.url}>
          {item.type == "photos" ? (
            <img
              className="size-full object-center object-cover"
              src={item.src}
              alt=""
            />
          ) : (
            "Loading..."
          )}
          {item.type == "videos" ? (
            <video
              className="size-full object-cover object-center"
              autoPlay
              loop
              muted
              src={item.src}
            ></video>
          ) : (
            "Loading..."
          )}
        </a>
      </div>

      <div className="w-full text-white absolute bottom-0 p-2 font-bold flex items-center justify-between gap-5">
        <h2 className="text-sm">{item.title}</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-2xl cursor-pointer active:scale-95"
          onClick={() => {
            addToCollection(item);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
