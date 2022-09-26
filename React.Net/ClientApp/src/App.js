import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

export default function App() {
  const validateRoute = () => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user == "undefined" || user == null) {
      return <Login />;
    } else {
      return <Home user={JSON.parse(user)} />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={validateRoute()} />;
      <Route path="/login" element={<Login />} />;
      <Route path="/register" element={<Register />} />;
    </Routes>
  );
}
