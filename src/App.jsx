import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full h-screen object-cover flex items-center">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
