import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ title }) => {
  return (
    <div className="home-greeting">
      <h1 className="home-greeting-title">{title}</h1>
    </div>
  );
};

Greeting.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Greeting;
