import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Productlist from "./Components/Productlist";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import Data from "./Components/Data";
import { ProdData } from "./ProdData";
import Moblist from "./Components/Moblist";
import Hphonelist from "./Components/Hphonelist";
function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route
          exact
          path="/"
          component={() => <Productlist data={ProdData} />}
        />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={() => <Cart data={Data} />} />
        <Route exact path="/mobiles" component={Moblist} />
        <Route exact path="/headphones" component={Hphonelist} />

        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
