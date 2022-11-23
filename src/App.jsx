import "./App.css";
import React, { useState, useEffect } from "react";
import NewTaskInput from "./components/NewTaskInput";
import Task from "./components/Task";
import ResetTasks from "./components/ResetTasks";
import ResetDailyTasks from "./components/ResetDailyTasks";
import LastCompletedDate from "./components/LastCompletedDate";
import Title from "./components/Title";
import TimeNow from "./components/TimeNow";
import { nanoid } from "nanoid";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [tasks, setTasks] = React.useState(
    window.localStorage.getItem("tasks")
      ? JSON.parse(window.localStorage.getItem("tasks"))
      : []
  );

  const [lastCompletedDate, setLastCompletedDate] = React.useState(
    window.localStorage.getItem("lastCompletedDate")
      ? JSON.parse(window.localStorage.getItem("lastCompletedDate"))
      : "No Activity Yet"
  );

  const [name, setName] = React.useState(
    window.localStorage.getItem("name")
      ? JSON.parse(window.localStorage.getItem("name"))
      : ""
  );

  const [nameChangeState, setNameChangeState] = React.useState(
    window.localStorage.getItem("nameChangeState")
      ? JSON.parse(window.localStorage.getItem("nameChangeState"))
      : true
  );

  let nameVal = "";

  const addToLocalStorage = (tasks) => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const createNewTaskHandler = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
    addToLocalStorage(tasks);
    handleLastCompletedDate();
  };

  const deleteTaskHandler = (taskToDelete) => {
    setTasks((prevTasks) => {
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      return prevTasks.filter((task) => task.id !== taskToDelete);
    });
    console.log("Deleted!");
    handleLastCompletedDate();
  };

  const handleLastCompletedDate = () => {
    const dateToStore = new Date(Date.now()).toLocaleDateString();
    setLastCompletedDate(dateToStore);
    window.localStorage.setItem(
      "lastCompletedDate",
      JSON.stringify(dateToStore)
    );
  };

  const renderTasks = () => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          task={task.task}
          deleteTask={deleteTaskHandler}
          handleCompletedChange={handleCompletedChange}
          completed={task.completed}
          checked={task.completed}
        />
      );
    });
  };

  const handleCompletedChange = (id) => {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
    addToLocalStorage(tasks);
    handleLastCompletedDate();
  };

  const handleNameSet = () => {
    console.log("NameVal is: " + nameVal);
    if (
      nameVal.trim() === "" ||
      nameVal.trim() === null ||
      nameVal.length > 20
    ) {
      alert("Please enter a valid name");
    } else {
      setName(nameVal);
      window.localStorage.setItem("name", JSON.stringify(nameVal));
      console.log(name);
      setNameChangeState(false);
      window.localStorage.setItem("nameChangeState", JSON.stringify(false));
    }
  };

  const handleNameChange = (event) => {
    console.log("changed");
    console.log("NameVal is: " + nameVal);
    setNameChangeState(true);
    window.localStorage.setItem("nameChangeState", JSON.stringify(true));
  };

  const taskList = renderTasks();

  useEffect(() => {
    addToLocalStorage(tasks);
  }, [tasks]);

  useEffect(() => {
    window.localStorage.setItem(
      "lastCompletedDate",
      JSON.stringify(lastCompletedDate)
    );
  }, [tasks]);

  const tasksCompleted = tasks.filter((task) => task.completed === true).length;

  return (
    <div className="">
      <div className="container">
        <TimeNow handleNameChange={handleNameChange} />

        <div className="App">
          {nameChangeState === true && (
            <div className="name__input">
              <h1>Enter your name to begin:</h1>
              <input
                className="name__input__field"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => (nameVal = e.target.value)}
              />
              <div
                className="app__name__submit__btn"
                onClick={(event) => {
                  handleNameSet();
                }}
              >
                Submit
              </div>
            </div>
          )}
          {name.length > 0 && !nameChangeState && (
            <div className="">
              <Title name={name} />
              <div className="app__newTaskInput">
                <NewTaskInput
                  createNewTask={createNewTaskHandler}
                  tasks={tasks}
                />
              </div>
              <div className="app__tasks">{taskList}</div>
            </div>
          )}
          {tasks.length > 0 && !nameChangeState && (
            <div className="app__resetTasks">
              <h1 className="app__tasks__completed">
                Total Tasks Completed: {tasksCompleted} / {tasks.length}
              </h1>
              <div className="last__completedDate">
                <LastCompletedDate date={lastCompletedDate} />
              </div>
              <div className="app__task__options">
                <ResetDailyTasks
                  resetTasksDaily={setTasks}
                  render={renderTasks}
                />
                <ResetTasks resetTasks={setTasks} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
