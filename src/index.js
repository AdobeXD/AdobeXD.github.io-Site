import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Home from "./pages/Home.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

function App() {
  return (
    <div className="App">
      <ComingSoon />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
