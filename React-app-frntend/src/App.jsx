import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
