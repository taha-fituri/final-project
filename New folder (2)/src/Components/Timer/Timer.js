import React, { useState, useEffect } from "react";
import "./Timer.css";
import "../../DarkMode.css";
import "../../App.css";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div className="time">{seconds}s</div>
      <div className="row">
        <i
          className={`fa-solid  fa-circle-${isActive ? "pause" : "play"}`}
          onClick={toggle}
        ></i>{" "}
        <i
          className="fa-solid  fa-arrow-rotate-left"
          style={{ marginTop: "4%" }}
          onClick={reset}
        ></i>{" "}
      </div>
    </div>
  );
};

export default Timer;
