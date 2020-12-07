import React from "react";

export const Mob = ({ img, title }) => {
  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <img src={img} alt="product" className="card-img-top" />

          <button className="cart-btn" />
          {title}
        </div>
      </div>
    </div>
  );
};
export default Mob;
