import React from "react";
import { Routes, Route } from "react-router-dom";

import AppNavBar from "./components/AppNavBar";
import Home from "./screens/Home";
const App = () => {
  return (
    <div>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
