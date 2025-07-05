import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Practice = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec === 59) {
            setMin((prevMin) => {
              if (prevMin === 59) {
                setHours((prev) => prev + 1);
                return 0;
              } else {
                return prevMin + 1;
              }
            });
            //return setSec(0);
            return 0;
          } else {
            return prevSec + 1;
          }
        });
      }, 1);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };
  const handlePause = () => {
    setIsActive(false);
  };
  const handleReset = () => {
    setMin(0);
    setSec(0);
    setIsActive(false);
  };
  return (
    <div>
      <p>
        {hours.toString().padStart("2", 0)} Hr :{" "}
        {min.toString().padStart("2", 0)} Min :{" "}
        {sec.toString().padStart("2", 0)} Sec
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Practice;
