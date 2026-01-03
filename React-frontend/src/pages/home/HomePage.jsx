import React from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";

import { ProductsGrid } from "./ProductsGrid";

import { useEffect, useState } from "react";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce website</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;
