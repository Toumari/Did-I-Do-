import "./ResetDailyTasks.css";

export default function ResetTasks(props) {
  const handleReset = (event) => {
    props.resetTasksDaily((prevState) => {
      return prevState.map((task) => {
        return { ...task, completed: false };
      });
    });
    props.render();
  };

  return (
    <div onClick={handleReset} className="reset__daily__button">
      Reset Tasks For The Day
    </div>
  );
}
