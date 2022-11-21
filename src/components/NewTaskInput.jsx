import "./newTaskInput.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function NewTaskInput(props) {
  const [newTask, setNewTask] = React.useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const createNewTaskHandler = (e) => {
    e.preventDefault();
    newTask.trim() !== "" && newTask.length > 0
      ? props.createNewTask({
          task: newTask,
          completed: false,
          id: nanoid(),
        })
      : alert("Please enter a task with a length greater than 0");
    setNewTask("");
  };

  return (
    <div className="newTaskInput">
      <form onSubmit={createNewTaskHandler}>
        <input
          onChange={handleNewTaskChange}
          value={newTask}
          type="text"
          className="newTaskInput__input"
          placeholder="Add a new task"
        />
        <button className="newTaskInput__button">Add</button>
      </form>
    </div>
  );
}
