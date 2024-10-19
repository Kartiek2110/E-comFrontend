import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  function getProducts() {
    axios
      .get("https://e-commerce2-friz.onrender.com/user/products", {
        withCredentials: true, // allows sending cookies or credentials
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return <main className="w-full h-screen text-white bg-black"></main>;
}

export default Home;
