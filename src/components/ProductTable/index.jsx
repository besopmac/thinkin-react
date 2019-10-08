// displays and filters the data collection based on user input
import React, { Component } from "react";

import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      // cria a linha da categoria
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow key={product.category} category={product.category} />
        );
      }

      // cria o conteúdo da categoria
      rows.push(
        <ProductRow key={product.name} product={product} />
      );

      // evita que a categoria se repita
      lastCategory = product.category;
    });

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
