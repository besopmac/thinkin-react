// displays and filters the data collection based on user input
import React, { Component } from "react";

import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

class ProductTable extends Component {
  render() {
    const rows = [];

    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
