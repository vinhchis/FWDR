import { useState, useEffect } from "react";

const GetTask = () => {
  const myStyle = {
    color: "blue",
    fontSize: "33pt",
  };

  const [task, setTask] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${task} times`;
  });

  return (
    <>
      <h1>Take <span style={myStyle}>{task}</span> Today</h1>
      <div type="button" onClick={() => setTask("[ a Meeting ]")}>
        <button>Monday-Wesnesday-Friday</button>
      </div>
      <div type="button" onClick={() => setTask("[ a Walk ]")}>
        <button>Tuesday-Thursday</button>
      </div>
    </>
  );
};

export default GetTask;
