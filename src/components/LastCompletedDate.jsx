import "./LastCompletedDate.css";

export default function LastCompletedDate(props) {
  return (
    <div className="lastCompletedDate">
      <p className="lastCompletedDate__text">
        Last Edited / Completed:
        <br />
        <span className="lastCompletedDate__date">{props.date}</span>{" "}
        <span className="lastCompletedDate__date">
          - {new Date().toLocaleTimeString()}
        </span>
      </p>
    </div>
  );
}
