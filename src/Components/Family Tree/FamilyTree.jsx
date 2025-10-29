import React from "react";
import Grandpa from "./Grandpa";
import "./familyTree.css";

const FamilyTree = () => {
  const asset = "diamond";
  console.log(asset);

  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <Grandpa></Grandpa>
    </div>
  );
};

export default FamilyTree;
