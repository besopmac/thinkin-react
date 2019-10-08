// displays a heading for each category
import React from "react";

const ProductCategoryRow = props => {
  return (
    <tr key={props.category}>
      <td colSpan="2">{props.category}</td>
    </tr>
  );
};

export default ProductCategoryRow;
