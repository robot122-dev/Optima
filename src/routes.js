import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Tariffs from "./pages/Tariffs/Tariffs.jsx";
import Coverage from "./pages/Coverage/Coverage.jsx";
import Support from "./pages/Support/Support.jsx";
import About from "./pages/About/About.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tariffs" element={<Tariffs />} />
        <Route path="coverage" element={<Coverage />} />
        <Route path="support" element={<Support />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
