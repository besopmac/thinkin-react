import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import FilterableProductTable from "./components/FilterableProductTable";
import products from "./products.json";

ReactDOM.render(
  <FilterableProductTable products={products} />,
  document.getElementById("root")
);
