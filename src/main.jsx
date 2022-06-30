import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "./styles/global.css";
import { Cursor } from "./components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <Cursor />
      <App />
    </Provider>
  </>
);
