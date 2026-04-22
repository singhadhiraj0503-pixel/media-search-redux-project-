import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import Navbar from "../components/Navbar";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearAllCollection = () => {
    dispatch(clearCollection());
  };

  return (
    <div>
      <div className="w-full">
        {collection.length > 0 ? (
          <div className="w-full px-4 py-2 flex items-center justify-between">
            <h2 className="text-2xl font-mono font-semibold">
              Collected Stuffs :
            </h2>
            <button
              onClick={() => {
                clearAllCollection();
              }}
              className="px-5 py-2.5 text-xl font-semibold bg-emerald-600 text-white rounded-2xl active:scale-95 "
            >
              Clear
            </button>
          </div>
        ) : (
          <div className="w-full text-center">
            <h2 className="text-3xl py-2 font-mono font-bold italic underline">
              Collection is Empty
            </h2>
          </div>
        )}
      </div>

      {/* <Navbar /> */}
      <div className="w-full p-4 flex flex-wrap gap-5 items-center justify-evenly overflow-auto">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
