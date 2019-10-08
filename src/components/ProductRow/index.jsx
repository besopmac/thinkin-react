// displays a row for each product
import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const { product } = this.props;
    

    return (
      <tr key={product.name} className={!product.stocked ? 'table-danger' : ''}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
};

export default ProductRow;
