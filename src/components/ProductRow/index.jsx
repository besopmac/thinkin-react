// displays a row for each product
import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const { product } = this.props;
    const name = product.stocked ? (
      product.name
    ) : (
      <del style={{ color: "red" }}>{product.name}</del>
    );
    const price = product.stocked ? (
      product.price
    ) : (
      <del style={{ color: "red" }}>{product.price}</del>
    );

    return (
      <tr key={product.name} className={!product.stocked ? "table-danger" : ""}>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ProductRow;
