import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  function getProducts() {
    axios
      .get("https://e-commerce2-friz.onrender.com/user/products", {
        headers: {
          athorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main className="w-full h-screen text-white bg-black">
      
    </main>
  );
}

export default Home;
