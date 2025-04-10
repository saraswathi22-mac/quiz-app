import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="relative bg-gradient-to-r from-green-300 to-blue-400 w-full h-screen flex justify-center items-center">
      <div className="absolute box-border size-32 w-[75%] h-[80%] border-4 p-4 bg-gradient-to-r from-green-300 to-blue-400  p-4 rounded-lg shadow-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
