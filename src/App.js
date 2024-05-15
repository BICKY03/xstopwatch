// src/Stopwatch.js
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopHandler = () => {
    setIsRunning((prevState) => !prevState);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>Time: {formatTime(time)}</h2>
      <button onClick={startStopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Stopwatch;


