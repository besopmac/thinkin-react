// displays and filters the data collection based on user input
import React, { Component } from "react";

import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;

    // recebe o state via props
    const { filterText, inStockOnly } = this.props;

    this.props.products.forEach(product => {
      // se o texto digitado não for encontrado no array
      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      // se checkbox inStock estiver marcado e product.stocked for 0
      if (inStockOnly && !product.stocked) {
        return;
      }

      // cria a linha da categoria
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category}
          />
        );
      }

      // cria o conteúdo da categoria
      rows.push(<ProductRow key={product.name} product={product} />);

      // evita que a categoria se repita
      lastCategory = product.category;
    });

    return (
      <table className="table table-borderless table-hover table-sm">
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
