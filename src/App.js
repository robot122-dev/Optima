import React from "react";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes.js";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </>
  );
}

export default App;
