import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/second">Sec</Link>
        </li>
        <li>
          <Link to="/third">Turd</Link>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>Back</button>
        </li>
        <li>
          <button onClick={() => navigate(+1)}>Next</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
