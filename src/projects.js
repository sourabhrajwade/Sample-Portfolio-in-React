import React from "react";

import "./project.css";
import photo from "./proj.png";

function Project() {

  return (<div className="container">
    <div className="card">
      <h2>Hangman</h2>
    <div className="imageBox">
    <img src={photo} alt="pic" />
    </div>
    <div>
      <p>This game is developed using Javascript, HTML and CSS only.</p>
    </div>
    <div className="links">
      <a className="link" href="https://github.com/sourabhrajwade/Hangman-Javascript">Detail</a>
      <a  className="link" href=" hangman-javascript-sr.netlify.app/ ">See in Action</a>
    </div>
    </div>
    <div className="card">
      <h2>Hangman</h2>
    <div className="imageBox">
    <img src={photo} alt="pic" />
    </div>
    <div>
      <p>This game is developed using Javascript, HTML and CSS only.</p>
    </div>
    <div className="links">
      <a className="link" href="https://github.com/sourabhrajwade/Hangman-Javascript">Detail</a>
      <a  className="link" href="https://hangman-javascript-sr.netlify.app">See in Action</a>
    </div>
    </div>
    <div className="card">
      <h2>Hangman</h2>
    <div className="imageBox">
    <img src={photo} alt="pic" />
    </div>
    <div>
      <p>This game is developed using Javascript, HTML and CSS only.</p>
    </div>
    <div className="links">
      <a className="link" href="https://github.com/sourabhrajwade/Hangman-Javascript">Detail</a>
      <a  className="link" href=" hangman-javascript-sr.netlify.app/ ">See in Action</a>
    </div>
    </div>
  </div>);
}

export default Project;
