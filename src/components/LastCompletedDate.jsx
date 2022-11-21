import "./LastCompletedDate.css";

export default function LastCompletedDate(props) {
  return (
    <div className="lastCompletedDate">
      <p className="lastCompletedDate__text">
        Last Edited / Completed Date: <br />
        <span className="lastCompletedDate__date">{props.date}</span>
      </p>
    </div>
  );
}
