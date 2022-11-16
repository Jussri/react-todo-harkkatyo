import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
const fooBar = ["foo", "bar"];

function Foo() {
  const [mediaItem, setMediaItem] = useState(fooBar[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % fooBar.length),
      2000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setMediaItem(fooBar[index]);
  }, [index]);

  return (
    <div className="myDiv">
      <div>{mediaItem}</div>
    </div>
  );
}
export default Foo;
