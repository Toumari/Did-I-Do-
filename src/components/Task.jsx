import "./Task.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Task(props) {
  const completed = props.completed;

  const handleCompletedChange = (event) => {
    props.handleCompletedChange(props.id);
  };

  const handleDeletion = (event) => {
    props.deleteTask(props.id);
  };

  return (
    <div className={completed ? "task__completed" : "task"}>
      <input
        className="task__checkbox"
        type="checkbox"
        checked={completed}
        onChange={handleCompletedChange}
      />
      <p className="task__text">{props.task}</p>
      <FontAwesomeIcon
        onClick={handleDeletion}
        icon={faTrash}
        className="task__delete"
      />
    </div>
  );
}
