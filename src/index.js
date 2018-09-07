import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Home from "./pages/Home.jsx";
import Temp from "./pages/Temp.jsx";

function App() {
  return (
    <div className="App">
      <Temp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
