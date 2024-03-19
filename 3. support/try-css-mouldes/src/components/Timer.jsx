import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("useEffect runs");
    const timer = setInterval(() => {
      console.log("Timer called");
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("Timer stopped");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Timer;
