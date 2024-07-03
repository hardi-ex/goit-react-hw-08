import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "modern-normalize/modern-normalize.css";
import "./components/index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  </BrowserRouter>
);
