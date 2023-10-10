import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./page/HomePage";
import ItemsPage from "./page/ItemsPage";

function App() {
  return (
    <div className="App bg-gradient-to-b from-backgroundColorTop to-backgroundColorBottom w-screen h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </div>
  );
}

export default App;
