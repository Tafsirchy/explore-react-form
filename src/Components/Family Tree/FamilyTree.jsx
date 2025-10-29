import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./familyTree.css";

export const AssestContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const [money, setMoney] = useState(0);
  const asset = "diamond";
  const newAsset = "gold";
  //   console.log(asset);

  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <h4>Total Family Money: {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssestContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssestContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/** * 1. create a context using createContext() method with a default value that make sure you export the context to be used in other files */
