import React from 'react';

import './navigator.css';

function Nav() {
    return (
      <div className="nav">
        <ul className="list">
            <li className="item home"> 
                HOME
            </li>
            <li className="item"> 
                CONTACT
            </li>
            <li className="item">
                ASK ME ANYTHING
            </li>
            <li className="item">
                MEET FOR COFFEE
            </li>
        </ul>
      </div>
    );
  }
  
  export default Nav;
  