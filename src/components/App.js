import React, { Fragment } from "react";
import { MarketPlace } from "./MarketPlace";
import products from "../assets/menu.json";

export function App() {
  return (
    <Fragment>
      <MarketPlace products={products} />
    </Fragment>
  );
}
