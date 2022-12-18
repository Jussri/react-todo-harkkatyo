import { useState } from "react";
import React from "react";

function CreateTaskForm(props) {
  const { updateTaskList, contexts } = props;
  const taskUrl = "http://localhost:3010/tasks";
  const [newTask, setNewTask] = useState({
    body: "",
    context: [],
  });

  //Add new task
  const addTask = async (task) => {
    fetch(taskUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then(() => {
        setNewTask({
          body: "",
          context: [],
        });
        updateTaskList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Enables adding text on form
  const inputChanged = (event) => {
    setNewTask({
      ...newTask,
      [event.target.id]: event.target.value,
    });
  };

  //Submit task
  const submitTask = async (e) => {
    e.preventDefault();
    addTask(newTask);
  };

  //Choosing context for new task
  const toggleContext = (event) => {
    let newContext = newTask.context;
    if (newContext.includes(event.target.value)) {
      newContext = newContext.filter(
        (context) => context !== event.target.value
      );
    } else {
      newContext.push(event.target.value);
    }
    setNewTask({
      ...newTask,
      context: newContext,
    });
  };

  //Return task form
  return (
    <form onSubmit={submitTask} className="add-form">
      <br />
      <label htmlFor="title">Add tasks</label>
      <div>
        <input
          type="text"
          id="body"
          value={newTask.body}
          required
          onChange={inputChanged}
          placeholder="Enter task..."
        ></input>
      </div>

      {contexts.map((context) => (
        <div key={context.id}>
          <input
            type="checkbox"
            name="context"
            value={context.context}
            onChange={toggleContext}
            checked={newTask.context.includes(context.context)}
          />
          <label>{context.context}</label>
        </div>
      ))}
      <button type="submit">Add</button>
    </form>
  );
}
export default CreateTaskForm;
