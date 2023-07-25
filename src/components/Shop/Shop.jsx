import React, { useEffect, useContext } from "react";

import "./Shop.scss";

import hh from "../../assets/buy-official-jersey-web.png";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };

  return (
    <div className="main-content">
      {/* <Herobanner/> */}

      <img src={hh} alt="..." onClick={() => navigate("/shop/product/" + 23)} />

      <div className="categoryy">
        <Category categories={categories} />
      </div>
      <div className="productss">
        <Products products={products} headingText="Related Products" />
      </div>
    </div>
  );
}

export default Shop;
