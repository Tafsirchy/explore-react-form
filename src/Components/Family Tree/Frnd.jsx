import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Frnd = () => {
  const [money, setMoney] = use(MoneyContext);

  return (
    <div>
      <h3>Friends: </h3>
      <p>Family got: {money} </p>
    </div>
  );
};

export default Frnd;
