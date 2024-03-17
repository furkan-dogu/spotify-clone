import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Search from "pages/Search";
import Collection from "pages/Collection";

const Content = () => {
  return (
    <main className="flex-auto">
      <Navbar />
      <div className="px-8 pt-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      </div>

    </main>
  );
};

export default Content;
