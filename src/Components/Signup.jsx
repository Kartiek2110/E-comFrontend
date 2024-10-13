import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  function handleFormSubmit (event) {
    
    event.preventDefault()
    

    const email = event.target.email.value
    const username = event.target.username.value
    const password = event.target.password.value

    axios.post("https://e-commerce2-friz.onrender.com/user/signup", {
      
      email,
      username,
      password
    }).then((res) => {
      const data = res.data
      localStorage.setItem("token", data.token)
      navigate("/")
    }).catch((err) => {
      console.log(err);
    })

    
  }

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center font-bold text-blue-500">
        Sign Up Page
      </h1>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <label htmlFor="username" className="block text-gray-700">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <label htmlFor="email" className="block text-gray-700 mt-4">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <label htmlFor="password" className="block text-gray-700 mt-4">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      <button
        type="submit"
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
      >
        Sign Up
      </button>
      </form>
      <Link
        to="/"
        className="text-xl text-center mt-4 text-blue-500 hover:underline"
      >
        Back to Home
      </Link>
      <br />
    </div>
  );
};

export default Signup;
