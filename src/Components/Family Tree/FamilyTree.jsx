import React, { createContext } from "react";
import Grandpa from "./Grandpa";
import "./familyTree.css";

export const AssestContext = createContext('');

const FamilyTree = () => {
  const asset = "diamond";
  const newAsset = "gold";
  //   console.log(asset);

  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <AssestContext.Provider value={newAsset}>
        <Grandpa asset={asset}></Grandpa>
      </AssestContext.Provider>
    </div>
  );
};

export default FamilyTree;
