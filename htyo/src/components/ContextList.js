import { useEffect, useState } from "react";
import React from "react";
import "../App.css";
import AddContextForm from "./AddContextForm";

//Get context
function ContextList() {
  const [contexts, setContexts] = useState([]);
  const url = "http://localhost:3010/context";

  useEffect(() => {
    getContexts();
  }, []);

  const getContexts = () => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => setContexts(data),
        (error) => console.log(error.message)
      );
  };

  //List all contexts
  return (
    <div className="contextlist">
      <h1>Context List</h1>
      <ul>
        {contexts.map((context) => (
          <li key={context.id}>{context.context}</li>
        ))}
      </ul>
      <AddContextForm updateContextList={getContexts} />
    </div>
  );
}
export default ContextList;
