import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
/* Screens */
import ScreenHome from "./screens/Home";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={ScreenHome} />
      <Route path="/about" component={ScreenHome} />
    </Router>
  );
};

export default Routes;
