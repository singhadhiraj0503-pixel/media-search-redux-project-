import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
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
          className="px-4 py-2 bg-red-500 text-white rounded-2xl cursor-pointer active:scale-95"
          onClick={() => {
            removeFromCollection(item);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
