import React from "react";
/* Components */
import HomeGreeting from "../../components/Home/Greeting";
/* Styles */
import "./style.scss";

function Home() {
  return (
    <div className="screen-home">
      <div className="screen-home-content">
        <HomeGreeting title="Hello world!" />
      </div>
    </div>
  );
}

export default Home;
