// src/Stopwatch.js
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
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
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    return `${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={startStopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Stopwatch;


