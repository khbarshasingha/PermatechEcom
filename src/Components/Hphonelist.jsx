import React from "react";
import Hphone from "./Hphone";
import { Hp } from "../ProdData";

const Hphonelist = () => {
  return (
    <div className="row">
      {Hp.map((user, i) => {
        return <Hphone key={i} img={Hp[i].src} title={Hp[i].name} />;
      })}
      ;}
    </div>
  );
};
export default Hphonelist;
