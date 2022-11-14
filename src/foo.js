import React from "react";
import { useEffect, useState } from "react";

const fooBar = ["foo", "bar"];

function Foo() {
  const [mediaItem, setMediaItem] = useState(fooBar[0]); // <-- seed initial state
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % fooBar.length), // <-- increment index
      2000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setMediaItem(fooBar[index]); // <-- update media state when index updates
  }, [index]);

  return (
    <div>
      <div>{mediaItem}</div>
    </div>
  );
}
export default Foo;
