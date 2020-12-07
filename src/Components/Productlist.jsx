import React from "react";
import Products from "./Products";
import Title from "./Title";

const Productlist = ({ data }) => {
  return data.map((user, i) => {
    return (
      <Products
        key={i}
        img={data[i].img}
        src={data[i].src}
        title={data[i].title}
      />
    );
  });
};
export default Productlist;
