import React from "react";
import ReactDOM from "react-dom";

function third() {
  return (
    <img
      src="https://www.sketchappsources.com/resources/source-image/nyan-cat-artoctober.png"
      alt="new"
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<third />, rootElement);

export default third;
