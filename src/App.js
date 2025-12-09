// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
