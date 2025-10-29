import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext); // use context to get the money state
  const handleAddMoney = () => {
    setMoney(money + 5000); // update the money state
  };

  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin asset={asset} name="Uurrumma"></Cousin>
        <Cousin name="Durrumma"></Cousin>
        <button onClick={handleAddMoney}>Add 5000 tk</button>
      </section>
    </div>
  );
};

export default Aunt;
