import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="edit" element={<Editor />} />
        <Route path="preview" element={<Previewer />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
