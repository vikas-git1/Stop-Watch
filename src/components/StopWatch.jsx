import React, { useState, useEffect } from "react";
import "./StopWatch.css";
const StopWatch = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSecond((prevSec) => {
          if (prevSec === 59) {
            setMinute((prevMin) => prevMin + 1);
            return 0;
          } else {
            return prevSec + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleRestart = () => {
    setMinute(0);
    setSecond(0);
    setIsActive(false);
  };
  return (
    <div className="container">
      <h1>
        {minute.toString().padStart(2, "0")} Min :{" "}
        {second.toString().padStart(2, "0")} Sec
      </h1>
      <div className="btn__container">
        <button
          className={`btn ${isActive ? "active_start_btn" : ""}`}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className={`btn ${!isActive ? "active_pause_btn" : ""}`}
          onClick={handlePause}
        >
          Pause
        </button>
        <button className="btn" onClick={handleRestart}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
