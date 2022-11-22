import "./LastCompletedDate.css";
import { useState, useEffect } from "react";
export default function LastCompletedDate(props) {
  const [lastCompletedDate, setLastCompletedDate] = useState(
    window.localStorage.getItem("lastCompletedDate")
      ? JSON.parse(window.localStorage.getItem("lastCompletedDate"))
      : "No Activity Yet"
  );

  useEffect(() => {
    const dateToStore = new Date(Date.now()).toLocaleDateString();
    setLastCompletedDate(dateToStore);
    window.localStorage.setItem(
      "lastCompletedDate",
      JSON.stringify(dateToStore)
    );
  }, [props.tasks]);

  return (
    <div className="lastCompletedDate">
      <p className="lastCompletedDate__text">
        Last Edited / Completed:
        <br />
        <span className="lastCompletedDate__date">
          {lastCompletedDate}
        </span>{" "}
        <span className="lastCompletedDate__date">
          - {new Date().toLocaleTimeString()}
        </span>
      </p>
    </div>
  );
}
