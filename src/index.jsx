import React from "react";
import ReactDOM from "react-dom";
/* Screens */
import Routes from "./routes";
/* Styles */
import "./assets/styles/main.scss";

const App = () => {
  return <Routes />;
};

ReactDOM.render(<App />, document.getElementById("root"));
