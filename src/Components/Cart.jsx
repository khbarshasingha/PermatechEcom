import React from "react";
import Details from "./Details";

const Cart = ({ data }) => {
  return (
    <div className="py-5">
      <div className="container">
        {data.map((user, i) => {
          return (
            <Details
              key={i}
              img={data[i].img}
              name={data[i].name}
              quantity={data[i].quantity}
              orderDate={data[i].orderDate}
              product_id={data[i].product_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
