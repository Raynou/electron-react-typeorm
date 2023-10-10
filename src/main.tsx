import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyText />
  </React.StrictMode>
);

function MyText() {
  return (
    <div>
      <h1>React-electron-typeorm boilerplate</h1>
    </div>
  );
}
