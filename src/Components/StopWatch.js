import React, { useEffect, useState } from 'react';

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const StartButton = (
    <button onClick={handleStart}>Start</button>
  );

  const ActiveButtons = (
    <div>
      <button onClick={handlePauseResume}>{isPaused ? "Resume" : "Pause"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );

  const Timer = (
    <h1>
      <span>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
      </span>
      <span>
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </h1>
  );

  return (
    <>
      {Timer}
      {isActive ? ActiveButtons : StartButton}
    </>
  )
}
export default StopWatch;