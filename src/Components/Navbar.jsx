import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm fx navbar-dark bg-dark px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5 ">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className=" ml-auto ">
            <button>
              <span className="mr-2">
                <i className="fas fa-cart-plus">My Cart</i>
              </span>
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
// const button = styled.button`
//   text-transform: capitalize;
//   font-size: 1.4rem;
//   background: transparent;
//   color: var(--mainWhite);
//   border: 0.05rem solid var(--mainWhite);
// `;
