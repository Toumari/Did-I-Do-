import "./ResetTasks.css";

export default function ResetTasks(props) {
  const handleReset = (event) => {
    props.resetTasks([]);
    window.localStorage.setItem("tasks", JSON.stringify([]));
  };

  return (
    <div onClick={handleReset} className="reset__button">
      Delete All Tasks
    </div>
  );
}
