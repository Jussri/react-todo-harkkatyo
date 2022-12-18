import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  //Return links in navbar
  return (
    <nav>
      <ul>
        <div>
          <Link to="/">Tasklist</Link>
        </div>
        <div>
          <Link to="/context">Contextlist</Link>
        </div>
        <div>
          <Link to="/info">Info</Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
