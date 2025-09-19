import React, { useEffect, useRef, useState } from "react";

const TimerBtn = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimer((prevSeconds) => prevSeconds + 1);
         
      }, 1000);
      console.log("Interval started with ID:", intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        console.log("Interval cleared ID:", intervalRef.current);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  return (
    <div>
      <h2>Timer: {timer}</h2>
      <div>
        <button
          onClick={() => {
            setIsRunning(false);
            setTimer(0);
          }}
        >
          Reset
        </button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={() => setIsRunning(true)}>Start</button>
      </div>
    </div>
  );
};

export default TimerBtn;
