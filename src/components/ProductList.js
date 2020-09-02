import React from "react";
import { ProductListItem } from "./ProductListItem";

export function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) =>
        product.isFreeShipping ? (
          <ProductListItem key={product.id} {...product} />
        ) : null
      )}
    </ul>
  );
}
