import React from "react";
import Special from "./Special";
import Frnd from "./Frnd";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h3>{name}</h3>
      {name === "Uurrumma" && <Special asset={asset}></Special>}
      {name === "Durrumma" && <Frnd></Frnd>}
    </div>
  );
};

export default Cousin;
