import React, { useState } from "react";

function Task(props) {
  const { task, updateTaskList, contexts } = props;
  const [newBody, setNewBody] = useState(task.body);
  const [newContext, setNewContext] = useState(task.context);
  const [editing, setEditing] = useState(false);
  const url = "http://localhost:3010/tasks";

  //Remove task
  const removeTask = async (id) => {
    fetch(url + "/" + id, {
      method: "DELETE",
    })
      .then(() => updateTaskList())
      .catch((error) => {
        console.log(error);
      });
  };

  //Editing and updating tasks
  const saveEditing = async (id) => {
    fetch(url + "/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ body: newBody, context: newContext }),
    })
      .then(() => {
        setEditing(false);
        updateTaskList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Cancel editing process
  const cancelEditing = () => {
    setNewBody(task.body);
    setNewContext(task.context);
    setEditing(false);
  };

  //Choosing context for task
  const toggleContext = (event) => {
    if (newContext.includes(event.target.value)) {
      setNewContext((newContext) =>
        newContext.filter((context) => context !== event.target.value)
      );
    } else {
      setNewContext((prevContext) => [...prevContext, event.target.value]);
    }
  };

  //Return editing form for selected tasks
  return (
    <tr key={task.id}>
      {editing ? (
        <>
          <td>
            <input
              type="text"
              value={newBody}
              onChange={(event) => setNewBody(event.target.value)}
            />
          </td>
          <td>
            {contexts.map((context) => (
              <div key={context.id}>
                <input
                  type="checkbox"
                  value={context.context}
                  onChange={toggleContext}
                  checked={newContext.includes(context.context)}
                />
                <label>{context.context}</label>
              </div>
            ))}
          </td>
          <td>
            <button onClick={() => saveEditing(task.id)}>Save</button>
          </td>
          <td>
            <button onClick={() => cancelEditing()}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{task.body}</td>
          <td>
            <ul>
              {task.context.map((context) => (
                <li key={context}>{context}</li>
              ))}
            </ul>
          </td>
          <td>
            <button onClick={() => setEditing(!editing)}>Edit</button>
          </td>
          <td>
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default Task;
