import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import Navbar from "../components/Navbar";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  return (
    <div>
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
