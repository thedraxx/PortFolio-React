import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import "./styles/global.css";
import { Cursor } from "./components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* Usamos provider para el uso de redux  */}
    <Provider store={store}>
      {/* Aca esta el cursor personalizado */}
      <Cursor />
      <App />
    </Provider>
  </>
);
