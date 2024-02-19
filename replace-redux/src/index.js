import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureProductsStore from "./hooks-stroe/products-store";

const root = ReactDOM.createRoot(document.getElementById("root"));

configureProductsStore();
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
