import React from "react";

import SearchBar from "../SearchBar";
import ProductTable from "../ProductTable";

const FilterableProductTable = props => {
  return (
    <div className="container">
      <h1 className="display-4">{props.title}</h1>
      <hr />
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
