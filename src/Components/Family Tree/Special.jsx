import React, { useContext } from "react";

const Special = ({ name, asset }) => {
  const newAsset = useContext(AssetContext);

  console.log(newAsset);

  return (
    <div>
      <h3>Special: {name}</h3>
      <p>Asset: {asset}</p>
      <p>New Asset: {newAsset}</p>
    </div>
  );
};

export default Special;
