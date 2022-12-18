import { useEffect, useState } from "react";
import React from "react";
import "../App.css";
import Task from "./Task";
import CreateTaskForm from "./CreateTaskForm";

//Get tasks and context
function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [contexts, setContexts] = useState([]);
  const tasksUrl = "http://localhost:3010/tasks";
  const contextUrl = "http://localhost:3010/context";

  useEffect(() => {
    getTasks();
    getContexts();
  }, []);

  const getTasks = () => {
    fetch(tasksUrl)
      .then((res) => res.json())
      .then(
        (data) => setTasks(data),
        (error) => console.log(error.message)
      );
  };

  const getContexts = () => {
    fetch(contextUrl)
      .then((res) => res.json())
      .then(
        (data) => setContexts(data),
        (error) => console.log(error.message)
      );
  };

  //List all tasks
  return (
    <div className="tasklist">
      <h1>Todo List</h1>

      <table className="center" border="2" style={{ float: "center" }}>
        <tbody>
          <tr>
            <th>Task</th>
            <th>Context</th>
            <th colSpan={2}></th>
          </tr>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              updateTaskList={getTasks}
              contexts={contexts}
            />
          ))}
        </tbody>
      </table>

      <CreateTaskForm updateTaskList={getTasks} contexts={contexts} />
    </div>
  );
}
export default Tasklist;
