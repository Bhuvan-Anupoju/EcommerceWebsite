import React from "react";
import { Product } from "./Product";

export const ProductsGrid = ({ products, loadCart }) => {
  return (
    <>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <Product key={product.id} loadCart={loadCart} product={product} />
          );
        })}
      </div>
    </>
  );
};
