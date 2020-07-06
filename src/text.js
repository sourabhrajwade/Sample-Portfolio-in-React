import React from "react";
import "./text.css";
import Typical from "react-typical";


function Text() {
  return (
    <div className
    ="text">
      <h2>Sourabh Rajwade</h2>
      <h4>
        I am  <Typical loop={Infinity} wrapper="b" steps={[
  "Web Developer", 1000,
  "ML Engineer",1000,
  "Roboticists",1000,
  "Educator",1000,
  "Explorer",800,
  "Photographer",800,
]}/>
      </h4>
    </div>
  );
}

export default Text;
