import { useState } from "react";
import React from "react";

function AddContextForm(props) {
  const { updateContextList } = props;
  const url = "http://localhost:3010/context";
  const [newContext, setNewContext] = useState({
    context: "",
  });

  //Add new context
  const addContext = async (context) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(context),
    })
      .then(() => {
        setNewContext({
          context: "",
        });
        updateContextList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Enables adding text on form
  const inputChanged = (event) => {
    setNewContext({ ...newContext, [event.target.id]: event.target.value });
  };

  //Submit context
  const submitContext = async (e) => {
    e.preventDefault();
    addContext(newContext);
  };

  //Return context form
  return (
    <form onSubmit={submitContext} className="add-form">
      <br />
      <label htmlFor="title">Add contexts</label>
      <div>
        <input
          type="text"
          id="context"
          value={newContext.context}
          required
          onChange={inputChanged}
          placeholder="Enter context..."
        ></input>
      </div>

      <button type="submit">Add</button>
    </form>
  );
}
export default AddContextForm;
