import { useState, useEffect } from "react";
import "./TimeNow.css";

export default function TimeNow() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="timeNow">
      <p className="timeNow__text">Current Time: {time}</p>
    </div>
  );
}
