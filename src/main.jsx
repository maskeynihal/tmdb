import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/css/style.css";
import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./routes/routes";
import Home from "./pages/Home/Home";

const router = createBrowserRouter(Router());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
