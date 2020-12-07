import React from "react";
import Mob from "./Mob";
import { Mb } from "../ProdData";

const Moblist = () => {
  return (
    <div className="row">
      {Mb.map((user, i) => {
        return <Mob key={i} img={Mb[i].src} title={Mb[i].name} />;
      })}
      ;}
    </div>
  );
};
export default Moblist;
