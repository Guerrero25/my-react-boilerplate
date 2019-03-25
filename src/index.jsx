import React from "react";
import ReactDOM from "react-dom";
/* Screens */
import ScreenHome from "./screens/Home";
/* Styles */
import "./assets/styles/main.scss";

const App = () => {
  return <ScreenHome />;
};

ReactDOM.render(<App />, document.getElementById("root"));
