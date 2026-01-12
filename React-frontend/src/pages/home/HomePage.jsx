import React from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { useSearchParams } from "react-router";
import { ProductsGrid } from "./ProductsGrid";

import { useEffect, useState } from "react";

export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce website</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
