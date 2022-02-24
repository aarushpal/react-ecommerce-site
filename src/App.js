import React, { Component } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      {/* Navbar is displayed on all the routes so it is excluded from the router */}
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Modal />
      </BrowserRouter>
    </>
  );
}

export default App;
