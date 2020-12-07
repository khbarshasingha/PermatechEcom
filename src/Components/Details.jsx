import React from "react";

const Details = ({ img, name, quantity, orderDate, product_id }) => {
  return (
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={img} class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <table>
              <tr>
                <td>OrderId: {product_id} </td>
              </tr>
              <tr>
                <td>Product Name:{name} </td>
              </tr>
              <tr>
                <td>
                  Quantity:
                  <form>
                    <input
                      type="number"
                      placeholder={quantity}
                      min="1"
                      max="20"
                    ></input>
                  </form>
                </td>
              </tr>
              <tr>
                <td>Order Date: {orderDate} </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    /* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */
  );
};
export default Details;
