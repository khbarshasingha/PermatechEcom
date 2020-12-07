import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
const Products = ({ img, src, title }) => {
  return (
    <Carousel class="py-5">
      <Carousel.Item>
        <img className="d-block w-100" src={img} alt="prod" />
        <Carousel.Caption>
          <h1>{title}</h1>
          <Link to={src}>
            <button class="btn btn-primary">Check out the collection</button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // <div class="card">
    //   <img
    //     src={img}
    //     width="500"
    //     height="400"
    //     class="card-img-top mx-auto"
    //     alt="..."
    //   />
    //   <div class="card-body">
    //     <h5 class="card-title">{title}</h5>
    //     <div class="card-text">
    //       <Link to={src}>
    //         <button class="btn btn-primary">Check out the collection</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // previous
    // <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
    //   <div className="card">
    //     <div
    //       className="img-container p-5"
    //       onClick={console.log("you clicked me on the image container")}
    //     >
    //       <img src={img} alt="product" className="card-img-top" />

    //       <button className="cart-btn" />
    //       {name}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Products;
