import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/* Components */
import HomeGreeting from "../../components/Home/Greeting";
/* Styles */
import "./style.scss";

function Home({ location }) {
  const isRoot = location.pathname === "/";

  return (
    <div className="screen-home">
      <div className="screen-home-content">
        <HomeGreeting title="Hello world!" />
        <Link to={isRoot ? "/about" : "/"}>
          Go to
          {isRoot ? " /about" : " /"}
        </Link>
      </div>
    </div>
  );
}

Home.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};

export default Home;
