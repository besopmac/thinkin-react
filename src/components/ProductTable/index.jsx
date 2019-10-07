// displays and filters the data collection based on user input
import React from "react";

import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

const ProductTable = () => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    </table>
  );
};

export default ProductTable;
