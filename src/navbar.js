import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Navbar() {
  let navigate = useNavigate();
  return (
    <nav>
      <ul>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/second">Sec</Link>
        </div>
        <div>
          <Link to="/third">Turd</Link>
        </div>
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
        </div>
        <div>
          <button onClick={() => navigate(+1)}>Next</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
